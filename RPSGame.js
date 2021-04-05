var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
function score(){
	var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 70);
function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}
function game(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	var comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);
	if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
		win(UserChoice);
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	function continuGame(){
		i = Math.floor(Math.random() * 3);
		ComChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 2600);
}
function win(bn){
	UserPoints++;
    document.getElementById("who").innerHTML = '<img src=images/win.jpg class="draw"; style="width:200px; border-radius:50%; margin-top:60%">';
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}
function draw(bn){
	document.getElementById("who").innerHTML = '<img src=images/draw.jpg class="draw"; style="width:200px; border-radius:50%; margin-top:60%">';
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1600);
}
function lose(bn){
	ComPoints++;
	document.getElementById("who").innerHTML =  '<img src=images/lose.jpg claas="draw"; style="width:200px; border-radius:50%; margin-top:60%">';
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1600);
}
