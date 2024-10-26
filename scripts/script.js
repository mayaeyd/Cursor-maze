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

    

})


