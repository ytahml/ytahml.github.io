---
title: Paths.get()结合SMB2下载文件出错
date: 2025/5/16
author: 花木凋零成兰
tags: 
  - Java
  - SMB2
cover: false
hiddenCover: true
---

# Paths.get()结合SMB2下载文件出错

## 问题环境

- Java 8
- 使用 SMB2 从 Windows 服务器上下载文件
- 本人电脑系统: Windows

## 前置知识

Paths:  是 Java 7 引入的文件操作工具, 提供跨系统支持解析文件路径, 并可以通过 `Paths.get()` 方法快速创建一个 Path 对象, Path对象提供了许多路径方法, 可以方便的对文件路径进行各种操作.

SMB2: 是 SMB 协议的第二代; SMB(Server Message Block)协议是一种网络文件共享协议, 主要用于实现计算机之间的资源共享, 由微软推出, 那么自然是Windows系统的协议.

## 问题原因

由于业务需求, 需要从服务器上使用SMB2下载文件进行文件同步, 即存储共享文件的服务器是Windows操作系统的; 文件下载路径示例: `url = \\192.168.1.100\SharedDocs\aaa\bbb\file.txt`.

在开发的时候, 为了方便处理并且避免使用String类型的`substring()`、`split()`方法(个人感觉substring(0, x) 不够优雅), 所以直接使用了 `Paths.get(url)`来实现对路径的解析; 然后根据得到的 Path 类实例, 使用相关方法得到想要的文件名(file.txt), 共享文件夹之下的文件夹路径().

接着启动服务对文件路径的解析和下载做了测试, 发现成功下载到指定文件(万事大吉, push 到测试环境测试一下), 由于本地开发连接的测试数据库、业务、测试比较简单等相关原因, 即便测试环境是Linux系统, **也没有在测试环境测出问题**.

测试通过之后, 便发布到正式环境(Linux系统), 然后就出现了报错(NullPointerException).

## 问题发现

当出现 NullPointerException 问题的时候, 非常奇怪, 后来查看正式环境日志, 发现出现如下报错:

```java
[com.hierynomus.smbj.connection.Connection.close(Connection.java:143)] Exception while closing session 8309704262451992343 
com.hierynomus.protocol.transport.TransportException: java.util.concurrent.ExecutionException: com.hierynomus.smbj.common.SMBRuntimeException: java.util.concurrent.TimeoutException: Timeout expired 
	at com.hierynomus.protocol.transport.TransportException$1.wrap(TransportException.java:29) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.transport.TransportException$1.wrap(TransportException.java:23) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.Futures.get(Futures.java:43) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.smbj.session.Session.logoff(Session.java:240) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.smbj.session.Session.close(Session.java:267) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.smbj.connection.Connection.close(Connection.java:141) [smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.smbj.connection.Connection.close(Connection.java:126) [smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.smbj.connection.Connection.handleError(Connection.java:447) [smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.smbj.transport.PacketReader.run(PacketReader.java:54) [smbj-0.9.1.jar!/:0.9.1] 
	at java.lang.Thread.run(Thread.java:748) [?:1.8.0_212] 
Caused by: java.util.concurrent.ExecutionException: com.hierynomus.smbj.common.SMBRuntimeException: java.util.concurrent.TimeoutException: Timeout expired 
	at com.hierynomus.protocol.commons.concurrent.PromiseBackedFuture.get(PromiseBackedFuture.java:60) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.CancellableFuture.get(CancellableFuture.java:84) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.Futures.get(Futures.java:38) ~[smbj-0.9.1.jar!/:0.9.1] 
	... 7 more 
Caused by: com.hierynomus.smbj.common.SMBRuntimeException: java.util.concurrent.TimeoutException: Timeout expired 
	at com.hierynomus.smbj.common.SMBRuntimeException$1.wrap(SMBRuntimeException.java:27) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.smbj.common.SMBRuntimeException$1.wrap(SMBRuntimeException.java:21) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.Promise.retrieve(Promise.java:136) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.PromiseBackedFuture.get(PromiseBackedFuture.java:58) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.CancellableFuture.get(CancellableFuture.java:84) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.Futures.get(Futures.java:38) ~[smbj-0.9.1.jar!/:0.9.1] 
	... 7 more 
Caused by: java.util.concurrent.TimeoutException: Timeout expired 
	at com.hierynomus.protocol.commons.concurrent.Promise.retrieve(Promise.java:136) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.PromiseBackedFuture.get(PromiseBackedFuture.java:58) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.CancellableFuture.get(CancellableFuture.java:84) ~[smbj-0.9.1.jar!/:0.9.1] 
	at com.hierynomus.protocol.commons.concurrent.Futures.get(Futures.java:38) ~[smbj-0.9.1.jar!/:0.9.1] 
	... 7 more 


```
SMB2的使用在当前项目中是存在比较久的, 而且也有不少的地方使用过了, 出现这个错误其实是显得很奇怪的, 经过一番曲折(甚至搜索到了一篇开源项目的[ISSUE](https://github.com/hierynomus/smbj/issues/646)), 最后请人查看服务器之间的网络是否正常连通, 发现是不连通的, 即确定问题原因: 网络问题;

当网络问题解决之后, 发现还是出现了一样的报错: NullPointerException; 由于存放文件的服务器只有一台(即就是生产环境服务器), 没有办法使用更多的示例来对问题进行测试; 而且在开发本地是完全能进行文件的下载的.

最终采取的办法是, 在能输出日志的地方尽量输出日志, 对每一个获取的变量增加空值判断; 一开始使用Paths类的代码如下所示:

```java
Path path = Paths.get(url);
Path parent = path.getParent();
String catalog = parent.subpath(0, parent.getNameCount()) + "\\";
String fileName = path.getFileName().toString();
```

增加各种判断和日志之后, 最终确定问题是`Path parent = path.getParent();`返回的`parent`是为空的, 那么接下来的执行自然会出现空指针错误问题; 为什么会出现这个问题呢?

## 问题解决

首先查看 `Paths.get()` 方法源码, 如下所示:

```java
public static Path get(String first, String... more) {
    return FileSystems.getDefault().getPath(first, more);
}
```

再查看 `FileSystems.getDefault()` 方法源码, 如下所示:

```java
public static FileSystem getDefault() {
    return DefaultFileSystemHolder.defaultFileSystem;
}

// lazy initialization of default file system
private static class DefaultFileSystemHolder {
    static final FileSystem defaultFileSystem = defaultFileSystem();
    // returns default file system
    private static FileSystem defaultFileSystem() {
        // load default provider
        FileSystemProvider provider = AccessController
            .doPrivileged(new PrivilegedAction<FileSystemProvider>() {
                public FileSystemProvider run() {
                    return getDefaultProvider();
                }
            });
        // return file system
        return provider.getFileSystem(URI.create("file:///"));
    }
}
```

可以看到`Paths.get()`方法会获取当前操作系统的默认文件系统来对文件路径进行解析.

因此在将SMB2格式的文件路径作为参数传入时, 因为**本地开发环境**是 Windows 操作系统, 所以可以正产解析, 可以**生产环境**是 Linux 操作系统, 使用Linux的文件系统对Windows系统的文件路径格式进行解析, 自然是解析失败的, 即最终调用`path.getParent()`得到一个空值, 接着引发了空指针的问题.

找到问题之后, 因为项目上限等原因, 解决问题的优先级更高, 因此最终采用 `String.spilit()` 方法对路径进行切割, 然后通过循环拼接文件夹路径和获取文件名;

是否存在更好更优雅的方式呢? 待续...

