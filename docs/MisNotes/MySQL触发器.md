---
title: MySQL 触发器
date: 2024-08-07 14:16:14
tags: 
  - MySQL
author: 花木凋零成兰
---

# MySQL 触发器(Trigger)

> MySQL 从 5.02 版本开始支持触发器, 触发器和存储过程一样, 是嵌入到 MySQL 服务器的一段程序;

触发器是由 **事件** 来触发的某个操作, 这些事件包括 `INSERT`, `UPDATE`, 'DELETE' 事件, 指在事件发生之前或之后触发并执行特定 SQL 语句的集合; 触发器可以协助开发人员与数据库交互过程中确保数据的完整性,日志记录和数据校验等;

**当对数据表中的数据执行插入、更新和删除操作时, 若需要自动执行一些数据库逻辑时, 可以使用触发器来实现;**

## 类型

现在触发器只支持行级触发, 不支持语句级触发; 使用别名 OLD 和 NEW 来引用触发器中发生变化的记录内容;

- INSERT 型触发器：NEW 表示将要或已经新增的数据;
- UPDATE 型触发器：OLD 表示修改之前的数据, NEW 表示将要或已修改后的数据;
- DELETE 型触发器：OLD 表示将要或者已经删除的数据;

## 语法

语法结构如下所示：

```sql
CREATE TRIGGER 触发器名称 
{BEFORE|AFTER} {INSERT|UPDATE|DELETE} ON 表名 
FOR EACH ROW 
触发器执行的语句块;
```
说明：

- 表名：表示触发器监控的对象;
- BEFORE|AFTER：表示触发时间, 在事件前或事件后触发;
- INSERT|UPDATE|DELETE：表示触发事件;
- 触发器执行的语句块：触发器被触发之后执行的 SQL 语句, 可以是单条 SQL 语句, 也可以是 BEGIN...END 结构组成的复合语句块;

## 参考文章

- [MySQL高级篇-慎用的触发器](https://cloud.tencent.com/developer/article/1979884)
- [MySQL 触发器](https://www.sqlboy.tech/pages/fa6960/)

