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

	// Check for Winner. We must check if the values of each row are equal using board object
	winCheck: function() {
		//Top Row Across Equal
		if (this.checkThree(1,2,3)) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Second Row Across Equal
		} else if(this.checkThree(4,5,6)) {
			this.winner = this.board.cell4;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Thid Row Across
		} else if(this.checkThree(7,8,9)) {
			this.winner = this.board.cell7;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//First Row Up Down
		} else if (this.checkThree(1,4,7)) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Second Row Going Down
		} else if (this.checkThree(2,5,8)) {
			this.winner = this.board.cell2;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Thid Row Going Down
		} else if (this.checkThree(3,6,9)) {
			this.winner = this.board.cell3;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Top left to bottom right diaganol
		} else if(this.checkThree(1,5,9)) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//Top Right to bottom Left diaganol
		} else if(this.checkThree(3,5,7))  {
			this.winner = this.board.cell3;
			alert(this.winner + " is the winner!");
			if (this.winner === "X") {
				this.x_wins++;
			} else if (this.winner === "O") {
				this.o_wins++;
			}
			this.restartGame();
		//wincheck detects no winner and there are 9 turns, end the game
		} else if(this.number_of_turns == 9){
				alert("Sorry, there is no winner! Try again");
				ticTacToe.restartGame();
			}
	},

	//Checks for equal values of three cells in a row
	checkThree: function(cellOne, cellTwo, cellThree) {
		if ($("#cell" + cellOne.toString() + "").html() == $("#cell" + cellTwo.toString() + "").html() && 
				$("#cell" + cellTwo.toString() + "").html() == $("#cell" + cellThree.toString() + "").html() &&
				$("#cell" + cellOne.toString() + "").html() != "") {
			return true;
		}
	}


};
//End of Game Object

//Run Start Function on Page Load

$(document).ready(function() {
	ticTacToe.startGame();
	console.log(ticTacToe.turn);
});

$("td").click(function() {
	/*The click event only fires if the clicked td elements id's 
	corresponding ticTacToe.board key value is empty */
	if (ticTacToe.board[$(this).attr("id")] == "") {
		if(ticTacToe.turn === "X") {
			//Add X
			$(this).html("X");
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
			$(this).html("O");
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
	}

});
