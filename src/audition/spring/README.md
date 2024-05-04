---
title: Spring
icon: spring
# date: 2019-12-26
category: 面试题
tag: 面试题
timeline: true
star: true
---

::: note

此处是一些 Spring 高频面试题（持续更新中...）。

:::

<!-- more -->

## 目录

### Spring

- [SpringFramework](/audition/spring/spring-framework/README.md)
- [SpringMVC](/audition/spring/spring-mvc/README.md)
- [SpringBoot](/audition/spring/spring-boot/README.md)
- [SpringSecurity](/audition/spring/spring-security/README.md)
- [SpringCloud](/audition/spring/spring-cloud/README.md)

## 面试题汇总

### SpringFramework

::: info Spring 框架中的 Bean 是线程安全的吗？

> 不是线程安全的。
>
> Spring 框架的 Bean 默认是单例的。
>
> ```java
> @Service
> @Scope("singleton")
> public class UserServiceImpl implements UserService {
> }
> ```
>
> singleton：Bean 在每个 Spring IOC 容器中只有一个实例（默认）。
>
> prototype：一个 Bean 的定义可以有多个实例。
>
> 但 Spring Bean 并没有可变的状态（比如 Service 类和 DAO 类），所以在某种程度上说 Spring 的单例 Bean 是线程安全的。
>
> **参考回答**：
>
> 不是线程安全的。
>
> Spring 框架中有一个 `@Scope` 注解，默认的值就是 singleton，单例的。
>
> 因为一般在 Spring 容器中的 Bean 都是注入的无状态对象，是没有线程安全问题的，如果在 Bean 中定义了可修改的成员变量，是要考虑线程安全问题的，可以使用多例或者加锁来解决。

:::

::: info 什么是 AOP ？你们项目中有没有使用到 AOP ？

> **AOP 称为面向切面编程**：用于将那些与业务无关，但却对多个对象产生影响的公共行为和逻辑，抽取并封装为一个可重用的模块，这个模块被命名为“切面”（Aspect），减少系统中的重复代码，降低了模块间的耦合度，同时提高了系统的可维护性。
>
> **常见的AOP使用场景**：记录操作日志、缓存处理、Spring 中内置的事务处理。
>
> 记录操作日志思路：获取请求的用户名、请求方式、访问地址、模块名称、登录 IP、操作时间，记录到数据库的日志表中。
>
> ![AOP应用场景-记录日志](./assets/AOP应用场景-记录日志.png)
>
> ```java
> @Around("pointcut()")
> public Object around(ProceedingJoinPoint joinPoint) {
>   //  获取用户名
>   // 获取请求方式
>   // 获取访问结果
>   // 获取模块名称
>   // 登录 IP
>   // 操作时间
>   // 保存到数据库（操作日志）    
>   return null;
> }
> ```
>
> 示例代码如上：使用 AOP 中的环绕通知 + 切点表达式（找到要记录日志的方法）。

:::

::: info Spring 中的事务是如何实现的？

> Spring 支持编程式事务管理和声明式事务管理两种方式：
>
> - 编程式事务控制：需使用 TransactionTemplate 来进行实现，对业务代码有侵入性，所以项目中很少使用。
> - 声明式事务管理：声明式事务管理建立在 AOP 之上的。其本质是通过 AOP 功能，对方法前后进行拦截，将事务处理的功能编织到拦截的方法中，也就是在目标方法开始之前加入一个事务，在执行完目标方法之后根据执行情况提交或者回滚事务。
>
> 声明式事务的核心注解：`@Transactional`。

:::

::: info Spring 中事务失效的场景有哪些？

> 异常捕获处理：自己通过 `try{} catch{}` 捕获了异常又不主动抛出异常。
>
> 抛出检查异常：Spring 默认只会回滚非检查异常（解决：`@Transactional(rollbackFor=Exception.class)`）。
>
> 非 `public` 方法：Spring 为方法创建代理、添加事务通知、前提条件都是该方法是 `public` 的。

:::

::: info Spring 的 Bean 的生命周期。

> ![Spring中Bean的生命周期](./assets/Spring中Bean的生命周期.png)
>
> **文字描述**：
>
> 1. 通过 BeanDefinition 获取 Bean 的定义信息。
> 2. 调用构造函数实例化 Bean。
> 3. Bean 的依赖注入。
> 4. 处理 Aware 接口（BeanNameAware、BeanFactoryAware、ApplicationContextAware）。
> 5. Bean 的后置处理器 BeanPostProcessor-前置。
> 6. 初始化方法（InitializingBean、init-method）。
> 7. Bean 的后置处理器 BeanPostProcessor-后置。
> 8. 销毁 Bean。
>
> <img src="./assets/Bean的生命周期简单版.png" alt="Bean的生命周期简单版" style="zoom:50%;" />

:::

::: info Spring 中的循环引用。

> 循环引用示例：
>
> ![循环引用示例](./assets/循环引用示例.png)
>
> **Spring 是通过三级缓存解决循环依赖问题的。**
>
> ![三级缓存](./assets/三级缓存.png)
>
> ![循环依赖的解决方案](./assets/循环依赖的解决方案.png)
>
> **文字描述**：
>
> - 循环依赖：循环依赖其实就是循环引用，也就是两个或两个以上的 Bean 互相持有对方，最终形成闭环（比如 A 依赖于 B，B 依赖于 A）。
> - 循环依赖在 Spring 中是允许存在，Spring 框架依据三级缓存已经解决了大部分的循环依赖问题：
>   1. 一级缓存：单例池，缓存已经经历了完整的生命周期，已经初始化完成的 Bean 对象。
>   2. 二级缓存：缓存早期的 Bean 对象（生命周期还没走完）。
>   3. 三级缓存：缓存的是 ObjectFactory，表示对象工厂，用来创建某个对象的。

:::

::: info 构造方法出现了循环依赖怎么解决？

> 原因：由于 Bean 的生命周期中构造函数是第一个执行的，所以 Spring 框架并不能解决构造函数的的依赖注入。
>
> 解决方案：使用 `@Lazy` 懒加载注解解决，什么时候需要对象再进行 Bean 对象的创建。
>
> ```java
> public A(@Lazy B b){
>   System.out.println("A的构造方法执行了...");
>   this.b = b ;
> }
> ```

:::

::: info 。

>

:::

### SpringMVC

::: info SpringMVC 的执行流程知道嘛？

> **视图阶段（老旧 JSP 项目）**：
>
> ![SpringMVC视图阶段](./assets/SpringMVC视图阶段.png)
>
> 文字描述（视图阶段）：
>
> 1. 用户发送出请求到前端控制器 DispatcherServlet。
> 2. DispatcherServlet 收到请求调用 HandlerMapping（处理器映射器）。
> 3. HandlerMapping 找到具体的处理器，生成处理器对象及处理器拦截器（如果有），再一起返回给 DispatcherServlet。
> 4. DispatcherServlet 调用 HandlerAdapter（处理器适配器）。
> 5. HandlerAdapter 经过适配调用具体的处理器（Handler/Controller）。
> 6. Controller 执行完成返回 ModelAndView 对象。
> 7. HandlerAdapter 将 Controller 执行结果 ModelAndView 返回给 DispatcherServlet。
> 8. DispatcherServlet 将 ModelAndView 传给 ViewReslover（视图解析器）。
> 9. ViewReslover 解析后返回具体 View（视图）。
> 10. DispatcherServlet 根据 View 进行渲染视图（即将模型数据填充至视图中）。
> 11. DispatcherServlet 响应用户。
>
> **前后端分离阶段（接口开发）**：
>
> ![前后端分离阶段](./assets/前后端分离阶段.png)
>
> 文字描述（前后端分离阶段）：
>
> 1. 用户发送出请求到前端控制器 DispatcherServlet。
> 2. DispatcherServlet 收到请求调用 HandlerMapping（处理器映射器）。
> 3. HandlerMapping 找到具体的处理器，生成处理器对象及处理器拦截器（如果有），再一起返回给 DispatcherServlet。
> 4. DispatcherServlet 调用 HandlerAdapter（处理器适配器）。
> 5. HandlerAdapter 经过适配调用具体的处理器（Handler/Controller）。
> 6. 方法上添加了@ResponseBody。
> 7. 通过 HttpMessageConverter 来返回结果转换为 JSON 并响应。

:::

::: info Spring 框架常见的注解有哪些？

> Spring 的常见注解有哪些？
>
> ![Spring框架常见注解](./assets/Spring框架常见注解.png)
>
> SpringMVC 常见的注解有哪些？
>
> ![SpringMVC 常见的注解](./assets/SpringMVC 常见的注解.png)
>
> SpringBoot 常见注解有哪些？
>
> ![SpringBoot 常见注解](./assets/SpringBoot 常见注解.png)

:::

### SpringBoot

::: info SpringBoot 自动配置原理。

> ![SpringBootApplication注解](./assets/SpringBootApplication注解.png)
>
> `@SpringBootConfiguration`：该注解与 `@Configuration` 注解作用相同，用来声明当前也是一个配置类。
>
> `@ComponentScan`：组件扫描，默认扫描当前引导类所在包及其子包。
>
> `@EnableAutoConfiguration`：SpringBoot 实现自动化配置的核心注解。
>
> ![SpringBoot自动装配的流程1](./assets/SpringBoot自动装配的流程1.png)
>
> ![SpringBoot自动装配的流程2](./assets/SpringBoot自动装配的流程2.png)
>
> **文字描述**：
>
> 1. 在 SpringBoot 项目中的引导类上有一个注解 `@SpringBootApplication`，这个注解是对三个注解进行了封装，分别是：
>    - `@SpringBootConfiguration`。
>    - `@EnableAutoConfiguration`。
>    - `@ComponentScan`。
> 2. 其中 `@EnableAutoConfiguration` 是实现自动化配置的核心注解：
>    - 该注解通过 `@Import` 注解导入对应的配置选择器。
>    - 内部就是读取了该项目和该项目引用的 Jar 包的的 classpath 路径下 META-INF/spring.factories 文件中的所配置的类的全类名。
>    - 在这些配置类中所定义的 Bean 会根据条件注解所指定的条件来决定是否需要将其导入到 Spring 容器中。
> 3. 条件判断会有像 `@ConditionalOnClass` 这样的注解，判断是否有对应的 Class 文件，如果有则加载该类，把这个配置类的所有的 Bean 放入 Spring 容器中使用。

:::

::: info 。

>

:::

### SpringCloud

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::
