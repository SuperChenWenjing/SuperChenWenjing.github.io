---
title: 基础知识
icon: Rrl_s_075
# date: 2019-12-26
category: MySQL
timeline: true
star: true
---

此处是一些 MySQL 数据库的核心知识（持续更新中...）。

<!-- more -->

## 1.MySQL概述

::: tip

在这一章节，我们主要介绍两个部分，数据库相关概念及 MySQL 数据库的介绍、下载、安装、启动及连接。

:::

### 1.1 数据库相关概念

在这一部分，我们先来讲解三个概念：数据库、数据库管理系统、SQL。

| 名称           | 全称                                                         | 简称                               |
| -------------- | ------------------------------------------------------------ | ---------------------------------- |
| 数据库         | 存储数据的仓库（数据是有组织的进行存储）                     | DataBase（DB）                     |
| 数据库管理系统 | 操作和管理数据库的大型软件                                   | DataBase Management System（DBMS） |
| SQL            | 操作关系型数据库的编程语言（定义了一套操作关系型数据库的统一标准） | Structured Query Language（SQL）   |

![MySQL数据库](../assets/数据库操作.png)

而目前主流的关系型数据库管理系统的市场占有率排名如下：

![关系型数据库管理系统的市场占有率排名](../assets/关系型数据库管理系统的市场占有率排名.png)

- Oracle：大型的收费数据库，Oracle 公司产品，价格昂贵。
- MySQL：开源免费的中小型数据库，后来 Sun 公司收购了 MySQL，而 Oracle 又收购了 Sun 公司（目前 Oracle 推出了收费版本的 MySQL，也提供了免费的社区版本）。
- SQL Server：Microsoft 公司推出的收费的中型数据库，C#、.Net 等语言常用。
- PostgreSQL：开源免费的中小型数据库。
- DB2：IBM 公司的大型收费数据库产品。
- SQLLite：嵌入式的微型数据库（Android 内置的数据库采用的就是该数据库）。
- MariaDB：开源免费的中小型数据库（是 MySQL 数据库的另外一个分支、另外一个衍生产品，与 MySQL 数据库有很好的兼容性）。

而不论我们使用的是上面的哪一个关系型数据库，最终在操作时，都是使用 SQL 语言来进行统一操作，因为我们前面讲到 SQL 语言，是操作关系型数据库的<strong style="color: #fb9b5f">统一标准</strong> 。

所以即使我们现在学习的是 MySQL，假如我们以后到了公司，使用的是别的关系型数据库，如：Oracle、DB2、SQLServer，也完全不用担心，因为操作的方式都是一致的。

### 1.2 MySQL数据库

#### 1.2.1 版本选择

![MySQL的Logo](../assets/MySQL的Logo.png)

官网： https://www.mysql.com

MySQL 官方提供了两种不同的版本：

- 社区版本（MySQL Community Server）免费， 但是 MySQL 不提供任何技术支持。
- 商业版本（MySQL Enterprise Edition）收费，可以免费使用 30 天，官方提供技术支持。

我们采用的是 MySQL 最新的社区版 - MySQL Community Server 8.0.26。

#### 1.2.2 下载MySQL

下载地址：https://downloads.mysql.com/archives/installer/

![下载MySQL](../assets/下载MySQL.png)

#### 1.2.3 安装MySQL

要想使用 MySQL，我们首先先得将 MySQL 安装好，我们可以根据下面的步骤，一步一步的完成 MySQL 的安装。

1. 双击官方下来的安装包文件。

   <img src="../assets/MySQL的Window安装包.png" alt="MySQL的Window安装包" style="zoom:50%;" />

2. 根据安装提示一直点击下一步进行安装即可（留意最后几步需要填写`root`用户的密码）。

   ![MySQL安装步骤一](../assets/MySQL安装步骤一.png)

   ![MySQL安装步骤二](../assets/MySQL安装步骤二.png)

   ![MySQL安装步骤三](../assets/MySQL安装步骤三.png)

   ![MySQL安装步骤四](../assets/MySQL安装步骤四.png)

   ![MySQL安装步骤五](../assets/MySQL安装步骤五.png)

   ![MySQL安装步骤六](../assets/MySQL安装步骤六.png)

   ![MySQL安装步骤七](../assets/MySQL安装步骤七.png)

   ![MySQL安装步骤八](../assets/MySQL安装步骤八.png)

   ![MySQL安装步骤九](../assets/MySQL安装步骤九.png)

   ![MySQL安装步骤十](../assets/MySQL安装步骤十.png)

3. 配置MySQL。

   ::: tip

   安装好 MySQL 之后，还需要配置环境变量，这样才可以在任何目录下连接 MySQL。

   :::

   1. 在此电脑上，右键选择属性。

      <img src="../assets/电脑右键属性.png" alt="电脑右键属性" style="zoom: 33%;" />

   2.  点击左侧的 "高级系统设置"，选择环境变量。

      ![设置环境变量](../assets/设置环境变量.png)

   3. 找到 Path 系统变量，点击 "编辑"。

      ![编辑环境变量](../assets/编辑环境变量.png)

   4. 选择 "新建"，将 MySQL Server 的安装目录下的 bin 目录添加到环境变量。

      ![编辑环境变量路径](../assets/编辑环境变量路径.png)

#### 1.2.4 启动和停止

MySQL 安装完成之后，在系统启动时，会自动启动 MySQL 服务，我们无需手动启动了。

当然，也可以手动的通过指令启动停止，以管理员身份运行`cmd`，进入命令行执行如下指令：

```bash
# 启动 MySQL
net start mysql80
# 停止 MySQL
net stop mysql80
```

![启动和停止MySQL服务](../assets/启动和停止MySQL服务.png)

**注意**：上述的`mysql80`是我们在安装 MySQL 时，默认指定的 MySQL 的系统服务名，不是固定的，如果未改动，默认就是`mysql80`。

![MySQL服务名称](../assets/MySQL服务名称.png)

#### 1.2.5 客户端连接

- **方式一**：使用 MySQL 提供的客户端命令行工具。

![链接MySQL的方式一](../assets/链接MySQL的方式一.png)

- **方式二**：使用系统自带的命令行工具执行指令。

  - 指令：`mysql [-h 127.0.0.1] [-P 3306] -u root -p`。

  - 参数：

    - -h：MySQL 服务所在的主机 IP。

    - -P：MySQL 服务端口号（默认 3306）。

    - -u：MySQL 数据库用户名。

    - -p：MySQL 数据库用户名对应的密码。

  `[]`内为可选参数，如果需要连接远程的 MySQL，需要加上这两个参数来指定远程主机 IP、端口，如果连接本地的 MySQL，则无需指定这两个参数。

  **注意**：使用这种方式进行连接时，需要安装完毕后配置 PATH 环境变量。

#### 1.2.6 数据模型

1. 关系型数据库（RDBMS）。

   概念：建立在关系模型基础上，由多张相互连接的二维表组成的数据库。

   而所谓二维表，指的是由行和列组成的表，如下图（就类似于 Excel 表格数据，有表头、有列、有行，还可以通过一列关联另外一个表格中的某一列数据）。

   我们之前提到的 MySQL、Oracle、DB2、SQLServer 这些都是属于关系型数据库，里面都是基于二维表存储数据的。

   简单来说，基于二维表存储数据的数据库就成为关系型数据库，不是基于二维表存储数据的数据库，就是非关系型数据库。

   ![关系型数据库的表特点](../assets/关系型数据库的表特点.png)

   特点：

   - 使用表存储数据，格式统一，便于维护。
   - 使用 SQL 语言操作，标准统一，使用方便。

2. 数据模型。

   MySQL 是关系型数据库，是基于二维表进行数据存储的，具体的结构图下：

   ![MySQL服务器的数据模型](../assets/MySQL服务器的数据模型.png)

   - 我们可以通过 MySQL 客户端连接数据库管理系统 DBMS，然后通过 DBMS 操作数据库。
   - 可以使用 SQL 语句，通过数据库管理系统操作数据库，以及操作数据库中的表结构及数据。
   - 一个数据库服务器中可以创建多个数据库，一个数据库中也可以包含多张表，而一张表中又可以包含多行记录。

## 2.SQL

SQL 全称 Structured Query Language（结构化查询语言）。

SQL 操作关系型数据库的编程语言，定义了一套操作关系型数据库统一**标准** 。

### 2.1 SQL通用语法

在学习具体的 SQL 语句之前，先来了解一下 SQL 语言的通用语法。

1. SQL 语句可以单行或多行书写，以分号结尾。

2. SQL 语句可以使用空格或缩进来增强语句的可读性。

3. MySQL 数据库的 SQL 语句不区分大小写（关键字建议使用大写）。
4. 注释：
   - 单行注释：`-- 注释内容`或`# 注释内容`。
   - 多行注释：`/* 注释内容 */`。

### 2.2 SQL的分类

SQL 语句，根据其功能，主要分为四类：DDL、DML、DQL、DCL。

| 分类 | 全称                       | 说明                                                       |
| ---- | -------------------------- | ---------------------------------------------------------- |
| DDL  | Data Definition Language   | 数据定义语言，用来定义数据库中的对象（数据库、表、字段）。 |
| DML  | Data Manipulation Language | 数据操作语言，用来对数据库中的数据进行增、删、改。         |
| DQL  | Data Query Language        | 数据查询语言，用来查询数据库中表的记录。                   |
| DCL  | Data Control Language      | 数据控制语言，用来创建数据库用户、控制数据库的访问权限。   |

### 2.3 DDL

::: tip

Data Definition Language，数据定义语言，用来定义数据库对象(数据库、表、字段) 。

:::

#### 2.3.1  数据库操作

1. 查询所有数据库

   ```bash
   show databases;
   ```

2. 查询当前数据库

   ```bash
   select database();
   ```

3. 创建数据库

   ```bash
   # 语法
   create database [ if not exists ] 数据库名称 [ default charset 字符集 ] [ collate 排序规则 ] ;
   ```

**案例**：

1. 创建一个 demo 数据库, 使用数据库默认的字符集。

<strong style="color: #fb9b5f">未完待续...</strong>
