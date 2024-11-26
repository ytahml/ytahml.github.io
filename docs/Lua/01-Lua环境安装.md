---
title: 01-Lua环境安装
date: 2024-11-25 15:00:06
author: 花木凋零成兰
tags: 
  - Lua
  - Redis
  - 游戏开发
cover: https://img.upyun.ytazwc.top/blog/202411251533652.png
hiddenCover: true
---

# Lua 环境安装

## Windows 环境安装

### 安装模拟环境

首先到[下载地址](https://github.com/rjpcomputing/luaforwindows/releases/tag/v5.1.5-52)下载对应环境, 下载结束后运行安装到指定目录即可;

完成下载后, 会有lua语言的命令行工具和编辑器, 如下图所示:

![](https://img.upyun.ytazwc.top/blog/202411251533652.png)

一般更多是使用编辑器来编写 lua 脚本文件;

## 开发编辑器

### SciTE

这是 Windows 环境下, 安装Lua环境时自带的编辑器, 如下图所示:

![](https://img.upyun.ytazwc.top/blog/202411251536617.png)

运行脚本时, 可能会出现输出中文乱码问题, 此时打开 `Options` 菜单中的 `Open Global Options File` 全局配置文件;

![](https://img.upyun.ytazwc.top/blog/202411251539314.png)

在该配置文件中, 修改如下图所示配置, 即可正确输出中文;

![](https://img.upyun.ytazwc.top/blog/202411251540979.png)

### VS code

是常用的文本编辑器, 可以通过下载lua语言插件, 来配置lua开发环境, 插件如下所示:

- 提供 lua 语言开发环境
![](https://img.upyun.ytazwc.top/blog/202411251542560.png)

- 可以用来格式化 lua 代码
![](https://img.upyun.ytazwc.top/blog/202411251543982.png)

在命令看板搜索关键字`format`, 并选择格式化文档即可;

同时, 使用VS code开发也会有终端出现中文乱码问题, 此时在 VS code 的 `setting.json` 环境中, 添加如下配置即可:

```json
{
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "overrideName": true,
      "args": [
        "-NoExit",
        "/c",
        "chcp 65001"
      ],
      "icon": "terminal-powershell",
      "env": {
        "TEST_VAR": "value"
      }
    }
  }
}
```

## 参考文章

- [Lua 编辑器选择](https://www.kancloud.cn/gxlct008/openresty-best-practices-last/2245158)
- [【已解决】vscode+lua 终端输出中文乱码问题](https://blog.csdn.net/weixin_43206271/article/details/138709102?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-3-138709102-blog-138059011.235%5Ev43%5Epc_blog_bottom_relevance_base2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-3-138709102-blog-138059011.235%5Ev43%5Epc_blog_bottom_relevance_base2&utm_relevant_index=6)