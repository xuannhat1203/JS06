let a = +prompt("Nhap so can tim");
let b = 0;
let c = 1;
let fibo;
for(let i=1;i<=a;i++){
    fibo = b + c;
    c = b;
    b = fibo;
}
console.log("so fibonacii thu " + a + " la " + fibo);