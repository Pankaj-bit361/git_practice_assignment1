function ValidatePrime(num){
for(var i=0;i<=num;i++){
if(num%i==0){
return true;
}
}
return false;
}
ValidatePrime(17);