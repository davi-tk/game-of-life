<template lang="">

    <section class='w-fit m-auto'>
        
        <div v-for="(row, i) in grid" :key="i" class = 'flex'>
            <div v-for="(value, j) in row" :key="j" class = 'cell' :class = "{'bg-slate-600' : grid[i][j]}"></div>
        </div>       
    
        <button @click = "toggle">toggle</button>

    </section>


</template>

<script setup lang = 'js'>
import { ref, watch } from 'vue';

const cols = 50
const rows = 50

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

let matrix = createMatrix(cols, rows)

matrix = matrix.map(row => {
    row = row.map(() => Math.round(Math.random()))
    return row
})

let grid = ref(matrix)
let isActive = ref(false)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const toggle = () => {
    isActive.value = !isActive.value
}

const update = async() => {
    console.log('loop')

    while (isActive.value != false){
        console.log('loop')
        await sleep(1)
        grid.value = updateGrid(grid.value)
    }
}
watch(isActive, update)

const updateGrid = (prev) => {
    let descendant = createMatrix(cols, rows)

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const living = livingNeighbors(prev, i, j)
            const status = prev[i][j]

            if (status == 0 && living == 3) {

                descendant[i][j] = 1
            }

            else if (status == 1 && (living < 2 || living > 3)) {

                descendant[i][j] = 0
            }

            else {

                descendant[i][j] = status
            }
        }
    }


    return descendant
}




</script>

<style scope lang="css">
.cell {
    width: 1rem;
    height: 1rem;
}
</style>