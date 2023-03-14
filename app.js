
const squares = document.querySelectorAll('.square')
const timeleft = document.querySelector('#time')
const score = document.querySelector('#score')
const mole = document.querySelector('.mole')
 
let result =0
let hitposition


function randomsquare(){
   squares.forEach(square => {
    square.classList.remove("mole")
    
   });
    let randomposition = squares[Math.floor(Math.random()*9)]
    console.log(randomposition)
    randomposition.classList.add('mole')
     hitposition = randomposition.id
     
   

}


console.log(hitposition)

function movemole(){
    let timeId = null
    timeId= setInterval(randomsquare, 500);
}

randomsquare()
movemole()


