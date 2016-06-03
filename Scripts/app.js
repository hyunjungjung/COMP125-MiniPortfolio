/* Main JavaScript file */
// global scope
/*
        Author:       Joanne Jung (StuentID: 300432364)
        File Name:    app.js
        Description:  JavaScript file for COMP 125- Assignment 1 - Mini Portfolio. 
*/


//IIFE - Immediately Invoked Functiona Expression
(function(){
    "use strict";
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array(most common way)
    var paragraphs = [];
    
    // data for my pages   
    //index
    paragraphs[0] = "<div class=indexFirstSentence'> Loves to meet new people, but very shy.<div> <br><br><br><br> If you want to know more about me Click >> <a href='about.html'>About Me</a> <br> If you want to see my projects Click >> <a href='projects.html'>Projects</a> <br> If you want to contact me Click >> <a href='contact.html'>Contact</a></div>";
    
    paragraphs[1] = "The first Three projects of mine will be added even though they are not good/pretty.";
    
    paragraphs[2] = "<div class='indexSecondSentence'> Graduated from Ryerson University with Bachelor of Commerce, Business Technology Management <br> Currently is enrolled in Health Informatics Technology at Centennial College <br> ";
    
    
    
    // check to see if paragraph one exists
   var paragraphElementsLength=paragraphElements.length;
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
})();