let grid = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

let links = document.querySelectorAll(".gridBtn"),
    currentPlayer = 1,
    cellIsOccupied = true

for(let i = 0; i < links.length; i++){
let link = links[i]
link.addEventListener("click", function(e){
e.preventDefault()
        cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1") ;
       console.log(cellIsOccupied)
if(cellIsOccupied === false){

console.log(e.currentTarget.dataset)
         e.currentTarget.classList.toggle("player"+currentPlayer)

         let riga=e.currentTarget.dataset.row
         let colonna=e.currentTarget.dataset.col

         if(currentPlayer === 1){
          grid[riga][colonna]="X"
         }else{
          grid[riga][colonna]="O"
         }


         if(currentPlayer === 1){
           currentPlayer = 2
         }else{
           currentPlayer = 1
         }
       }
})
}

reset.addEventListener("click", function(event){
  window.location.reload()
})

function getEmptyCells(grid) {
 let EmptyCells = [] 
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      if(grid[i][j] === null) {
        let Empty = [i][j]
        EmptyCells = EmptyCells.push(Empty)
      }
    }
  }
}

function getBestMove(){
  
}