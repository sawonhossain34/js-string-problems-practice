// homework
function max3(num1 , num2 , num3){
if(num1 > num2 && num1 > num3){
    console.log('num1 is a maximum');
}else if(num2 > num1 && num2 > num3){
    console.log('num2 is a maximum');
}else{
    console.log('num3 is a maximum');
}

}
    
const dela = 89;
    const nill = 78;
    const kiku = 97;
    const result =max3(dela, nill, kiku);
    console.log(result);