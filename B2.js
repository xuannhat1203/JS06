let a =+ prompt("Nhap so a");
let b =+prompt("Nhap so b");
let sum1=0;
let sum2=0;
for(let i=a;i<=b;i++){
    if(i%2==0){
        sum1+=i;
    }else{
        sum2+=i;
    }
}
console.log("tong cac so chan la: ",sum1);
console.log("tong cac so le la: ",sum2);