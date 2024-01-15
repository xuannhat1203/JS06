let n = +prompt("Nhập số n");
let sum = 0;
let a = 1;
for (let i = 1; i <= n; i++) {
  a *= i;
  sum += a;
}
console.log("Giá trị của biểu thức S là:", sum);