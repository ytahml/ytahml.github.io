---
title: Java 字节码
date: 2025/11/19 21:57
tags: 
  - Java
  - JVM
author: 花木凋零成兰
hiddenCover: true
---

# Java 字节码

## 查看字节码文件

字节码文件保存了源代码编译后的内容, 以二进制形式存储, 无法直接用记事本打开阅读, 使用 `CotEditor` 文本工具打开内容会有乱码, 如下所示:

![](./02_Java字节码/1763561481002.png)

可以使用专门的字节码工具 [jclasslib](https://github.com/ingokegel/jclasslib), 也可以直接在 IDEA 中搜索该工具名称的插件直接使用, 基本界面如下所示:

![](./02_Java字节码/1763561825716.png)

