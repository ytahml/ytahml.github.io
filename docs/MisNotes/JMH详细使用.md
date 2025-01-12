---
title: JMH详细使用
date: 2024-12-16 09:25:06
author: 花木凋零成兰
tags: 
  - JMH
  - Java
  - 测试
cover: false
hiddenCover: true
---

# JMH 基本使用

- [官方地址](https://github.com/openjdk/jmh)

> JMH 是一个用于 Java 代码微基准测试的工具，允许开发者对特定部分进行精确的性能测试；

## 安装 JMH

环境：
- Maven 项目；
- JDK 8；

### Maven 方式安装

引入如下依赖：

```xml
<dependencies>
    <!-- JMH 核心库 包含执行基准测试所需的基本功能 -->
    <dependency>
        <groupId>org.openjdk.jmh</groupId>
        <artifactId>jmh-core</artifactId>
        <version>1.35</version>
    </dependency>
    <!-- JMH 的注解处理器 用于编译时处理 JMH 的注解 -->
    <dependency>
        <groupId>org.openjdk.jmh</groupId>
        <artifactId>jmh-generator-annprocess</artifactId>
        <version>1.35</version>
    </dependency>
</dependencies>
```

## 注解介绍

### @Warmup
预热，可用在**类级别和方法级别**
- iterations：表示预热的次数；默认为5；
- time：表示每次预热的时间；默认为10
- timeUnit：表示每次预热的时间的单位，默认为`TimeUnit.SECONDS`；

### @Measurement
具体的测试配置，可用在**类级别和方法级别**
- iterations：表示测试的次数；默认为5；
- time：表示每次测试的时间；默认为10
- timeUnit：表示每次测试的时间的单位，默认为`TimeUnit.SECONDS`；

### @Benchmark

测试方法，**只可用在方法上**，表示该方法是需要测试的方法；

### @BenchmarkMode

表示测试采用的模式; 可用在**类和方法**上;

一共有四种Mode, 分别是:
- Mode.Throughput: 吞吐量测试, 即指定时间单位该方法会执行多少次;
- Mode.AverageTime: 平均耗时测试, 即输出每次操作平均耗时
- Mode.SampleTime: 抽样测试, 会在执行过程中采样, 输出最快的, 50% 快, 90%, 95%, 99%, 99.9%, 99.99%, 100%
- Mode.SingleShotTime: 冷启动测试, 设置后, 该方法一轮只会运行一次; 该模式主要为了测试冷启动的性能;

也可以使用 `Mode.All` 对以上四种模式都进行测试; 或者通过 `@BenchmarkMode({Mode.SampleTime, Mode.SingleShotTime})` 方式选择需要进行测试的多种模式; 

### @OutputTimeUnit

表示输出测试报告的时间单位, 可用在类和方法上;

### @State

类注解, 表示类对象的作用域; 一般标记在静态内部类里;

作用域主要有三种取值:

- Scope.Thread: 表示类对象会在 Benchmark 各个线程执行之前初始化, 作为入参, 且各个线程的实参是相互独立的; 且参数类型为当前 `@State` 注解的类名;
- Scope.Benchmark: 表示 Benchmark 的各个线程共用一个入参;
- Scope.Group: 表示一个线程组共用一个对象

示例如下:

```java
@State(Scope.Benchmark)
public static class BenchmarkState {
    int x;
}
@State(Scope.Thread)
public static class ThreadState {
    int x;
}
@Benchmark
public void measureUnshared(ThreadState state) {
    state.x++;
}
@Benchmark
public void measureShared(BenchmarkState state) {
    state.x++;
}
```


也可以对最外部的类进行注解; 此时这个类中的测试方法可以直接操作成员变量, 不用特意去将静态内部类执行注入的操作, 示例如下所示;

```java
@State(Scope.Thread)
public class Sample_04_DefaultState {
    int x;

    @Benchmark
    public void measure() {     // 不用通过注入的方式来操作成员变量 x
        x++;
    }
}
```

### @Setup

方法级别注解, 表示在启动测试方法前做的准备工作; **必须在 `@State` 的类中才能使用;** 实际上就是 `@State` 管理的对象的生命周期的一部分;

可以选择操作的执行方式,有以下三种情况:
- Level.Iteration: 表示测试方法的每一轮测试开始前, 执行指定操作;
- Level.Trial: 表示测试方法每轮测试都执行结束后, 才会执行一次该操作, 即该方法所有测试执行之前, 才只执行一次;
- Level.Invocation: 一轮可能会调用测试方法多次, 该值表示测试方法每一次调用结束后都会执行指定操作;

### @TearDown

方法级别注解, 表示在测试方法执行结束之后做的操作; 同样必须在 `@State` 的类中才能使用;

可以选择操作的执行方式,有以下三种情况:
- Level.Iteration: 表示测试方法的每一轮测试结束后, 执行制定操作;
- Level.Trial: 表示测试方法每轮测试都执行结束后, 才会执行一次该操作, 即该方法所有测试执行之后, 才执行一次;
- Level.Invocation: 一轮可能会调用测试方法多次, 该值表示测试方法每一次调用结束后都会执行指定操作;

### @OperationsPerInvocation

类、方法级别注解,可以指定数值, 假设为n, 则用于告诉 JMH 标记的方法执行了一次相当于执行了 n 次, 最后统计结果时会除n取平均值;


### @Fork

可用在方法级别和类级别上; 默认不指定value时, 相当于 5;

- value取0时, 测试默认只执行一次, 且测试方法会在 main 启动进程中执行;
- value取1时, 会fork出一个线程来专门执行测试方法; 与 main 方法不在同一个进程中执行;
- value取n时, 会fork出 n 个线程来执行测试方法;

可以通过使用 `@Fork` 注解对测试方法多进行几轮测试, 提高测试结果的精确性;

### @Group

方法级别注解;

指定方法所属的测试组; 相同测试组的方法会在一个 Benchmark 中执行; 可以模拟生产环境的资源竞争;

### @GroupThreads

方法级别注解;

指定在测试组中, 创建多少个线程执行该测试方法;



## 内置类

### Blackhole

JMH 提供的黑洞对象, 可以对执行结果进行消费, 调用其 `consume()` 方法可对执行结果进行消费;

## 构造器

是指如何启动测试并进行配置构造的; 示例如下所示:

```java
public static void main(String[] args) throws RunnerException {
    Options opt = new OptionsBuilder()
            .include(Sample_03_States.class.getSimpleName())
            .threads(4)
            .forks(1)
            .build();
    new Runner(opt).run();
}
```

### include

表示包含的测试类;

### threads

在执行每一个测试方法时, 即执行每一个 Benchmark 时,会创造多少个线程去执行;

### warmupIterations

表示预热的次数;

### measurementTime

表示执行测试的时间;

### measurementIterations

表示执行测试的次数;

### resultFormat

指定输出结果文件的格式, 可以指定为 JSON 文件

### result

指定结果的输出位置; 示例如下所示:

```java

result("/E:/data/result.json")
```


## 测试结果详解

简单运行如下示例：

```java
public class Sample_01_HelloWorld {

    @Benchmark  // 需要测试的方法
    public void wellHelloThere() {
        // this method was intentionally left blank.
    }


    public static void main(String[] args) throws RunnerException {
        Options opt = new OptionsBuilder()
                .include(Sample_01_HelloWorld.class.getSimpleName())
                // 总共测试几轮
                .forks(1)
                .build();

        new Runner(opt).run();
    }

}
```

执行内容如下所示：

```txt
# JMH version: 1.35
# VM version: JDK 1.8.0_411, Java HotSpot(TM) 64-Bit Server VM, 25.411-b09
# VM invoker: D:\software\Java\jdk-1.8\jre\bin\java.exe
# VM options: -javaagent:D:\App\JetBrains\IntelliJ IDEA 2024.1.1\lib\idea_rt.jar=52629:D:\App\JetBrains\IntelliJ IDEA 2024.1.1\bin -Dfile.encoding=UTF-8
# Blackhole mode: full + dont-inline hint (auto-detected, use -Djmh.blackhole.autoDetect=false to disable)
# Warmup: 5 iterations, 10 s each
# Measurement: 5 iterations, 10 s each
# Timeout: 10 min per iteration
# Threads: 1 thread, will synchronize iterations
# Benchmark mode: Throughput, ops/time
# Benchmark: top.ytazwc.Sample_01_HelloWorld.wellHelloThere

# Run progress: 0.00% complete, ETA 00:01:42
# Fork: 1 of 1
# Warmup Iteration   1: 3973752961.056 ops/s
# Warmup Iteration   2: 4022547742.955 ops/s
# Warmup Iteration   3: 4047713548.605 ops/s
# Warmup Iteration   4: 4099985036.125 ops/s
# Warmup Iteration   5: 4162155433.451 ops/s
Iteration   1: 4177536042.557 ops/s
Iteration   2: 4138225116.905 ops/s
Iteration   3: 4119016558.348 ops/s
Iteration   4: 3734934421.257 ops/s
Iteration   5: 3804276755.428 ops/s


Result "top.ytazwc.Sample_01_HelloWorld.wellHelloThere":
  3994797778.899 ±(99.9%) 801318456.801 ops/s [Average]
  (min, avg, max) = (3734934421.257, 3994797778.899, 4177536042.557), stdev = 208099858.535
  CI (99.9%): [3193479322.098, 4796116235.700] (assumes normal distribution)


# Run complete. Total time: 00:01:43

REMEMBER: The numbers below are just data. To gain reusable insights, you need to follow up on
why the numbers are the way they are. Use profilers (see -prof, -lprof), design factorial
experiments, perform baseline and negative tests that provide experimental control, make sure
the benchmarking environment is safe on JVM/OS/HW level, ask for reviews from the domain experts.
Do not assume the numbers tell you what you want them to tell.

Benchmark                                      Mode  Cnt           Score           Error  Units
Sample_01_HelloWorld.wellHelloThere           thrpt    5  3994797778.899 ± 801318456.801  ops/s
```

首先是第一部分，介绍一些基本信息如下所示：

```txt
# JMH version: 1.35
# VM version: JDK 1.8.0_411, Java HotSpot(TM) 64-Bit Server VM, 25.411-b09
# VM invoker: D:\software\Java\jdk-1.8\jre\bin\java.exe
# VM options: -javaagent:D:\App\JetBrains\IntelliJ IDEA 2024.1.1\lib\idea_rt.jar=52629:D:\App\JetBrains\IntelliJ IDEA 2024.1.1\bin -Dfile.encoding=UTF-8
# Blackhole mode: full + dont-inline hint (auto-detected, use -Djmh.blackhole.autoDetect=false to disable)
# Warmup: 5 iterations, 10 s each
# Measurement: 5 iterations, 10 s each
# Timeout: 10 min per iteration
# Threads: 1 thread, will synchronize iterations
# Benchmark mode: Throughput, ops/time
# Benchmark: top.ytazwc.Sample_01_HelloWorld.wellHelloThere
```

主要是介绍一些基本信息，比如 JMH 的版本，虚拟机的参数等；一般可仔细观察的参数如下：

- `Benchmark mode`测试模式规则：采用吞吐量的测试方式，单位是 `ops/time`，每个时间单位的请求数；
- `Benchmark`：测试的方法；
- `Warmup`：预热的次数和每次预热的时间；
- `Measurement`：测试次数及每次的时间；
- `Threads`：线程执行相关

第二部分则是执行测试相关的结果：

```txt
# Run progress: 0.00% complete, ETA 00:01:42
# Fork: 1 of 1
# Warmup Iteration   1: 3973752961.056 ops/s
# Warmup Iteration   2: 4022547742.955 ops/s
# Warmup Iteration   3: 4047713548.605 ops/s
# Warmup Iteration   4: 4099985036.125 ops/s
# Warmup Iteration   5: 4162155433.451 ops/s
Iteration   1: 4177536042.557 ops/s
Iteration   2: 4138225116.905 ops/s
Iteration   3: 4119016558.348 ops/s
Iteration   4: 3734934421.257 ops/s
Iteration   5: 3804276755.428 ops/s


Result "top.ytazwc.Sample_01_HelloWorld.wellHelloThere":
  3994797778.899 ±(99.9%) 801318456.801 ops/s [Average]
  (min, avg, max) = (3734934421.257, 3994797778.899, 4177536042.557), stdev = 208099858.535
  CI (99.9%): [3193479322.098, 4796116235.700] (assumes normal distribution)
```

根据提供的信息，可以很清楚的看到每一轮预热的结果和每次具体测试的结果；`Result`部分的信息则是 `""` 中的具体方法的一个总的测试结果；
- 平均值及误差：`3994797778.899 ±(99.9%) 801318456.801 ops/s [Average]`；
- 最大值，平均值，最大值：`(min, avg, max) = (3734934421.257, 3994797778.899, 4177536042.557)`；
- 方差：`stdev = 208099858.535`；
- 置信区间：`CI (99.9%): [3193479322.098, 4796116235.700] (assumes normal distribution)`

第三部分则是对整体的一个测试做一个汇总：

```txt
# Run complete. Total time: 00:01:43

REMEMBER: The numbers below are just data. To gain reusable insights, you need to follow up on
why the numbers are the way they are. Use profilers (see -prof, -lprof), design factorial
experiments, perform baseline and negative tests that provide experimental control, make sure
the benchmarking environment is safe on JVM/OS/HW level, ask for reviews from the domain experts.
Do not assume the numbers tell you what you want them to tell.

Benchmark                                      Mode  Cnt           Score           Error  Units
Sample_01_HelloWorld.wellHelloThere           thrpt    5  3994797778.899 ± 801318456.801  ops/s
```

在最后是一个类表格的形式，描述测试的方法(Benchmark)，采用的测试模式(Mode)，测试次数(Cnt)，测试的平均结果(Score)，结果误差(Error)，测试结果的单位(Units)等；

## 测试结果可视化

可以将测试结果输出为一个文件, 并将其上传到[在线可视化网址](https://jmh.morethan.io/)中, 可以将结果输出为可视化图表;
