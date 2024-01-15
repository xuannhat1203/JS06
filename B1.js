let a = +prompt("Nhap so a");
let sum = 0;
let count = 1;
let max = 0;
for (let i = 1; i < a; i++) {
    sum += i;
    if (sum % 2 !== 0 && sum > maxSum) {
        maxSum = sum;
        count++;
    }
}
console.log(max);
