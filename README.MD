

* create 根据html字符串创建一个元素
```js
create(string) {
    const container = document.createElement('template')
    console.log(container)
    container.innerHTML = string.trim()
    return container.content.firstChild
  }
```
* after 在元素后面插入元素
```js
after(node, newDom) {
    node.parentNode.insertBefore(newDom, node.nextSibling)
  }
```
* before 在元素签名插入元素

```js
before(node, newDom) {
    node.parentNode.insertBefore(newDom, node)
  }
```
* append 把一个元素插入到另外一个元素队尾
```js
append(parent, node) {
    parent.appendChild(node)
  }
```
* wrap 使用一个元素将另外一个元素包起来
```js
wrap(node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
  }
```
*  remove 删除
```js
remove(node) {
    node.parentNode.removeChild(node)
    return node
  }
```
* empty 清空子元素
```js
  empty(node) {
    const { childNodes } = node
    let array = []
    for (var i = childNodes.length - 1; i >= 0; i--) {
      array.push(childNodes[i])
      dom.remove(childNodes[i])
    }
    return array
  }
```
* attr 获取属性
```js
  attr(node, title, value) {
    if (arguments.length === 3) {
      node.setAttribute(title, value)
    } else {
      return node.getAttribute(title)
    }
  }
  ```
  * text 设置或者获取文本
  ```js
  text(node, string) {
    if (arguments.length === 2) {
      if ('innerText' in node) {
        node.innerText = string
      } else {
        node.textContent = string
      }
    } else {
      if ('innerText' in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    }
  }
  ```
  * html 设置或者获取html
  ```js
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string
    } else {
      return node.innerHTML
    }
  }
  ```
  * style 设置或者获取style
  ```
  style(node, name, value) {
    if (arguments.length === 3) {
      // 设置 dom.style(div,'color','red')
      node.style[name] = value
    } else if (arguments.length === 2) {
      if (typeof name === 'string') {
        // 获取
        return node.style[name]
      } else {
        // 设置dom.style(div,{color:'red'})
        const object = name
        for (let key in object) {
          node.style[key] = object[key]
        }
      }
    }
  }
  ```
 * class 对class 增加 删除 判断是否存在
 ```js
  class: {
    add(node, className) {
      node.classList.add(className)
    },
    remove(node, className) {
      node.classList.remove(className)
    },
    has(node, className) {
      return node.classList.contains(className)
    },
  }
  ```
  * on 绑定事件
  ```
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  }
  ```
  * off 清除事件绑定
  ```
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  }
  ```
  * find 查找元素
  ```
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  }
  ```
  * parent 返回父节点
  ```
  parent(node) {
    return node.parentNode
  }
  ```
  * children 返回子元素
  ```
  children(node) {
    return node.children
  }
  ```
  * siblings 返回兄弟元素
  ```
  siblings(node) {
    return Array.from(node.parentNode.children).filter((d) => d !== node)
  }
  ```
  * next 返回下一个元素
  ```
  next(node) {
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  }
  ```
  * pre 返回前一个元素
  ```
  pre(node) {
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  }
  ```
  * each 给多个节点执行fn
  ```js
  each(nodeList, fn) {
    nodeList.forEach((node) => {
      fn.call(null, node)
    })
  }
  ```
  * index 找到元素在父元素中排位第几
  ```js
  index(node) {
    const list = dom.children(node.parentNode)
    for (let i = 0; i < list.length; i++) {
      if (list[i] === node) return i
    }
  }
  ```
