<!-- @format -->

###### DOM

```html
<div id="box">
	<p
		title="title"
		class="box2">
		content
	</p>
</div>
```

```text
div、P是元素节点;title是属性节点；content是文本节点
```

###### 创建节点

```javascript
* 创建元素节点
  const elementNode = document.createElement("div")
* 创建文本节点
  const textNode = document.createTextNode("content")
* 创建属性节点
  const propertyNode = document.createAttribute("title")
* 创建文档碎片,存储临时节点,把文档碎片内容一次性添加到DOM中
  const fragment=document.createDocumentFragment("box")
```

##### 获取节点

```javascript
* 通过css选择器获得DOM元素
  document.querySelector(".element")//单个DOM
  document.querySelectorAll("p")//所有的p元素
  document.getElementById("box")//获取id=box这个对象的引用
  document.getElementsByClassName("box2")//返回class=box2的对象集合
  document.getElementsByTagName("div")//返回指定标签的对象集合
  document.getElementsByName("name")//返回拥有指定名称的对象集合
  document.documentElement//获取页面中的HTML标签
  document.body//获取页面中的body
  document.all['']//获取页面中所有元素节点的对象集合
```

###### Document.querySelectorAll

```javascript
elementList = parentNode.querySelectorAll(selectors);
* 返回与指定的选择器匹配的文档元素列表。
* 返回值:一个对象:NodeList。
* selectors:合法的 CSS selector
```

###### Document.getElementById

```javascript
* document.getElementById()返回一个匹配特定ID的元素。
* 返回值: 返回一个匹配到 ID 的 DOM Element 对象。
```

###### Document.getElementsByTagName

```javascript
* 语法:getElementsByTagName(name)
* 返回一个对象,具有给定标签名称的元素。
```

###### Document.getElementsByClassName()

```javascript
* 语法:getElementsByClassName(names)
* names:表示要匹配的类名的字符串；多个类名用空格分隔。
* 返回值:返回具有所有给定类名的所有子元素的类数组对象。
```

###### Document.getElementsByName()

```javascript
* 语法:getElementsByName(name)类似于getElementById
* name:寻找的元素的属性值
* 返回值:文档中具有给定属性 NodeList的元素集合。
```

##### 更新节点

```javascript
* innerHTML:直接修改DOM元素节点中的文本,或者修改DOM元素节点
  注意:如果不是空节点,innerHTML会直接替换掉原来的内容

* innerText || textContent:将文本填充到指定DOM中的文本节点中
  注意:innerText不返回隐藏元素的文本，而textContent返回所有文本
```

##### Style

```javascript
* DOM节点的style属性对应所有的CSS，可以直接获取或设置。遇到-需要转化为驼峰命名
  const p = document.getElementById()
    p.style.color = "#fff"
    p.style.fontSize = "20px"
    p.style.paddingTop = "2px"
```

##### 添加节点

```javascript
appendChild():在最后的一个节点后面添加一个子节点
  parentNode.appendChild(childNode)

insertBefore():把子节点插入到指定的位置
  parentNode.insertBefore(newElement,referenceElement)//向referenceElement之前插入

setAttribute():在指定元素中添加一个属性,如果已经有这个元素就改变属性值
  elementNode.setAttribute(property,value)//参数名,参数属性值
```

##### 删除节点

```javascript
* 删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉
const child = document.getElementById("child") //需要删除的节点
const parent = child.parentElement
const removed = parent.removeChild(child)
注意：删除了的节点只是在DOM中消失,在内存中还是存在的
```
