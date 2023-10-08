/**
 * DOM文档对象模型是HTML和XML文档的接口
 *
 * @format
 */

//创建节点(接收一个参数创建的元素标签名)
const node = document.createElement("div")

//创建文本节点
const textNode = document.createTextNode("string")

//创建文档碎片
const fragment = document.createDocumentFragment()
const ul = document.getElementById("ul")
const browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"]
browsers.forEach(browsers => {
	let li = document.createElement("li")
	li.textContent = browsers
	fragment.appendChild(li)
})
ul.appendChild(fragment)
/**
 * @注意
 * 文档片段存在于内存中,并不在DOM树中,将片段插入页面时不会引起页面回流
 */

//创建属性节点(可以是自定义属性)
const attribute = document.createAttribute("index")

//获取节点返回第一个符合的结果(参数为css选择器，伪类不会返回)
const el = document.querySelector("#id")

//获取节点返回元素列表(nodeList)是静态实例,并不是实时查询
const els = document.querySelectorAll("div.note") //返回所有的div列表,其中class包含note
const matches = document.querySelectorAll("li[data-src]") //使用属性选择器返回文档中属性名为"data-src"的元素列表
const matches2 = document.querySelectorAll("li[data-active = '1']") //返回文档中data-active = 1 的元素

//通过id名获取节点
const id = document.getElementById("id的属性值")

//通过class名获取节点(实时的集合)
const elements = document.getElementsByClassName("class的属性值")

//通过标签名获取节点(实时的集合)
const tag = document.getElementsByTagName("标签名")

//通过name值获取节点列表(注意name要唯一,可能会返回id值和name值一样的节点)
const name = document.getElementsByName("元素的name值")

//获取页面中的HTML元素，返回文档对象的根元素(只读)<html></html>
const html = document.documentElement

//获取页面中的body部分
const body = document.body

/**
 * 更新节点
 */
//innerHTML 可以修改DOM文本内容,也可以通过html片段修改DOM节点,如果节点为空可以修改这个节点,如果不为空则会替换原来所有的子节点
const p = document.getElementById("p")
p.innerHTML = "ABC"
p.innerHTML = "<span>ABC</span>"
/**
 * @注意
 * 使用innerHtml有安全问题,如果只是插入文本使用textContent
 */

//innerText表示一个节点及其后代的渲染文本内容
const h3 = document.getElementsByTagName("h3")[0]
h3.innerText = "text"

//textContent
const h4 = document.getElementsByClassName("title")[0]
h4.textContent = "Title"
/**
 * @注意
 * innerText 可以操作已被渲染的内容,textContent不会
 * innerText 不返回隐藏的元素文本,textContent返回所有文本
 * innerText 会触发回流 使用textContent性能更好,可以防止XSS攻击
 */

//style style属性对应所有的css 可以直接获取,如果有"-"需要转化为驼峰
const h5 = document.querySelector("h5")
h5.style.color = "red"
h5.style.fontSize = "20px"

//appendChild，如果被插入的节点已经存在于当前的文档中,只会将其移动到新的位置
const h6 = document.createElement("h6")
document.body.appendChild(h6)
//如果需要保留文本中的节点,可以先使用cloneNode()创建副本
h6.cloneNode()

//insertBefore 把子节点插入指定位置
const insertedNode = parentNode.insertBefore(newNode, referenceNode)

//setAttribute()设置指定元素的某个属性,如果有这个属性就更新,否则添加新的属性
const h7 = document.createElement("h7")
h7.setAttribute(index, 0)

//getAttribute()获取某个属性的当前值
h7.getAttribute(index)

//removeAttribute()删除某个属性.不能链式调用,因为不会返回任何有效值
h7.removeAttribute(index)

//removeChild()删除DOM中的某个子节点,返回删除的节点
const oldNode = parentNode.removeChild(child)
/**
 * @注意
 * removeChild()虽然删除了节点,不在DOM树中,但还存在内存中,可以再次被添加到别的位置
 */
