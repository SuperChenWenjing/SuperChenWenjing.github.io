import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c,b as i,d as n,e as s,a as t,f as a}from"./app-XRoqj8Uu.js";const r="/assets/DockerCompose-KgDSwlgY.png",d={},u=n("p",null,"此处是 DockerCompose 的文件的编写和使用。",-1),m=n("h2",{id:"dockercompose",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dockercompose"},[n("span",null,"DockerCompose")])],-1),k={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"什么是 DockerCompose？",-1),y=n("p",null,[s("DockerCompose 通过一个单独的 "),n("code",null,"docker-compose.yml"),s(" 模版文件（YAML 格式）来定义一组相关联的应用容器。")],-1),g=n("p",null,"帮助我们实现多个互相关联的 Docker 容器的快速部署。",-1),b=n("p",null,[s("一个 "),n("code",null,"docker-compose.yml"),s(" 文件表示一个项目。")],-1),h=n("p",null,"文件中的每个 Service 表示一个需要创建的容器。",-1),f={href:"https://docs.docker.com/compose/compose-file/compose-file-v3",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[n("img",{src:r,alt:"DockerCompose",loading:"lazy"})],-1),q=a(`<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3><p><code>docker-compose</code> 文件中可以定义多个相互关联的应用容器，每一个应用容器被称为一个服务（Service）。</p><p>由于 Service 就是在定义某个应用的运行时参数，因此与<code>docker run</code>参数非常相似。</p><p>例如用 <code>docker run</code> 部署 MySQL 的命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">--network</span> net-demo
  mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>docker-compose.yml</code> 文件来定义则如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span> <span class="token comment"># 表示的是当前 DockerCompose 的语法版本</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/mysql/log:/var/log/mysql&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/mysql/data:/var/lib/mysql&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/mysql/conf:/etc/mysql&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> net<span class="token punctuation">-</span>demo
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">net-demo</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> net<span class="token punctuation">-</span>demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比如下：</p><table><thead><tr><th style="text-align:left;">docker run 参数</th><th style="text-align:left;">docker compose 指令</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">--name</td><td style="text-align:left;">container_name</td><td style="text-align:left;">容器名称。</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">ports</td><td style="text-align:left;">端口映射。</td></tr><tr><td style="text-align:left;">-e</td><td style="text-align:left;">environment</td><td style="text-align:left;">环境变量。</td></tr><tr><td style="text-align:left;">-v</td><td style="text-align:left;">volumes</td><td style="text-align:left;">数据卷配置。</td></tr><tr><td style="text-align:left;">--network</td><td style="text-align:left;">networks</td><td style="text-align:left;">网络。</td></tr></tbody></table><h3 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令"><span>基础命令</span></a></h3>`,10),_={href:"https://docs.docker.com/compose/reference",target:"_blank",rel:"noopener noreferrer"},D=a(`<h3 id="部署示例" tabindex="-1"><a class="header-anchor" href="#部署示例"><span>部署示例</span></a></h3><ol><li><p>编写一个 Java 应用的 <code>docker-compose.yml</code> 部署文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span> <span class="token comment"># 表示的是当前 DockerCompose 的语法版本</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span> <span class="token comment"># 部署 MySQL</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql <span class="token comment"># 镜像</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql <span class="token comment"># 容器名称</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># 端口</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span> <span class="token comment"># 环境变量</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 数据卷</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/mysql/log:/var/log/mysql&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/mysql/data:/var/lib/mysql&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/mysql/conf:/etc/mysql&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> <span class="token comment"># 网络</span>
      <span class="token punctuation">-</span> net<span class="token punctuation">-</span>demo
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span> <span class="token comment"># 部署 Nginx</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/nginx/logs:/var/log/nginx&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/nginx/conf.d:/etc/nginx/conf.d&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/nginx/html:/usr/share/nginx/html&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/opt/nginx/conf/nginx.conf:/etc/nginx/nginx.conf&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> net<span class="token punctuation">-</span>demo
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span> <span class="token comment"># 依赖的项目（会优先创建依赖的项目容器再创建本项目）</span>
      <span class="token punctuation">-</span> docker<span class="token punctuation">-</span>demo
  <span class="token key atrule">docker-demo</span><span class="token punctuation">:</span> <span class="token comment"># 部署 Java 项目</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> <span class="token comment"># 构建镜像</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> . <span class="token comment"># 当前目录中查找 Dockerfile 文件</span>
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile <span class="token comment"># 通过 Dockerfile 文件构架镜像</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> docker<span class="token punctuation">-</span>demo <span class="token comment"># 容器名称</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># 端口</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> <span class="token comment"># 网络</span>
      <span class="token punctuation">-</span> net<span class="token punctuation">-</span>demo
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span> <span class="token comment"># 依赖的项目（会优先创建依赖的项目容器再创建本项目）</span>
      <span class="token punctuation">-</span> mysql
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">net-demo</span><span class="token punctuation">:</span> <span class="token comment"># 网络标识</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> net<span class="token punctuation">-</span>demo <span class="token comment"># 网络名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署的基本语法如下：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> compose <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span>
</code></pre></div><p>其中 OPTIONS 和 COMMAND 都是可选参数（查看所有选项参数：<code>docker compose --help</code>）：</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">参数或指令</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Options</td><td style="text-align:left;">-f</td><td style="text-align:left;">指定 compose 文件的路径和名称。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">-p</td><td style="text-align:left;">指定 project 名称。</td></tr><tr><td style="text-align:left;">Commands</td><td style="text-align:left;">up</td><td style="text-align:left;">创建并启动所有 service 容器。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">down</td><td style="text-align:left;">停止并移除所有容器、网络。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">ps</td><td style="text-align:left;">列出所有启动的容器。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">logs</td><td style="text-align:left;">查看指定容器的日志。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">stop</td><td style="text-align:left;">停止容器。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">start</td><td style="text-align:left;">启动容器。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">restart</td><td style="text-align:left;">重启容器。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">top</td><td style="text-align:left;">查看运行的进程。</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">exec</td><td style="text-align:left;">在指定的运行中容器中执行命令。</td></tr></tbody></table><p><strong>启动应用</strong>：<code>docker compose -p docker-demo up -d </code>（执行命令的目录在当前部署文件的目录则无需指定文件路径）。</p><p><strong>停止应用</strong>：<code>docker compose down</code>（会删除掉所有的容器并删除网络）。</p></li></ol>`,2);function C(S,O){const e=o("ExternalLinkIcon");return p(),c("div",null,[u,i(" more "),m,n("div",k,[v,y,g,b,h,n("p",null,[s("DockerCompose 的详细语法参考官网："),n("a",f,[s("https://docs.docker.com/compose/compose-file/compose-file-v3"),t(e)])]),x]),q,n("blockquote",null,[n("p",null,[s("常见的命令："),n("a",_,[s("https://docs.docker.com/compose/reference"),t(e)])])]),D])}const M=l(d,[["render",C],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/notes/docker/docker-compose/","title":"DockerCompose","lang":"zh-CN","frontmatter":{"title":"DockerCompose","icon":"install","category":"容器技术","tag":["Docker"],"timeline":true,"star":true,"description":"此处是 DockerCompose 的文件的编写和使用。 DockerCompose 什么是 DockerCompose？ DockerCompose 通过一个单独的 docker-compose.yml 模版文件（YAML 格式）来定义一组相关联的应用容器。 帮助我们实现多个互相关联的 Docker 容器的快速部署。 一个 docker-compos...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/notes/docker/docker-compose/"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"DockerCompose"}],["meta",{"property":"og:description","content":"此处是 DockerCompose 的文件的编写和使用。 DockerCompose 什么是 DockerCompose？ DockerCompose 通过一个单独的 docker-compose.yml 模版文件（YAML 格式）来定义一组相关联的应用容器。 帮助我们实现多个互相关联的 Docker 容器的快速部署。 一个 docker-compos..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DockerCompose\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]],"date":"2024-03-08T16:03:07.000Z"},"headers":[{"level":2,"title":"DockerCompose","slug":"dockercompose","link":"#dockercompose","children":[{"level":3,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]},{"level":3,"title":"基础命令","slug":"基础命令","link":"#基础命令","children":[]},{"level":3,"title":"部署示例","slug":"部署示例","link":"#部署示例","children":[]}]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":2.63,"words":788},"filePathRelative":"notes/docker/docker-compose/README.md","localizedDate":"2024年3月8日","excerpt":"<p>此处是 DockerCompose 的文件的编写和使用。</p>\\n","autoDesc":true}');export{M as comp,A as data};