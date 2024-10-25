
function check(){
    var number1 = document.getElementById('number').value;

    if(number1 === ""){
        document.getElementById('result').innerText = "Enter a number"
    }else if(number1 % 2 !== 0){
        document.getElementById('result').innerText = "The number is an odd number"
    }else if(number1 % 2 === 0){
        document.getElementById('result').innerText = "The number is an even number"
     }else{
        document.getElementById('result').innerText = "enter a valid number"

     }
       
}