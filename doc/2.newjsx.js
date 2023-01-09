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
    ["@babel/plugin-transform-react-jsx", {runtime: "automatic"}]
  ]
})

console.log('result',result)

// import { jsx as _jsx} from "react/jsx-runtime";
import { jsx } from "react/jsx-runtime";
// import { jsxs as _jsxs } from "react/jsx-runtime";
// _jsxs("h1", {
//  children: ["hello ", /*#__PURE__*/_jsx("span", {
jsx("h1", {
  children: ["hello ", /*#__PURE__*/jsx("span", {
    style: {
      color: "red"
    },
    children: "world"
  })]
});

// react.createElement  约等于 jsx
