<template lang="">

    <!-- <div v-for="(row, index) in grid" :key="index" class = 'flex'>
        <div v-for="(value, index) in row" :key="index" class = 'cell' :class = "{'bg-slate-600' : value}"></div>
    </div>       

    <button @click = "toggle">{{isActive}}</button> -->

</template>

<script setup lang = 'js'>
// import { ref, onUpdated, watch } from 'vue';

// const cols = 50
// const rows = 50

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

// let grid = ref(matrix)
// let isActive = ref(false)

// const toggle = () => {
//     isActive.value = !isActive.value
//     updateGrid()
// }

// watch(isActive, () => {
//     console.log(isActive.value)
// })

// const updateGrid = () => {
//     let descendant = createMatrix(cols, rows)

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             const living = livingNeighbors(grid.value, i, j)
//             const status = grid.value[i][j]

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


//     grid.value = descendant
// }


// onUpdated(() => {
//     console.log('updated')
//     if (isActive) updateGrid()
// })

</script>

<style scope lang="css">
/* .cell {
    width: 1rem;
    height: 1rem;
} */
</style>