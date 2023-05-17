'use strict';
let usName=prompt("Please enter your name");
let usGender=prompt("Please enter your gender (male/female)");
let usAge=prompt("Please enter your age");
let usSkip=confirm("Do you like to skip welcoming message?");
userWelcome();
let qOne=confirm("Do you enjoy our website?");
let qTwo=confirm("Is the site useful?");
let qThree=confirm("Is it easy to use?");
let answerArr=[usName,usGender,usAge,usSkip,qOne,qTwo,qThree];

function userName(){
    if(usName){
        console.log(usName);
    }else{
        console.log("invalid");
    }
};

function userGender(){
    if(usGender){
        console.log(usGender);
    }else{
        console.log("invalid");
    };
};

function userAge(){
    if(usAge){
        if(usAge>0){
            console.log("Welcome;");
        }else{
        alert('Age is invalid');
}
    }else{
        console.log("invalid");
    }
};

function skip(){
if(usSkip){
    console.log(usSkip);
}else{
    console.log("invalid");
}
};

function userWelcome(){
        switch(usGender){
            case'female':
            alert("Welcome "+"Ms "+usName);
            break;
            case'male':
            alert("Welcome "+"Mr "+usName);
            break;
            default:
                alert("Welcome " + usName);
        }
    };


function userQuestion1(){
if(qOne){
    console.log(qOne);
}else{
    console.log("invalid");
}};

function userQuestion2(){
if(qTwo){
    console.log(qTwo);
}else{
    console.log("invalid");
}
    };
      
function userQuestion3(){
if(qThree){
    console.log(qThree);
}else{
    console.log("invalid");
}
};

userName();
userGender();
userAge();
skip();
userQuestion1();
userQuestion2();
userQuestion3();


for(let i=0;i<answerArr.length;i++){
    console.log(answerArr[i]);
};
