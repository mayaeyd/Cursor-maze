var startBtn= document.getElementById("start");
var endBtn=document.getElementById("end");
var boundaries = document.querySelectorAll(".boundary");
var cursor;
offset=[0,0];

function checkCollision(block, bound) {
    if(
        block.right<bound.left ||  //block is completely to the left of boundary
        block.left>bound.right ||  //block is completely to the right of boundary
        block.bottom<bound.top ||  ////block is completely on top of boundary
        block.top>bound.bottom     //block is completely on bottom of boundary
    )return false;
    return true;
}

function loseGame() {
    document.getElementById("status").innerHTML = "You lost! Try again.";
    boundaries.forEach(boundary => boundary.classList.add("highlighted")); 
}

function winGame() {
    document.getElementById("status").innerHTML = "You win!";
}