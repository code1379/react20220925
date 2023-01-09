import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";
// 保留属性不会被放到 props 上
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
}

// 元素类型， children 在 config 里面
export function jsxDEV(type, config) {
  let propName; // 属性名
  const props = {}; // 属性对象
  let key = null; // 每个虚拟 dom 可以有一个可选的 key 属性，用来区分一个父节点下的不同子节点的
  let ref = null; // 引用，后面可以通过这个实现获取真实 dom 的需求
  if(hasValidKey(config)) {
    key = config.key
  }
  if(hasValidRef(config)) {
    ref = config.ref
  }

  // 遍历 config 上的每个属性
  for(propName in config) {
    if(Object.prototype.hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      // 将值拷贝到 props 上
      props[propName] = config[propName]
    }
  }

  return ReactElement(type, key, ref, props)
 }

 function hasValidKey(config) {
  return config.key !== undefined
 }

  function hasValidRef(config) {
  return config.ref !== undefined
 }


function ReactElement(type, key, ref, props) {
  // 这就是 React 元素，也被称之为 虚拟DOM。就是这样一个对象
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props
  }
 }
