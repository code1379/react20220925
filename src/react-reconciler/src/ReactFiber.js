import { HostRoot } from "./ReactWorkTags";
import { NoFlags } from "./ReactFiberFlags";
/**
 *
 * @param {*} tag fiber的类型 函数组件 0 类组件 1 原生组件 5 根元素 3
 * @param {*} pendingProps 新属性，等待处理或者生效的属性
 * @param {*} key 唯一标识
 */
export function FiberNode(tag, pendingProps, key) {
  this.tag = tag;
  this.key = key;
  // fiber 类型，来自虚拟DOM节点的type => span div p
  this.type = null;
  // 此fiber 对应的真实DOM节点 h1 => 真实的 h1的 node
  this.stateNode = null;
  // 指向父节点
  this.return = null;
  // 指向第一个子节点
  this.child = null;
  // 指向弟弟
  this.sibling = null;

  //fiber哪来的？通过虚拟DOM节点创建的，虚拟DOM会提供 pendingProps 用来创建 fiber节点的属性
  // 处理完成之后将值给到 memorizedProps
  this.pendingProps = pendingProps; // 等待生效的属性
  this.memoizedProps = null; //已经生效的属性

  // 每个 fiber 有自己的状态，每一种 fiber 存的类型是不一样的。
  // - 类组件对应的 fiber，存的就是类的实例的状态
  // - HostRoot 存的就是要渲染的元素
  this.memoizedState = null;

  // 每个fiber 身上可能有更新队列（类组件 setState）
  this.updateQueue = null;

  // 副作用标识，表示要针对 此 fiber 节点进行何种操作
  this.flags = NoFlags;
  // 子节点对应的副作用标识
  this.subtreeFlags = NoFlags;
  // 替身，轮替（出租车 用两个人 白天一个晚上一个） 在后面讲 DOM Diff的时候会用到
  this.alternate = null;
}

export function createFiber(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key);
}
export function createHostRootFiber() {
  return createFiber(HostRoot, null, null);
}
