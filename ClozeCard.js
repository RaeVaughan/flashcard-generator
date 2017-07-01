//inquirer dependency
var inquirer = require("inquirer");

//Cloze card contructor, with the full text and the text to be removed set as arguments...
function ClozeCard(full, cloze) {
	this.full = full;
	this.cloze = cloze;
	//...and a partial text created from removing the cloze deletion from the full text
	this.partial = full.replace(cloze, "_____");
}


function clozeBuild() {
	//begin by asking the user how many cards they want to create
	inquirer.prompt([
		{
			type: "input",
			name: "flashcardNum",
			message: "How many flashcards would you like to make?",
			//validation to ensure the user inputs an integer
			validate: function(value) {
				if (isNaN(value) === false && parseInt(value) > 0) {
					return true;
				}
				return false;
			}
		}
	]).then(function(value) {
		//set variables for the number of flashcards the user chose, a count to start at 0, and an empty array to hold the user's card input
		var userNum = parseInt(value.flashcardNum);
		var num = 0;
		var builtCards = [];

		//call the build card function to start recursion
		buildCard();

		function buildCard(){
			//only prompt the user to create cards so long as the count number is less than the user's number
			if (num < userNum) {
				inquirer.prompt([
					{
						type: "input",
						name: "full",
						message: "What is the full text?"
					},
					{
						type: "input",
						name: "cloze",
						message: "Out of the full text, what is the answer (to be replaced with a blank)?"
					}
				]).then(function(answers) {
					//create a new basic card utilizing constructor and user input
					var newCard = new ClozeCard(
						answers.full,
						answers.cloze);

					//push user input into the builtCards array, increase the set count, and call the build card function again (will continue until set count = user's number)
					builtCards.push(newCard);
					num++
					buildCard();
				});
				//once user's number has been reached...
			} else {
				//...loop through the built cards array and display the info to the terminal
				for (i = 0; i < builtCards.length; i++) {
					console.log("Partial: " + builtCards[i].partial + "\nAnswer: " + builtCards[i].cloze + "\nFull Text: " + builtCards[i].full + "\n-----------------------");
				}
			}
		}
	});
}

//modules to export to main.js
module.exports = ClozeCard;
module.exports = clozeBuild;