---
title: 安装各类软件
icon: install
# date: 2019-12-26
category: 容器技术
tag:
  - Docker
timeline: true
star: true
---

此处是一些在 Docker 中安装各类软件的操作记录（持续更新中...）。

<!-- more -->

::: tip

官方文档：[https://docs.docker.com](https://docs.docker.com)

:::

## 安装各类软件

::: important 提示！

跟着每个软件的安装步骤一步步的安装即可。

:::

### MySQL

```bash
# 拉取镜像
docker pull mysql:5.7

# MySql5.7配置
docker run -p 3306:3306 \
  --restart=always \
  --name mysql \
  -v /opt/mysql/log:/var/log/mysql \
  -v /opt/mysql/data:/var/lib/mysql \
  -v /opt/mysql/conf:/etc/mysql \
  -e TZ=Asia/Shanghai \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql:5.7

# 拉取镜像
docker pull mysql:8.0.34

# MySql8.0以上配置
docker run -p 3306:3306 \
  --restart=always \
  --name mysql \
  --privileged=true \
  -v /opt/mysql/log:/var/log/mysql \
  -v /opt/mysql/data:/var/lib/mysql \
  -v /opt/mysql/conf:/etc/mysql/conf.d \
  -e TZ=Asia/Shanghai \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql:8.0.34

# 以下为 my.cnf 文件中的配置信息
[client]
default-character-set=utf8

[mysql]
default-character-set=utf8

[mysqld]
init_connect='SET collation_connection = utf8_unicode_ci'
init_connect='SET NAMES utf8'
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

# 进入容器的文件系统
docker exec -it mysql /bin/bash

# 开启MySQL的远程访问权限
# 1.进入容器内部
docker exec -it mysql mysql -uroot -p123456;
# 2.开启root用户的远程访问权限
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
# 3.刷新权限
flush privileges;
```

### MongoDB

```bash
# 拉取镜像
docker pull mongo

# 运行容器
docker run -p 27017:27017 \
  --name mongo \
  --restart=always \
  --privileged=true \
  -v /opt/mongo/data/db:/data/db \
  -d mongo \
  --auth

# 进入容器
docker exec -it mongo /bin/bash
# 执行 mongosh 连接MogoDB（注意：MongoDB 6.0全面弃用了 mongo 而改为使用 mongosh）
mongosh

# 进入到 admin 数据库
use admin
# 创建数据库
db.createUser({ user:'root',pwd:'123456',roles:[{ role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
```

### Redis

```bash
# 拉取镜像
docker pull redis:7.2.1

# 需预先创建好目录和配置文件
mkdir -p /opt/redis
mkdir -p /opt/redis/data
mkdir -p /opt/redis/conf
touch /opt/redis/conf/redis.conf

# 运行容器
docker run -p 6379:6379 \
  --name redis \
  --restart=always \
  --privileged=true \
  -v /opt/redis/data:/data \
  -v /opt/redis/conf/redis.conf:/etc/redis/redis.conf \
  -d redis:7.2.1 redis-server /etc/redis/redis.conf

# redis 自描述文件：https://raw.githubusercontent.com/antirez/redis/7.0/redis.conf

# 进入容器的文件系统
docker exec -it redis /bin/bash

# 进入容器内部
 docker exec -it redis sh
 # 执行（执行Redis脚手架）
 redis-cli
 # 执行（输入用户名和密码 - 用户名为可选）
 auth [username] password
```

### RabbitMQ

```bash
# 拉取镜像（management 表示带控制台）
docker pull rabbitmq:3.8.34-management

# 运行容器
docker run \
  -e RABBITMQ_DEFAULT_USER=root \
  -e RABBITMQ_DEFAULT_PASS=123456 \
  --name rabbitmq \
  --restart=always \
  --privileged=true \
  --hostname rabbitmqhost \
  -v rabbitmq-plugins:/plugins \ # 此处采用的是默认数据卷（可通过 docker volume inspect rabbitmq-plugins 查看挂载信息）
  -p 5671:5671 \
  -p 15671:15671 \
  -p 5672:5672 \
  -p 15672:15672 \
  -p 4369:4369 \
  -p 25672:25672 \
  -d rabbitmq:3.8.34-management
  
  # 补充说明：RabbitMQ 的插件目录如果挂载到本地则启动报错（原因：其内置的插件无法被复制到本地）。
```

### Nginx

```bash
# 拉取镜像
docker pull nginx:1.23.3

# 创建镜像配置挂载的文件夹
mkdir -p /opt/nginx
mkdir -p /opt/nginx/logs
mkdir -p /opt/nginx/html
mkdir -p /opt/nginx/conf
mkdir -p /opt/nginx/conf.d

# 先运行一个普通容器用于拷贝各类文件（后续删除）
docker run --name nginx -p 80:80 -d nginx:1.23.3
# 备注：docker container cp 容器名称:容器内需要拷贝的文件路径 属主机的路径（.点则表示当前位置）

# 找到容器中 nginx.conf 配置文件的路径 /etc/nginx/nginx.conf 并复制
cd /opt/nginx/conf
docker container cp nginx:/etc/nginx/nginx.conf .

# 找到容器中 default.conf 配置文件的路径 /etc/nginx/conf.d/default.conf 并复制
cd /opt/nginx/conf.d
docker container cp nginx:/etc/nginx/conf.d/default.conf .

# 找到容器中默认首页文件夹 html 路径 /usr/share/nginx/html 并复制
cd /opt/nginx
docker container cp nginx:/usr/share/nginx/html .

# 找到容器中日志文件路径 /var/log/nginx 并复制
cd /opt/nginx/logs
docker container cp nginx:/var/log/nginx/error.log .
docker container cp nginx:/var/log/nginx/access.log .

# 然后删除原先的临时容器

# 运行新的容器
docker run \
  -p 80:80 \
  --name nginx \
  --restart=always \
  --privileged=true \
  -v /opt/nginx/logs:/var/log/nginx \
  -v /opt/nginx/html:/usr/share/nginx/html \
  -v /opt/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
  -v /opt/nginx/conf.d:/etc/nginx/conf.d \
  -d nginx:1.23.3
```

### Elasticsearch

```bash
# 拉取镜像
docker pull elasticsearch:7.13.1
docker pull kibana:7.13.1

# 创建镜像配置挂载的文件夹
mkdir -p /opt/elasticsearch
mkdir -p /opt/elasticsearch/config
mkdir -p /opt/elasticsearch/data
mkdir -p /opt/elasticsearch/plugins

# 在配置中添加可以被远程的任何机器访问的权限
echo "http.host: 0.0.0.0" >> /opt/elasticsearch/config/elasticsearch.yml

# 准备 Docker 网络（可以不指定）
# 1.查看 Docker 默认网络
docker network ls
# 2.创建网络
docker network create elasticsearch-net
# 3.查看网络详情
docker network inspect elasticsearch-net

# 设置目录读写权限（重要）
chmod -R 777 /opt/elasticsearch/

# 运行 ElasticSearch 容器
docker run \
  --name elasticsearch \
  --restart=always \
  --privileged=true \
  -e "discovery.type=single-node" \
  -e ES_JAVA_OPTS="-Xms64m -Xmx512m" \
  -v /opt/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
  -v /opt/elasticsearch/data:/usr/share/elasticsearch/data \
  -v /opt/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
  --network elasticsearch-net \ # 可以不指定
  -p 9200:9200 \
  -p 9300:9300 \
  -d elasticsearch:7.13.1

# 测试 ElasticSearch
http://127.0.0.1:9200
http://127.0.0.1:9200/_cat/nodes # 查看节点信息

# 运行Kibana容器
docker run \
  --name kibana \
  --restart=always \
  --privileged=true \
  -e ELASTICSEARCH_HOSTS=http://elasticsearch:9200 \
  --network=elasticsearch-net \ # 可以不指定
  -p 5601:5601  \
  -d kibana:7.13.1
# 备注：-e ELASTICSEARCH_HOSTS=http://服务器地址或ElasticSearch的容器名称:9200
# 原因：加入了同一个网络后可以通过容器名称进行互相访问。

# 测试Kibana
http://127.0.0.1:5601 # 点击：Explore on my own

# 设置Kibana为中文
# 1.进入容器
docker exec -it Kibana容器ID /bin/bash
# 2.编辑配置文件
vi config/kibana.yml
# 3.最后一行添加以下配置
i18n.locale: "zh-CN"

# 导入官方测试数据：https://github.com/elastic/elasticsearch/blob/7.5/docs/src/test/resources/accounts.json
POST /bank/_bulk
{} # 测试数据
# 根据官方文档学习：https://www.elastic.co/guide/en/elasticsearch/reference/index.html



# -------------------------------------------------其它单机参考配置---------------------------------------------------------
docker pull elasticsearch:7.13.1
docker pull kibana:7.13.1

mkdir -p /opt/elasticsearch/config
mkdir -p /opt/elasticsearch/data
mkdir -p /opt/elasticsearch/plugins

echo "http.host: 0.0.0.0" >> /opt/elasticsearch/config/elasticsearch.yml

chmod -R 777 /opt/elasticsearch/

docker run --name elasticsearch -p 9200:9200 -p 9300:9300 --restart=always \
  -e "discovery.type=single-node" \
  -e ES_JAVA_OPTS="-Xms64m -Xmx512m" \
  -v /opt/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
  -v /opt/elasticsearch/data:/usr/share/elasticsearch/data \
  -v /opt/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
  -d elasticsearch:7.13.1

docker run --name kibana --restart=always -e ELASTICSEARCH_HOSTS=http://127.0.0.1:9200 -p 5601:5601 -d kibana:7.13.1
# -------------------------------------------------其它单机参考配置---------------------------------------------------------



# 备注：更多、以及更详细的配置和启动参数或命令查看Docker文档中对应的应用说明！


# 安装中文解析ik分词器
# 1.进入映射的plugins目录中（例如以下目录）
cd /opt/elasticsearch/plugins

# 2.创建一个【名称为 ik 的文件夹并进入该文件夹中】执行以下命令下载插件（插件地址：https://github.com/medcl/elasticsearch-analysis-ik）
# 备注：如没有 wget 则需要先下载：yum install wget
# 注意：下载的分词器版本需要与 ES 的版本一致
wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.13.1/elasticsearch-analysis-ik-7.13.1.zip

# 备注：如果通过 wget 下载失败则可以自行到 GitHub 中下载好后上传到 ES 插件映射的文件夹中

# 3.解压文件
# 备注：安装解压工具：yum install -y unzip
unzip elasticsearch-analysis-ik-7.13.1.zip

# 4.修改分词器文件夹权限
chmod -R 777 /opt/elasticsearch/plugins/ik/

# 5.重启ElasticSearch
docker restart 容器名称或容器ID

# 6.检查是否安装成功
# 6.1.进入容器内部
docker exec -it 容器名称或容器ID /bin/bash
# 6.2.进入到bin文件夹中
cd bin
# 6.3.执行以下命令（出现安装的分词器名称则表示已安装成功）
elasticsearch-plugin list

# 7.自定义扩展词库（远程扩展字典）
# 7.1.安装 Nginx（参考Nginx安装步骤）
# 7.2.在 Nginx 中新建文件夹和文件
mkdir -p /opt/nginx/html/elasticsearch
touch /opt/nginx/html/elasticsearch/remote_ext_dict.txt
touch /opt/nginx/html/elasticsearch/remote_ext_stopwords.txt

# 编辑配置 IKAnalyzer.cfg.xml 文件
vi /opt/elasticsearch/plugins/ik/config/IKAnalyzer.cfg.xml
# 编辑如下配置字段
# <!--用户可以在这里配置远程扩展字典 -->
<entry key="remote_ext_dict">http://127.0.0.1/elasticsearch/remote_ext_dict.txt</entry>
# <!--用户可以在这里配置远程扩展停止词字典-->
<entry key="remote_ext_stopwords">http://127.0.0.1/elasticsearch/remote_ext_stopwords.txt</entry>

# 测试分词器
POST _analyze
{
  "analyzer": "ik_max_word",
  "text": "乔碧萝殿下奥力给"
}
```

IK 分词器包含两种模式：

* `ik_smart`：最少切分。

* `ik_max_word`：最细切分。

扩展字典（本地扩展字典）：

- 在`vi /opt/elasticsearch/plugins/ik/config/IKAnalyzer.cfg.xml`配置文件内容添加：

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
  <properties>
          <comment>IK Analyzer 扩展配置</comment>
          <!--用户可以在这里配置自己的扩展字典 -->
          <entry key="ext_dict">此处书写扩展字典的文件名称（相对当前文件所在的目录中查找）</entry>
    	<!--用户可以在这里配置自己的扩展停止词字典-->
          <entry key="ext_stopwords">此处书写停止扩展词的文件名称（相对当前文件所在的目录中查找）</entry>
  </properties>
  ```

### Nacos

```bash
# 拉取镜像
docker pull nacos/nacos-server:v2.2.3-slim

# 创建一个临时容器用于复制数据和配置文件
docker run --name nacos -e MODE=standalone -p 8848:8848 -d nacos/nacos-server:v2.2.3-slim

# 创建文件夹
mkdir -p /opt/nacos

# 复制配置文件
docker cp nacos:/home/nacos/logs/ /opt/nacos/
docker cp nacos:/home/nacos/conf/ /opt/nacos/

# 删除临时容器
docker stop nacos
docker rm nacos

# 创建名为 nacos 的数据库并执行 /opt/nacos/conf/mysql.schema.sql 文件
# 或执行此链接中的SQL文件：https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql

# 启动容器并挂载数据卷及配置 MySQL 持久化参数（注意：2.x版本后需要开放8848、9848、9849端口）
# 官方配置文档：https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html
docker run -d \
  -e PREFER_HOST_MODE=hostname \
  -e MODE=standalone \
  -e NACOS_AUTH_ENABLE=true \
  -e NACOS_AUTH_IDENTITY_KEY=nacos \
  -e NACOS_AUTH_IDENTITY_VALUE=nacos \
  -e NACOS_AUTH_TOKEN='Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4=' \
  -e SPRING_DATASOURCE_PLATFORM=mysql \
  -e MYSQL_SERVICE_HOST=172.16.250.130 \
  -e MYSQL_SERVICE_PORT=3306 \
  -e MYSQL_SERVICE_USER=root \
  -e MYSQL_SERVICE_PASSWORD=123456 \
  -e MYSQL_SERVICE_DB_NAME=nacos \
  -e TIME_ZONE='Asia/Shanghai' \
  -v /opt/nacos/logs:/home/nacos/logs \
  -v /opt/nacos/conf:/home/nacos/conf \
  -p 8848:8848 \
  -p 9848:9848 \
  -p 9849:9849 \
  --name nacos \
  --restart=always \
  --privileged=true \
  nacos/nacos-server:v2.2.3-slim



# 或将以下环境变量配置保存到一个以 custom.env 命名的文件中
# 然后上传到服务器中
PREFER_HOST_MODE=hostname
MODE=standalone
NACOS_AUTH_ENABLE=true
NACOS_AUTH_IDENTITY_KEY=nacos
NACOS_AUTH_IDENTITY_VALUE=nacos
NACOS_AUTH_TOKEN='Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4='
SPRING_DATASOURCE_PLATFORM=mysql
MYSQL_SERVICE_HOST=172.16.250.130
MYSQL_SERVICE_DB_NAME=nacos
MYSQL_SERVICE_PORT=3306
MYSQL_SERVICE_USER=root
MYSQL_SERVICE_PASSWORD=123456
TIME_ZONE='Asia/Shanghai'
MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false&allowPublicKeyRetrieval=true
# 然后执行以下命令安装（ --env-file 参数为 custom.env 所在位置）
docker run -d \
  --env-file ./custom.env \
  -v /opt/nacos/logs:/home/nacos/logs \
  -v /opt/nacos/conf:/home/nacos/conf \
  -p 8848:8848 \
  -p 9848:9848 \
  -p 9849:9849 \
  --name nacos \
  --restart=always \
  --privileged=true \
  nacos/nacos-server:v2.2.3-slim



# 关于配置 -e NACOS_AUTH_TOKEN='Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4=' \ 解释
# 注意：值必须是字符编码为 Base64 后的结果 && 编码前的字符必须大于等于32个
# 例如以下的值 Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4= 是字符 ChenWenJingChaoJiDaShuaiGe9527~~ Base64编码后的结果


# ------------- Mac --------------
# GitHub的Release下载页：https://github.com/alibaba/nacos/releases
# 单机启动：sh startup.sh -m standalone
# 单机停止：sh shutdown.sh
```
