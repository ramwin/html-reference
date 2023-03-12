---
theme: ./
title: 转正答辩
drawings:
  persist: true
---

# 转正答辩

* 姓名: 王祥
* 部门: 很长很长的名字
* 姓名: 王祥
* 姓名: 王祥


---
layout: menu
---

# 导航

## 个人简介

## 工作内容

## 主要成功

## 总结反思


---

# 工作内容

## 直接用html可以跨行

<table>
  <thead>
    <tr>
        <th>名称</th><th>主要内容</th><th>收获</th>
    </tr>
  </thead>
  <tbody>
    <tr><td rowspan=2>span</td><td>第一行</td><td>结果</td></tr>
    <tr><td>第二行</td><td>结果</td></tr>
    <tr><td><kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd></td><td>next animation or slide</td><td></td></tr>
  </tbody>
</table>

## markdown不行

|标题|内容|
|----|----|
|张三|大学|
|零四|至高|


---

# 表格跨行变色


|对比项目|前 |后 |差异|原因|
|--------|---|---|---|---|
|文件架构|10M|20M|减少50%|去除了冗余代码|
|耗时|40s|毫秒级M|减少99%|减少了复杂的import|
|代码|40s|毫秒级M|减少99%|减少了复杂的import|

<style>
td {
    padding: 30px 10px;
}
td:nth-child(4) {
    color: red;
}
</style>

---

# 展示重点


```markdown
# 展示重点

`
这里是内容
`

```

<Arrow
    x1="56" y1="208"
    x2="456" y2="408"
    color="red"></Arrow>


<div style="border: 1px solid red; width: 400px; height: 200px">
    上面是400x200的箭头, 我是400x200的框
    所以整个页面是按照 960 * 540来的
</div>

<p>怎么快速作图呢, 先手动做一个箭头, 然后读取文件或者永久保存文件</p>

`.slidev/drawings/example/*.svg`


<Arrow
    x1="528" y1="475"
    x2="343" y2="377"
    color="red"></Arrow>


---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
