"use strict";
let usName=prompt("Please enter your name");
let usGender=prompt("Please enter your gender (male/female)");
let usAge=prompt("Please enter your age");
let usSkip=confirm("Do you like to skip welcoming message?");
userWelcome();
let qOne=prompt("Do you enjoy our website? (yes/no)");
let qTwo=prompt("Is the site useful? (yes/no)");
let qThree=prompt("Is it easy to use? (yes/no)");
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
    switch(qOne){
        case'yes':
        console.log("yes");
        break;
        case'no':
        console.log("no");
        break;
        default:
            alert("invalid");
    }};

function userQuestion2(){
    switch(qTwo){
        case'yes':
        console.log("yes");
        break;
        case'no':
        console.log("no");
        break;
        default:
            alert("invalid");
    }};
      
function userQuestion3(){
    switch(qThree){
        case'yes':
        console.log("yes");
        break;
        case'no':
        console.log("no");
        break;
        default:
            alert("invalid");
    }};


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
