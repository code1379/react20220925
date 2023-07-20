import { createHostRootFiber } from "./ReactFiber";
import { initialUpdateQueue } from "./ReactFiberClassUpdateQueue";
function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}

export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);
  // ! 这之前都是在创建 FiberRootNode，简单来说 FiberRootNode = containerInfo，它的本质是一个真实的容器 DOM 节点 div#root。其实就是一个真实的DOM，只不过包装了一下

  // 创建 fiber 树（根节点） HostRootFiber
  const uninitializedFiber = createHostRootFiber();
  // 根容器的 current 指向当前的 根 fiber
  root.current = uninitializedFiber;
  // 根 fiber 的 stateNode，也就是真实Dom节点指向 FiberRootNode
  uninitializedFiber.stateNode = root;
  initialUpdateQueue(uninitializedFiber);
  return root;
}
