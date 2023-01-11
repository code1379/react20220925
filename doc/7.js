function initialUpdateQueue(fiber) {
  // 创建一个新的更新队列
  const queue = {
    shared: {
      // pending 等待生效的队列
      // pending 其实是一个循环链表
      pending: null,
    },
  };

  fiber.updateQueue = queue;
}

function createUpdate() {
  return {};
}

function enqueueUpdate(fiber, update) {
  const updateQueue = fiber.updateQueue;
  const shared = updateQueue.shared;
  const pending = shared.pending;
  if (pending == null) {
    // 为空，next 指向自己
    update.next = update;
  } else {
    // 如果更新队列不为空，取出第一个更新
    update.next = pending.next;
    // 然后让原来队列的最后一个 next 指向新的
    // pending 指向最后一次新的更新
    pending.next = update;
  }
  updateQueue.shared.pending = update;
}

function processUpdateQueue(fiber) {
  const queue = fiber.updateQueue;
  // 这里相当于先取到 pending 的值，之后在下面置为 null
  const pending = queue.shared.pending;
  if (pending != null) {
    queue.shared.pending = null;
    // 最后一个更新
    const lastPendingUpdate = pending;
    const firstPendingUpdate = lastPendingUpdate.next;
    // 把环状链表断开
    lastPendingUpdate.next = null;
    let newState = fiber.memoizedState;
    let update = firstPendingUpdate;
    while (update) {
      newState = getStateFromUpdate(update, newState);
      update = update.next;
    }
    fiber.memoizedState = newState;
  }
}

function getStateFromUpdate(update, newState) {
  return Object.assign({}, newState, update.payload);
}

let fiber = { memoizedState: { id: 1 } };

initialUpdateQueue(fiber);

let update1 = createUpdate();
update1.payload = { name: "zhufeng" };
enqueueUpdate(fiber, update1);
let update2 = createUpdate();
update2.payload = { age: 14 };
enqueueUpdate(fiber, update2);

// 基于老状态计算新状态
processUpdateQueue(fiber);
console.log("fiber.memoizedState", fiber.memoizedState);
