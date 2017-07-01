var inquirer = require("inquirer");

function BasicCard(question, answer) {
	this.question = question;
	this.answer = answer;
}

function basicBuild() {
	inquirer.prompt([
		{
			name: "flashcardNum",
			message: "How many flashcards would you like to make?",
			validate: function(value) {
				if (isNaN(value) === false && parseInt(value) > 0) {
					return true;
				}
				return false;
			}
		}
	]).then(function(value) {
		//console.log(parseInt(value.flashcardNum));
		var userNum = parseInt(value.flashcardNum);
		var num = 0;
		var builtCards = [];
		buildCard();
		//console.log(count);
		function buildCard(){
			if (num < userNum){
				inquirer.prompt([
					{
						name: "question",
						message: "What is the question?"
					},
					{
						name: "answer",
						message: "What is the answer?"
					}
				]).then(function(answers) {
					var newCard = new BasicCard(
						answers.question,
						answers.answer);

					builtCards.push(newCard);
					num++;
					buildCard();

				});
			} else {
				//console.log("All flashcards made.");
				//console.log(builtCards);
				for (i = 0; i < builtCards.length; i++) {
					console.log("Front: " + builtCards[i].question + "\nBack: " + builtCards[i].answer + "\n-----------------------");
				}
			}
		}	
	});
}

module.exports = BasicCard;
module.exports = basicBuild;