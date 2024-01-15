let a =+prompt("Nhap so a");
let b =+prompt("Nhap so b");
let count = 0;
for(let i=a;i>=1;i--){
    for(let j=b;j>=1;j--){
        if(i==j){
            count++;
        }
    }
}
console.log("co the cat thanh " + count + " hinh vuong" );