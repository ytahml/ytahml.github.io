---
title: AES加密结果有+号浏览器转义后解密失败
date: 2025/4/17
author: 花木凋零成兰
tags: 
  - Java
  - AES加密
cover: false
hiddenCover: true
---

# AES加密结果有+号浏览器转义后解密失败

在开发某功能时, 要求提供一个跳转链接让用户通过点击可以跳转; 对该跳转链接参数进行拼接时某参数要求用AES加密后的字符串, 问题出在加密后的字符串携带"+"符号; 而该符号在浏览器中会被替换为空格并转移为'%20';

此时

## 参考文章

- [解决URL传参带加号“+”被转换为空格的办法](https://blog.csdn.net/shiyong1949/article/details/79654995)
