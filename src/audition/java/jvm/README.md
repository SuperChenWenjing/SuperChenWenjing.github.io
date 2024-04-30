---
title: JVM
icon: Code
# date: 2019-12-26
category: 面试题
tag: 面试题
timeline: true
star: true
---

此处是一些 JVM 的高频面试题（持续更新中...）。

<!-- more -->

## JVM 高频面试题

### 1.什么是 JVM？

::: tip 回答思路🔔

- JVM 的定义是什么？

  JVM 指的是 Java 虚拟机（ **J**ava **V**irtual **M**achine ），本质上是一个运行在计算机上的程序，它的职责是运行 Java 字节码文件。

- 它有什么作用？

  为了支持跨平台的特性（Write Once，Run Anywhere - 编写一次，到处运行）。

- 它提供了哪些功能？

  解释执行字节码的指令、管理内存中对象的分配，并完成自动的垃圾回收、优化热点代码，提升执行效率（JIT）。

- 它的核心组成部分有哪些？

  类加载子系统、运行时数据区、执行引擎、本地接口这四部分。

- 常见的 JVM 有哪些？

  Oracle 提供的 Hotspot 虚拟机、GraalVM、龙井、OpenJ9 等虚拟机。

:::

**参考回答**：

- JVM 指的是 Java 虚拟机（ **J**ava **V**irtual **M**achine ），本质上是一个运行在计算机上的程序，它的职责是运行 Java 字节码文件的，作用是为了支持跨平台的特性（Write Once，Run Anywhere - 编写一次，到处运行）。
- JVM 的功能有三项：
  - 第一：是解释执行字节码的指令。
  - 第二：是管理内存中对象的分配，并完成自动的垃圾回收。
  - 第三：是优化热点代码，提升执行效率（JIT）。
- JVM 组成分为：类加载子系统、运行时数据区、执行引擎、本地接口这四部分。
- 常见的 JVM 是 Oracle 提供的 Hotspot 虚拟机，也可以选择 GraalVM、龙井、OpenJ9 等虚拟机。
