import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as e}from"./app-CEgLB3KH.js";const p={},t=e(`<p>要计算 $1+2+3$ ，我们可以直接写表达式:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span>
<span class="token number">6</span>
</code></pre></div><p>要计算 $1+2+3+...+10$ ，勉强也能写出来。</p><p>但是，要计算 $1+2+3+...+10000$ ，直接写表达式就不可能了。</p><p>为了让计算机能计算成千上万次的重复运算，我们就需要循环语句。</p><p>Python 的循环有两种，一种是 <code>for...in</code> 循环，依次把 list 或 tuple 中的每个元素迭代出来，看例子:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Michael&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tracy&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> name <span class="token keyword">in</span> names<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre></div><p>执行这段代码，会依次打印 <code>names</code> 的每一个元素:</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>Michael
Bob
Tracy
</code></pre></div><p>所以 <code>for x in ...</code> 循环就是把每个元素代入变量 <code>x</code>，然后执行缩进块的语句。</p><p>再比如我们想计算 1-10 的整数之和，可以用一个 <code>sum</code> 变量做累加:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span> <span class="token operator">+</span> x
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
</code></pre></div><p>如果要计算 1-100 的整数之和，从 1 写到 100 有点困难，幸好 Python 提供一个 <code>range()</code> 函数，可以生成一个整数序列，再通过 <code>list()</code> 函数可以转换为 list。比如 <code>range(5)</code> 生成的序列是从 0 开始小于 5 的整数:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre></div><p><code>range(101)</code> 就可以生成 0-100 的整数序列，计算如下:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span> <span class="token operator">+</span> x
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
</code></pre></div><p>请自行运行上述代码，看看结果是不是当年高斯同学心算出的 5050。</p><p>第二种循环是 <code>while</code> 循环，只要条件满足，就不断循环，条件不满足时退出循环。比如我们要计算 100 以内所有奇数之和，可以用 <code>while</code> 循环实现:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span>
n <span class="token operator">=</span> <span class="token number">99</span>
<span class="token keyword">while</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">sum</span> <span class="token operator">+</span> n
    n <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
</code></pre></div><p>在循环内部变量 <code>n</code> 不断自减，直到变为 <code>-1</code> 时，不再满足 <code>while</code> 条件，循环退出。</p><h2 id="break" tabindex="-1"><a class="header-anchor" href="#break"><span>break</span></a></h2><p>在循环中，<code>break</code> 语句可以提前退出循环。例如，本来要循环打印 1 ～ 100 的数字:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> n <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;END&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>上面的代码可以打印出 1~100。</p><p>如果要提前结束循环，可以用 <code>break</code> 语句:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> n <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">:</span> <span class="token comment"># 当n = 11时，条件满足，执行break语句</span>
        <span class="token keyword">break</span> <span class="token comment"># break语句会结束当前循环</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;END&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>执行上面的代码可以看到，打印出 1~10 后，紧接着打印 <code>END</code>，程序结束。</p><p>可见 <code>break</code> 的作用是提前结束循环。</p><h2 id="continue" tabindex="-1"><a class="header-anchor" href="#continue"><span>continue</span></a></h2><p>在循环过程中，也可以通过 <code>continue</code> 语句，跳过当前的这次循环，直接开始下一次循环。</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre></div><p>上面的程序可以打印出 1 ～ 10。但是，如果我们想只打印奇数，可以用 <code>continue</code> 语句跳过某些循环:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">if</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token comment"># 如果n是偶数，执行continue语句</span>
        <span class="token keyword">continue</span> <span class="token comment"># continue语句会直接继续下一轮循环，后续的print()语句不会执行</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
</code></pre></div><p>执行上面的代码可以看到，打印的不再是 1 ～ 10，而是 1，3，5，7，9。</p><p>可见 <code>continue</code> 的作用是提前结束本轮循环，并直接开始下一轮循环。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>循环是让计算机做重复任务的有效的方法。</p><p><code>break</code> 语句可以在循环过程中直接退出循环，而 <code>continue</code> 语句可以提前结束本轮循环，并直接开始下一轮循环。这两个语句通常都必须配合 <code>if</code> 语句使用。</p><p>要特别注意，不要滥用 <code>break</code> 和 <code>continue</code> 语句。<code>break</code> 和 <code>continue</code> 会造成代码执行逻辑分叉过多，容易出错。大多数循环并不需要用到 <code>break</code> 和 <code>continue</code> 语句，上面的两个例子，都可以通过改写循环条件或者修改循环逻辑，去掉 <code>break</code> 和 <code>continue</code> 语句。</p><p>有些时候，如果代码写得有问题，会让程序陷入“死循环”，也就是永远循环下去。这时可以用 <code>Ctrl + C</code> 退出程序，或者强制结束 Python 进程。</p>`,40),o=[t];function c(l,r){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","loop.html.vue"]]),d=JSON.parse('{"path":"/casual/code/language/python/guide/loop.html","title":"循环","lang":"zh-CN","frontmatter":{"title":"循环","icon":"loop","author":"廖雪峰","date":"2020-05-24T00:00:00.000Z","category":"Python","description":"要计算 $1+2+3$ ，我们可以直接写表达式: 要计算 $1+2+3+...+10$ ，勉强也能写出来。 但是，要计算 $1+2+3+...+10000$ ，直接写表达式就不可能了。 为了让计算机能计算成千上万次的重复运算，我们就需要循环语句。 Python 的循环有两种，一种是 for...in 循环，依次把 list 或 tuple 中的每个元素...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/casual/code/language/python/guide/loop.html"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"循环"}],["meta",{"property":"og:description","content":"要计算 $1+2+3$ ，我们可以直接写表达式: 要计算 $1+2+3+...+10$ ，勉强也能写出来。 但是，要计算 $1+2+3+...+10000$ ，直接写表达式就不可能了。 为了让计算机能计算成千上万次的重复运算，我们就需要循环语句。 Python 的循环有两种，一种是 for...in 循环，依次把 list 或 tuple 中的每个元素..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"循环\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"]]},"headers":[{"level":2,"title":"break","slug":"break","link":"#break","children":[]},{"level":2,"title":"continue","slug":"continue","link":"#continue","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":3.42,"words":1027},"filePathRelative":"casual/code/language/python/guide/loop.md","localizedDate":"2020年5月24日","excerpt":"","autoDesc":true}');export{k as comp,d as data};