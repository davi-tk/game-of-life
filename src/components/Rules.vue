<template lang="">
    <div class = "relative">

        <div class="absolute bg-neutral-200 text-neutral-800 p-10 leading-8 w-1/3 z-10 text-lg">

            <h2 class="text-sm text-red-400 pb-4">Click anywhere else to close the rules</h2>
            <h1 class='text-xl font-semibold '>The Game:</h1>
            <p><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> is a <a href="https://en.wikipedia.org/wiki/Cellular_automaton">cellullar automaton</a> in which the cells, represented
            by the squares follow a specific set of rules:</p>
            <ul class = 'list-decimal pl-8'>
                <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
            </ul>

        </div>

        <div class="absolute bg-neutral-200 text-neutral-800 right-0 p-10 leading-8 w-1/3 z-10 text-lg">
            <h2 class="text-sm text-red-400 pb-4">Click anywhere else to close the rules</h2>
            <h1 class='text-xl font-semibold'>Instructions:</h1>
            <ul class = 'list-decimal pl-8'>
                <li>Each square represents a cell</li>
                <li>White represents living cells</li>
                <li>Black represents dead cells</li>
                <li>Click or Click and drag the mouse to toggle the state of cells</li>
            </ul>

            <h1 class='text-xl font-semibold'>Controllers:</h1>
            <ul class = 'list-decimal pl-8'>
                <li><strong>All controllers</strong> are located at the bottom of the board</li>
                <li><strong>Start</strong> will start the simulation</li>
                <li><strong>Randomize</strong> generates random living or dead cells around the board</li>
                <li><strong>R-Pentomino</strong> generates a r-pentomino starter at the center of the board</li>
                <li><strong>Oscilators</strong> is a select containing structures known as oscilators, upon selecting one
                    it's structure will be rendered on the board</li>
                <li><strong>Clear Grid</strong> Erases all living cells from the board</li>

                

            </ul>


        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style  lang="css">
    
</style>