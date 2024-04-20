import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as i,b as p,d as n,e as s,a as c,f as o}from"./app-CPpIDMNC.js";const r={},d=n("p",null,"此处是一些在 Docker 中安装各类软件的操作记录（持续更新中...）。",-1),v={class:"hint-container tip"},m=n("p",{class:"hint-container-title"},"提示",-1),u={href:"https://docs.docker.com",target:"_blank",rel:"noopener noreferrer"},k=o(`<h2 id="安装各类软件" tabindex="-1"><a class="header-anchor" href="#安装各类软件"><span>安装各类软件</span></a></h2><div class="hint-container important"><p class="hint-container-title">提示！</p><p>跟着每个软件的安装步骤一步步的安装即可。</p></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull mysql:5.7

<span class="token comment"># MySql5.7配置</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> mysql:5.7

<span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull mysql:8.0.34

<span class="token comment"># MySql8.0以上配置</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> mysql:8.0.34

<span class="token comment"># 以下为 my.cnf 文件中的配置信息</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token assign-left variable">init_connect</span><span class="token operator">=</span><span class="token string">&#39;SET collation_connection = utf8_unicode_ci&#39;</span>
<span class="token assign-left variable">init_connect</span><span class="token operator">=</span><span class="token string">&#39;SET NAMES utf8&#39;</span>
character-set-server<span class="token operator">=</span>utf8
collation-server<span class="token operator">=</span>utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

<span class="token comment"># 进入容器的文件系统</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql /bin/bash

<span class="token comment"># 开启MySQL的远程访问权限</span>
<span class="token comment"># 1.进入容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql mysql <span class="token parameter variable">-uroot</span> -p123456<span class="token punctuation">;</span>
<span class="token comment"># 2.开启root用户的远程访问权限</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 3.刷新权限</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>MongoDB</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull mongo

<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> mongo <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mongo/data/db:/data/db <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> mongo <span class="token punctuation">\\</span>
  <span class="token parameter variable">--auth</span>

<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mongo /bin/bash
<span class="token comment"># 执行 mongosh 连接MogoDB（注意：MongoDB 6.0全面弃用了 mongo 而改为使用 mongosh）</span>
mongosh

<span class="token comment"># 进入到 admin 数据库</span>
use admin
<span class="token comment"># 创建数据库</span>
db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user:<span class="token string">&#39;root&#39;</span>,pwd:<span class="token string">&#39;123456&#39;</span>,roles:<span class="token punctuation">[</span><span class="token punctuation">{</span> role:<span class="token string">&#39;userAdminAnyDatabase&#39;</span>, db: <span class="token string">&#39;admin&#39;</span><span class="token punctuation">}</span>,<span class="token string">&quot;readWriteAnyDatabase&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull redis:7.2.1

<span class="token comment"># 需预先创建好目录和配置文件</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/redis
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/redis/data
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/redis/conf
<span class="token function">touch</span> /opt/redis/conf/redis.conf

<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> redis <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/redis/data:/data <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> redis:7.2.1 redis-server /etc/redis/redis.conf

<span class="token comment"># redis 自描述文件：https://raw.githubusercontent.com/antirez/redis/7.0/redis.conf</span>

<span class="token comment"># 进入容器的文件系统</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis /bin/bash

<span class="token comment"># 进入容器内部</span>
 <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis <span class="token function">sh</span>
 <span class="token comment"># 执行（执行Redis脚手架）</span>
 redis-cli
 <span class="token comment"># 执行（输入用户名和密码 - 用户名为可选）</span>
 auth <span class="token punctuation">[</span>username<span class="token punctuation">]</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq"><span>RabbitMQ</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像（management 表示带控制台）</span>
<span class="token function">docker</span> pull rabbitmq:3.8.34-management

<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> rabbitmq <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--hostname</span> rabbitmqhost <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> rabbitmq-plugins:/plugins <span class="token punctuation">\\</span> <span class="token comment"># 此处采用的是默认数据卷（可通过 docker volume inspect rabbitmq-plugins 查看挂载信息）</span>
  <span class="token parameter variable">-p</span> <span class="token number">5671</span>:5671 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">15671</span>:15671 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">4369</span>:4369 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">25672</span>:25672 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> rabbitmq:3.8.34-management
  
  <span class="token comment"># 补充说明：RabbitMQ 的插件目录如果挂载到本地则启动报错（原因：其内置的插件无法被复制到本地）。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull nginx:1.23.3

<span class="token comment"># 创建镜像配置挂载的文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/nginx
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/nginx/logs
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/nginx/html
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/nginx/conf
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/nginx/conf.d

<span class="token comment"># 先运行一个普通容器用于拷贝各类文件（后续删除）</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> nginx:1.23.3
<span class="token comment"># 备注：docker container cp 容器名称:容器内需要拷贝的文件路径 属主机的路径（.点则表示当前位置）</span>

<span class="token comment"># 找到容器中 nginx.conf 配置文件的路径 /etc/nginx/nginx.conf 并复制</span>
<span class="token builtin class-name">cd</span> /opt/nginx/conf
<span class="token function">docker</span> container <span class="token function">cp</span> nginx:/etc/nginx/nginx.conf <span class="token builtin class-name">.</span>

<span class="token comment"># 找到容器中 default.conf 配置文件的路径 /etc/nginx/conf.d/default.conf 并复制</span>
<span class="token builtin class-name">cd</span> /opt/nginx/conf.d
<span class="token function">docker</span> container <span class="token function">cp</span> nginx:/etc/nginx/conf.d/default.conf <span class="token builtin class-name">.</span>

<span class="token comment"># 找到容器中默认首页文件夹 html 路径 /usr/share/nginx/html 并复制</span>
<span class="token builtin class-name">cd</span> /opt/nginx
<span class="token function">docker</span> container <span class="token function">cp</span> nginx:/usr/share/nginx/html <span class="token builtin class-name">.</span>

<span class="token comment"># 找到容器中日志文件路径 /var/log/nginx 并复制</span>
<span class="token builtin class-name">cd</span> /opt/nginx/logs
<span class="token function">docker</span> container <span class="token function">cp</span> nginx:/var/log/nginx/error.log <span class="token builtin class-name">.</span>
<span class="token function">docker</span> container <span class="token function">cp</span> nginx:/var/log/nginx/access.log <span class="token builtin class-name">.</span>

<span class="token comment"># 然后删除原先的临时容器</span>

<span class="token comment"># 运行新的容器</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nginx/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> nginx:1.23.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>Elasticsearch</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull elasticsearch:7.13.1
<span class="token function">docker</span> pull kibana:7.13.1

<span class="token comment"># 创建镜像配置挂载的文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/elasticsearch
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/elasticsearch/config
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/elasticsearch/data
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/elasticsearch/plugins

<span class="token comment"># 在配置中添加可以被远程的任何机器访问的权限</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;&gt;</span> /opt/elasticsearch/config/elasticsearch.yml

<span class="token comment"># 准备 Docker 网络（可以不指定）</span>
<span class="token comment"># 1.查看 Docker 默认网络</span>
<span class="token function">docker</span> network <span class="token function">ls</span>
<span class="token comment"># 2.创建网络</span>
<span class="token function">docker</span> network create elasticsearch-net
<span class="token comment"># 3.查看网络详情</span>
<span class="token function">docker</span> network inspect elasticsearch-net

<span class="token comment"># 设置目录读写权限（重要）</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /opt/elasticsearch/

<span class="token comment"># 运行 ElasticSearch 容器</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> elasticsearch <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms64m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
  <span class="token parameter variable">--network</span> elasticsearch-net <span class="token punctuation">\\</span> <span class="token comment"># 可以不指定</span>
  <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> elasticsearch:7.13.1

<span class="token comment"># 测试 ElasticSearch</span>
http://127.0.0.1:9200
http://127.0.0.1:9200/_cat/nodes <span class="token comment"># 查看节点信息</span>

<span class="token comment"># 运行Kibana容器</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> kibana <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://elasticsearch:9200 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--network</span><span class="token operator">=</span>elasticsearch-net <span class="token punctuation">\\</span> <span class="token comment"># 可以不指定</span>
  <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601  <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> kibana:7.13.1
<span class="token comment"># 备注：-e ELASTICSEARCH_HOSTS=http://服务器地址或ElasticSearch的容器名称:9200</span>
<span class="token comment"># 原因：加入了同一个网络后可以通过容器名称进行互相访问。</span>

<span class="token comment"># 测试Kibana</span>
http://127.0.0.1:5601 <span class="token comment"># 点击：Explore on my own</span>

<span class="token comment"># 设置Kibana为中文</span>
<span class="token comment"># 1.进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> Kibana容器ID /bin/bash
<span class="token comment"># 2.编辑配置文件</span>
<span class="token function">vi</span> config/kibana.yml
<span class="token comment"># 3.最后一行添加以下配置</span>
i18n.locale: <span class="token string">&quot;zh-CN&quot;</span>

<span class="token comment"># 导入官方测试数据：https://github.com/elastic/elasticsearch/blob/7.5/docs/src/test/resources/accounts.json</span>
POST /bank/_bulk
<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># 测试数据</span>
<span class="token comment"># 根据官方文档学习：https://www.elastic.co/guide/en/elasticsearch/reference/index.html</span>



<span class="token comment"># -------------------------------------------------其它单机参考配置---------------------------------------------------------</span>
<span class="token function">docker</span> pull elasticsearch:7.13.1
<span class="token function">docker</span> pull kibana:7.13.1

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/elasticsearch/config
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/elasticsearch/data
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/elasticsearch/plugins

<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;&gt;</span> /opt/elasticsearch/config/elasticsearch.yml

<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /opt/elasticsearch/

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms64m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> elasticsearch:7.13.1

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> kibana <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-e</span> <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://127.0.0.1:9200 <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 <span class="token parameter variable">-d</span> kibana:7.13.1
<span class="token comment"># -------------------------------------------------其它单机参考配置---------------------------------------------------------</span>



<span class="token comment"># 备注：更多、以及更详细的配置和启动参数或命令查看Docker文档中对应的应用说明！</span>


<span class="token comment"># 安装中文解析ik分词器</span>
<span class="token comment"># 1.进入映射的plugins目录中（例如以下目录）</span>
<span class="token builtin class-name">cd</span> /opt/elasticsearch/plugins

<span class="token comment"># 2.创建一个【名称为 ik 的文件夹并进入该文件夹中】执行以下命令下载插件（插件地址：https://github.com/medcl/elasticsearch-analysis-ik）</span>
<span class="token comment"># 备注：如没有 wget 则需要先下载：yum install wget</span>
<span class="token comment"># 注意：下载的分词器版本需要与 ES 的版本一致</span>
<span class="token function">wget</span> https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.13.1/elasticsearch-analysis-ik-7.13.1.zip

<span class="token comment"># 备注：如果通过 wget 下载失败则可以自行到 GitHub 中下载好后上传到 ES 插件映射的文件夹中</span>

<span class="token comment"># 3.解压文件</span>
<span class="token comment"># 备注：安装解压工具：yum install -y unzip</span>
<span class="token function">unzip</span> elasticsearch-analysis-ik-7.13.1.zip

<span class="token comment"># 4.修改分词器文件夹权限</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /opt/elasticsearch/plugins/ik/

<span class="token comment"># 5.重启ElasticSearch</span>
<span class="token function">docker</span> restart 容器名称或容器ID

<span class="token comment"># 6.检查是否安装成功</span>
<span class="token comment"># 6.1.进入容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器名称或容器ID /bin/bash
<span class="token comment"># 6.2.进入到bin文件夹中</span>
<span class="token builtin class-name">cd</span> bin
<span class="token comment"># 6.3.执行以下命令（出现安装的分词器名称则表示已安装成功）</span>
elasticsearch-plugin list

<span class="token comment"># 7.自定义扩展词库（远程扩展字典）</span>
<span class="token comment"># 7.1.安装 Nginx（参考Nginx安装步骤）</span>
<span class="token comment"># 7.2.在 Nginx 中新建文件夹和文件</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/nginx/html/elasticsearch
<span class="token function">touch</span> /opt/nginx/html/elasticsearch/remote_ext_dict.txt
<span class="token function">touch</span> /opt/nginx/html/elasticsearch/remote_ext_stopwords.txt

<span class="token comment"># 编辑配置 IKAnalyzer.cfg.xml 文件</span>
<span class="token function">vi</span> /opt/elasticsearch/plugins/ik/config/IKAnalyzer.cfg.xml
<span class="token comment"># 编辑如下配置字段</span>
<span class="token comment"># &lt;!--用户可以在这里配置远程扩展字典 --&gt;</span>
<span class="token operator">&lt;</span>entry <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;remote_ext_dict&quot;</span><span class="token operator">&gt;</span>http://127.0.0.1/elasticsearch/remote_ext_dict.txt<span class="token operator">&lt;</span>/entry<span class="token operator">&gt;</span>
<span class="token comment"># &lt;!--用户可以在这里配置远程扩展停止词字典--&gt;</span>
<span class="token operator">&lt;</span>entry <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;remote_ext_stopwords&quot;</span><span class="token operator">&gt;</span>http://127.0.0.1/elasticsearch/remote_ext_stopwords.txt<span class="token operator">&lt;</span>/entry<span class="token operator">&gt;</span>

<span class="token comment"># 测试分词器</span>
POST _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_max_word&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;乔碧萝殿下奥力给&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IK 分词器包含两种模式：</p><ul><li><p><code>ik_smart</code>：最少切分。</p></li><li><p><code>ik_max_word</code>：最细切分。</p></li></ul><p>扩展字典（本地扩展字典）：</p><ul><li><p>在<code>vi /opt/elasticsearch/plugins/ik/config/IKAnalyzer.cfg.xml</code>配置文件内容添加：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer 扩展配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--用户可以在这里配置自己的扩展字典 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>此处书写扩展字典的文件名称（相对当前文件所在的目录中查找）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
  	<span class="token comment">&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>此处书写停止扩展词的文件名称（相对当前文件所在的目录中查找）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ul><h3 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos"><span>Nacos</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull nacos/nacos-server:v2.2.3-slim

<span class="token comment"># 创建一个临时容器用于复制数据和配置文件</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> nacos <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">-d</span> nacos/nacos-server:v2.2.3-slim

<span class="token comment"># 创建文件夹</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/nacos

<span class="token comment"># 复制配置文件</span>
<span class="token function">docker</span> <span class="token function">cp</span> nacos:/home/nacos/logs/ /opt/nacos/
<span class="token function">docker</span> <span class="token function">cp</span> nacos:/home/nacos/conf/ /opt/nacos/

<span class="token comment"># 删除临时容器</span>
<span class="token function">docker</span> stop nacos
<span class="token function">docker</span> <span class="token function">rm</span> nacos

<span class="token comment"># 创建名为 nacos 的数据库并执行 /opt/nacos/conf/mysql.schema.sql 文件</span>
<span class="token comment"># 或执行此链接中的SQL文件：https://github.com/alibaba/nacos/blob/master/config/src/main/resources/META-INF/nacos-db.sql</span>

<span class="token comment"># 启动容器并挂载数据卷及配置 MySQL 持久化参数（注意：2.x版本后需要开放8848、9848、9849端口）</span>
<span class="token comment"># 官方配置文档：https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">PREFER_HOST_MODE</span><span class="token operator">=</span>hostname <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_ENABLE</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_IDENTITY_KEY</span><span class="token operator">=</span>nacos <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_IDENTITY_VALUE</span><span class="token operator">=</span>nacos <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_TOKEN</span><span class="token operator">=</span><span class="token string">&#39;Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4=&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">172.16</span>.250.130 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_PORT</span><span class="token operator">=</span><span class="token number">3306</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>nacos <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TIME_ZONE</span><span class="token operator">=</span><span class="token string">&#39;Asia/Shanghai&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nacos/conf:/home/nacos/conf <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">9849</span>:9849 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> nacos <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  nacos/nacos-server:v2.2.3-slim



<span class="token comment"># 或将以下环境变量配置保存到一个以 custom.env 命名的文件中</span>
<span class="token comment"># 然后上传到服务器中</span>
<span class="token assign-left variable">PREFER_HOST_MODE</span><span class="token operator">=</span>hostname
<span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone
<span class="token assign-left variable">NACOS_AUTH_ENABLE</span><span class="token operator">=</span>true
<span class="token assign-left variable">NACOS_AUTH_IDENTITY_KEY</span><span class="token operator">=</span>nacos
<span class="token assign-left variable">NACOS_AUTH_IDENTITY_VALUE</span><span class="token operator">=</span>nacos
<span class="token assign-left variable">NACOS_AUTH_TOKEN</span><span class="token operator">=</span><span class="token string">&#39;Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4=&#39;</span>
<span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">172.16</span>.250.130
<span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>nacos
<span class="token assign-left variable">MYSQL_SERVICE_PORT</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root
<span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span>
<span class="token assign-left variable">TIME_ZONE</span><span class="token operator">=</span><span class="token string">&#39;Asia/Shanghai&#39;</span>
<span class="token assign-left variable">MYSQL_SERVICE_DB_PARAM</span><span class="token operator">=</span>characterEncoding<span class="token operator">=</span>utf8<span class="token operator">&amp;</span><span class="token assign-left variable">connectTimeout</span><span class="token operator">=</span><span class="token number">1000</span><span class="token operator">&amp;</span><span class="token assign-left variable">socketTimeout</span><span class="token operator">=</span><span class="token number">3000</span><span class="token operator">&amp;</span><span class="token assign-left variable">autoReconnect</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">useSSL</span><span class="token operator">=</span>false<span class="token operator">&amp;</span><span class="token assign-left variable">allowPublicKeyRetrieval</span><span class="token operator">=</span>true
<span class="token comment"># 然后执行以下命令安装（ --env-file 参数为 custom.env 所在位置）</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  --env-file ./custom.env <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/nacos/conf:/home/nacos/conf <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">9849</span>:9849 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> nacos <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  nacos/nacos-server:v2.2.3-slim



<span class="token comment"># 关于配置 -e NACOS_AUTH_TOKEN=&#39;Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4=&#39; \\ 解释</span>
<span class="token comment"># 注意：值必须是字符编码为 Base64 后的结果 &amp;&amp; 编码前的字符必须大于等于32个</span>
<span class="token comment"># 例如以下的值 Q2hlbldlbkppbmdDaGFvSmlEYVNodWFpR2U5NTI3fn4= 是字符 ChenWenJingChaoJiDaShuaiGe9527~~ Base64编码后的结果</span>


<span class="token comment"># ------------- Mac --------------</span>
<span class="token comment"># GitHub的Release下载页：https://github.com/alibaba/nacos/releases</span>
<span class="token comment"># 单机启动：sh startup.sh -m standalone</span>
<span class="token comment"># 单机停止：sh shutdown.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function b(g,h){const a=t("ExternalLinkIcon");return l(),i("div",null,[d,p(" more "),n("div",v,[m,n("p",null,[s("官方文档："),n("a",u,[s("https://docs.docker.com"),c(a)])])]),k])}const x=e(r,[["render",b],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/notes/docker/software/","title":"安装各类软件","lang":"zh-CN","frontmatter":{"title":"安装各类软件","icon":"install","category":"容器技术","tag":["Docker"],"timeline":true,"star":true,"description":"此处是一些在 Docker 中安装各类软件的操作记录（持续更新中...）。 提示 官方文档：https://docs.docker.com 安装各类软件 提示！ 跟着每个软件的安装步骤一步步的安装即可。 MySQL MongoDB Redis RabbitMQ Nginx Elasticsearch IK 分词器包含两种模式： ik_smart：最少切...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/notes/docker/software/"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"安装各类软件"}],["meta",{"property":"og:description","content":"此处是一些在 Docker 中安装各类软件的操作记录（持续更新中...）。 提示 官方文档：https://docs.docker.com 安装各类软件 提示！ 跟着每个软件的安装步骤一步步的安装即可。 MySQL MongoDB Redis RabbitMQ Nginx Elasticsearch IK 分词器包含两种模式： ik_smart：最少切..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装各类软件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]],"date":"2024-03-08T16:03:07.000Z"},"headers":[{"level":2,"title":"安装各类软件","slug":"安装各类软件","link":"#安装各类软件","children":[{"level":3,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"MongoDB","slug":"mongodb","link":"#mongodb","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"RabbitMQ","slug":"rabbitmq","link":"#rabbitmq","children":[]},{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"Elasticsearch","slug":"elasticsearch","link":"#elasticsearch","children":[]},{"level":3,"title":"Nacos","slug":"nacos","link":"#nacos","children":[]}]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":7.69,"words":2307},"filePathRelative":"notes/docker/software/README.md","localizedDate":"2024年3月8日","excerpt":"<p>此处是一些在 Docker 中安装各类软件的操作记录（持续更新中...）。</p>\\n","autoDesc":true}');export{x as comp,y as data};
