1. 按教程上直接把前面在child1项目中打包好的elements.js引入到html中，然后我正常的肯定是想在app.component.html中使用。会报错, 因为我们启动走的是ng serve，最好还是放到angular.json文件中引用

```
// angular.json
 "scripts": [
      "src/assets/child1/elements.js"
  ]

// app.component.html
<patient-list></patient-list>

```

接下来：
  - 路由如何动态引用js 还有路由复用
  - http service是否能用
  - 对于angular + react 之类的不同框架，有种single-SPA做法，参考的链接里面，有提到过package包的方式，不太推荐，就是更新比较麻烦，相比推荐直接使用http://example/elements.js 这样直接用地址的方式，每次提交分支自动更新js


  