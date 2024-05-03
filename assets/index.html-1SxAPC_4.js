import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as a,d as t,f as c}from"./app-Dj0T4lXK.js";const o={},i=t("p",null,"此处记录的是安装 Docker 的操作步骤。",-1),l=c(`<h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><div class="hint-container important"><p class="hint-container-title">提示！</p><p><strong>跟着以下步骤一步步的安装即可！</strong></p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 卸载系统之前的docker</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
docker-client <span class="token punctuation">\\</span>
docker-client-latest <span class="token punctuation">\\</span>
docker-common <span class="token punctuation">\\</span>
docker-latest <span class="token punctuation">\\</span>
docker-latest-logrotate <span class="token punctuation">\\</span>
docker-logrotate <span class="token punctuation">\\</span>
docker-engine

<span class="token comment"># 安装 Docker-CE</span>
<span class="token comment"># 1.安装必须的依赖</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\\</span>
device-mapper-persistent-data <span class="token punctuation">\\</span>
lvm2
<span class="token comment"># 2.设置 docker repo 的 yum 位置</span>
<span class="token comment"># 设置 docker 镜像源</span>
yum-config-manager <span class="token punctuation">\\</span>
--add-repo <span class="token punctuation">\\</span>
https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g&#39;</span> /etc/yum.repos.d/docker-ce.repo
yum makecache fast
<span class="token comment"># 3.安装 docker 以及 docker-cli</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
<span class="token comment"># 4.启动 docker</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
<span class="token comment"># 5.设置 docker 开机自启</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token comment"># 6.测试 docker 常用命令，注意切换到 root 用户下</span>
https://docs.docker.com/engine/reference/commandline/docker/
<span class="token comment"># 7.配置 docker 阿里云镜像加速（注意：需要到你的阿里云的镜像加速中复制最新的镜像加速配置）</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://****.mirror.aliyuncs.com&quot;] # 你的阿里云镜像加速地址
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
<span class="token comment"># 修改已有容器设置容器启动策略</span>
<span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>no 容器ID<span class="token punctuation">(</span>或者容器名<span class="token punctuation">)</span> <span class="token comment"># 不自动重启容器（默认值）</span>
<span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 容器ID<span class="token punctuation">(</span>或者容器名<span class="token punctuation">)</span> <span class="token comment"># 自动重启</span>

<span class="token comment"># 关闭Linux防火墙</span>
systemctl stop firewalld
<span class="token comment"># 禁止开机启动防火墙</span>
systemctl disable firewalld
<span class="token comment"># 查看防火墙状态</span>
systemctl status firewalld.service

systemctl start <span class="token function">docker</span>  <span class="token comment"># 启动docker服务</span>
systemctl stop <span class="token function">docker</span>  <span class="token comment"># 停止docker服务</span>
systemctl restart <span class="token function">docker</span>  <span class="token comment"># 重启docker服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function r(p,d){return s(),e("div",null,[i,a(" more "),l])}const k=n(o,[["render",r],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/notes/docker/install/","title":"安装 Docker","lang":"zh-CN","frontmatter":{"title":"安装 Docker","icon":"install","category":"容器技术","tag":["Docker"],"timeline":true,"star":true,"description":"此处记录的是安装 Docker 的操作步骤。 安装 Docker 提示！ 跟着以下步骤一步步的安装即可！ ","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/notes/docker/install/"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"安装 Docker"}],["meta",{"property":"og:description","content":"此处记录的是安装 Docker 的操作步骤。 安装 Docker 提示！ 跟着以下步骤一步步的安装即可！ "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装 Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]],"date":"2024-03-08T16:03:07.000Z"},"headers":[{"level":2,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"notes/docker/install/README.md","localizedDate":"2024年3月8日","excerpt":"<p>此处记录的是安装 Docker 的操作步骤。</p>\\n","autoDesc":true}');export{k as comp,v as data};
