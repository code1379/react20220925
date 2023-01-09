// 在 react 17 以前，babel 转换是老的写法

const babel = require("@babel/core")

const sourceCode = `
<h1>
  hello <span style={{ color: "red"}}>world</span>
</h1>
`

const result = babel.transform(sourceCode, {
  plugins: [
    // 转换器，将 jsx 转换成普通的写法的转换器
    ["@babel/plugin-transform-react-jsx", {runtime: "classic"}]
  ]
})

console.log('result',result)

// 元素类型，属性，儿子
/**
 *  code: '/*#__PURE__*/React.createElement("h1", null, "hello ", /*#__PURE__*/React.createElement("span", {\n' +
    '  style: {\n' +
    '    color: "red"\n' +
    '  }\n' +
    '}, "world"));',
 */
