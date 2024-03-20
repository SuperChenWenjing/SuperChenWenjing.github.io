import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as s,b as d,d as e,e as t,a as c,f as n}from"./app-DGH9_Pjk.js";const r={},p=e("p",null,"此处是 Dockerfile 的文件的编写和使用。",-1),m=n('<h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h2><div class="hint-container tip"><p class="hint-container-title">什么是 Dockerfile？</p><p>Dockerfile 就是一个文本文件。</p><p>其中包含着一个个的指令（Instruction）。</p><p>用指令来描述说明要执行什么操作来构建镜像。</p><p>将来 Docker 可以根据 Dockerfile 中的指令来帮助我们构建镜像。</p></div><h3 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法"><span>基础语法</span></a></h3>',3),u={href:"https://docs.docker.com/engine/reference/builder",target:"_blank",rel:"noopener noreferrer"},v=n(`<table><thead><tr><th style="text-align:left;">常用指令</th><th style="text-align:left;">说明</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">FROM</td><td style="text-align:left;">指定基础镜像</td><td style="text-align:left;"><code>FROM centos:6</code></td></tr><tr><td style="text-align:left;">ENV</td><td style="text-align:left;">设置环境变量，可在后面指令使用</td><td style="text-align:left;"><code>ENV key value</code></td></tr><tr><td style="text-align:left;">COPY</td><td style="text-align:left;">拷贝本地文件到镜像的指定目录</td><td style="text-align:left;"><code>COPY ./xx.jar /tmp/app.jar</code></td></tr><tr><td style="text-align:left;">RUN</td><td style="text-align:left;">执行Linux的shell命令，一般是安装过程的命令</td><td style="text-align:left;"><code>RUN yum install gcc</code></td></tr><tr><td style="text-align:left;">EXPOSE</td><td style="text-align:left;">指定容器运行时监听的端口，是给镜像使用者看的</td><td style="text-align:left;"><code>EXPOSE 8080</code></td></tr><tr><td style="text-align:left;">ENTRYPOINT</td><td style="text-align:left;">镜像中应用的启动命令，容器运行时调用</td><td style="text-align:left;"><code>ENTRYPOINT java -jar xx.jar</code></td></tr></tbody></table><p>例如要基于 Ubuntu 镜像来构建一个 Java 应用（把以下内容复制到一个以 Dockerfile 为命名的文件中）：</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code># 指定基础镜像
FROM ubuntu:16.04

# 配置环境变量（JDK的安装目录、容器内的时区）
ENV JAVA_DIR=/usr/local

# 拷贝 jdk 和 java 项目的包
COPY ./jdk8.tar.gz $JAVA_DIR/
COPY ./docker-demo.jar /tmp/app.jar

# 安装 JDK
RUN cd $JAVA_DIR \\
 &amp;&amp; tar -xf ./jdk8.tar.gz \\
 &amp;&amp; mv ./jdk1.8.0_144 ./java8

# 配置环境变量
ENV JAVA_HOME=$JAVA_DIR/java8
ENV PATH=$PATH:$JAVA_HOME/bin

# 暴露端口
EXPOSE 8080

# 入口（java 项目的启动命令）
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用第三方已经做好的基础系统加 JDK 环境。</p><p>我们在此基础上制作 Java 镜像就可以省去 JDK 的配置了（把以下内容复制到一个以 Dockerfile 为命名的文件中）：</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code># 指定基础镜像
FROM openjdk:11.0-jre-buster

# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &amp;&amp; echo $TZ &gt; /etc/timezone

# 拷贝 jar 包（只需要改项目的名称即可）
COPY docker-demo.jar /app.jar

# 入口（java 项目的启动命令）
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署后端应用" tabindex="-1"><a class="header-anchor" href="#部署后端应用"><span>部署后端应用</span></a></h3><ol><li><p>编写 Dockerfile 文件：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 指定基础镜像</span>
FROM openjdk:11.0-jre-buster
<span class="token comment"># 设定时区</span>
ENV <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai
RUN <span class="token function">ln</span> <span class="token parameter variable">-snf</span> /usr/share/zoneinfo/<span class="token variable">$TZ</span> /etc/localtime <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$TZ</span> <span class="token operator">&gt;</span> /etc/timezone
<span class="token comment"># 拷贝 jar 包</span>
COPY docker-demo.jar /app.jar
<span class="token comment"># 入口</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>, <span class="token string">&quot;/app.jar&quot;</span><span class="token punctuation">]</span>
</code></pre></div></li><li><p>Maven 打包项目（此处假设项目是：<code>docker-demo.jar</code>）；</p></li><li><p>将 <code>docker-demo.jar</code> 包以及 <code>Dockerfile</code> 文件拷贝到虚拟机的 <code>/opt/demo</code> 目录中；</p></li><li><p>Docker 安装 <code>docker pull openjdk:11.0-jre-buster</code>；</p></li><li><p>执行命令构建镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入镜像目录</span>
<span class="token builtin class-name">cd</span> /opt/demo
<span class="token comment"># 开始构建镜像（如果不指定版本则默认为 latest 最新版本）</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> docker-demo:1.0 <span class="token builtin class-name">.</span>
</code></pre></div><p>命令说明：</p><ul><li><code>docker build </code>：就是构建一个 Docker 镜像。</li><li><code>-t docker-demo:1.0</code>：<code>-t</code> 参数是指定镜像的名称（<code>repository</code> 和 <code>tag</code>）。</li><li><code>.</code>：最后的点是指构建时 Dockerfile 所在路径，由于我们进入了 demo 目录，所以指定的是 <code>.</code> 代表当前目录，也可以直接指定 Dockerfile 目录：<code>docker build -t docker-demo:1.0 /opt/demo</code>。</li></ul></li><li><p>查看镜像列表：<code>docker images</code>。</p></li><li><p>运行该镜像：<code>docker run -d --name docker-demo -p 8080:8080 --newwork net-demo docker-demo:1.0</code>。</p><p>注意：建议把项目中所依赖的应用（数据库、...）和项目一起加入到同一个网络中（通过容器名称进行互相访问）。</p></li><li><p>查看日志输出：<code>docker logs docker-demo -f</code>。</p></li><li><p>访问：<code>localhost:8080</code>。</p></li></ol>`,8);function k(f,b){const a=i("ExternalLinkIcon");return o(),s("div",null,[p,d(" more "),m,e("blockquote",null,[e("p",null,[t("Dockerfile 语法参考官方文档："),e("a",u,[t("https://docs.docker.com/engine/reference/builder"),c(a)])])]),v])}const x=l(r,[["render",k],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/notes/docker/docker-file/","title":"Dockerfile","lang":"zh-CN","frontmatter":{"title":"Dockerfile","icon":"install","category":"容器技术","tag":["Docker"],"timeline":true,"star":true,"description":"此处是 Dockerfile 的文件的编写和使用。 Dockerfile 什么是 Dockerfile？ Dockerfile 就是一个文本文件。 其中包含着一个个的指令（Instruction）。 用指令来描述说明要执行什么操作来构建镜像。 将来 Docker 可以根据 Dockerfile 中的指令来帮助我们构建镜像。 基础语法 Dockerfil...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/notes/docker/docker-file/"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"Dockerfile"}],["meta",{"property":"og:description","content":"此处是 Dockerfile 的文件的编写和使用。 Dockerfile 什么是 Dockerfile？ Dockerfile 就是一个文本文件。 其中包含着一个个的指令（Instruction）。 用指令来描述说明要执行什么操作来构建镜像。 将来 Docker 可以根据 Dockerfile 中的指令来帮助我们构建镜像。 基础语法 Dockerfil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dockerfile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]],"date":"2024-03-08T16:03:07.000Z"},"headers":[{"level":2,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[{"level":3,"title":"基础语法","slug":"基础语法","link":"#基础语法","children":[]},{"level":3,"title":"部署后端应用","slug":"部署后端应用","link":"#部署后端应用","children":[]}]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":2.72,"words":815},"filePathRelative":"notes/docker/docker-file/README.md","localizedDate":"2024年3月8日","excerpt":"<p>此处是 Dockerfile 的文件的编写和使用。</p>\\n","autoDesc":true}');export{x as comp,D as data};
