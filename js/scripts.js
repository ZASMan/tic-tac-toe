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
		//Append Player Score
		$("#menu").empty().append("Player <strong>" + this.turn + "'s</strong> turn!");
		//Empty the Squares
		if($("td:not(:empty)").length) {
			$('td:not(:empty)').empty();
		}
	},

	//Function for Restarting Game
	restartGame: function() {
		//Reset number of turns
		this.number_of_turns = 0;
		//Append Player Score
		$("#menu").empty().append("Player <strong>" + this.turn + "'s</strong> turn!");

	},

	// Check for Winner. We must check if the values of each row are equal using board object
	//AND if the values have a length greater than one
	winCheck: function() {
		//Top Row Across Equal
		if (this.board.cell1 === this.board.cell2 && this.board.cell1 === this.board.cell3 && this.board.cell2 === this.board.cell3 && this.board.cell1.length > 0 && this.board.cell2.length > 0 && this.board.cell3.length > 0) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
		//Second Row Across Equal
		} else if(this.board.cell4 === this.board.cell5 && this.board.cell4 === this.board.cell6 && this.board.cell5 === this.board.cell6 && this.board.cell4.length > 0 && this.board.cell5.length > 0 && this.board.cell6.length > 0) {
			this.winner = this.board.cell4;
			alert(this.winner + " is the winner!");
		//Thid Row Across
		} else if(this.board.cell7 === this.board.cell8 && this.board.cell7 === this.board.cell9 && this.cell8 === this.board.cell9 && this.board.cell7.length > 0 && this.board.cell8.length > 0 && this.board.cell9.length > 0) {
			this.winner = this.board.cell7;
			alert(this.winner + " is the winner!");
		//First Row Up Down
		} else if (this.board.cell1 === this.board.cell4 && this.board.cell1 === this.board.cell7 && this.board.cell4 === this.board.cell7 && this.board.cell1.length > 0 && this.board.cell4.length > 0 && this.board.cell7.length > 0 ) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
		//Second Row Going Down
		} else if (this.board.cell2 === this.board.cell5 && this.board.cell2 === this.board.cell8 && this.board.cell5 === this.board.cell8 && this.board.cell2.length > 0 && this.board.cell5.length > 0 && this.board.cell8.length > 0 ) {
			this.winner = this.board.cell2;
			alert(this.winner + " is the winner!");
		//Thid Row Going Down
		} else if (this.board.cell3 === this.board.cell6 && this.board.cell3 === this.board.cell9 && this.board.cell6 === this.board.cell9 && this.board.cell3.length > 0 && this.board.cell6.length > 0 && this.board.cell9.length > 0 ) {
			this.winner = this.board.cell3;
			alert(this.winner + " is the winner!");
		//Top left to bottom right diaganol
		} else if(this.board.cell1 === this.board.cell5 && this.board.cell1 === this.board.cell9 && this.board.cell5 === this.board.cell9 && this.board.cell1.length > 0 && this.board.cell5.length > 0 && this.board.cell9.length > 0) {
			this.winner = this.board.cell1;
			alert(this.winner + " is the winner!");
		//Top Right to bottom Left diaganol
		} else if(this.board.cell3 === this.board.cell5 && this.board.cell3 === this.board.cell7 && this.board.cell5 === this.board.cell7  && this.board.cell3.length > 0 && this.board.cell5.length > 0 && this.board.cell7.length > 0)  {
			this.winner = this.board.cell3;
			alert(this.winner + " is the winner!");
		}
	},


};
//End of Game Object

//Run Start Function on Page Load

$(document).ready(function() {
	ticTacToe.startGame();
	console.log(ticTacToe.turn);
});


/*Note: Currently, if you get three in a row, the code will display
the win alert AFTER you get three in a row, but not clear the divs or anything.
*/

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
			$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
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
			$("#menu").empty().append("Player <strong>" + ticTacToe.turn + "'s</strong> turn!");
			console.log("turn is " + ticTacToe.turn);
			ticTacToe.number_of_turns++;
			ticTacToe.winCheck();
		}
	console.log("Total # of turns: " + ticTacToe.number_of_turns);
	//All Spaces are filled, but no winner
	} else {

	}	

});

