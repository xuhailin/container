1. 按教程上直接把前面在child1项目中打包好的elements.js引入到html中，然后我正常的肯定是想在app.component.html中使用。会报错, 因为我们启动走的是ng serve，最好还是放到angular.json文件中引用

```
// angular.json
 "scripts": [
      "src/assets/child1/elements.js"
  ]

// app.component.html
<patient-list></patient-list>

```

2. 路由这块问题可多了，建议不要在容器层去操作web component的内部路由