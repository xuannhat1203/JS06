let a =+prompt("nhap so a");
let sum = 0;
for(let i=1;i<a;i++){
    if(sum < a){
        sum+=i;
    }else{
        console.log("so lon nhat la: ",i);
        console.log("tong la: ",sum);
    }
}