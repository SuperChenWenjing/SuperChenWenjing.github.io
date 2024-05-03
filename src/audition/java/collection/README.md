---
title: 集合
icon: Code
# date: 2019-12-26
category: 面试题
tag: 面试题
timeline: true
star: true
---

此处是一些 Java 集合的高频面试题（持续更新中...）。

<!-- more -->

## 集合

::: tip ArrayList 扩容规则？

1. `ArrayList()` 会使用长度为零的数组。
2. `ArrayList(int initialCapacity)` 会使用指定容量的数组。
3. `ArrayList(Collection<? extends E> c)` 会使用 `c` 的大小作为数组容量。
4. `add(Object o)`：
   1. 首次扩容为 10。
   2. 再次扩容则为上次容量的 1.5 倍。
5. `addAll(Collection c)`：
   1. 没有元素时：扩容为 `Math.max(10, 实际元素个数)`。
   2. 有元素时为：扩容为 `Math.max(原容量 1.5 倍, 实际元素个数)`。

:::

::: info Iterator 的 Fail-Fast 与 Fail-Safe？

* `ArrayList` 是 `fail-fast` 的典型代表，遍历的同时不能修改，尽快失败。

* `CopyOnWriteArrayList` 是 `fail-safe` 的典型代表，遍历的同时可以修改，原理是读写分离。

:::

::: tip LinkedList 对比 ArrayList 的区别？

**LinkedList**：

1. 基于双向链表，无需连续内存。
2. 随机访问慢（要沿着链表遍历）。
3. 头尾插入删除性能高。
4. 占用内存多。

**ArrayList**

1. 基于数组，需要连续内存。
2. 随机访问快（指根据下标访问）。
3. 尾部插入、删除性能可以，其它部分插入、删除都会移动数据，因此性能会低。
4. 可以利用 CPU 缓存，局部性原理。

:::

::: warning HashMap 的基本数据结构？

**基本数据结构**：

- JDK1.7：数组 + 链表。
- JDK1.8：数组 + （链表 | 红黑树）。

**树化与退化**：

- 树化的意义：

  * 红黑树用来避免 DoS 攻击，防止链表超长时性能下降，树化应当是偶然情况，是保底策略。

  * hash 表的查找，更新的时间复杂度是 $O(1)$，而红黑树的查找，更新的时间复杂度是 $O(log_2⁡n )$，TreeNode 占用空间也比普通 Node 的大，如非必要，尽量还是使用链表。

  * hash 值如果足够随机，则在 hash 表内按泊松分布，在负载因子 0.75 的情况下，长度超过 8 的链表出现概率是 0.00000006，树化阈值选择 8 就是为了让树化几率足够小。

- 树化规则：

  - 当链表长度超过树化阈值 8 时，先尝试扩容来减少链表长度，如果数组容量已经 >=64，才会进行树化。

- 退化规则：

  - 情况1：在扩容时如果拆分树时，树元素个数 <= 6 则会退化链表。
  - 情况2：remove 树节点时，若 root、root.left、root.right、root.left.left 有一个为 null ，也会退化为链表。

:::
