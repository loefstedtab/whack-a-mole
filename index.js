const bigbox = document.querySelector('#bigbox')
const moles = document.querySelectorAll(".mole")
const holes = document.querySelectorAll('.hole')

const moleImg = document.createElement('img')
moleImg.style.width = '200px';
moleImg.style.height = '200px';
moleImg.src = "caddyshack_photo9.jpeg";



function randomHole(holes){
    const random = Math.floor(Math.random() * holes.length);
    const hole = holes[random];
    console.log("holes", holes);
    hole.append(moleImg)
}




function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
    }
    
function appear() {
        const time = randomTime(50, 1000);
        const hole = randomHole(holes);
        setInterval(hole,time)
}   
appear()

let score = 0;
moleImg.addEventListener("click",function(){
    score++;
    document.getElementById("score").innerHTML = score;
})

moleImg.addEventListener("click", function (){
    appear()
    
})

const reset = document.querySelector(".reset")
reset.addEventListener("click",function(){
    score = 0;
    document.getElementById("score").innerHTML = score;
})




//We want to make all the moles hidden and all the holes shown except for one mole. A click event on that mole will hide that mole and show the hole and cause another random mole to appear.

// function hide1(){
//     if (mole1.style.display === 'none'){
       
//     } else {
//         mole1.style.display = 'none';
//     }
// }

// mole1.addEventListener('click', hide1);

// const mole2 = document.querySelector("#mole2")

// function hide2(){
//     if (mole2.style.display === 'none'){
//         mole2.style.display = 'block';
//     } else {
//         mole2.style.display = 'none';
//     }
// }

// mole2.addEventListener('click', hide2);

// const mole3 = document.querySelector("#mole3")

// function hide3(){
//     if (mole3.style.display === 'none'){
//         mole3.style.display = 'block';
//     } else {
//         mole3.style.display = 'none';
//     }
// }

// mole3.addEventListener('click', hide3);

// const mole4 = document.querySelector("#mole4")

// function hide4(){
//     if (mole4.style.display === 'none'){
//         mole4.style.display = 'block';
//     } else {
//         mole4.style.display = 'none';
//     }
// }

// mole4.addEventListener('click', hide4);

// const mole5 = document.querySelector("#mole5")

// function hide5(){
//     if (mole5.style.display === 'none'){
//         mole5.style.display = 'block';
//     } else {
//         mole5.style.display = 'none';
//     }
// }

// mole5.addEventListener('click', hide5);

// const mole6 = document.querySelector("#mole6")

// function hide6(){
//     if (mole6.style.display === 'none'){
//         mole6.style.display = 'block';
//     } else {
//         mole6.style.display = 'none';
//     }
// }

// mole6.addEventListener('click', hide6);

// const mole7 = document.querySelector("#mole7")

// function hide7(){
//     if (mole7.style.display === 'none'){
//         mole7.style.display = 'block';
//     } else {
//         mole7.style.display = 'none';
//     }
// }

// mole7.addEventListener('click', hide7);

// const mole8 = document.querySelector("#mole8")

// function hide8(){
//     if (mole8.style.display === 'none'){
//         mole8.style.display = 'block';
//     } else {
//         mole8.style.display = 'none';
//     }
// }

// mole8.addEventListener('click', hide8);

// const mole9 = document.querySelector("#mole9")

// function hide9(){
//     if (mole9.style.display === 'none'){
//         mole9.style.display = 'block';
//     } else {
//         mole9.style.display = 'none';
//     }
// }

