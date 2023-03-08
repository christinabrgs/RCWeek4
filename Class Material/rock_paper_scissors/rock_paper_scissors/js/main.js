var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	var botsWeapon="paper";//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	var botsWeapon="scissors";//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	var botsWeapon="rock";//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	getRandomWeapon()
}

function playerThrowsScissors(){
	getRandomWeapon(randomNumber, BotsWeapon);
	checkWhoWon(botsWeapon,"scissors");

}
function playerThrowsPaper(){

}
function getRandomWeapon(randomNumber, BotsWeapon){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}