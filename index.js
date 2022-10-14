const bigbox = document.querySelector('#bigbox')
const moles = document.querySelectorAll(".mole")
const holes = document.querySelectorAll('.hole')

const moleImg = document.createElement('img')
moleImg.style.width = '200px';
moleImg.style.height = '200px';
moleImg.src = "caddyshack_photo9.jpeg";


//function that randomizes where the picture of the gopher will pop up
function randomHole(holes){
    const random = Math.floor(Math.random() * holes.length);
    const hole = holes[random];
    console.log("holes", holes);
    hole.append(moleImg)
}

randomHole(holes)

//increases the score by one every time the moleImg is clicked
let score = 0;
moleImg.addEventListener("click",function(){
    score++;
    document.getElementById("score").innerHTML = score;
})

//runs the function randomHole(holes) whenever the moleImg is clicked
moleImg.addEventListener("click", function (){
    randomHole(holes)
    
})

//resets the score to zero when the reset button is clicked
const reset = document.querySelector(".reset")
reset.addEventListener("click",function(){
    score = 0;
    document.getElementById("score").innerHTML = score;
})




