---
title: 常见算法
icon: Code
# date: 2019-12-26
category: 面试题
tag: 面试题
timeline: true
star: true
---

此处是一些 Java 常见算法的高频面试题（持续更新中...）。

<!-- more -->

## 二分查找

::: tip 二分查找算法的描述与实现。

**算法描述**：

1. 前提：有已排序数组 A（假设已经做好）。

2. 定义左边界 L、右边界 R，确定搜索范围，循环执行二分查找（3、4两步）。

3. 获取中间索引 M = Floor((L+R) /2)。

4. 中间索引的值  A[M] 与待搜索的值 T 进行比较：

   ① A[M] == T 表示找到，返回中间索引。

   ② A[M] > T，中间值右侧的其它元素都大于 T，无需比较，中间索引左边去找，M - 1 设置为右边界，重新查找。

   ③ A[M] < T，中间值左侧的其它元素都小于 T，无需比较，中间索引右边去找， M + 1 设置为左边界，重新查找。

5. 当 L > R 时，表示没有找到，应结束循环。

**算法实现**：

```java
public static int binarySearch(int[] a, int t) {
    int l = 0, r = a.length - 1, m;
    while (l <= r) {
        m = (l + r) / 2;
        if (a[m] == t) {
            return m;
        } else if (a[m] > t) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return -1;
}
```

**测试代码**：

```java
public static void main(String[] args) {
    int[] array = {1, 5, 8, 11, 19, 22, 31, 35, 40, 45, 48, 49, 50};
    int target = 47;
    int idx = binarySearch(array, target);
    System.out.println(idx);
}
```

**解决整数溢出问题**：

当 l 和 r 都较大时，`l + r` 有可能超过整数范围，造成运算错误，解决方法有两种：

```java
int m = l + (r - l) / 2;
```

还有一种是：

```java
int m = (l + r) >>> 1;
```

**其它考法**：

1. 有一个有序表为 1,5,8,11,19,22,31,35,40,45,48,49,50 当二分查找值为 48 的结点时，查找成功需要比较的次数。

2. 使用二分法在序列 1,4,6,7,15,33,39,50,64,78,75,81,89,96 中查找元素 81 时，需要经过（   ）次比较。

3. 在拥有128个元素的数组中二分查找一个数，需要比较的次数最多不超过多少次。

对于前两个题目，记得一个简要判断口诀：奇数二分取中间，偶数二分取中间靠左。对于后一道题目，需要知道公式：

- $$n = log_2N = log_{10}N/log_{10}2$$

- 其中 n 为查找次数，N 为元素个数。

:::

## 冒泡排序

::: tip 冒泡排序算法的描述与实现。

**算法描述**：

1. 依次比较数组中相邻两个元素大小，若 a[j] > a[j+1]，则交换两个元素，两两都比较一遍称为一轮冒泡，结果是让最大的元素排至最后。
2. 重复以上步骤，直到整个数组有序。

**算法实现**：

```java
public static void bubble(int[] a) {
    for (int j = 0; j < a.length - 1; j++) {
        // 一轮冒泡
        boolean swapped = false; // 是否发生了交换
        for (int i = 0; i < a.length - 1 - j; i++) {
            System.out.println("比较次数" + i);
            if (a[i] > a[i + 1]) {
                Utils.swap(a, i, i + 1);
                swapped = true;
            }
        }
        System.out.println("第" + j + "轮冒泡"
                           + Arrays.toString(a));
        if (!swapped) {
            break;
        }
    }
}
```

- 优化点 1：每经过一轮冒泡，内层循环就可以减少一次。
- 优化点 2：如果某一轮冒泡没有发生交换，则表示所有数据有序，可以结束外层循环。

**进一步优化**：

```java
public static void bubble_v2(int[] a) {
    int n = a.length - 1;
    while (true) {
        int last = 0; // 表示最后一次交换索引位置
        for (int i = 0; i < n; i++) {
            System.out.println("比较次数" + i);
            if (a[i] > a[i + 1]) {
                Utils.swap(a, i, i + 1);
                last = i;
            }
        }
        n = last;
        System.out.println("第轮冒泡"
                           + Arrays.toString(a));
        if (n == 0) {
            break;
        }
    }
}
```

- 每轮冒泡时，最后一次交换索引可以作为下一轮冒泡的比较次数，如果这个值为零，表示整个数组有序，直接退出外层循环即可。

:::
