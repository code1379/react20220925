// React 增删改查 怎么表示？用的二进制
// 按位与 x & y 每个比特都为 1 则为 1，否则为 0
// 按位或 x | y 每个比特为都为 0 时，则为 0， 否则为 1

// 副作用标识
// 在 React 进行 DOM diff 的时候，会计算要执行的操作
const Placement = 0b001; // 1
const Update = 0b010; // 2

let flags = 0b000; // 0
// 增加操作
flags ｜= Placement // === flags | Placement => Ob001 flags = 1
flags ｜= Update // === flags | Update => 0b011 flags = 3

console.log('flags.toString(2)',flags.toString(2)) // 二进制的 11
console.log('flags',flags) // 3

// 删除操作
// 0b011 & 0b110 => 0b010
flags = flags & ~Placement; // Placement 取反 0b110
console.log('flags.toString(2)',flags.toString(2)) // 二进制的 10
console.log('flags',flags) // 2

// 判断是否包含
// 包含
console.log((flags && Placement) === Placement) // false
console.log((flags && Update) === Update) // true

// 不包含
console.log((flags && Placement) === 0) // false
console.log((flags && Update) === 0) // true