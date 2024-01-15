let a =+prompt("Nhap so a");
let b =+prompt("Nhap so b");
let c =+prompt("Nhap so c");
let d =+prompt("Nhap so d");
let max = Math.max(a,b,c,d);
let bcnn = max;
while(true){
    if(bcnn % a == 0 && bcnn % b == 0 && bcnn % c == 0 && bcnn % d == 0){
        break;
    }
    bcnn += max;
}
console.log(bcnn);