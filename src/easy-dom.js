window.dom = {
  // 输入string
  create(string) {
    const container = document.createElement('template')
    container.innerHTML = string.trim()
    return container.content.firstChild
  },
  after(node, newDom) {
    node.parentNode.insertBefore(newDom, node.nextSibling)
  },
  before(node, newDom) {
    node.parentNode.insertBefore(newDom, node)
  },
  append(parent, node) {
    parent.appendChild(node)
  },
  wrap(node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
  },
  remove(node) {
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) {
    const { childNodes } = node
    let array = []
    for (var i = childNodes.length - 1; i >= 0; i--) {
      array.push(childNodes[i])
      dom.remove(childNodes[i])
    }
    return array
  },
  attr(node, title, value) {
    if (arguments.length === 3) {
      node.setAttribute(title, value)
    } else {
      return node.getAttribute(title)
    }
  },
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
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string
    } else {
      return node.innerHTML
    }
  },
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
  },
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
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  parent(node) {
    return node.parentNode
  },
  children(node) {
    return node.children
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((d) => d !== node)
  },
  next(node) {
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  },
  pre(node) {
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  },
  each(nodeList, fn) {
    nodeList.forEach((node) => {
      fn.call(null, node)
    })
  },
  index(node) {
    const list = dom.children(node.parentNode)
    for (let i = 0; i < list.length; i++) {
      if (list[i] === node) return i
    }
  },
}
