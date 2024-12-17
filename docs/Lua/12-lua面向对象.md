---
title: 12-lua面向对象
date: 2024-12-15 21:25:59
author: 花木凋零成兰
tags:
  - Lua
  - Redis
  - 游戏开发
cover: https://img.upyun.ytazwc.top/blog/202412152156402.png
hiddenCover: true
---

# Lua 面向对象

> 在 Lua 中并没有类的概念, 但是可以通过 table、function 与元表可以模拟和构造具有类功能的结构;

## 对象的创建

> Lua 中通过 table 和 function 可以创造简单的 Lua 对象; table 为 Lua 对象赋予属性, function 给对象赋予行为;

对象创建示例如下所示:

```lua
-- object_create_test.lua


-- 创建名为 animal 的对象
local animal = {
    name = "Tom",
    age = 5
};
-- 为对象添加方法
-- animal.bark = function(voice)                            // [!code warning]
--     print(animal.name .. "在" .. voice .. "叫");       // [!code warning]
-- end                                                  // [!code warning]
-- 解决 标红 行的问题: 方式一
-- animal.bark = function(self, voice)
--     print(self.name .. "在" .. voice .. "叫");
-- end
-- 解决 标红 行的问题：方式二
function animal:bark(voice) -- 这种函数定义方式，自带 self
    print(self.name .. "在" .. voice .. "叫");
end

-- 直接调用对象的方法
-- animal.bark("喵喵");
animal.bark(animal, "喵喵");
animal:bark("喵喵");    -- 这种函数调用方式 自带 self

local animal_2 = animal; -- 两个animal指向的是同一个对象
animal = nil;            -- 消除 animal 这个指针

-- 此时会出现异常，因为在 bark 方法中使用了已经为空的 animal 见黄色行注释处  // [!code --]
-- animal_2.bark("旺旺");
animal_2.bark(animal_2, "旺旺");
animal_2:bark("旺旺");

```
最终执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202412152156402.png)

## 类的创建

> [!NOTE]
> 类是属性和行为的抽象, 是对象创建的模板, 对象是具体的属性以及行为; 请注意两者的区别, 可参考: [java中类与对象的关系与区别](https://blog.csdn.net/qq_24753293/article/details/89089867)

> Lua 中使用 table、function 与元表定义类; 表作为基础类, 使用一个 function 作为创建该基类示例对象的 new() 方法;
> 
> 使用 new() 方法创建一个空表, 再给空表指定一个元表, 该元表重写 `__index` 方法, 且将基础表指定为重写的 `__index` 方法;
> 
> 因为 new() 的是空表, 所以用户访问的所有 key 都从基表中获取;

具体示例如下所示:

```lua
-- class_create_test.lua

-- 创建一个类
local Animal = {
    name = "no_name",
    age = 0
};

-- 创建无参构造器
function Animal:new() -- 隐藏参数 self
    -- 创建一个空表
    local a = {};
    -- 绑定匿名元表 并重写元方法
    setmetatable(a, {
        __index = self, -- 新表中没有的 key 会在原始表中查找
    });

    return a; -- 返回新表
end

-- 创建有参构造器 - 参数是 table 类型
-- function Animal:new(obj)
--     local a = {};
--     if type(obj) == "table" then
--         a = obj;
--     end
--     setmetatable(a, { __index = self });
--     return a;
-- end

-- 尝试创建对象
local animal_1 = Animal:new();
local animal_2 = Animal:new();

-- 验证是否为两个不同的对象
print(animal_1);
print(animal_2);

-- 进行对象属性赋值
animal_1.name = "Tom";
animal_1.age = 8;
animal_1.type = "猫";
```

运行结果如下:

![](https://img.upyun.ytazwc.top/blog/202412162232351.png)

## 类的继承

主要是通过模拟来实现类的继承, 显得非常牵强;

示例如下所示:

```lua
-- class_extend_test.lua

-- 先创建一个 Animal 类
local Animal = {
    name = "no_name",
    age = 0
};

-- 创建有参构造器
function Animal:new(obj) -- 隐藏参数 self
    -- 创建一个空表
    local a = obj or {};
    -- 绑定匿名元表 并重写元方法
    setmetatable(a, {
        __index = self, -- 新表中没有的 key 会在原始表中查找
    });

    return a; -- 返回新表
end

-- 创建 Animal 的子类
local Cat = Animal:new({ type = "波斯猫" });
-- 子类属性
Cat.eyes = "蓝色";
-- 创建子类 实例
local tomcat = Cat:new();
tomcat.name = "Tom";

print(tomcat.name);
print(tomcat.eyes);
print(tomcat.type);

```

执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202412162242783.png)