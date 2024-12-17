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

**@Warmup**：预热，可用在类级别和方法级别
- iterations：表示预热的次数；默认为5；
- time：表示每次预热的时间；默认为10
- timeUnit：表示每次预热的时间的单位，默认为`TimeUnit.SECONDS`；

**@Measurement**：具体的测试配置，可用在类级别和方法级别
- iterations：表示测试的次数；默认为5；
- time：表示每次测试的时间；默认为10
- timeUnit：表示每次测试的时间的单位，默认为`TimeUnit.SECONDS`；

**@Benchmark**：测试方法，只可用在方法上，表示该方法是需要测试的方法；



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
