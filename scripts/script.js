// // // y start button min: 330 max : 360
// // // x start button min: 140 max : 180

var startBtn= document.getElementById("start");
var cursor;
offset=[0,0]

startBtn.addEventListener("mouseenter",(e)=>{
    offset=[
        startBtn.offsetLeft-e.clientX,
        startBtn.offsetTop-e.clientY
    ]
})

startBtn.addEventListener("mousemove",(event)=>{
    document.getElementById("status").innerHTML="Try not to hit the barriers!";

    cursor={
        x: event.clientX,
        y: event.clientY,
    }

    startBtn.style.left = (cursor.x+offset[0]) + "px";
    startBtn.style.top = (cursor.y+offset[1]) + "px";

})


