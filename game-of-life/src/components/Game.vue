<template lang="">

    <section class='w-fit m-auto'>
        <Navbar/>
        
        <div class="bg-neutral-50 rounded">
            
            <div v-for="(row, i) in grid" :key="i" class = 'flex'>
                <div @click = "grid[i][j] ^= 1" @mouseover = "interaction($event, i, j)"  v-for="(value, j) in row" :key="j"
                 class = 'cell border border-neutral-200 ' :class = "{'bg-neutral-900' : grid[i][j]}"></div>
            </div>       
        </div>

        <div id="controls" class="grid grid-flow-col gap-10 mt-4 grid-cols-6">

            <button v-if="!isActive" @click = "toggle">Start <font-awesome-icon :icon="['fas', 'play']"/></button>
            <button v-else @click = toggle>Pause <font-awesome-icon :icon="['fas', 'pause']" /> </button>
            <button @click = "randomGrid">Randomize <font-awesome-icon :icon="['fas', 'shuffle']" /></button>
            <button @click = "clear">Clear Grid <font-awesome-icon :icon="['fas', 'eraser']" /></button>
            <Oscilators :createMatrix='createMatrix' :cols='cols' :rows='rows' @structure='oscilator => grid = oscilator.matrix'/>

        </div>

    </section>

</template>

<script setup lang = 'js'>
import Oscilators from './Oscilators.vue';
import { ref, watch } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Navbar from './Navbar.vue';
import { faPlay, faPause, faShuffle, faEraser, faL } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faPause, faShuffle, faEraser)
const cols = 50
const rows = 100

const createMatrix = (cols, rows) => {
    let matrix = new Array(cols).fill().map(() => Array(rows).fill(0))
    return matrix
}

const interaction = (e, i, j) => {
    if (e.buttons == 1 || e.buttons == 3) {
        grid.value[i][j] ^= 1
    }
}

const clear = () => {
    grid.value = createMatrix(cols, rows)
    isActive.value = false
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

const randomGrid = () => {

    let newGrid = createMatrix(cols, rows)

    newGrid = newGrid.map(row => {
        row = row.map(() => Math.round(Math.random()))
        return row
    })

    grid.value = newGrid
}

let matrix = createMatrix(cols, rows)

let grid = ref(matrix)
let isActive = ref(false)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const toggle = () => {
    isActive.value = !isActive.value
}

const update = async () => {

    while (isActive.value != false) {
        await sleep(2)
        grid.value = updateGrid(grid.value)
    }
}
watch(isActive, update)

function get_positions(matrix){
    let pos = []
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            if (matrix[i][j] == 1){
                pos.push([i,j])
            }
        }
    }

   console.log(pos)
} 

const updateGrid = (prev) => {
    let descendant = createMatrix(cols, rows)

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
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

<style scoped lang="css">
.cell {
    width: 1rem;
    height: 1rem;
}

</style>