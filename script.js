
var newLine=true; // boolean variable. Determines if the next thing the user clicks or type should be on a new line
var value1;
var currentOperator;

//Event handler for any numeric button when pressed
function getBtnPressed(button){
    
    if(newLine){
        document.getElementById("inputBox").value=button;
        newLine=false;
    }else{
         let currentValue = document.getElementById("inputBox").value;
         document.getElementById("inputBox").value = currentValue+button;
    }
      
}

//Event hanlder for AC button when pressed
function getBtnACPressed(){
     document.getElementById("inputBox").value="0";
     newLine=true;
}

//Event handler for operator button when is pressed

function getOperatorBtnPressed(operator){
    currentOperator=operator;

    value1=parseInt(document.getElementById("inputBox").value);

    newLine=true;
}

//Event handler for the equals to button when pressed

function getEqualsBtnPressed(){
    var value2 =parseInt(document.getElementById("inputBox").value)
    var answer;

    switch(currentOperator){
        case"+":
        answer=value1+value2
        break;

         case"*":
        answer=value1*value2
        break;

         case"/":
        answer=value1/value2
        break;

         case"-":
        answer=value1-value2
        break;

    }
    document.getElementById("inputBox").value =answer;
    value1="0";
    value2="0"
    newLine=true;
}

