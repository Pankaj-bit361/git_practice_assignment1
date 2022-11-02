function ValidatePrime(num){
    let factor=0;
for(var i=0;i<=num;i++){
if(num%i==0){
factor++;
}
}if(factor==2){
return true;
}else{return false;}}
 let ans=ValidatePrime(17);
 if(ans==true){
    console.log("Prime No.")
 }else{
    console.log("NA")
 }