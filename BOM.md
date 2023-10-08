<!-- @format -->

##### BOM

```text
浏览器对象模型,根节点是window，浏览器窗口交互的一些对象
```

###### 窗口控制

```js
* moveBy(x,y)：从当前位置移动窗口
* moveTo(x,y)：移动窗体左上角到相对于屏幕左上角(x,y)点
* resizeBy(w,h)：相对窗体当前大小,调整宽度和高度
* resizeTo(w,h)：把当前窗口调整为w个像素，高度调整为h个像素
* scrollTo(x,y)：滚动条相对于窗体宽度或高度的x/y个像素的位置
* scrollBy(x,y)：滚动条横向滚动条向左移动x个像素，纵向滚动条向下移动y个像素
* window.open()：可以打开特定的url，也可以打开新的浏览器窗口
* window.close()：用于关闭window.open()打开的窗口
```

##### location

```js
url: "http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents"

* location.hash:url中#后面的字符串"#contents"
* host：域名和端口号"www.wrox.com:80"
* hostname：域名"www.wrox.com"
* href：完整的url"http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents"
* pathname：服务器下面的文件路径"/WileyCDA/"
* port：端口号"80"
* protocol：使用的协议"http:"
* search：查询参数"?q=javascript"

注意：除了hash之外，只要修改location的属性都会重新加载url

location.reload()会重新刷新当前页面;这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载

如果要强制从服务器中重新加载，传递一个参数true即可
```

##### Navigator

```text
navigator 对象主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂
```

##### Screen

```text
保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度
```

##### History

```text
history对象主要用来操作浏览器URL的历史记录，可以通过参数向前，向后，或者向指定URL跳转
```

```js
* history.go()//接收一个整数数字或者字符串参数
* history.forward()//向前跳转一个页面
* history.back()//向后跳转一个页面
* history.length:获取历史记录数
```
