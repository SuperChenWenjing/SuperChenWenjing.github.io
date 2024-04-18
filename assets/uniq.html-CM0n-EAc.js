import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,f as n}from"./app-CHVs5ynK.js";const s={},o=n(`<h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq"><span>uniq</span></a></h1><p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre></div><p>对该文件进行排序后，再过滤掉重复的行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>
a
b
c
d
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>-c</code> 参数会显示每行一共出现了多少次。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
    <span class="token number">3</span> a
    <span class="token number">2</span> b
    <span class="token number">2</span> c
    <span class="token number">1</span> d
</code></pre></div>`,9),c=[o];function i(p,r){return a(),t("div",null,c)}const u=e(s,[["render",i],["__file","uniq.html.vue"]]),m=JSON.parse('{"path":"/casual/linux/bash/archives/commands/uniq.html","title":"uniq","lang":"zh-CN","frontmatter":{"date":"2024-03-02T00:00:00.000Z","description":"uniq uniq 用于过滤掉重复的行，该命令只对排序后的文件有效。 下面是 example.txt 文件的内容。 对该文件进行排序后，再过滤掉重复的行。 参数 -c 参数会显示每行一共出现了多少次。 ","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/casual/linux/bash/archives/commands/uniq.html"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"uniq"}],["meta",{"property":"og:description","content":"uniq uniq 用于过滤掉重复的行，该命令只对排序后的文件有效。 下面是 example.txt 文件的内容。 对该文件进行排序后，再过滤掉重复的行。 参数 -c 参数会显示每行一共出现了多少次。 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uniq\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"casual/linux/bash/archives/commands/uniq.md","localizedDate":"2024年3月2日","excerpt":"","autoDesc":true}');export{u as comp,m as data};
