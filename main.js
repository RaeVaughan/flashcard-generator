//depencies
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var flashcards = [];
//either leave as an empty arrow to push answers into or start inquirer.prompt shit

console.log("main js working");

//questions:

// Is the point to build flashcards or to build them based on user input?

// Shouldn't the ClozeCard need three arguments? Cloze, partial, and full text?

// What methods does the ClozeCard instruction mean? The instructions only really mention the one method for throwing an error. Or do the instructions really just mean to attach methods with prototypes whenever there is one?