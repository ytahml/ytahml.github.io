---
title: AES加密解密出现：缺省的iv长度不能小于16
date: 2025/5/16
author: 花木凋零成兰
tags:
  - Java
  - AES加密
cover: false
hiddenCover: true
---

# AES加密解密出现：Wrong IV length: must be 16 bytes long

## 原因描述

当使用AES算法对数据进行加密时, 指定的加密 key 比较随意, 导致加密失败, 出现 _Wrong IV length: must be 16 bytes long_ 的报错信息.

## 问题解决

即将加密的 key 修改为16位长度即可, 比如原加密key为 `key = "ssss"`, 补上其他字符到16位即可, 如: `key = "ssssaaaabbbb"`.

## 参考文章

- [JAVA 解密M3U8 视频TS片断提示：Wrong IV length: must be 16 bytes long 解决方法](https://blog.csdn.net/wh445306/article/details/126383155)
