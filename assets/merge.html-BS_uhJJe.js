import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,f as a}from"./app-Dj0T4lXK.js";const r={},o=a(`<h2 id="squash-merge" tabindex="-1"><a class="header-anchor" href="#squash-merge"><span>Squash merge</span></a></h2><p>通过使用 <code>--squash</code> 选项，你可以在合并中将多个 commit 合并为一个。</p><p>也就是对于以下的例子</p><div class="language-git-graph" data-ext="git-graph" data-title="git-graph"><pre class="language-git-graph"><code>commit id:&quot;main1&quot;
branch feature
commit id:&quot;feature1&quot;
checkout main
commit id:&quot;main2&quot;
checkout feature
commit id:&quot;feature2&quot;
checkout main
merge feature
</code></pre></div><p><code>git merge feature</code> 得到的结果为:</p><div class="language-git-graph" data-ext="git-graph" data-title="git-graph"><pre class="language-git-graph"><code>commit id:&quot;main1&quot;
commit id:&quot;feature1&quot;
commit id:&quot;main2&quot;
commit id:&quot;feature2&quot;
commit id:&quot;merge commit&quot;
</code></pre></div><p>而如果 <code>feature</code> 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 <code>git merge --squash feature</code> 得到:</p><div class="language-git-graph" data-ext="git-graph" data-title="git-graph"><pre class="language-git-graph"><code>commit id:&quot;main1&quot;
commit id:&quot;main2&quot;
commit id:&quot;squash merge result&quot;
</code></pre></div><h2 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick"><span>Cherry pick</span></a></h2><p>有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。</p><div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><pre class="language-git-graph"><code>commit
branch mrhope
commit id:&quot;featureA 20%&quot;
commit id:&quot;featureA 40%&quot;
commit id:&quot;bug fix&quot;
commit id:&quot;featureA 60%&quot;
commit id:&quot;featureA 80%&quot;
checkout main
cherry-pick id:&quot;bug fix&quot;
checkout mrhope
commit id:&quot;featureA 100%&quot;
checkout main
merge mrhope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，我们可以回到 main 分支，执行 <code>git cherry-pick &lt;commit id&gt;</code> 来挑拣某个提交，当然，你可以一并在命令中提交挑拣多个 commit。</p><div class="language-git-graph line-numbers-mode" data-ext="git-graph" data-title="git-graph"><pre class="language-git-graph"><code>commit
branch mrhope
commit id:&quot;featureA 20%&quot;
commit id:&quot;featureA 40%&quot;
commit id:&quot;bug fix1&quot;
commit id:&quot;featureA 60%&quot;
commit id:&quot;bug fix2&quot;
commit id:&quot;featureA 80%&quot;
checkout main
cherry-pick id:&quot;bug fix1&quot;
cherry-pick id:&quot;bug fix2&quot;
checkout mrhope
commit id:&quot;featureA 100%&quot;
checkout main
merge mrhope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>git cherry-pick &lt;commit id 1&gt; &lt;commit id 2&gt;</code> 表示挑拣 commit id 1 和 commit id 2</li><li><code>git cherry-pick &lt;commit id 1&gt;...&lt;commit id 2&gt;</code> 表示挑拣 commit id 1 与 commit id 2 之间 (包括两者) 的所有提交</li><li><code>git cherry-pick &lt;branch&gt;</code> 表示挑拣该分支最新的提交</li></ul>`,14),c=[o];function m(n,d){return t(),i("div",null,c)}const l=e(r,[["render",m],["__file","merge.html.vue"]]),g=JSON.parse('{"path":"/software/git/merge.html","title":"高级合并","lang":"zh-CN","frontmatter":{"date":"2022-08-08T00:00:00.000Z","title":"高级合并","icon":"merge","order":17,"category":"Git","tag":["Git","软件"],"description":"Squash merge 通过使用 --squash 选项，你可以在合并中将多个 commit 合并为一个。 也就是对于以下的例子 git merge feature 得到的结果为: 而如果 feature 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 git merge --squash featur...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/software/git/merge.html"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"高级合并"}],["meta",{"property":"og:description","content":"Squash merge 通过使用 --squash 选项，你可以在合并中将多个 commit 合并为一个。 也就是对于以下的例子 git merge feature 得到的结果为: 而如果 feature 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 git merge --squash featur..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2022-08-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高级合并\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Squash merge","slug":"squash-merge","link":"#squash-merge","children":[]},{"level":2,"title":"Cherry pick","slug":"cherry-pick","link":"#cherry-pick","children":[]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"software/git/merge.md","localizedDate":"2022年8月8日","excerpt":"","autoDesc":true}');export{l as comp,g as data};
