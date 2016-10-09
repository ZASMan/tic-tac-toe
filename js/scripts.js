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

	startGame: function() {
		$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
		//Empty the Squares
		if($("td:not(:empty)").length) {
			$('td:not(:empty)').empty();
		}
	},

	playerChoice: function() {
			if(ticTacToe.turn === "X") {
				$("td").append("X");
				this.turn = "O";
				$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
				console.log("turn is " + ticTacToe.turn);
			} else if(ticTacToe.turn === "O") {
				$("td").append("O");
				this.turn = "X";
				$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
				console.log("turn is " + ticTacToe.turn);
			}
		},
};

//Run Start Function on Page Load

$(document).ready(function() {
	ticTacToe.startGame();
	console.log(ticTacToe.turn);
});

$("td").click(function() {
	ticTacToe.playerChoice();
});

