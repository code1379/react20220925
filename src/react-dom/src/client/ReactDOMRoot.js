import { createContainer } from "react-reconciler/src/ReactFiberReconciler";

// 根节点（内部）
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
// container div#root
export function createRoot(container) {
  // 这里的 root 就是 FiberRootNode
  const root = createContainer(container);
  return new ReactDOMRoot(root);
}
