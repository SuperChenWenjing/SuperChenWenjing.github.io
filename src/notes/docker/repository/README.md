---
title: 搭建自有仓库
icon: install
# date: 2019-12-26
category: 容器技术
tag:
  - Docker
timeline: true
star: true
---

此处介绍 Docker 如何搭建自有仓库。

<!-- more -->

## 搭建自有仓库

### 简易版

::: tip

Docker 官方的 Docker Registry 是一个基础版本的 Docker 镜像仓库，具备仓库管理的完整功能，但是没有图形化界面。

:::

搭建方式的命令如下：

```bash
docker run -d \
    --restart=always \
    --name registry \
    -p 5000:5000 \
    -v registry-data:/var/lib/registry \
    registry
```

命令中挂载了一个数据卷 `registry-data` 到容器内的 `/var/lib/registry` 目录，这是私有镜像库存放数据的目录。

访问 [http://YourIp:5000/v2/_catalog](http://YourIp:5000/v2/_catalog) 可以查看当前私有镜像服务中包含的镜像（'YourIp' 表示的是你自己的 IP 地址）。

### 图形界面版

使用 **DockerCompose** 部署带有图象界面的 DockerRegistry 的命令如下：

```bash
version: '3.0'
services:
  registry:
    image: registry
    volumes:
      - ./registry-data:/var/lib/registry
  ui:
    image: joxit/docker-registry-ui:static
    ports:
      - 8080:80
    environment:
      - REGISTRY_TITLE=私有仓库的名称
      - REGISTRY_URL=http://registry:5000
    depends_on:
      - registry
```

::: important 注意！

我们的私服采用的是 `http` 协议，默认是不被 Docker 信任，所以需要做一个配置。

:::

配置 Docker 的信任地址：

```bash
# 打开要修改的文件
vi /etc/docker/daemon.json
# 添加内容：
"insecure-registries":["http://YourIp:8080"]
# 重加载
systemctl daemon-reload
# 重启docker
systemctl restart docker
```
