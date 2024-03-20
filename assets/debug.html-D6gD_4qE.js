import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,f as e}from"./app-DGH9_Pjk.js";const t={},o=e(`<h1 id="开发软件" tabindex="-1"><a class="header-anchor" href="#开发软件"><span>开发软件</span></a></h1><h2 id="安装-vs-code" tabindex="-1"><a class="header-anchor" href="#安装-vs-code"><span>安装 VS Code</span></a></h2><ul><li><p>使用 snap</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> code
</code></pre></div></li><li><p>在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">&gt;</span> packages.microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> <span class="token number">644</span> packages.microsoft.gpg /usr/share/keyrings/
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main&quot; &gt; /etc/apt/sources.list.d/vscode.list&#39;</span>
</code></pre></div><p>然后正常安装:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> code <span class="token comment"># or code-insiders</span>
</code></pre></div></li></ul><p>可能还需要安装</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libx11-xcb1 libasound2
</code></pre></div><h3 id="remote-插件安装" tabindex="-1"><a class="header-anchor" href="#remote-插件安装"><span>remote 插件安装</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>code --install-extension ms-vscode-remote.vscode-remote-extensionpack
</code></pre></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm"><span>nvm</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre></div><p>在 Linux 上可能需要重新链接终端，命令才可用。</p><p>测试命令，输入 <code>nvm</code> 即安装成功:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> nvm
</code></pre></div><p>安装命令:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">10</span>
</code></pre></div><p>切换命令:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nvm use <span class="token number">10</span>
</code></pre></div><h2 id="安装-git" tabindex="-1"><a class="header-anchor" href="#安装-git"><span>安装 Git</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:git-core/ppa

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre></div><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>yarn</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://dl.yarnpkg.com/debian/ stable main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list
<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre></div><p>测试是否安装成功:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token parameter variable">--version</span>
</code></pre></div>`,22),p=[o];function c(l,i){return s(),n("div",null,p)}const u=a(t,[["render",c],["__file","debug.html.vue"]]),h=JSON.parse('{"path":"/casual/linux/ubuntu/debug.html","title":"开发软件","lang":"zh-CN","frontmatter":{"icon":"debug","date":"2019-11-21T00:00:00.000Z","category":"Linux","description":"开发软件 安装 VS Code 使用 snap 在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。 然后正常安装: 可能还需要安装 remote 插件安装 nvm 在 Linux 上可能需要重新链接终端，命令才可用。 测试命令，输入 nvm 即安装成功: 安装命令: 切换命令: 安装 Git yarn 测试是否安装成功: ","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/casual/linux/ubuntu/debug.html"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"开发软件"}],["meta",{"property":"og:description","content":"开发软件 安装 VS Code 使用 snap 在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。 然后正常安装: 可能还需要安装 remote 插件安装 nvm 在 Linux 上可能需要重新链接终端，命令才可用。 测试命令，输入 nvm 即安装成功: 安装命令: 切换命令: 安装 Git yarn 测试是否安装成功: "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:published_time","content":"2019-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开发软件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]]},"headers":[{"level":2,"title":"安装 VS Code","slug":"安装-vs-code","link":"#安装-vs-code","children":[{"level":3,"title":"remote 插件安装","slug":"remote-插件安装","link":"#remote-插件安装","children":[]}]},{"level":2,"title":"nvm","slug":"nvm","link":"#nvm","children":[]},{"level":2,"title":"安装 Git","slug":"安装-git","link":"#安装-git","children":[]},{"level":2,"title":"yarn","slug":"yarn","link":"#yarn","children":[]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"casual/linux/ubuntu/debug.md","localizedDate":"2019年11月21日","excerpt":"","autoDesc":true}');export{u as comp,h as data};