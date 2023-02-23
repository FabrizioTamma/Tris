let grid = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

let links = document.querySelectorAll(".gridBtn"),
    currentPlayer = 1,
    cellIsOccupied = true

function checkWin(player) {

  for(let i=0; i<3; i++) {
    if(grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) {
      return true
    }
  }

  for(let j=0; j<3; j++) {
    if(grid[0][j] === player && grid[1][j] === player && grid[2][j] === player) {
      return true
    }
  }

  if(grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
    return true
  }
  if(grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
    return true
  }
  return false
}

function checkDraw() {
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      if(grid[i][j] === null) {
        return false
      }
    }
  }
  return true
}

for(let i = 0; i < links.length; i++){
  let link = links[i]
  link.addEventListener("click", function(e){
    e.preventDefault()
    cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1")
    if(cellIsOccupied === false) {
      e.currentTarget.classList.toggle("player"+currentPlayer)
      let riga=e.currentTarget.dataset.row
      let colonna=e.currentTarget.dataset.col
      if(currentPlayer === 1){
        grid[riga][colonna]="X"
      }else{
        grid[riga][colonna]="O"
      }
      if(checkWin("X")) {
        console.log("Giocatore X ha vinto!")
        alert("Giocatore X ha vinto!")
      } else if(checkWin("O")) {
        console.log("Giocatore O ha vinto!")
        alert("Giocatore O ha vinto!")
      } else if(checkDraw()) {
        console.log("Patta!")
        alert("Patta!")
      } else {
        if(currentPlayer === 1){
          currentPlayer = 2
        } else {
          currentPlayer = 1
        }
      }
    }
  })
}

reset.addEventListener("click", function(event){
  window.location.reload()
})