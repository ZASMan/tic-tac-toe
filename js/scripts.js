/* To do

Render to Dom:
-Display player x or o
-Initialize 3x3 tic tac toe board
-Each board will be a div with class square


-Conditional statement to check if there are either three x's or o's
*/

var ticTacToe = {

	//Record whose Turn it is
	turn: "X",
	//Decides if there is a winner or not
	winner: false,
	//Keeps Record of Board on Click
	board: ["", "", "", "", "", "", "", "", ""],
	//Possible Win Patterns
	wins: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]],

	//Record Number of Turns
	number_of_turns: 0,

	//Function for Initializing Game
	startGame: function() {
		//Reset Number of Turns
		this.number_of_turns = 0;
		//Append Player Score
		$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
		//Empty the Squares
		if($("td:not(:empty)").length) {
			$('td:not(:empty)').empty();
		}
	},

	playerChoice: function() {
		if (ticTacToe.number_of_turns > 8) {
			if(ticTacToe.turn === "X") {
				$("td").append("X");
				this.turn = "O";
				$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
				console.log("turn is " + ticTacToe.turn);
				this.number_of_turns++;
			} else if(ticTacToe.turn === "O") {
				$("td").append("O");
				this.turn = "X";
				$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
				console.log("turn is " + ticTacToe.turn);
				this.number_of_turns++;
			}
		//Game is over- all td's are full
		} else {
			ticTacToe.startGame();
			alert("Game is over!");
		}
	},


};
//End of Game Object

//Run Start Function on Page Load

$(document).ready(function() {
	ticTacToe.startGame();
	console.log(ticTacToe.turn);
});

$("td").click(function() {
	if (ticTacToe.number_of_turns < 9) {
		if(ticTacToe.turn === "X") {
			$(this).append("X");
			ticTacToe.turn = "O";
			$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
			console.log("turn is " + ticTacToe.turn);
			ticTacToe.number_of_turns++;
		} else if(ticTacToe.turn === "O") {
			$(this).append("O");
			ticTacToe.turn = "X";
			$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
			console.log("turn is " + ticTacToe.turn);
			ticTacToe.number_of_turns++;
		}
		//Game is over- all td's are full
		} else {
			ticTacToe.startGame();
			alert("Game is over!");
		}
	});

