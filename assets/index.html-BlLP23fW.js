import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as n,b as l,d as a,e as t,a as p,f as i}from"./app-BrScejxt.js";const s={},d=a("div",{class:"hint-container info"},[a("p",{class:"hint-container-title"},"JavaScript 语言是什么"),a("p",null,"JavaScript 是一种轻量级的脚本语言。所谓“脚本语言” (script language)，指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序(比如浏览器)的“脚本”。"),a("p",null,"JavaScript 也是一种嵌入式 (embedded) 语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O (输入/输出)相关的 API，都要靠宿主环境(host)提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。")],-1),v=i('<h2 id="javascript-简介" tabindex="-1"><a class="header-anchor" href="#javascript-简介"><span>JavaScript 简介</span></a></h2><p>目前，已经嵌入 JavaScript 的宿主环境有多种，最常见的环境就是浏览器，另外还有服务器环境，也就是 Node.js 项目。</p><p>从语法角度看，JavaScript 语言是一种“对象模型”语言。各种宿主环境通过这个模型，描述自己的功能和操作接口，从而通过 JavaScript 控制这些功能。但是，JavaScript 并不是纯粹的“面向对象语言”，还支持其他编程范式(比如函数式编程)。这导致几乎任何一个问题，JavaScript 都有多种解决方法。在根据本博客学习 JavaScript 的过程中，您会诧异于 JavaScript 语法的灵活性。</p><p>JavaScript 的核心语法部分相当精简，只包括两个部分: 基本的语法构造(比如操作符、控制结构、语句)和标准库(就是一系列具有各种功能的对象比如 <code>Array</code>、<code>Date</code>、<code>Math</code> 等)。除此之外，各种宿主环境提供额外的 API(即只能在该环境使用的接口)，以便 JavaScript 调用。以浏览器为例，它提供的额外 API 可以分成三大类。</p><ul><li>浏览器控制类: 操作浏览器</li><li>DOM 类: 操作网页的各种元素</li><li>Web 类: 实现互联网的各种功能</li></ul><p>如果宿主环境是服务器，则会提供各种操作系统的 API，比如文件操作 API、网络通信 API 等等。这些您都可以在 Node.js 环境中找到。</p><h2 id="学习-javascript-的原因" tabindex="-1"><a class="header-anchor" href="#学习-javascript-的原因"><span>学习 JavaScript 的原因</span></a></h2><p>JavaScript 语言有一些显著特点，使得它非常值得学习。它既适合作为学习编程的入门语言，也适合当作日常开发的工作语言。它是目前最有希望、前途最光明的计算机语言之一。</p><h3 id="操控浏览器的能力" tabindex="-1"><a class="header-anchor" href="#操控浏览器的能力"><span>操控浏览器的能力</span></a></h3><p>JavaScript 的发明目的，就是作为浏览器的内置脚本语言，为网页开发者提供操控浏览器的能力。它是目前唯一一种通用的浏览器脚本语言，所有浏览器都支持。它可以让网页呈现各种特殊效果，为用户提供良好的互动体验。</p><p>目前，全世界几乎所有网页都使用 JavaScript。如果不用，网站的易用性和使用效率将大打折扣，无法成为操作便利、对用户友好的网站。</p><p>对于一个互联网开发者来说，如果您想提供漂亮的网页、令用户满意的上网体验、各种基于浏览器的便捷功能、前后端之间紧密高效的联系，JavaScript 是必不可少的工具。</p><h3 id="广泛的使用领域" tabindex="-1"><a class="header-anchor" href="#广泛的使用领域"><span>广泛的使用领域</span></a></h3><p>近年来，JavaScript 的使用范围，慢慢超越了浏览器，正在向通用的系统语言发展。</p>',14),h=i("<li><p>浏览器的平台化</p><p>随着 HTML5 的出现，浏览器本身的功能越来越强，不再仅仅能浏览网页，而是越来越像一个平台，JavaScript 因此得以调用许多系统功能，比如操作本地文件、操作图片、调用摄像头和麦克风等等。这使得 JavaScript 可以完成许多以前无法想象的事情。</p></li><li><p>Node.js</p><p>Node.js 项目使得 JavaScript 可以用于开发服务器端的大型项目，网站的前后端都用 JavaScript 开发已经成为了现实。有些嵌入式平台 (Raspberry Pi) 能够安装 Node，于是 JavaScript 就能为这些平台开发应用程序。</p></li><li><p>数据库操作</p><p>JavaScript 甚至也可以用来操作数据库。NoSQL 数据库这个概念，本身就是在 JSON(JavaScript Object Notation)格式的基础上诞生的，大部分 NoSQL 数据库允许 JavaScript 直接操作。基于 SQL 语言的开源数据库 PostgreSQL 支持 JavaScript 作为操作语言，可以部分取代 SQL 查询语言。</p></li><li><p>移动平台开发</p><p>JavaScript 也正在成为手机应用的开发语言。一般来说，安卓平台使用 Java 语言开发，iOS 平台使用 Objective-C 或 Swift 语言开发。许多人正在努力，让 JavaScript 成为各个平台的通用开发语言。</p><p>PhoneGap 项目就是将 JavaScript 和 HTML5 打包在一个容器之中，使得它能同时在 iOS 和安卓上运行。Facebook 公司的 React Native 项目则是将 JavaScript 写的组件，编译成原生组件，从而使它们具备优秀的性能。</p><p>Mozilla 基金会的手机操作系统 Firefox OS，更是直接将 JavaScript 作为操作系统的平台语言，但是很可惜这个项目没有成功。</p></li><li><p>内嵌脚本语言</p><p>越来越多的应用程序，将 JavaScript 作为内嵌的脚本语言，比如 Adobe 公司的著名 PDF 阅读器 Acrobat、Linux 桌面环境 GNOME 3。</p></li>",5),S=a("p",null,"跨平台的桌面应用程序",-1),J={href:"http://developer.chrome.com/apps/about_apps",target:"_blank",rel:"noopener noreferrer"},u={href:"http://electron.atom.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://tidesdk.multipart.net/docs/user-dev/generated/",target:"_blank",rel:"noopener noreferrer"},g=a("p",null,"小结",-1),_={href:"http://adambard.com/blog/top-github-languages-for-2013-so-far/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.codinghorror.com/blog/2007/07/the-principle-of-least-power.html",target:"_blank",rel:"noopener noreferrer"},f=i('<blockquote><p>“所有可以用 JavaScript 编写的程序，最终都会出现 JavaScript 的版本。”(Any application that can be written in JavaScript will eventually be written in JavaScript.)</p></blockquote><h3 id="易学性" tabindex="-1"><a class="header-anchor" href="#易学性"><span>易学性</span></a></h3><p>相比学习其他语言，学习 JavaScript 有一些有利条件。</p><ol><li><p>学习环境无处不在</p><p>只要有浏览器，就能运行 JavaScript 程序；只要有文本编辑器，就能编写 JavaScript 程序。这意味着，几乎所有电脑都原生提供 JavaScript 学习环境，不用另行安装复杂的 IDE(集成开发环境)和编译器。</p></li><li><p>简单性</p><p>相比其他脚本语言(比如 Python 或 Ruby)，JavaScript 的语法相对简单一些，本身的语法特性并不是特别多。而且，那些语法中的复杂部分，也不是必需要学会。您完全可以只用简单命令，完成大部分的操作。</p></li><li><p>与主流语言的相似性</p><p>JavaScript 的语法很类似 C/C++ 和 Java，如果学过这些语言(事实上大多数学校都教)，JavaScript 的入门会非常容易。</p></li></ol><p>必须说明的是，虽然核心语法不难，但是 JavaScript 的复杂性体现在另外两个方面。</p><p>首先，它涉及大量的外部 API。JavaScript 要发挥作用，必须与其他组件配合，这些外部组件五花八门，数量极其庞大，几乎涉及网络应用的各个方面，掌握它们绝非易事。</p>',6),k={href:"http://javascript.crockford.com/",target:"_blank",rel:"noopener noreferrer"},y=i('<p>尽管如此，目前看来，JavaScript 的地位还是无法动摇。加之，语言标准的快速进化，使得 JavaScript 功能日益增强，而语法缺陷和怪异之处得到了弥补。所以，JavaScript 还是值得学习，况且它的入门真的不难。</p><h3 id="强大的性能" tabindex="-1"><a class="header-anchor" href="#强大的性能"><span>强大的性能</span></a></h3><p>JavaScript 的性能优势体现在以下方面。</p><ul><li><p>灵活的语法，表达力强</p><p>JavaScript 既支持类似 C 语言清晰的过程式编程，也支持灵活的函数式编程，可以用来写并发处理(concurrent)。这些语法特性已经被证明非常强大，可以用于许多场合，尤其适用异步编程。</p><p>JavaScript 的所有值都是对象，这为程序员提供了灵活性和便利性。因为您可以很方便地、按照需要随时创造数据结构，不用进行麻烦的预定义。</p><p>JavaScript 的标准还在快速进化中，并不断合理化，添加更适用的语法特性。</p></li><li><p>支持编译运行。</p><p>JavaScript 语言本身，虽然是一种解释型语言，但是在现代浏览器中，JavaScript 都是编译后运行。程序会被高度优化，运行效率接近二进制程序。而且，JavaScript 引擎正在快速发展，性能将越来越好。</p><p>此外，还有一种 WebAssembly 格式，它是 JavaScript 引擎的中间码格式，全部都是二进制代码。由于跳过了编译步骤，可以达到接近原生二进制代码的运行速度。各种语言(主要是 C 和 C++)通过编译成 WebAssembly，就可以在浏览器里面运行。</p></li><li><p>事件驱动和非阻塞式设计。</p><p>JavaScript 程序可以采用事件驱动 (event-driven) 和非阻塞式 (non-blocking) 设计，在服务器端适合高并发环境，普通的硬件就可以承受很大的访问量。</p></li></ul><h3 id="开放性" tabindex="-1"><a class="header-anchor" href="#开放性"><span>开放性</span></a></h3><p>JavaScript 是一种开放的语言。它的标准 ECMA-262 是 ISO 国际标准，写得非常详尽明确；该标准的主要实现(比如 V8 和 SpiderMonkey 引擎)都是开放的，而且质量很高。这保证了这门语言不属于任何公司或个人，不存在版权和专利的问题。</p><p>语言标准由 TC39 委员会负责制定，该委员会的运作是透明的，所有讨论都是开放的，会议记录都会对外公布。</p><p>不同公司的 JavaScript 运行环境，兼容性很好，程序不做调整或只做很小的调整，就能在所有浏览器上运行。</p><h3 id="社区支持和就业机会" tabindex="-1"><a class="header-anchor" href="#社区支持和就业机会"><span>社区支持和就业机会</span></a></h3><p>全世界程序员都在使用 JavaScript，它有着极大的社区、广泛的文献和图书、丰富的代码资源。绝大部分您需要用到的功能，都有多个开源函数库可供选用。</p>',10);function A(j,x){const e=c("ExternalLinkIcon");return o(),n("div",null,[d,l(" more "),v,a("ol",null,[h,a("li",null,[S,a("p",null,[t("Chromium OS、Windows 8 等操作系统直接支持 JavaScript 编写应用程序。Mozilla 的 Open Web Apps 项目、Google 的 "),a("a",J,[t("Chrome App 项目"),p(e)]),t("、GitHub 的 "),a("a",u,[t("Electron 项目"),p(e)]),t("、以及 "),a("a",m,[t("TideSDK 项目"),p(e)]),t("，都可以用来编写运行于 Windows、macOS 和 Android 等多个桌面平台的程序，不依赖浏览器。")])]),a("li",null,[g,a("p",null,[t("可以预期，JavaScript 最终将能让您只用一种语言，就开发出适应不同平台(包括桌面端、服务器端、手机端)的程序。早在 2013 年 9 月的"),a("a",_,[t("统计"),p(e)]),t("之中，JavaScript 就是当年 GitHub 上使用量排名第一的语言。")]),a("p",null,[t("著名程序员 Jeff Atwood 甚至提出了一条 "),a("a",b,[t("“Atwood 定律”"),p(e)]),t(":")])])]),f,a("p",null,[t("其次，JavaScript 语言有一些设计缺陷。某些地方相当不合理，另一些地方则会出现怪异的运行结果。学习 JavaScript，很大一部分时间是用来搞清楚哪些地方有陷阱。Douglas Crockford 写过一本有名的书，名字就叫"),a("a",k,[t("《JavaScript: The Good Parts》"),p(e)]),t("，言下之意就是这门语言不好的地方很多，必须写一本书才能讲清楚。另外一些程序员则感到，为了更合理地编写 JavaScript 程序，就不能用 JavaScript 来写，而必须发明新的语言，比如 CoffeeScript、TypeScript、Dart 这些新语言的发明目的，多多少少都有这个因素。")]),y])}const C=r(s,[["render",A],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/casual/code/language/js/intro/","title":"JavaScript 简介","lang":"zh-CN","frontmatter":{"title":"JavaScript 简介","icon":"creativefill","date":"2019-09-13T00:00:00.000Z","category":"JavaScript","description":" JavaScript 语言是什么 JavaScript 是一种轻量级的脚本语言。所谓“脚本语言” (script language)，指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序(比如浏览器)的“脚本”。 JavaScript 也是一种嵌入式 (embedded) 语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运...","head":[["meta",{"property":"og:url","content":"https://SuperChenWenjing.github.io/casual/code/language/js/intro/"}],["meta",{"property":"og:site_name","content":"陈文景"}],["meta",{"property":"og:title","content":"JavaScript 简介"}],["meta",{"property":"og:description","content":" JavaScript 语言是什么 JavaScript 是一种轻量级的脚本语言。所谓“脚本语言” (script language)，指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序(比如浏览器)的“脚本”。 JavaScript 也是一种嵌入式 (embedded) 语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-08T16:03:07.000Z"}],["meta",{"property":"article:author","content":"陈文景"}],["meta",{"property":"article:published_time","content":"2019-09-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-08T16:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 简介\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-08T16:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"陈文景\\",\\"email\\":\\"2646530197@qq.com\\",\\"url\\":\\"https://superchenwenjing.github.io\\"}]}"]]},"headers":[{"level":2,"title":"JavaScript 简介","slug":"javascript-简介","link":"#javascript-简介","children":[]},{"level":2,"title":"学习 JavaScript 的原因","slug":"学习-javascript-的原因","link":"#学习-javascript-的原因","children":[{"level":3,"title":"操控浏览器的能力","slug":"操控浏览器的能力","link":"#操控浏览器的能力","children":[]},{"level":3,"title":"广泛的使用领域","slug":"广泛的使用领域","link":"#广泛的使用领域","children":[]},{"level":3,"title":"易学性","slug":"易学性","link":"#易学性","children":[]},{"level":3,"title":"强大的性能","slug":"强大的性能","link":"#强大的性能","children":[]},{"level":3,"title":"开放性","slug":"开放性","link":"#开放性","children":[]},{"level":3,"title":"社区支持和就业机会","slug":"社区支持和就业机会","link":"#社区支持和就业机会","children":[]}]}],"git":{"createdTime":1709913787000,"updatedTime":1709913787000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":9.3,"words":2789},"filePathRelative":"casual/code/language/js/intro/README.md","localizedDate":"2019年9月13日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">JavaScript 语言是什么</p>\\n<p>JavaScript 是一种轻量级的脚本语言。所谓“脚本语言” (script language)，指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序(比如浏览器)的“脚本”。</p>\\n<p>JavaScript 也是一种嵌入式 (embedded) 语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O (输入/输出)相关的 API，都要靠宿主环境(host)提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。</p>\\n</div>\\n","autoDesc":true}');export{C as comp,I as data};