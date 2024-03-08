---
title: 安装 Docker
icon: install
# date: 2019-12-26
category: 容器技术
tag:
  - Docker
timeline: true
star: true
---

此处记录的是安装 Docker 的操作步骤。

<!-- more -->

## 安装 Docker

::: important 提示！

**跟着以下步骤一步步的安装即可！**

:::

```bash
# 卸载系统之前的docker
sudo yum remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-engine

# 安装 Docker-CE
# 1.安装必须的依赖
sudo yum install -y yum-utils \
device-mapper-persistent-data \
lvm2
# 2.设置 docker repo 的 yum 位置
# 设置 docker 镜像源
yum-config-manager \
--add-repo \
https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
yum makecache fast
# 3.安装 docker 以及 docker-cli
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
# 4.启动 docker
sudo systemctl start docker
# 5.设置 docker 开机自启
sudo systemctl enable docker
# 6.测试 docker 常用命令，注意切换到 root 用户下
https://docs.docker.com/engine/reference/commandline/docker/
# 7.配置 docker 阿里云镜像加速（注意：需要到你的阿里云的镜像加速中复制最新的镜像加速配置）
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://****.mirror.aliyuncs.com"] # 你的阿里云镜像加速地址
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
# 修改已有容器设置容器启动策略
docker update --restart=no 容器ID(或者容器名) # 不自动重启容器（默认值）
docker update --restart=always 容器ID(或者容器名) # 自动重启

# 关闭Linux防火墙
systemctl stop firewalld
# 禁止开机启动防火墙
systemctl disable firewalld
# 查看防火墙状态
systemctl status firewalld.service

systemctl start docker  # 启动docker服务
systemctl stop docker  # 停止docker服务
systemctl restart docker  # 重启docker服务
```
