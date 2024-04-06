import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,f as n}from"./app-Bb4-lNiP.js";const s={},i=n(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep"><span>egrep</span></a></h1><p><code>egrep</code> 命令用于显示匹配正则模式的行，与 <code>grep -E</code> 命令等价。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code> 命令显示包括 <code>Lorem</code> 或 <code>dolor</code> 的行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
<span class="token comment"># 或者</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre></div>`,6),r=[i];function o(d,l){return t(),a("div",null,r)}const m=e(s,[["render",o],["__file","egrep.html.vue"]]),u=JSON.parse('{"path":"/casual/linux/bash/archives/commands/egrep.html","title":"egrep","lang":"zh-CN","frontmatter":{"date":"2024-03-02T00:00:00.000Z","description":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。 ","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/casual/linux/bash/archives/commands/egrep.html"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"egrep"}],["meta",{"property":"og:description","content":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"egrep\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":0.43,"words":129},"filePathRelative":"casual/linux/bash/archives/commands/egrep.md","localizedDate":"2024年3月2日","excerpt":"","autoDesc":true}');export{m as comp,u as data};
