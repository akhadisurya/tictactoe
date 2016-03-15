var box1 = document.getElementById("1")
var box2 = document.getElementById("2")
var box3 = document.getElementById("3")
var box4 = document.getElementById("4")
var box5 = document.getElementById("5")
var box6 = document.getElementById("6")
var box7 = document.getElementById("7")
var box8 = document.getElementById("8")
var box9 = document.getElementById("9")

function checkIfWin() {
	if (box1.innerText == box2.innerText
		&& box1.innerText == box3.innerText
		&& box1.innerText.length > 0 ) {
			winner(box1.innerText);
			return true;
	} else if (
		box4.innerText == box5.innerText
		&& box4.innerText == box6.innerText
		&& box4.innerText.length > 0) {
			winner(box4.innerText);
			return true;

	} else if (
		box7.innerText == box8.innerText
		&& box7.innerText == box9.innerText
		&& box7.innerText.length > 0) {
			winner(box7.innerText);
			return true;
	}

	if (box1.innerText == box4.innerText
		&& box1.innerText == box7.innerText
		&& box1.innerText.length > 0 ) {
			winner(box1.innerText);
			return true;

	} else if (
		box2.innerText == box5.innerText
		&& box2.innerText == box8.innerText
		&& box2.innerText.length > 0) {
			winner(box2.innerText);
			return true;

	} else if (
		box3.innerText == box6.innerText
		&& box3.innerText == box9.innerText
		&& box3.innerText.length > 0) {
			winner(box3.innerText);
			return true;
	}

	if (box1.innerText == box5.innerText
		&& box1.innerText == box9.innerText
		&& box1.innerText.length > 0
		|| box3.innerText == box5.innerText &&
		box3.innerText == box7.innerText &&
		box3.innerText.length > 0) {
			winner(box5.innerText);
			return true;
	}
	return false;
}

function winner(person) {
	alert(person + " Wins");
}

function firstMove() {
    document.turn = "X";
}

function callMessage(msg) {
	document.getElementById("message").innerText = msg;
}

function nextMove(square) {
	if (square.innerText === "" ) {
		square.innerText = document.turn;
		var hasWinner = checkIfWin();
		if (hasWinner == false) {
			checkIfTie();
		}
		switchTurn();
	} else {
		callMessage("That move is invalid!");
	}
}

function checkIfTie() {
	var allTrue = isFilled(box1) && 	
			isFilled(box2) && 
			isFilled(box3) && 
			isFilled(box4) &&
			isFilled(box5) && 
			isFilled(box6) && 
			isFilled(box7) && 
			isFilled(box8) && 
			isFilled(box9);

	if (allTrue) {
		alert("game tie!");
	}
}

function isFilled(element) {
	var result = element.innerText != "";
	return result;
}

function switchTurn () {
	if (document.turn == "X") {
		document.turn ="O";
		callMessage("It's " + document.turn + "'s turn!");
	} else {
		document.turn = "X";
		callMessage("It's " + document.turn + "'s turn!");
	}
}




