### 小红书

* 一面 · 技术

1. 自我介绍
2. 说说自己最好的项目
3. 自己最熟悉的webpack插件，有没有自己编写过插件
4. 说说http和https的区别，以及https的具体流程是怎么样的？
5. 说说性能优化
6. 自己做过哪些性能优化
7. 手写题: 将input输入数据结构通过cleaning函数转换成output期望结构

```javascript
const input = [{
  province: '四川省',
  city: '成都市',
  county: '金牛区'
}, {
  province: '四川省',
  city: '成都市',
  county: '成华区'
}, {
  province: '四川省',
  city: '乐山市',
  county: '沙湾区'
}], {
  province: '上海市',
  city: '上海市',
  county: '浦东新区'
}

console.dir(cleaning(input))

// excepted: 
// const output = [{
//   type: 'province',
//   name: '四川省',
//   children: [{
//     type: 'city',
//     name: '成都市',
//     children: [{
//       type: 'county',
//       name: '金牛区',
//     }, {
//       type: 'county',
//       name: '成华区',
//     }]
//   }, {
//     type: 'city',
//     name: '乐山市',
//     children: [{
//       type: 'county',
//       name: '沙湾区',
//     }]
//   }]
// }, {
//   type: 'province',
//   name: '上海市',
//   children: [{
//     type: 'city',
//     name: '上海市',
//     children: [{
//       type: 'county',
//       name: '浦东新区',
//     }]
//   }]
// }]
```
8. 你有没有什么问题？

* 二面 · 技术
1. 自我介绍
2. 说说组件库中为什么会用到webpack, gulp, rollup，以及他们的区别
3. 说说组件库使用的版本管理方案
4. 说说monorepo的理解以及解决的问题
5. react hooks解决了什么问题，你觉得hooks的优点是什么
6. 说说组件库里最复杂的一个组件
7. 长列表怎么优化，怎么解决性能问题，有哪些算法？
8. 手写题：有一个任务队列，同一时间最多能执行5个（limit）任务，如果有任务执行完毕，才可以将新的任务放到任务队列里面执行。当所有任务执行完毕后，调用回调函数。

```javascript
function runTasks (tasks, limit, callback) {

}
```
9. 你有没有什么问题？

* 三面 · 技术
1. 自我介绍
2. 页面间跳转是的loading怎么解决，有哪些方案？
3. 说一说性能优化
4. ssr可以提升性能的点具体在哪里
5. 长列表问题
6. 有没有了解业界一些优化体验的最佳实践。
7. 你有没有什么问题？

* 四面 * hrbp
1. 看机会原因
2. 期望薪资待遇
3. 你有没有什么问题？
