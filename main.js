//depencies
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//asks the user if they would like to make basic or cloze cards
inquirer.prompt([
	{
		type: "list",
		name: "choice",
		message: "Would you like to make basic cards or cloze cards?",
		choices: ["Basic", "Cloze"]
	}
]).then(function(answer){
	//if the user chose basic cards, run the basic card creation function
	switch(answer.choice){
		case "Basic":
		BasicCard();
		break;

		//if the user chose cloze card, run the cloze card creation function
		case "Cloze":
		ClozeCard();
		break
	}
});