let test = document.getElementById('test')
let after = dom.create(`<h1 id="after">after元素</h1>`)
dom.after(test, after)

let before = dom.create(`<h1>before元素</h1>`)
dom.before(test, before)

let wrap = dom.create(`<div style="border:1px solid red">wrap</div>`)
dom.wrap(test, wrap)

let empty = document.getElementById('empty')
console.log(dom.empty(empty))
dom.attr(empty, 'title', '这是empty')

console.log(dom.attr(empty, 'title'))

dom.style(before, { color: 'red' })
dom.class.add(before, 'blue')

console.log(dom.class.has(before, 'blue'))

let f1 = () => {
  alert('click')
}
dom.on(before, 'click', f1)
// dom.off(before, 'click', f1)
console.log(dom.find('#test', box))
console.log(dom.siblings(box))
console.log(dom.next(after))
console.log(dom.pre(after))

dom.each([after, before], (node) => {
  dom.style(node, 'color', 'pink')
})

console.log(dom.index(test2))
