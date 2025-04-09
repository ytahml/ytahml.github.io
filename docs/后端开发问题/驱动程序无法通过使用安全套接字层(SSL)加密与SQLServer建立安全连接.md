---
title: 驱动程序无法通过使用安全套接字层(SSL)加密与 SQL Server 建立安全连接
date: 2025/4/9 21:32
author: 花木凋零成兰
tags: 
  - Java
  - SQL Server
cover: false
hiddenCover: true
---

# 驱动程序无法通过使用安全套接字层(SSL)加密与 SQL Server 建立安全连接



## 原因描述

项目中有使用到 SQL Server 数据库, 在启动项目时, 出现报错信息:

```java
【驱动程序无法通过使用安全套接字层(SSL)加密与 SQL Server 建立安全连接。错误:“The server selected protocol version TLS10 is not accepted by client preferences [TLS12]”】
```

这个问题是由于 SQL Server 服务端的协议版本是 TLS10, 而客户端连接数据库的协议版本是 TSL12; 导出连接失败.

## 问题解决

根据参考文章的方式一, 找到Java的安装目录: `\jdk-1.8\jre\lib\security` 下的 `java.security` 文件, 删除其中的 TSLv1、TSLv1.1; 如下图所示:

![](https://img.upyun.ytazwc.top/blog/202504092205090.png)


## 参考文章

- [包解决! 驱动程序无法通过使用安全套接字层(SSL)加密与 SQL Server 建立安全连接](https://blog.csdn.net/yyj12138/article/details/123073146)
