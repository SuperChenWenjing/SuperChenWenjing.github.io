---
title: Dockerfile
icon: install
# date: 2019-12-26
category: 容器技术
tag:
  - Docker
timeline: true
star: true
---

此处是 Dockerfile 的文件的编写和使用。

<!-- more -->

## Dockerfile

::: tip 什么是 Dockerfile？

Dockerfile 就是一个文本文件。

其中包含着一个个的指令（Instruction）。

用指令来描述说明要执行什么操作来构建镜像。

将来 Docker 可以根据 Dockerfile 中的指令来帮助我们构建镜像。

:::

### 基础语法

> Dockerfile 语法参考官方文档：[https://docs.docker.com/engine/reference/builder](https://docs.docker.com/engine/reference/builder)

| 常用指令   | 说明                                         | 示例                          |
| :--------- | :------------------------------------------- | :---------------------------- |
| FROM       | 指定基础镜像                                 | `FROM centos:6`               |
| ENV        | 设置环境变量，可在后面指令使用               | `ENV key value`               |
| COPY       | 拷贝本地文件到镜像的指定目录                 | `COPY ./xx.jar /tmp/app.jar`  |
| RUN        | 执行Linux的shell命令，一般是安装过程的命令   | `RUN yum install gcc`         |
| EXPOSE     | 指定容器运行时监听的端口，是给镜像使用者看的 | `EXPOSE 8080`                 |
| ENTRYPOINT | 镜像中应用的启动命令，容器运行时调用         | `ENTRYPOINT java -jar xx.jar` |

例如要基于 Ubuntu 镜像来构建一个 Java 应用（把以下内容复制到一个以 Dockerfile 为命名的文件中）：

```txt
# 指定基础镜像
FROM ubuntu:16.04

# 配置环境变量（JDK的安装目录、容器内的时区）
ENV JAVA_DIR=/usr/local

# 拷贝 jdk 和 java 项目的包
COPY ./jdk8.tar.gz $JAVA_DIR/
COPY ./docker-demo.jar /tmp/app.jar

# 安装 JDK
RUN cd $JAVA_DIR \
 && tar -xf ./jdk8.tar.gz \
 && mv ./jdk1.8.0_144 ./java8

# 配置环境变量
ENV JAVA_HOME=$JAVA_DIR/java8
ENV PATH=$PATH:$JAVA_HOME/bin

# 暴露端口
EXPOSE 8080

# 入口（java 项目的启动命令）
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

或者使用第三方已经做好的基础系统加 JDK 环境。

我们在此基础上制作 Java 镜像就可以省去 JDK 的配置了（把以下内容复制到一个以 Dockerfile 为命名的文件中）：

```txt
# 指定基础镜像
FROM openjdk:11.0-jre-buster

# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 拷贝 jar 包（只需要改项目的名称即可）
COPY docker-demo.jar /app.jar

# 入口（java 项目的启动命令）
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### 部署后端应用

1. 编写 Dockerfile 文件：

   ```bash
   # 指定基础镜像
   FROM openjdk:11.0-jre-buster
   # 设定时区
   ENV TZ=Asia/Shanghai
   RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
   # 拷贝 jar 包
   COPY docker-demo.jar /app.jar
   # 入口
   ENTRYPOINT ["java", "-jar", "/app.jar"]
   ```

2. Maven 打包项目（此处假设项目是：`docker-demo.jar`）；

3. 将 `docker-demo.jar` 包以及 `Dockerfile` 文件拷贝到虚拟机的 `/opt/demo` 目录中；

4. Docker 安装 `docker pull openjdk:11.0-jre-buster`；

5. 执行命令构建镜像：

   ```bash
   # 进入镜像目录
   cd /opt/demo
   # 开始构建镜像（如果不指定版本则默认为 latest 最新版本）
   docker build -t docker-demo:1.0 .
   ```

   命令说明：

   - `docker build `：就是构建一个 Docker 镜像。
   - `-t docker-demo:1.0`：`-t` 参数是指定镜像的名称（`repository` 和 `tag`）。
   - `.`：最后的点是指构建时 Dockerfile 所在路径，由于我们进入了 demo 目录，所以指定的是 `.` 代表当前目录，也可以直接指定 Dockerfile 目录：`docker build -t docker-demo:1.0 /opt/demo`。

6. 查看镜像列表：`docker images`。

7. 运行该镜像：`docker run -d --name docker-demo -p 8080:8080 --newwork net-demo docker-demo:1.0`。

   注意：建议把项目中所依赖的应用（数据库、...）和项目一起加入到同一个网络中（通过容器名称进行互相访问）。

8. 查看日志输出：`docker logs docker-demo -f`。

9. 访问：`localhost:8080`。
