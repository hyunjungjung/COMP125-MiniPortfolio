/* Main JavaScript file */
// global scope
/*
        Author:       Joanne Jung (StuentID: 300432364)
        File Name:    app.js
        Description:  JavaScript file for COMP 125- Assignment 1 web application. 
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
    
    paragraphs[0] = "<span class='firstSentence'> Welcome to Joanne's mini portfolio!</span> <br>hahahaha";
    
    paragraphs[1] = "Three projects of mine will be added even though they are not good/pretty.";
    
    paragraphs[2] = "asdfasdfasfasdfasdfasdfasdf";
    
    
    
    // check to see if paragraph one exists
   var paragraphElementsLength=paragraphElements.length;
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
})();