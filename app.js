"use strict";


var yourName = prompt("Enter your name please");


var yourGender = prompt("Enter yor gender please (male or female)");



if (yourGender == "male" || yourGender == "female") {
    var yourAge = prompt("Please enter your age");
    if (yourAge <= 0) {
        alert("Please enter your age correctly");
        prompt("Please enter your age");
    } else { }



} else {

    alert("Hey alien 😜 , you must enter your gender correctly to enjoy in our site");
    var yourGender = prompt("Enter yor gender please (male or female)");
    var yourAge = prompt("Please enter your age");
    if (yourAge <= 0) {
        alert("Please enter your age correctly");
        prompt("Please enter your age");
    } else { }



}


var welcome = confirm("Do you want to see welcoming message ?");
if (welcome == true) {
    if (yourGender == "male") {
        alert("welcome Mr  " + yourName);
    } else if (yourGender == "female") {
        alert("welcome Ms  " + yourName);

    } else {
    alert("welcome  " + yourName);

}

}else{}






function invalidResult (result){
     return "invalid";

}
    

var resultExcited= prompt("Are you excited ?");
if (resultExcited.toLowerCase() == "yes" || resultExcited.toLowerCase() =="no" ){
} 

else if (resultExcited =" ") {
       var resultExcited=invalidResult(resultExcited);
}

 

var yourCountry= prompt("Are you from jordan ?");
if (yourCountry.toLowerCase() == "yes" || yourCountry.toLowerCase() =="no" ){
} 

else if (yourCountry =" ") {
       var yourCountry=invalidResult(yourCountry);
}
 

var yourVisting =prompt("Are you visit the site before ?");
if (yourVisting.toLowerCase() == "yes" || yourVisting.toLowerCase() =="no" ){
} 

else if ( yourVisting=" ") {
       var yourVisting=invalidResult(yourVisting);
}

var answers= [resultExcited ,yourCountry,yourVisting];

for (let i=0;i<=2;i++){
    console.log( "the answer is "+ answers[i]);
}














