let weight= prompt("Enter your weight");   /*prompt() takes the input*/
let height= prompt("Enter your height");

function BMI(height,weight){
    let bmi= weight/height
    return bmi
}

bmiValue= BMI(height,weight)
alert("BMI value is"+ bmiValue) /*alert() prints the message in the virtual alert box*/