---
title: 08-table数据结构
date: 2024-11-28 09:59:37
author: 花木凋零成兰
tags:
  - Lua
  - Redis
  - 游戏开发
cover: https://img.upyun.ytazwc.top/blog/202411281023492.png
hiddenCover: true
---

# table 数据结构

## 数据结构

### 数组

使用 table 数据类型可以定义一维、二维、多维数组; 需要注意的是: Lua 中的数组索引是从1开始的,且声明数组时不需要声明长度, 可以随时增加元素; 同时同一数组中的元素可以是任意类型;

示例如下所示:

```lua
-- table_test_01.lua

-- 定义一个数组
cities = {"北京", "上海", "广州"}

-- 直接添加元素到数组中
cities[4] = "长沙"

-- 通过 数值for循环 遍历数组
for i = 1, 4 do
    print("cities[" .. i .. "] = " .. cities[i])
end

-- 测试数组是否存在下标索引为0的元素
print(cities[0])    -- 结果为 nil 

-- 定义二维数组前 先声明为一维空数组
arr = {}

-- 利用 for 循环定义成二维数组
for i = 1, 3 do
    arr[i] = {}
    for j = 1, 2 do
        arr[i][j] = i * j
    end
end

-- 利用二重循环遍历二维数组
for i = 1, 3 do
    for j = 1, 2 do
        print("arr[" .. i .. "][" .. j .. "] = " .. arr[i][j])
    end
end

```

执行结果如下所示:

![](https://img.upyun.ytazwc.top/blog/202411281023492.png)

### map

使用 table 也可以定义出类似 map 的key-value数据结构; 可以在定义table时直接指定 key-value, 也可以单独指定 key-value; 

在访问时, 则是通过 table 的key 直接访问, 也可以以数组索引的方式来访问,此时key就是数组元素的索引;

示例如下所示:

```lua
-- table_test_02.lua

-- 定义一个map
map = { name = "张三", age = 23, depart = "销售部" }

-- 访问方式一：通过下标
map["gender"] = "男"    -- 使用下标时需要给key加上双引号
print(map["name"])
print(map["gender"])

-- 访问方式二：点号方式操作
map.office = "2nd floor"
print(map.age)
print(map.office)

print()

-- 通过赋值来定义map
a = "ytazwc"
b = 3
c = 5
-- 定义map，key为[]中的表达式
arr = {
    ["emp_"..a] = true,
    [b+c] = "Hello",
    ["hi"] = 123
}
print(arr.emp_ytazwc)
print(arr[8])   -- 数值型的key 需要使用[]来表示并访问
print(arr.hi)

```

执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202411281046757.png)

### 混合结构

Lua 允许将数组与 key-value 混合在同一个 table 中定义, **key-value 不会占用数组的数字索引值**;

示例一: 数组访问索引与map的key-value访问相互独立,各自访问各自的;

```lua
-- table_test_03.lua

-- 混合结构 table
emp = {
    "北京",
    name = "张三",
    age = 23,
    "上海",
    depart = "销售部",
    "长沙",
    "深圳"
}

-- 访问数组形式
print(emp[1])
print(emp[2])
print(emp[3])
print(emp[4])

-- 访问map形式
print(emp.name)
print(emp.age)
print(emp.depart)
```

执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202411281106273.png)

示例二: 按照一定规律的混合结构, 比如map结构的一维数组

```lua
-- table_test_04.lua

-- 按照一定规范定义混合结构

emps = {
   { name="张三", age = 23 }, 
   { name="李四", age = 24 }, 
   { name="王五", age = 25 }, 
   { name="赵六", age = 27 } 
}

-- 访问
for i = 1, 4 do
    print(emps[i].name .. " : " .. emps[i].age)
end
```

执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202411281117981.png)

## table 操作函数

可以在官网查看对应的操作函数API: [table函数](https://www.lua.org/manual/5.4/manual.html#pdf-table.concat); 也可以查看[中文版文档](https://cloudwu.github.io/lua53doc/manual.html#6.6)

### concat()

- **官方格式:** table.concat(list[, sep [, start [, end]]]);
- **实际调用格式:** _table.concat(list, sep, start, end)_
- **描述:** 该函数用于将指定的 table 的数组元素进行字符串拼接, 连接从索引位置 start 到 end 位置的所有数组元素, 每个元素之间通过指定的 sep 分隔符隔开;

注意: 如果 table 是混合结构, 则这个**连接与 key-value 无关, 仅仅只是连接数组元素**;

除了 list 参数之外, set,start,end均是可选参数;

示例如下:
```lua
-- table_concat.lua

-- 混合结构 table
emp = {
    "北京",
    name = "张三",
    age = 23,
    "上海",
    depart = "销售部",
    "长沙",
    "深圳"
}

-- 调用concat函数
-- 连接第二个元素到第四个元素，元素之间通过, 连接；
print(table.concat(emp, ",", 2, 4))

```

运行结果如下:

![](https://img.upyun.ytazwc.top/blog/202411281156027.png)

### unpack()

- **官方格式:** table.unpack(list[, i [, j ]]);
- **实际调用格式:** _table.unpack(list, i, j)_
- **描述:** 拆包, 返回指定table数据的从第i个元素到第j个元素值, 其中i,j是可选参数; 默认i=1,j为最后一个元素; Lua 5.1 不支持该函数;

> 若需要安装 Lua 5.1 及以上环境, 请参考: [Lua 环境安装](./01-Lua环境安装.md)

示例如下所示:

```lua
-- table_unpack.lua

local arr = {
    "北京",
    "广州",
    "上海",
    "长沙"
}

-- 调用unpack解包
local a, b, c, d = table.unpack(arr);
print(a, b, c, d)
```

执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202411281349659.png)

### pack()

- **官方格式:** table.pack(...);
- **实际调用格式:** _table.pack(i, j, ...)_
- **描述:** 打包, 该函数的参数是可变参数, 是将指定的参数打包成一个 table 并返回; 同时返回的table中有一个属性n, 记录了table包含的元素个数; Lua 5.1 不支持该函数;

> 若需要安装 Lua 5.1 及以上环境, 请参考: [Lua 环境安装](./01-Lua环境安装.md)

示例如下所示:

```lua
-- table_pack.lua

-- 使用table的pack函数
local t = table.pack("apple", "banana", "orange")

-- 使用concat查看table数组
print(table.concat(t, ", "))
-- 输出t数组的长度
print("数组长度: " .. t.n)
```

执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202411281937564.png)

### maxn()

- **官方格式:** table.maxn(list);
- **实际调用格式:** _table.maxn(list)_
- **描述:** 该函数返回指定 table 数组中的最大索引值, 即数组包含元素的个数; 在 Lua 5.4 中已弃用

示例如下图所示: 

![](https://img.upyun.ytazwc.top/blog/202411281941049.png)

### insert()

- **官方格式:** table.insert(table, [ pos,] value);
- **实际调用格式:** _table.insert(table, pos, value)_
- **描述:** pos参数可选, 默认为数组末尾; 该函数用于在指定table数组的指定位置插入值为value的元素; 指定位置后的元素会向后移动;


示例如下所示:

```lua
-- table_insert.lua

-- 先定义一个数组
local cities = {
    "北京",
    "上海",
    "长沙"
}

-- 调用insert插入元素
table.insert(cities, 2, "广州")
print(table.concat(cities, ", "))
table.insert(cities, "天津")
print(table.concat(cities, ", "))
```

执行结果如下:

![](https://img.upyun.ytazwc.top/blog/202411281955681.png)

### remove()

- **官方格式:** table.remove(table, [ pos]);
- **实际调用格式:** _table.remove(table, pos)_
- **描述:** pos参数可选, 默认删除数组最后一个元素; 该函数用于在指定table数组的指定位置删除元素; 指定位置后的元素会向前移动;

代码示例如下所示:

```lua
-- table_remove.lua

local cities = {
    "北京",
    "上海",
    "长沙",
    "广州",
    "南京"
}

table.remove(cities, 4);
print(table.concat(cities, ", "))

table.remove(cities)
print(table.concat(cities, ", "))
```

执行结果如下所示:

![](https://img.upyun.ytazwc.top/blog/202411282000923.png)

### sort()

- **官方格式:** table.sort(arr [, fun(a, b)]);
- **实际调用格式:** _table.sort(arr, fun)_
- **描述:** 该函数用于对指定的 table 数组元素进行升序排序, 也可按照指定函数 fun 中的指定规则进行排序, fun 是一个比较a与b的函数, a, b分别代表数组中两个相邻元素;

**注意:**
1. 如果排序数组中既有字符串又有数值型, 则排序会报错;
2. 如果数组中多个元素相同, 则这相同的多个元素顺序结果不确定;
3. 如果数组元素中包含 nil, 则排序会报错;

示例如下所示:
```lua
-- table_sort.lua

local strs = {"b", "a", "d", "x", "s", "t"}

-- 调用排序-默认排序
table.sort(strs)

print(table.concat(strs, ", "))


-- 使用自定义函数进行排序-倒叙
table.sort(strs, 
function (a, b)
    return a > b
end
)
print(table.concat(strs, ", "))
```

执行结果如下所示:

![](https://img.upyun.ytazwc.top/blog/202411282231520.png)


