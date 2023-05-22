// const cols = 50
// const rows = 100

// const createMatrix = (cols, rows) => {
//     let matrix = new Array(cols).fill().map(() => Array(rows).fill())
//     return matrix
// }

// const livingNeighbors = (matrix, i, j) => {
//     let living = 0

//     //Make edges linked to its opposite 
//     living += matrix[(i + cols) % cols][(j + 1 + rows) % rows]
//     living += matrix[(i + cols) % cols][(j - 1 + rows) % rows]
//     living += matrix[(i + 1 + cols) % cols][(j + 1 + rows) % rows]
//     living += matrix[(i + 1 + cols) % cols][(j - 1 + rows) % rows]
//     living += matrix[(i + 1 + cols) % cols][(j + rows) % rows]
//     living += matrix[(i - 1 + cols) % cols][(j + 1 + rows) % rows]
//     living += matrix[(i - 1 + cols) % cols][(j - 1 + rows) % rows]
//     living += matrix[(i - 1 + cols) % cols][(j + rows) % rows]

//     return living
// }

// let matrix = createMatrix(cols, rows)

// matrix = matrix.map(row => {
//     row = row.map(() => Math.round(Math.random()))
//     return row
// })

// const gameContainer = document.getElementById('game')
// const grid = document.getElementById('grid')

// const render = () => {
//     for (let i = 0; i < cols; i++) {
//         const rowDiv = document.createElement('div')
//         rowDiv.classList.add('flex', `row-${i}`)
//         grid.appendChild(rowDiv)
//         for (let j = 0; j < rows; j++) {
//             const cell = document.createElement('div')

//             if (matrix[i][j] == 1)
//                 cell.classList.add('bg-slate-300')

//             cell.classList.add('cell', `cols-${j}`, 'rounded-full')
//             cell.addEventListener("mouseover", function(e){
//                 if(e.buttons == 1 || e.buttons == 3){
//                     //do some stuff
//                     matrix[i][j] ^= 1
//                     cell.classList.toggle('bg-slate-300')
//                 }
//             })

//             rowDiv.appendChild(cell)
//         }
//     }
// }

// render()



// const update = (previous, descendant) => {

//     for(let i = 0; i < cols; i++){
//         for(let j = 0; j < rows; j++){

//             if(previous[i][j] != descendant[i][j]){
//                 cell = document.querySelector(`.row-${i} :nth-child(${j + 1})`)
//                 cell.classList.toggle('bg-slate-300')
//             }

//         }
//     }

// }


// let isActive = false


// const btn = document.querySelector('button')
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// btn.addEventListener('click', (e) => {
//     isActive = !isActive

//     play()

// })

// const updateMatrix = () => {
//     let descendant = createMatrix(cols, rows)

//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//             const living = livingNeighbors(matrix, i, j)
//             const status = matrix[i][j]

//             if (status == 0 && living == 3) {

//                 descendant[i][j] = 1
//             }

//             else if (status == 1 && (living < 2 || living > 3)) {

//                 descendant[i][j] = 0
//             }

//             else {

//                 descendant[i][j] = status
//             }
//         }
//     }


//     return descendant
// }

// const play = async () => {

//     while (isActive) {
//         await sleep(1)
//         next = updateMatrix()
//         update(matrix, next)
//         matrix = next
//         console.log('att')

//     }
// }
