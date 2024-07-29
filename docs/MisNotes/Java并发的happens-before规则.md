---
title: Java并发的happens-before规则
date: 2024/7/29
author: 花木凋零成兰
---

# **Java并发的happens-before规则**

## **happens-before规则**

1. **程序次序规则：** 同一个线程内一段代码的执行顺序是有序的, 即前面的操作 happens-before 后面的操作; 但还是有可能发生指令重排序, 不过重排序后的结果与顺序执行的结果一致;
2. **管程锁定规则：** 对一个锁的解锁操作 happens-before 后续对这个锁的加锁操作; 即后续的加锁操作能够感知到前面解锁的变化, `synchronized` 就是管程的实现;
3. **volatile 变量规则：** 对 `valatile` 修饰的变量的更新操作 happens-before 后续对此变量的任意操作; (可以了解内存屏障和缓存一致性协议)
4. **传递性规则：** A happens-before B, B happens-before C, 则 A happens-before C; 即关系具有传递行;
5. **线程启动规则：** 在主线程启动子线程, 那么主线程启动子线程之前的操作对于子线程是可见的; 即 `start()` happens-before 子线程中的操作;
6. **线程终止规则：** 在主线程执行过程中, 子线程终止, 那么子线程终止之前的操作在主线程中是可见的; 例如主线程中执行子线程的 join 方法等待子线程完成, 当子线程执行完毕后, 主线程可以看到子线程的所有操作;
7. **线程中断规则：** 对线程 interrupt 方法的调用 happens-before 被中断线程代码检测到中断事件;
8. **对象终结规则：** 一个对象的构造函数执行的结束 happens-before 它的 finalize() 方法;

## **参考文章**

- [阿里面试题：Java 并发编程之 happens-before 规则](https://blog.51cto.com/u_11812862/3002287)
