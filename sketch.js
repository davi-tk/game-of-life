let cols
let rows
let matrix
let res = 15

const createMatrix = (cols, rows) => {
  let matrix = new Array(cols).fill().map(() => Array(rows).fill())
  return matrix
}

const livingNeighbors = (matrix, i, j) => {
  let living = 0

  //Make edges linked to its opposite 
  living += matrix[(i + cols) % cols][(j + 1 + rows) % rows]
  living += matrix[(i + cols) % cols][(j - 1 + rows) % rows]
  living += matrix[(i + 1 + cols) % cols][(j + 1 + rows) % rows]
  living += matrix[(i + 1 + cols) % cols][(j - 1 + rows) % rows]
  living += matrix[(i + 1 + cols) % cols][(j + rows) % rows]
  living += matrix[(i - 1 + cols) % cols][(j + 1 + rows) % rows]
  living += matrix[(i - 1 + cols) % cols][(j - 1 + rows) % rows]
  living += matrix[(i - 1 + cols) % cols][(j + rows) % rows]

  return living
}

function setup() {
  createCanvas(900,600)
  frameRate(15)
  cols = width / res
  rows = height / res
  matrix = createMatrix(cols, rows)
  
  matrix = matrix.map(row => {
    row = row.map(() => floor(random(2)))
    return row
  });
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    let x = i * res
    for (let j = 0; j < rows; j++) {
      let y = j * res

      if (matrix[i][j] == 0){
        fill (255)
        stroke(255)
        rect(x, y, res, res)
      }
    }
  }

  let descendant = createMatrix(cols, rows)

  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){

      let living = livingNeighbors(matrix, i, j)
      let status = matrix[i][j]
      
      if (status == 0 && living == 3) {
        descendant[i][j] = 1
      }
      else if (status == 1 && (living < 2 || living > 3)){
        descendant[i][j] = 0
      }
      else{
        descendant[i][j] = status
      }
    }
  }
  
  matrix = descendant
}
