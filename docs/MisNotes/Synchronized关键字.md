---
title: synchronized关键字
date: 2024/7/30
author: 花木凋零成兰
---

# synchronized 关键字

synchronized 是可重入锁,

## 底层实现原理

底层语义通过一个 monitor(监视器锁) 的对象来完成, 每个 Java 对象都有一个关联的监视器锁(monitor); 每个 synchronized 修饰过的代码当它的 monitor 被占用时就会处于锁定状态并且尝试获取 monitor 的所有权;

**基本过程：**
1. 如果 monitor 的进入数为0, 则该线程进入monitor, 然后将进入数设置为1, 即该线程为 monitor 的所有者;
2. 如果线程已经占有该 monitor, 只是重新进入, 则进入 monitor 的进入数加1;
3. 如果其他线程已经占用了 monitor, 则该线程进入阻塞状态, 直到 monitor 的进入数为0, 再重新尝试获取 monitor 的所有权;

## 参考文章
