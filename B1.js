let a =+prompt("Nhap so a");
let sum = 0;
for(let i = 1; i<=a;i++){
    console.log(i);
    if(i%2 !=0){
        sum+=i;
    }
}
console.log("tong cac so le la:",sum);
