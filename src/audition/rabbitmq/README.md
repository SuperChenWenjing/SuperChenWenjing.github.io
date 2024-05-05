---
title: RabbitMQ
icon: rabbitmq
# date: 2019-12-26
category: 面试题
tag: 面试题
timeline: true
star: true
---

::: note

此处是一些 RabbitMQ 高频面试题（持续更新中...）。

:::

<!-- more -->

## 面试题汇总

::: info RabbitMQ 如何保证消息不丢失？

> **消息丢失的节点**：
>
> ![RabbitMQ消息丢失的场景](./assets/RabbitMQ消息丢失的场景.png)
>
> **生产者确认机制**：
>
> RabbitMQ 提供了 `publisher confirm` 机制来避免消息发送到 MQ 过程中丢失。
>
> 消息发送到 MQ 以后，会返回一个结果给发送者，表示消息是否处理成功。
>
> ![生产者确认机制](./assets/生产者确认机制.png)
>
> 消息失败之后如何处理呢？
>
> - 回调方法即时重发。
> - 记录日志。
> - 保存到数据库然后定时重发，成功发送后即刻删除表中的数据。

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::

::: info 。

>

:::
