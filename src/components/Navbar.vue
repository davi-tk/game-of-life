<template lang="">
    <nav class = 'flex justify-between items-center py-5 bg-neutral-800 px-2 ' >
        <h1 class = "text-2xl">Conway's Game of Life</h1>    
        
        <button @click="isActive = !isActive"><h2>Rules 
            <font-awesome-icon :icon="['fas', 'question']" /></h2></button>
    </nav>
    <Rules v-show="isActive" />
    <div @click="isActive = false" v-show="isActive" class="fixed w-full h-full opacity-80 bg-neutral-700 left-0 top-0"></div>

</template>
<script setup lang ="js">
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuestion, faClose } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';
import Rules from './Rules.vue';

library.add(faQuestion, faClose)

const isActive = ref(false)

</script>
<style lang="">
    
</style>