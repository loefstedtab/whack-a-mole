const bigbox = document.querySelector('#bigbox')
const mole = document.querySelector("#mole")

function hide(){
    if (mole.style.display === 'none'){
        mole.style.display = 'block';
    } else {
        mole.style.display = 'none';
    }
}

mole.addEventListener('click', hide);
