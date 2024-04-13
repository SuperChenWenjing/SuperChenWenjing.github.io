import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-BaQ74vJR.js";const n={},o=t(`<h1 id="du" tabindex="-1"><a class="header-anchor" href="#du"><span>du</span></a></h1><p><code>du</code> 命令显示某个文件或目录的磁盘使用量。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">du</span> filename
</code></pre></div><p><code>-h</code> 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。</p><p><code>-s</code> 参数表示总结(summarize)。</p><p><code>-x</code> 参数表示不显示不在当前分区的目录，通常会忽略<code>/dev</code>、<code>/proc</code>、<code>/sys</code> 等目录。</p><p><code>-c</code> 参数表示显示当前目录总共占用的空间大小。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示根目录下各级目录占用的空间大小</span>
$ <span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-shxc</span> /*
</code></pre></div><p><code>--exclude</code> 参数用于排除某些目录或文件。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-shxc</span> /* <span class="token parameter variable">--exclude</span><span class="token operator">=</span>proc
<span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-sh</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span>*.iso
</code></pre></div><p><code>--max-depth</code> 参数用于设定目录大小统计到第几层。如果设为 <code>-–max-depth=0</code>，那么等同于 <code>-s</code> 参数。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> /home/ <span class="token parameter variable">-hc</span> --max-depth<span class="token operator">=</span><span class="token number">2</span>
</code></pre></div>`,12),c=[o];function p(d,r){return a(),s("div",null,c)}const u=e(n,[["render",p],["__file","du.html.vue"]]),m=JSON.parse('{"path":"/casual/linux/bash/archives/commands/du.html","title":"du","lang":"zh-CN","frontmatter":{"date":"2024-03-02T00:00:00.000Z","description":"du du 命令显示某个文件或目录的磁盘使用量。 -h 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。 -s 参数表示总结(summarize)。 -x 参数表示不显示不在当前分区的目录，通常会忽略/dev、/proc、/sys 等目录。 -c 参数表示显示当前目录总共占用的空间大小。 --exclude 参数用于排除某些目录或文...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/casual/linux/bash/archives/commands/du.html"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"du"}],["meta",{"property":"og:description","content":"du du 命令显示某个文件或目录的磁盘使用量。 -h 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。 -s 参数表示总结(summarize)。 -x 参数表示不显示不在当前分区的目录，通常会忽略/dev、/proc、/sys 等目录。 -c 参数表示显示当前目录总共占用的空间大小。 --exclude 参数用于排除某些目录或文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"du\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"casual/linux/bash/archives/commands/du.md","localizedDate":"2024年3月2日","excerpt":"","autoDesc":true}');export{u as comp,m as data};