import { createFiberRoot } from "./ReactFiberRoot";
// containerInfo(外面的 container) div#root
export function createContainer(containerInfo) {
  return createFiberRoot(containerInfo);
}
