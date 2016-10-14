var ticTacToe = {

	//Record whose Turn it is. Initial starting value is X
	turn: "X",
	//Display Value of Winner
	winner: "",
	//Scores (Will add this feature later)
	x_wins: 0,
	o_wins: 0,
	//Keeps Record of Board Values
	board: {
		cell1: "",
		cell2: "",
		cell3: "",
		cell4: "",
		cell5: "",
		cell6: "",
		cell7: "",
		cell8: "",
		cell9: "",
	},

	//Record Number of Turnset
	number_of_turns: 0,

	//Function for Initializing Game
	startGame: function() {
		//Reset Number of Turns
		this.number_of_turns = 0;
		//Append Player Turn and Score
		$("#player-turn").empty().append("Player <strong>" + this.turn + "'s</strong> turn!");
		$("#player-score").append("Player <strong>X</strong> score: " + this.x_wins + "<br>" +
			"Player <strong> Y</strong> score: " + this.o_wins);
      },

	//Function for Restarting Game
	restartGame: function() {
		//Rebind click to 'td' elements
		tdClick();
		//Reset Board
		this.board.cell1 = "";
		this.board.cell2 = "";
		this.board.cell3 = "";
		this.board.cell4 = "";
		this.board.cell5 = "";
		this.board.cell6 = "";
		this.board.cell7 = "";
		this.board.cell8 = "";
		this.board.cell9 = "";
		//Reset number of turns
		this.number_of_turns = 0;
		//Reset Player Turn
		this.turn = "X";
		$("#player-turn").empty().append("Player <strong>" + this.turn + "'s</strong> turn!");
		//Append Player Score
		$("#player-score").empty().append("Player <strong>X</strong> score: " + this.x_wins + "<br>" +
			"Player <strong> Y</strong> score: " + this.o_wins);
		//Empty TD elements and rebind
		if($("td:not(:empty)").length) {
			$('td:not(:empty)').empty();
		}
		//Check Elements
		console.log(this.board);
		console.log("td length: " + $("td:not(:empty)").length);
		console.log("Number of turns is " + this.number_of_turns);
	},

	/* Check for Winner. We must check if the values of each row are equal using board object
	AND if the values have a length greater than one
	Game will restart as soon as one of the rows are won. Otherwise, it will restart the game
	Since there is no winner*/
	winCheck: function() {
		//Top Row Across Equal
		if (this.board.cell1 === this.board.cell2 && this.board.cell1 === this.board.cell3 && this.board.cell2 === this.board.cell3 && this.board.cell1.length > 0 && this.board.cell2.length > 0 && this.board.cell3.length > 0) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Second Row Across Equal
		} else if(this.board.cell4 === this.board.cell5 && this.board.cell4 === this.board.cell6 && this.board.cell5 === this.board.cell6 && this.board.cell4.length > 0 && this.board.cell5.length > 0 && this.board.cell6.length > 0) {
			this.winner = this.board.cell4;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Thid Row Across
		} else if(this.board.cell7 === this.board.cell8 && this.board.cell7 === this.board.cell9 && this.cell8 === this.board.cell9 && this.board.cell7.length > 0 && this.board.cell8.length > 0 && this.board.cell9.length > 0) {
			this.winner = this.board.cell7;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//First Row Up Down
		} else if (this.board.cell1 === this.board.cell4 && this.board.cell1 === this.board.cell7 && this.board.cell4 === this.board.cell7 && this.board.cell1.length > 0 && this.board.cell4.length > 0 && this.board.cell7.length > 0 ) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Second Row Going Down
		} else if (this.board.cell2 === this.board.cell5 && this.board.cell2 === this.board.cell8 && this.board.cell5 === this.board.cell8 && this.board.cell2.length > 0 && this.board.cell5.length > 0 && this.board.cell8.length > 0 ) {
			this.winner = this.board.cell2;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Thid Row Going Down
		} else if (this.board.cell3 === this.board.cell6 && this.board.cell3 === this.board.cell9 && this.board.cell6 === this.board.cell9 && this.board.cell3.length > 0 && this.board.cell6.length > 0 && this.board.cell9.length > 0 ) {
			this.winner = this.board.cell3;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Top left to bottom right diaganol
		} else if(this.board.cell1 === this.board.cell5 && this.board.cell1 === this.board.cell9 && this.board.cell5 === this.board.cell9 && this.board.cell1.length > 0 && this.board.cell5.length > 0 && this.board.cell9.length > 0) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Top Right to bottom Left diaganol
		} else if(this.board.cell3 === this.board.cell5 && this.board.cell3 === this.board.cell7 && this.board.cell5 === this.board.cell7  && this.board.cell3.length > 0 && this.board.cell5.length > 0 && this.board.cell7.length > 0)  {
			this.winner = this.board.cell3;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		}
	},


};
//End of Game Object

//Run Start Function on Page Load

$(document).ready(function() {
	ticTacToe.startGame();
	tdClick();
	console.log(ticTacToe.turn);
});

//This will be called again on restart game since td are unbinded on click

function tdClick() {

$("td").click(function() {
	//Make sure all 9 spaces aren't filled
	if (ticTacToe.number_of_turns <= 9) {
		if(ticTacToe.turn === "X") {
			//Add X
			$(this).append("X");
			//Disable Ability to Click that Square
			$(this).unbind();
			//Change Player Turn
			ticTacToe.turn = "O";
			//Update Board Object
			ticTacToe.board[$(this).attr("id")] = "X";
			//Update Player Turn on Screen
			$("#player-turn").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
			//Keep Track of Number of Turns
			ticTacToe.number_of_turns++;
			ticTacToe.winCheck();
		} else if(ticTacToe.turn === "O") {
			//Add O
			$(this).append("O");
			//Disable Ability to Click that Square
			$(this).unbind();
			//Change Player Turn
			ticTacToe.turn = "X";
			//Update Board Object
			ticTacToe.board[$(this).attr("id")] = "O";
			//Update Player Turn on Screen
			$("#player-turn").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
			console.log("turn is " + ticTacToe.turn);
			ticTacToe.number_of_turns++;
			ticTacToe.winCheck();
		}
	console.log("Total # of turns: " + ticTacToe.number_of_turns);
	//All Spaces are filled, but no winner
	} else {
		alert("Sorry, there is no winner! Try again");
		ticTacToe.restartGame();
	}	

});

}