function ValidatePrime(num){

let count=0;
for(var i=0;i<=num;i++){
if(num%i==0){
count++;
}
}if(count==2){
return true;
}else{
return false
}
}
let code=ValidatePrime(17)
if(ans==true){
console.log("This is a Prime")
}else{
coonsole.log("No a Prime Number");
}


