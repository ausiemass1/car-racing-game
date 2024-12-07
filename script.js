let blueCar = document.getElementById("blueCar");
let redCar = document.getElementById("redCar");
let result = document.getElementById("result");
let score = document.getElementById("score");
let game = document.getElementById("game");
let counter = 0;


blueCar.addEventListener("animationiteration", bluecCarmove);

function bluecCarmove(){
    blueCar.style.left = (Math.floor(Math.random()*3)* 130 )+ "px"
    counter++;
}


window.addEventListener("keydown", function(){
    let move = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))

    if (event.which === 39){

        if(move < 260){
            redCar.style.left = (move + 130) + "px"; 
        }
        
    } 
    else if (event.which === 37){
        if(move >0){
            redCar.style.left = (move -130) + "px"; 
        } 
    }       

})

setInterval(function(){
    let redLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
    let blueLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    let blueTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    let redTop = parseInt(window.getComputedStyle(redCar).getPropertyValue("top"))
    
    if((blueTop > 250 ) && (redLeft === blueLeft)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `Your score is ${counter}`
        counter = 0;
    }
},10)




