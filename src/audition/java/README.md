---
title: Java
icon: java
# date: 2019-12-26
category: 面试题
tag: 面试题
timeline: true
star: true
---

此处是一些 Java 高频面试题（持续更新中...）。

<!-- more -->

## 目录

### 基础

- [基础](/audition/java/core/README.md)

### 集合

- [集合](/audition/java/collection/README.md)

### 并发编程

- [并发编程](/audition/java/concurrent/README.md)

### IO

- [IO](/audition/java/io/README.md)

### JVM

- [JVM](/audition/java/jvm/README.md)

### 新特性

- [新特性](/audition/java/new/README.md)
  - [JDK8](/audition/java/new/jdk8.md)
  - [JDK9](/audition/java/new/jdk9.md)
  - [JDK10](/audition/java/new/jdk10.md)
  - [JDK11](/audition/java/new/jdk11.md)
  - [JDK12](/audition/java/new/jdk12.md)
  - [JDK13](/audition/java/new/jdk13.md)
  - [JDK14](/audition/java/new/jdk14.md)
  - [JDK15](/audition/java/new/jdk15.md)
  - [JDK16](/audition/java/new/jdk16.md)
  - [JDK17](/audition/java/new/jdk17.md)
  - [JDK18](/audition/java/new/jdk18.md)
  - [JDK19](/audition/java/new/jdk19.md)
  - [JDK20](/audition/java/new/jdk20.md)
  - [JDK21](/audition/java/new/jdk21.md)

## 面试题汇总

### 常见集合面试题

::: info Java 集合体系。

> ![Java集合体系](./assets/Java集合体系.png)

:::

::: info ArrayList 底层的数据结构和扩容的机制。

> 每次扩容是原来的 1.5 倍。

:::

::: info 如何实现数组和 List 之间的转换？

> 数组转 List：`Arrays.asList(T... a)`。
>
> - 如果修改了原数组的内容，会影响转换后的 List。
> - 使用的是 Arrays 类内部的一个 ArrayList 来构建的集合。
>
> List 转数组：`List.toArray()` - 不影响原 List。
>
> - 如果修改的原 List 的内容，不会影响转换后的数组。
> - 底层进行了数组的拷贝。

:::

::: info ArrayList 和 LinkedList 的区别是什么？

> **从几个方面回答**：
>
> - 底层数据结构：动态数组、双向链表的不同特点。
> - 操作效率。
> - 占用的内存空间（数组需要连续的内存空间、链表不需要）。
> - 线程是否安全：ArrayList 和 LinkedList 都不是线程安全的类。

:::

::: info HashMap 相关面试题。

> 底层数据结构：
>
> - JDK 1.7：数组 + 链表（采用的是拉链法）。
> - JDK 1.8：数组 + 链表 + 红黑树。
>
> 名词：哈希碰撞、拉链法、头插法（JDK 1.7）、扰动算法、加载因子（0.75）。
>
> 树化：链表的长度大于 8 且数组的长度大于 64 则链表转化为红黑树（默认数组长度为 16）。
>
> 退化：红黑树拆分成的树的节点数小于等于临界值 6 时则退化为链表。
>
> **HashMap 的 `put` 流程**：
>
> ![HashMap 的put流程](./assets/HashMap的put流程.png)
>
> **文字描述 `put` 的流程**：
>
> 1. 判断键值对数组 `table` 是否为空或为 `null`，否则执行 `resize()` 方法进行扩容（初始化）。
> 2. 根据键值 `key` 计算 `hash` 值得到数组索引。
> 3. 判断 `table[i]==null`，条件成立，直接新建节点添加。
> 4. 如果 `table[i]==null`，不成立：
>    1. 判断 `table[i]` 的首个元素是否和 `key` 一样，如果相同直接覆盖 `value`。
>    2. 判断 `table[i]` 是否为 `treeNode`，即 `table[i]` 是否是红黑树，如果是红黑树，则直接在树中插入键值对。
>    3. 遍历 `table[i]`，链表的尾部插入数据，然后判断链表长度是否大于 8，大于 8 的话把链表转换为红黑树，在红黑树中执行插入操作，遍历过程中若发现 `key` 已经存在直接覆盖 `value`。
> 5. 插入成功后，判断实际存在的键值对数量 `size` 是否超多了最大容量 `threshold`（数组长度 * 0.75），如果超过，进行扩容。
>
> **HashMap 的寻址算法**：
>
> 

:::

### 多线程面试题

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::

::: info 。

:::
