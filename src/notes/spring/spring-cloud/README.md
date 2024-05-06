---
title: SpringCloud
icon: spring-cloud
# date: 2019-12-26
category:
  - Spring
  - SpringCloud
timeline: true
star: true
---

::: note

此处是一些 SpringCloud 的基础知识（持续更新中...）。

:::

<!-- more -->

## 服务注册和发现

::: tip 目前开源的注册中心框架。

Eureka：Netflix 公司出品，目前被集成在 SpringCloud 当中，一般用于 Java 应用。

[Nacos](https://nacos.io/zh-cn/)：Alibaba 公司出品，目前被集成在 SpringCloudAlibaba 中，一般用于 Java 应用。

Consul：HashiCorp 公司出品，目前集成在 SpringCloud 中，不限制微服务语言。

:::

### Nacos

::: info 使用 Docker 安装 Nacos。

请查看 Docker 学习笔记中“安装各类软件”章节介绍。

:::

#### 服务注册

1. 添加依赖：

   注意：前提需要先引入 SpringCloudAlibaba 的依赖。

   ```xml
   <!-- Nacos 服务注册发现 -->
   <dependency>
       <groupId>com.alibaba.cloud</groupId>
       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
   </dependency>
   ```

2. 配置 Nacos：

   在 `application.yml` 配置文件中添加以下配置。

   ```yaml
   spring:
     application:
       name: nacos-demo # 服务名称
     cloud:
       nacos:
         server-addr: 127.0.0.1:8848 # Nacos 服务地址
   ```

3. 启动服务实例 - 查看 Nacos 服务列表。

#### 服务发现

1. 添加依赖：

   ```xml
   <!-- Nacos 服务注册发现 -->
   <dependency>
       <groupId>com.alibaba.cloud</groupId>
       <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
   </dependency>
   ```

2. 配置 Nacos：

   ```yaml
   spring:
     cloud:
       nacos:
         server-addr: 127.0.0.1:8848
   ```

3. 发现并调用服务。

   常见的负载均衡算法有：随机、轮询、IP 的 Hash、最近最少访问、...。

### OpenFeign

1. 添加依赖：

   ```xml
     <!-- OpenFeign -->
     <dependency>
         <groupId>org.springframework.cloud</groupId>
         <artifactId>spring-cloud-starter-openfeign</artifactId>
     </dependency>
     <!-- 负载均衡器 -->
     <dependency>
         <groupId>org.springframework.cloud</groupId>
         <artifactId>spring-cloud-starter-loadbalancer</artifactId>
     </dependency>
   ```

2. 启用 OpenFeign：

   在启动类或者配置类上添加 `@EnableFeignClients` 注解启用 OpenFeign。

3. 编写 OpenFeign 客户端：

   1. 新建 client 包。

   2. 使用 `@FeignClient` 注解声明客户端。

      ```java
      package com.chenwenjing.cart.client;
      
      import com.chenwenjing.cart.domain.dto.ItemDTO;
      import org.springframework.cloud.openfeign.FeignClient;
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestParam;
      
      import java.util.List;
      
      @FeignClient("item-service") // 声明服务名称
      public interface ItemClient {
          @GetMapping("/items") // 声明请求方式和请求路径
          List<ItemDTO> queryItemByIds(@RequestParam("ids") Collection<Long> ids); // 声明请求参数和返回值
      }
      ```

   3. 使用 FeignClient：

      在需要远程调用的地方，类似本地方法的调用方式，直接调用即可。

      OpenFeign 替我们完成了服务拉取、负载均衡、发送 HTTP 请求的所有工作。

4. 配置连接池：

   OpenFeign 底层发起 HTTP 请求，依赖于其它的框架。

   其底层支持的 HTTP 客户端实现包括：

   - HttpURLConnection（默认实现 - 不支持连接池）。
   - Apache HttpClient（支持连接池）。
   - OKHttp（支持连接池）。

   因此我们通常会使用带有连接池的客户端来代替默认的 HttpURLConnection - 比如 OKHttp。

5. 引入依赖：

   ```xml
   <!-- OKHttp -->
   <dependency>
     <groupId>io.github.openfeign</groupId>
     <artifactId>feign-okhttp</artifactId>
   </dependency>
   ```

6. 开启连接池：

   ```yaml
   feign:
     okhttp:
       enabled: true # 开启 OKHttp 功能
   ```

7. 验证：

   可以在 `org.springframework.cloud.openfeign.loadbalancer.FeignBlockingLoadBalancerClient` 类中的 `execute` 方法上打个断点查看。
