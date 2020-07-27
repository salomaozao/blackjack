var totalSum = 0;
var isOver = false;
var cards = document.getElementsByClassName('cards');

function gameOver(mode){
    if(isOver == false){
        document.getElementById("title").innerHTML = "<h2>Acabou!</h2>";
        isOver = true;
        if(mode=="defeat"){
            document.getElementById("title").innerHTML += "<p>Voce perdeu</p>";
            console.log("Perdeu!");
        }
        else if(mode=="win"){
            document.getElementById("title").innerHTML += "<p>Voce ganhou</p>";
            console.log("Ganhou!");
        }

        else if(mode=="stop"){
            document.getElementById("title").innerHTML += "<p>Voce parou</p>";
            console.log("Parou... ");   
        }
    }   
}

function addRandomCard(card){
    if(!isOver){
        for(var i = 0; i < 2; i++){
            randomNum = Math.floor(Math.random() * 10 + 1);
            cards[i].innerHTML = randomNum; 
            if (i==card){
                totalSum += randomNum;
                document.getElementById("count").innerHTML += randomNum + "+";        
            }
        }
        document.getElementById("totalSum").innerHTML = totalSum;

        if(totalSum > 21){
            gameOver("defeat");
        }

        else if(totalSum == 21){
            gameOver("win");
        }
    }
}