---
title: MySQL测试数据集
date: 2024-08-22 14:12:36
author: 花木凋零成兰
tags: 
  - MySQL
cover: https://img.upyun.ytazwc.top/blog/202408221416379.png
hiddenCover: true
---

# MySQL测试数据集

MySQL 测试数据集是官方自带的测试数据集合, 最多有百万挑数据, 适合练习MySQL;

官方下载地址：[test_db](https://github.com/datacharmer/test_db)

下载解压后, 在命令行输入 cmd 如下图所示：

![](https://img.upyun.ytazwc.top/blog/202408221416379.png)

接着连接 MySQL 服务器, 输入命令：`mysql -uroot -p`, 并输入密码连接如下所示：

![](https://img.upyun.ytazwc.top/blog/202408221418928.png)

接着打开解压后文件夹中的 `employees.sql` 文件, 复制文件内容, 粘贴到命令行中执行：

![](https://img.upyun.ytazwc.top/blog/202408221420870.png)

等待执行结束后, 如下图所示验证是否成功执行：

![](https://img.upyun.ytazwc.top/blog/202408221421749.png)

然后便可以使用该数据集练习 MySQL了;
