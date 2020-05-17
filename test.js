a = [1,2,4,4,5]
console.log(a.reduce(
    (x, y) => 4
  )
)
function chunk(arr, size = 1) {
  return Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (v, i) => arr.slice(i * size, i * size + size)
  );
}
console.log(chunk([2,34,45,6], 2)) 