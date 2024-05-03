import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as p,d as a,e as n,a as c,f as t}from"./app-XRoqj8Uu.js";const i="/assets/线程状态-CbDZT9dv.png",d={},r=t('<h2 id="一、进程和线程" tabindex="-1"><a class="header-anchor" href="#一、进程和线程"><span>一、进程和线程</span></a></h2><h3 id="_1-1-进程" tabindex="-1"><a class="header-anchor" href="#_1-1-进程"><span>1.1 进程</span></a></h3><ul><li>程序由指令和数据组成，但这些指令要运行，数据要读写，就必须将指令加载至 CPU，数据加载至内存。在指令运行过程中还需要用到磁盘、网络等设备。进程就是用来加载指令、管理内存、管理 IO 的。</li><li>当一个程序被运行，从磁盘加载这个程序的代码至内存，这时就开启了一个进程。</li><li>进程就可以视为程序的一个实例。大部分程序可以同时运行多个实例进程（例如记事本、画图、浏览器...），也有的程序只能启动一个实例进程（例如网易云音乐、360 安全卫士...）。</li></ul><h3 id="_1-2-线程" tabindex="-1"><a class="header-anchor" href="#_1-2-线程"><span>1.2 线程</span></a></h3><ul><li>一个进程之内可以分为一到多个线程。</li><li>一个线程就是一个指令流，将指令流中的一条条指令以一定的顺序交给 CPU 执行。</li><li>在 Java 中，线程作为最小的调度单位，进程作为资源分配的最小单位。</li><li>在 Windows 中进程是不活动的，只是作为线程的容器。</li></ul><h3 id="_1-3-二者对比" tabindex="-1"><a class="header-anchor" href="#_1-3-二者对比"><span>1.3 二者对比</span></a></h3><ul><li>进程基本上相互独立的，而线程存在于进程内，是进程的一个子集。</li><li>进程拥有共享的资源，如内存空间等，供其内部的线程共享。</li><li>进程间通信较为复杂： <ul><li>同一台计算机的进程通信称为 IPC（Inter-process communication）。</li><li>不同计算机之间的进程通信，需要通过网络，并遵守共同的协议，例如 HTTP。</li></ul></li><li>线程通信相对简单，因为它们共享进程内的内存，一个例子是多个线程可以访问同一个共享变量。</li><li>线程更轻量，线程上下文切换成本一般上要比进程上下文切换低。</li></ul><h2 id="二、并发与并行" tabindex="-1"><a class="header-anchor" href="#二、并发与并行"><span>二、并发与并行</span></a></h2><p>在单核 CPU 下，线程实际还是<strong>串行执行</strong>的。</p><p>操作系统中有一个组件叫做<strong>任务调度器</strong>，将 CPU 的时间片（Windows 下时间片最小约为 15 毫秒）分给不同的程序使用，只是由于 CPU 在线程间（时间片很短）的切换非常快，人类感觉是<strong>同时运行的</strong>。</p><p>总结为一句话就是： <strong>微观串行</strong>，<strong>宏观并行</strong> ，一般会将这种线程轮流使用 CPU 的做法称为并发（Concurrent）。</p><table><thead><tr><th>CPU</th><th>时间片1</th><th>时间片2</th><th>时间片3</th><th>时间片4</th></tr></thead><tbody><tr><td>Core</td><td>线程1</td><td>线程2</td><td>线程3</td><td>线程4</td></tr></tbody></table><p>在多核 CPU 下，每个 核（Core） 都可以调度运行线程，这时候线程可以是并行的。</p><table><thead><tr><th>CPU</th><th>时间片1</th><th>时间片2</th><th>时间片3</th><th>时间片4</th></tr></thead><tbody><tr><td>Core</td><td>线程1</td><td>线程1</td><td>线程3</td><td>线程3</td></tr><tr><td>Core</td><td>线程2</td><td>线程4</td><td>线程2</td><td>线程4</td></tr></tbody></table><p>引用 Rob Pike 的一段描述：</p><ul><li>并发（Concurrent）是同一时间应对（Dealing With）多件事情的能力。</li><li>并行（Parallel）是同一时间动手做（Doing）多件事情的能力。</li></ul><p>举个例子：</p><ul><li>家庭主妇做饭、打扫卫生、给孩子喂奶，她一个人轮流交替做这多件事，这时就是并发。</li><li>家庭主妇雇了个保姆，她们一起这些事，这时既有并发，也有并行（这时会产生竞争，例如锅只有一口，一个人用锅时，另一个人就得等待）。</li><li>雇了 3 个保姆，一个专做饭、一个专打扫卫生、一个专喂奶，互不干扰，这时是并行。</li></ul>',18),u={class:"hint-container note"},h=a("p",{class:"hint-container-title"},"Rob Pike",-1),k=a("li",null,"Golang 语言的创造者。",-1),m={href:"https://baike.baidu.com/item/%E7%BD%97%E5%B8%83%C2%B7%E6%B4%BE%E5%85%8B/10983505?fr=ge_ala",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="三、实际应用场景" tabindex="-1"><a class="header-anchor" href="#三、实际应用场景"><span>三、实际应用场景</span></a></h2><h3 id="_3-1-应用之异步调用" tabindex="-1"><a class="header-anchor" href="#_3-1-应用之异步调用"><span>3.1 应用之异步调用</span></a></h3><p>以调用的方角度来讲：</p><ul><li>如果需要等待结果返回，才能继续运行的就是同步。</li><li>如果不需要等待结果返回，就能继续运行的就是异步。</li></ul><h4 id="_3-1-1-设计" tabindex="-1"><a class="header-anchor" href="#_3-1-1-设计"><span>3.1.1 设计</span></a></h4><p>多线程可以让方法执行变为异步的（就是不用干巴巴的等着）。</p><p>比如说读取磁盘文件时，假设读取操作花费了 5 秒钟，如果没有线程调度机制，那这 5 秒 CPU 就什么都做不了，其它代码也都得暂停等待。</p><h4 id="_3-1-2-结论" tabindex="-1"><a class="header-anchor" href="#_3-1-2-结论"><span>3.1.2 结论</span></a></h4><ul><li>比如在项目中，视频文件需要转换格式等操作比较费时，这时开一个新线程处理视频转换，避免阻塞主线程。</li><li>Tomcat 的异步 Servlet 也是类似的目的，让用户线程处理耗时较长的操作，避免阻塞 Tomcat 的工作线程。</li></ul><h3 id="_3-2-应用之提高效率" tabindex="-1"><a class="header-anchor" href="#_3-2-应用之提高效率"><span>3.2 应用之提高效率</span></a></h3><p>充分利用多核 CPU 的优势来提高运行效率。</p><p>想象下面的场景，执行 3 个计算，最后将计算结果汇总。</p><ul><li>计算 1 花费 10ms。</li><li>计算 2 花费 11ms。</li><li>计算 3 花费 9ms。</li><li>汇总则需要 1ms。</li></ul><p>如果是串行执行，那么总共花费的时间是 10 + 11 + 9 + 1 = 31ms。 但如果是四核 CPU，各个核心分别使用线程 1 执行计算 1，线程 2 执行计算 2，线程 3 执行计算 3，那么 3 个线程是并行的，花费时间只取决于最长的那个线程运行的时间，即 11ms 最后加上汇总时间只会花费 12ms。</p><div class="hint-container warning"><p class="hint-container-title">注意！</p><p>需要在多核 CPU 才能提高效率，单核仍然时是轮流执行的！</p></div><h4 id="_3-2-1-设计" tabindex="-1"><a class="header-anchor" href="#_3-2-1-设计"><span>3.2.1 设计</span></a></h4><p>待添加案例代码示例！</p><h4 id="_3-2-2-结论" tabindex="-1"><a class="header-anchor" href="#_3-2-2-结论"><span>3.2.2 结论</span></a></h4><ol><li>单核 CPU 下，多线程不能实际提高程序运行效率，只是为了能够在不同的任务之间切换，不同线程轮流使用 CPU ，不至于一个线程总占用 CPU，别的线程没法干活。</li><li>多核 CPU 可以并行跑多个线程，但能否提高程序运行效率还是要分情况的： <ul><li>有些任务，经过精心设计，将任务拆分，并行执行，当然可以提高程序的运行效率。但不是所有计算任务都能拆分。</li><li>也不是所有任务都需要拆分，任务的目的如果不同，谈拆分和效率没啥意义。</li></ul></li><li>IO 操作不占用 CPU，只是我们一般拷贝文件使用的是【阻塞 IO】，这时相当于线程虽然不用 CPU，但需要一直等待 IO 结束，没能充分利用线程（可以通过【非阻塞 IO】和【异步 IO】优化）。</li></ol><h2 id="四、java中的线程" tabindex="-1"><a class="header-anchor" href="#四、java中的线程"><span>四、Java中的线程</span></a></h2><h3 id="_4-1-创建和运行线程" tabindex="-1"><a class="header-anchor" href="#_4-1-创建和运行线程"><span>4.1 创建和运行线程</span></a></h3><p><strong>方式一</strong>：直接使用 <code>Thread</code> 类创建线程。</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 创建线程对象</span>
<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token string">&quot;Thread-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 要执行的任务</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 启动线程</span>
thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>方式二</strong>：使用 <code>Runnable</code> 配合 <code>Thread</code> 。</p><p>把【线程】和【任务】（要执行的代码）分开：</p><ul><li><code>Thread</code> 代表线程。</li><li><code>Runnable</code> 代表可运行的任务（线程要执行的代码）。</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 创建任务对象</span>
<span class="token class-name">Runnable</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 要执行的任务</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 创建线程对象</span>
<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token string">&quot;Thread-01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 参数 2 是自定义的线程名称</span>
<span class="token comment">// 启动线程</span>
thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 8 以后可以使用 Lambda 精简代码：</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 创建任务对象</span>
<span class="token class-name">Runnable</span> task <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建线程对象</span>
<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token string">&quot;Thread-01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 启动线程</span>
thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">自 Thread 与 Runnable 之间的关系：</p><ul><li>用 <code>Runnable</code> 更容易与线程池等高级 API 配合。</li><li>用 <code>Runnable</code> 让任务类脱离了 <code>Thread</code> 继承体系，更灵活。</li></ul></div><p><strong>方式三</strong>：使用 <code>FutureTask</code> 配合 <code>Thread</code>。</p><p><code>FutureTask</code> 能够接收 <code>Callable</code> 类型的参数，用来处理有<strong>返回结果</strong>的情况。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 创建任务对象</span>
<span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建线程对象</span>
<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token string">&quot;Thread-01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 启动线程</span>
thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 主线程阻塞，同步等待 task 的执行完毕的结果</span>
<span class="token class-name">Integer</span> result <span class="token operator">=</span> task<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;结果是：{}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-观察多个线程同时运行" tabindex="-1"><a class="header-anchor" href="#_4-2-观察多个线程同时运行"><span>4.2 观察多个线程同时运行</span></a></h3><p>我们可以开启多个线程来运行，然后观察👀运行的结果。</p><p>会发现，线程之间是交替运行的，谁先谁后，不由我们控制。</p><h3 id="_4-3-查看进程线程的方法" tabindex="-1"><a class="header-anchor" href="#_4-3-查看进程线程的方法"><span>4.3 查看进程线程的方法</span></a></h3><p><strong>Windows</strong></p><ul><li>任务管理器可以查看进程和线程数，也可以用来杀死进程。</li><li>也可以在终端通过 <code>tasklist</code> 命令查看进程、<code>taskkill</code> 命令杀死进程。</li></ul><p><strong>Linux</strong></p><ul><li><code>ps -fe</code> 查看所有进程。</li><li><code>ps -fT -p &lt;PID&gt;</code> 查看某个进程（PID）的所有线程。</li><li><code>kill</code> 杀死进程。</li><li><code>top</code> 按大写 H 按键切换是否显示线程。</li><li><code>top -H -p &lt;PID&gt;</code> 查看某个进程（PID）的所有线程。</li></ul><p><strong>Java</strong></p><ul><li><code>jps</code> 命令查看所有 Java 进程。</li><li><code>jstack &lt;PID&gt;</code> 查看某个 Java 进程（PID）的所有线程状态。</li><li><code>jconsole</code> 来查看某个 Java 进程中线程的运行情况（图形界面）。</li></ul><div class="hint-container info"><p class="hint-container-title">jconsole 远程监控的配置：</p><ol><li><p>需要以如下方式运行你的 Java 类：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-Djava.rmi.server.hostname</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>IP地址<span class="token variable">\`</span></span> <span class="token parameter variable">-Dcom.sun.management.jmxremote</span> <span class="token parameter variable">-Dcom.sun.management.jmxremote.port</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>连接的端口<span class="token variable">\`</span></span> <span class="token parameter variable">-Dcom.sun.management.jmxremote.ssl</span><span class="token operator">=</span>是否安全连接 <span class="token parameter variable">-Dcom.sun.management.jmxremote.authenticate</span><span class="token operator">=</span>是否认证 Java 类
</code></pre></div></li><li><p>修改 <code>/etc/hosts</code> 文件将 <code>127.0.0.1</code> 映射至主机名。</p></li><li><p>如果要认证访问，还需要做如下步骤：</p><ol><li>复制 <code>jmxremote.password</code> 文件。</li><li>修改 <code>jmxremote.password</code> 和 <code>jmxremote.access</code> 文件的权限为 <code>600</code> 即文件所有者可读写。</li><li>连接时填入 controlRole（用户名）、R&amp;D（密码）。</li></ol></li></ol></div><h3 id="_4-4-原理之线程运行" tabindex="-1"><a class="header-anchor" href="#_4-4-原理之线程运行"><span>4.4 原理之线程运行</span></a></h3><h4 id="_4-4-1-栈与栈帧" tabindex="-1"><a class="header-anchor" href="#_4-4-1-栈与栈帧"><span>4.4.1 栈与栈帧</span></a></h4><p>Java Virtual Machine Stacks （Java 虚拟机栈）。</p><p>我们都知道 JVM 中由堆、栈、方法区所组成，其中栈内存是给谁用的呢？其实就是线程，每个线程启动后，虚拟机就会为其分配一块栈内存。</p><ul><li>每个栈由多个栈帧（Frame）组成，对应着每次方法调用时所占用的内存。</li><li>每个线程只能有一个活动栈帧，对应着当前正在执行的那个方法。</li></ul><h4 id="_4-4-2-线程上下文切换" tabindex="-1"><a class="header-anchor" href="#_4-4-2-线程上下文切换"><span>4.4.2 线程上下文切换</span></a></h4><p>Thread Context Switch（线程上下文切换）。</p><p>因为以下一些原因导致 CPU 不再执行当前的线程，转而执行另一个线程的代码：</p><ul><li>线程的 CPU 时间片用完。</li><li>垃圾回收。</li><li>有更高优先级的线程需要运行。</li><li>线程自己调用了 <code>sleep</code>、<code>yield</code>、<code>wait</code>、<code>join</code>、<code>park</code>、<code>synchronized</code>、<code>lock</code> 等方法。</li></ul><p>当 Context Switch 发生时，需要由操作系统保存当前线程的状态，并恢复另一个线程的状态，Java 中对应的概念就是程序计数器（Program Counter Register），它的作用是记住下一条 JVM 指令的执行地址，是线程私有的：</p><ul><li>状态包括程序计数器、虚拟机栈中每个栈帧的信息，如局部变量、操作数栈、返回地址等。</li><li>Context Switch 频繁发生会影响性能。</li></ul><h3 id="_4-5-thread常见方法" tabindex="-1"><a class="header-anchor" href="#_4-5-thread常见方法"><span>4.5 Thread常见方法</span></a></h3><table><thead><tr><th>方法名</th><th>static</th><th>功能说明</th><th>注意事项</th></tr></thead><tbody><tr><td><code>start()</code></td><td>-</td><td>启动一个新线程，在新的线程运行 <code>run</code> 方法中的代码。</td><td><code>start</code> 方法只是让线程进入就绪，里面代码不一定立刻运行（CPU 的时间片还没分给它）。<br>每个线程对象的 <code>start</code> 方法只能调用一次，如果调用了多次会出现 <code>IllegalThreadStateException</code> 异常。</td></tr><tr><td><code>run()</code></td><td>-</td><td>新线程启动后会调用的方法。</td><td>如果在构造 Thread 对象时传递了 Runnable 参数，则线程启动后会调用 Runnable 中的 run 方法，否则默认不执行任何操作。<br>但可以创建 Thread 的子类对象，来覆盖默认行为。</td></tr><tr><td><code>join()</code></td><td>-</td><td>等待线程运行结束。</td><td>-</td></tr><tr><td><code>join(long n) </code></td><td>-</td><td>等待线程运行结束,最多等待 n 毫秒。</td><td>-</td></tr><tr><td><code>getId()</code></td><td>-</td><td>获取线程长整型的 ID。</td><td>ID 唯一。</td></tr><tr><td><code>getName()</code></td><td>-</td><td>获取线程名。</td><td>-</td></tr><tr><td><code>setName(String) </code></td><td>-</td><td>修改线程名。</td><td>-</td></tr><tr><td><code>getPriority()</code></td><td>-</td><td>获取线程优先级。</td><td>-</td></tr><tr><td><code>setPriority(int) </code></td><td>-</td><td>修改线程优先级。</td><td>Java 中规定线程优先级是1~10 的整数，较大的优先级能提高该线程被 CPU 调度的机率。</td></tr><tr><td><code>getState()</code></td><td>-</td><td>获取线程状态。</td><td>Java 中线程状态是用 6 个 enum 表示的， 分别为：<br>NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED。</td></tr><tr><td><code>isInterrupted()</code></td><td>-</td><td>判断是否被打断。</td><td>不会清除打断标记。</td></tr><tr><td><code>isAlive()</code></td><td>-</td><td>线程是否存活（还没有运行完毕）。</td><td>-</td></tr><tr><td><code>interrupt()</code></td><td>-</td><td>打断线程。</td><td>如果被打断线程正在 <code>sleep</code>、<code>wait</code>、<code>join</code> 会导致被打断的线程抛出 <code>InterruptedException</code>，并清除打断标记。<br>如果打断的正在运行的线程，则会设置打断标记 。<br><code>park</code> 的线程被打断，也会设置打断标记。</td></tr><tr><td><code>interrupted()</code></td><td>static</td><td>判断当前线程是否被打断。</td><td>会清除打断标记。</td></tr><tr><td><code> currentThread()</code></td><td>static</td><td>获取当前正在执行的线程。</td><td>-</td></tr><tr><td><code>sleep(long n)</code></td><td>static</td><td>让当前执行的线程休眠 n 毫秒，休眠时让出 CPU 的时间片给其它线程。</td><td>-</td></tr><tr><td><code>yield()</code></td><td>static</td><td>提示线程调度器让出当前线程对 CPU 的使用主要是为了测试和调试。</td><td>-</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">调用 start 方法与 run 方法的区别？</p><ul><li>直接调用 <code>run</code> 是在主线程中执行了 <code>run</code>，并没有启动新的线程。</li><li>使用 <code>start</code> 是启动新的线程，通过新的线程间接执行 <code>run</code> 中的代码。</li></ul></div><div class="hint-container warning"><p class="hint-container-title">sleep 方法与 yield 方法？</p><p><code>sleep</code></p><ol><li><p>调用 <code>sleep</code> 会让当前线程从 Running 进入 Timed Waiting 状态（阻塞）。</p></li><li><p>其它线程可以使用 <code>interrupt</code> 方法打断正在睡眠的线程，这时 <code>sleep</code> 方法会抛出 InterruptedException。</p></li><li><p>睡眠结束后的线程未必会立刻得到执行。</p></li><li><p>建议用 TimeUnit 的 <code>sleep</code> 代替 Thread 的 <code>sleep</code> 来获得更好的可读性。</p></li></ol><p><code>yield</code></p><ol><li><p>调用 <code>yield</code> 会让当前线程从 Running 进入 Runnable 就绪状态，然后调度执行其它线程。</p></li><li><p>具体的实现依赖于操作系统的任务调度器。</p></li></ol></div><p><strong>线程优先级</strong>：</p><ul><li>线程优先级会提示（hint）调度器优先调度该线程，但它仅仅是一个提示，调度器可以忽略它。</li><li>如果 CPU 比较忙，那么优先级高的线程会获得更多的时间片，但 CPU 闲时，优先级几乎没作用。</li></ul><h3 id="_4-6-join-方法详解" tabindex="-1"><a class="header-anchor" href="#_4-6-join-方法详解"><span>4.6 <code>join</code> 方法详解</span></a></h3><p>未完待续...</p><h2 id="线程的状态切换" tabindex="-1"><a class="header-anchor" href="#线程的状态切换"><span>线程的状态切换</span></a></h2><h3 id="操作系统层面" tabindex="-1"><a class="header-anchor" href="#操作系统层面"><span>操作系统层面</span></a></h3><blockquote><p>这是从操作系统层面来描述的五种线程状态。</p></blockquote><p><img src="`+i+'" alt="线程状态" loading="lazy"></p><ul><li>【初始状态】仅仅是在语言层面创建了线程对象，还未与操作系统的线程进行关联。</li><li>【可运行状态】（就绪状态）指的是线程已经被创建（与操作系统的线程已关联），可以由 CPU 调度执行了。 <ul><li>当 CPU 时间片用完后，会从【运行状态】转换为【可运行状态】则会导致线程的上下文切换。</li></ul></li><li>【阻塞状态】 <ul><li>如果调用了阻塞 API，比如 BIO 读写文件，这时该线程实际不会用到 CPU，但会导致线程上下切换，进入【阻塞状态】。</li><li>等 BIO 操作完毕后，会由操作系统唤醒阻塞的线程，转换至【可运行状态】。</li><li>与【可运行状态】的区别是，对【阻塞状态】的线程来说，只要它们一直不唤醒，调度器就一直不会考虑调度它们。</li></ul></li><li>【终止状态】表示线程已经执行完毕，生命周期也已经结束，不会再转换为其它状态了。</li></ul><h3 id="java-api-层面" tabindex="-1"><a class="header-anchor" href="#java-api-层面"><span>Java API 层面</span></a></h3><blockquote><p>这是从 Java API 层面来描述的六种状态（在 <code>Thread.State</code> 枚举定义）。</p></blockquote><p>![Java API 的六种线程状态](../assets/Java API 的六种线程状态.png)</p>',71);function g(b,_){const s=l("ExternalLinkIcon");return o(),p("div",null,[r,a("div",u,[h,a("ul",null,[k,a("li",null,[n("Rob Pike - "),a("a",m,[n("百度百科"),c(s)]),n("。")])])]),v])}const j=e(d,[["render",g],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/notes/java/thread/","title":"并发编程","lang":"zh-CN","frontmatter":{"title":"并发编程","icon":"Code","category":["Java","并发编程"],"timeline":true,"star":true,"description":"一、进程和线程 1.1 进程 程序由指令和数据组成，但这些指令要运行，数据要读写，就必须将指令加载至 CPU，数据加载至内存。在指令运行过程中还需要用到磁盘、网络等设备。进程就是用来加载指令、管理内存、管理 IO 的。 当一个程序被运行，从磁盘加载这个程序的代码至内存，这时就开启了一个进程。 进程就可以视为程序的一个实例。大部分程序可以同时运行多个实例...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/notes/java/thread/"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"并发编程"}],["meta",{"property":"og:description","content":"一、进程和线程 1.1 进程 程序由指令和数据组成，但这些指令要运行，数据要读写，就必须将指令加载至 CPU，数据加载至内存。在指令运行过程中还需要用到磁盘、网络等设备。进程就是用来加载指令、管理内存、管理 IO 的。 当一个程序被运行，从磁盘加载这个程序的代码至内存，这时就开启了一个进程。 进程就可以视为程序的一个实例。大部分程序可以同时运行多个实例..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T02:09:19.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:modified_time","content":"2024-04-27T02:09:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-27T02:09:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]],"date":"2024-04-07T08:26:00.000Z"},"headers":[{"level":2,"title":"一、进程和线程","slug":"一、进程和线程","link":"#一、进程和线程","children":[{"level":3,"title":"1.1 进程","slug":"_1-1-进程","link":"#_1-1-进程","children":[]},{"level":3,"title":"1.2 线程","slug":"_1-2-线程","link":"#_1-2-线程","children":[]},{"level":3,"title":"1.3 二者对比","slug":"_1-3-二者对比","link":"#_1-3-二者对比","children":[]}]},{"level":2,"title":"二、并发与并行","slug":"二、并发与并行","link":"#二、并发与并行","children":[]},{"level":2,"title":"三、实际应用场景","slug":"三、实际应用场景","link":"#三、实际应用场景","children":[{"level":3,"title":"3.1 应用之异步调用","slug":"_3-1-应用之异步调用","link":"#_3-1-应用之异步调用","children":[]},{"level":3,"title":"3.2 应用之提高效率","slug":"_3-2-应用之提高效率","link":"#_3-2-应用之提高效率","children":[]}]},{"level":2,"title":"四、Java中的线程","slug":"四、java中的线程","link":"#四、java中的线程","children":[{"level":3,"title":"4.1 创建和运行线程","slug":"_4-1-创建和运行线程","link":"#_4-1-创建和运行线程","children":[]},{"level":3,"title":"4.2 观察多个线程同时运行","slug":"_4-2-观察多个线程同时运行","link":"#_4-2-观察多个线程同时运行","children":[]},{"level":3,"title":"4.3 查看进程线程的方法","slug":"_4-3-查看进程线程的方法","link":"#_4-3-查看进程线程的方法","children":[]},{"level":3,"title":"4.4 原理之线程运行","slug":"_4-4-原理之线程运行","link":"#_4-4-原理之线程运行","children":[]},{"level":3,"title":"4.5 Thread常见方法","slug":"_4-5-thread常见方法","link":"#_4-5-thread常见方法","children":[]},{"level":3,"title":"4.6 join 方法详解","slug":"_4-6-join-方法详解","link":"#_4-6-join-方法详解","children":[]}]},{"level":2,"title":"线程的状态切换","slug":"线程的状态切换","link":"#线程的状态切换","children":[{"level":3,"title":"操作系统层面","slug":"操作系统层面","link":"#操作系统层面","children":[]},{"level":3,"title":"Java API 层面","slug":"java-api-层面","link":"#java-api-层面","children":[]}]}],"git":{"createdTime":1712478360000,"updatedTime":1714183759000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":4}]},"readingTime":{"minutes":12.68,"words":3804},"filePathRelative":"notes/java/thread/README.md","localizedDate":"2024年4月7日","excerpt":"","autoDesc":true}');export{j as comp,x as data};