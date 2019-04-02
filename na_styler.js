"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Connor J Webdale 
   Date: 4.2.19 

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

// Runs the setStyles() function when the page loads 
window.addEventListener("load", setStyles);

// does a thing 
function setStyles() {
      // Sets it equal to the value returned by the randInt() function using 5 as a parameter value. 
      var styleNum = randInt(5);

      // Creates an element node for the "link" element 
      var style = document.createElement("link");

      // Sets its "rel" attribute to "stylesheet" 
      style.setAttribute("rel", "stylesheet");

      // Sets its "id" attribute to "fancySheet" 
      style.setAttribute("id", "fancySheet");

      // Sets its "href" attribute 
      style.setAttribute("href", "na_style_" + styleNum + ".css");

      // Appends the style to the document head 
      document.head.appendChild(style);

      // Creates an element node named figBox for the "figure" element 
      var figBox = document.createElement("figure");

      // Sets its "id" attribute to "styleThumbs" 
      figBox.setAttribute("id", "styleThumbs");

      // Appends figBox to the div element with the ID "box" 
      document.getElementById("box").appendChild(figBox);

      // For loop with an index that goes form 0 through 4 
      for (var i = 0; i < 4; i++) {
            // Creates an element node named sheetImg
            var sheetImg = document.createElement("img");

            // Sets src attribute 
            sheetImg.setAttribute("src", "na_small_" + i + ".png");

            // Sets alt attribute 
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            // Adds an event handler to sheetImg that runs an anonymous function 
            sheetImg.addEventListener("click", function (e) {
                  // Changes the href attribute of the link element to alt text of the clicked on element 
                  var linkElem = document.getElementById("fancySheet");
                  linkElem.setAttribute("href", e.path[0].alt);
            })

            // Appends sheetImg to the figBox element node 
            figBox.appendChild(sheetImg);
      }

      // Creates an embedded style sheet named thumbStyles 
      var thumbStyles = document.createElement("style");

      // Appends thumbStyles to the document head 
      document.head.appendChild(thumbStyles);

      // Adds three style rules to the thumbStyles style sheet 
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs {\
                  position: absolute;\
                  left: 0px;\
                  bottom: 0px;\
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img {\
                  outline: 1px solid black;\
                  cursor: pointer;\
                  opacity: 0.75;\
            }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover {\
                  outline: 1px solid red;\
                  opacity: 1.0;\
            }", 2);
}





function randInt(size) {
      return Math.floor(size * Math.random());
}