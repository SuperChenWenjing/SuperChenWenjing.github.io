---
title: 设计模式
icon: Code
# date: 2019-12-26
category: 面试题
tag: 面试题
timeline: true
star: true
---

此处是一些 Java 设计模式的高频面试题（持续更新中...）。

<!-- more -->

## 单例模式

::: tip 饿汉式

构造方法抛出异常是防止反射破坏单例。

`readResolve()` 是防止反序列化破坏单例。

```java
public class Singleton1 implements Serializable {
    private Singleton1() {
        if (INSTANCE != null) {
            throw new RuntimeException("单例对象不能重复创建");
        }
        System.out.println("private Singleton1()");
    }

    private static final Singleton1 INSTANCE = new Singleton1();

    public static Singleton1 getInstance() {
        return INSTANCE;
    }

    public static void otherMethod() {
        System.out.println("otherMethod()");
    }

    public Object readResolve() {
        return INSTANCE;
    }
}
```

:::

::: tip 枚举饿汉式

枚举饿汉式能天然防止反射、反序列化破坏单例。

```java
public enum Singleton2 {
    INSTANCE;

    private Singleton2() {
        System.out.println("private Singleton2()");
    }

    @Override
    public String toString() {
        return getClass().getName() + "@" + Integer.toHexString(hashCode());
    }

    public static Singleton2 getInstance() {
        return INSTANCE;
    }

    public static void otherMethod() {
        System.out.println("otherMethod()");
    }
}
```

:::

::: tip 懒汉式

其实只有首次创建单例对象时才需要同步，但该代码实际上每次调用都会同步。

因此有了下面的双检锁改进。

```java
public class Singleton3 implements Serializable {
    private Singleton3() {
        System.out.println("private Singleton3()");
    }

    private static Singleton3 INSTANCE = null;

    // Singleton3.class
    public static synchronized Singleton3 getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new Singleton3();
        }
        return INSTANCE;
    }

    public static void otherMethod() {
        System.out.println("otherMethod()");
    }

}
```

:::

::: tip 双检锁懒汉式

为何必须加 `volatile` 关键字？

* `INSTANCE = new Singleton4()` 不是原子的，分成 3 步：创建对象、调用构造、给静态变量赋值，其中后两步可能被指令重排序优化，变成先赋值、再调用构造。
* 如果线程1 先执行了赋值，线程2 执行到第一个 `INSTANCE == null` 时发现 INSTANCE 已经不为 null，此时就会返回一个未完全构造的对象。

```java
public class Singleton4 implements Serializable {
    private Singleton4() {
        System.out.println("private Singleton4()");
    }

    private static volatile Singleton4 INSTANCE = null; // 可见性，有序性

    public static Singleton4 getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton4.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton4();
                }
            }
        }
        return INSTANCE;
    }

    public static void otherMethod() {
        System.out.println("otherMethod()");
    }
}
```

:::

::: tip 内部类懒汉式

避免了双检锁的缺点。

```java
public class Singleton5 implements Serializable {
    private Singleton5() {
        System.out.println("private Singleton5()");
    }

    private static class Holder {
        static Singleton5 INSTANCE = new Singleton5();
    }

    public static Singleton5 getInstance() {
        return Holder.INSTANCE;
    }

    public static void otherMethod() {
        System.out.println("otherMethod()");
    }
}
```

:::

::: info JDK 中单例的体现有哪些？

* Runtime 体现了饿汉式单例。
* Console 体现了双检锁懒汉式单例。
* Collections 中的 EmptyNavigableSet 内部类懒汉式单例。
* ReverseComparator.REVERSE_ORDER 内部类懒汉式单例。
* Comparators.NaturalOrderComparator.INSTANCE 枚举饿汉式单例。

:::
