let arr = [1, 2, 3]

const result = []
result.push([...arr])
arr.length = 0

console.log(result);
