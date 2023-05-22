<template lang="">

    <select v-model="selected">
        <option disabled value="">Select one</option>
        <option v-for="(item, index) in oscilators" :value="item">{{item.name}}</option>
    </select>
</template>
<script setup lang = 'js'>
import { ref, watch } from 'vue';

const props = defineProps({
    createMatrix: Function,
    cols: Number,
    rows: Number
})


const blinker = {
    name: 'Blinker',
} 

const blinkerMatrix = props.createMatrix(props.cols, props.rows)

blinkerMatrix[24][49] = 1
blinkerMatrix[25][49] = 1
blinkerMatrix[23][49] = 1
blinker.matrix = blinkerMatrix


const toadMatrix = props.createMatrix(props.cols, props.rows)

toadMatrix[24][49] = 1
toadMatrix[24][50] = 1
toadMatrix[24][51] = 1
toadMatrix[25][49] = 1
toadMatrix[25][48] = 1
toadMatrix[25][50] = 1

const toad = {
    name: 'Toad',
    matrix : toadMatrix
}

const beaconMatrix = props.createMatrix(props.cols, props.rows)

beaconMatrix[24][49] = 1
beaconMatrix[24][48] = 1
beaconMatrix[23][49] = 1
beaconMatrix[23][48] = 1

beaconMatrix[25][50] = 1
beaconMatrix[26][50] = 1
beaconMatrix[25][51] = 1
beaconMatrix[26][51] = 1

const beacon = {
    name : 'Beacon',
    matrix : beaconMatrix 
}


const pulsarMatrix = props.createMatrix(props.cols, props.rows)

const pulsar_data = [
    [
        18,
        44
    ],
    [
        18,
        45
    ],
    [
        18,
        46
    ],
    [
        18,
        50
    ],
    [
        18,
        51
    ],
    [
        18,
        52
    ],
    [
        20,
        42
    ],
    [
        20,
        47
    ],
    [
        20,
        49
    ],
    [
        20,
        54
    ],
    [
        21,
        42
    ],
    [
        21,
        47
    ],
    [
        21,
        49
    ],
    [
        21,
        54
    ],
    [
        22,
        42
    ],
    [
        22,
        47
    ],
    [
        22,
        49
    ],
    [
        22,
        54
    ],
    [
        23,
        44
    ],
    [
        23,
        45
    ],
    [
        23,
        46
    ],
    [
        23,
        50
    ],
    [
        23,
        51
    ],
    [
        23,
        52
    ],
    [
        25,
        44
    ],
    [
        25,
        45
    ],
    [
        25,
        46
    ],
    [
        25,
        50
    ],
    [
        25,
        51
    ],
    [
        25,
        52
    ],
    [
        26,
        42
    ],
    [
        26,
        47
    ],
    [
        26,
        49
    ],
    [
        26,
        54
    ],
    [
        27,
        42
    ],
    [
        27,
        47
    ],
    [
        27,
        49
    ],
    [
        27,
        54
    ],
    [
        28,
        42
    ],
    [
        28,
        47
    ],
    [
        28,
        49
    ],
    [
        28,
        54
    ],
    [
        30,
        44
    ],
    [
        30,
        45
    ],
    [
        30,
        46
    ],
    [
        30,
        50
    ],
    [
        30,
        51
    ],
    [
        30,
        52
    ]


]

pulsar_data.forEach(coord => {
    pulsarMatrix[coord[0]][coord[1]] = 1

})

const pulsar = {
    name : 'Pulsar',
    matrix : pulsarMatrix
}

const pentaDecathlonMatrix = props.createMatrix(props.cols, props.rows)

const pentaDecathlonData = [
    [
        18,
        46
    ],
    [
        18,
        47
    ],
    [
        18,
        48
    ],
    [
        19,
        47
    ],
    [
        20,
        47
    ],
    [
        21,
        46
    ],
    [
        21,
        47
    ],
    [
        21,
        48
    ],
    [
        23,
        46
    ],
    [
        23,
        47
    ],
    [
        23,
        48
    ],
    [
        24,
        46
    ],
    [
        24,
        47
    ],
    [
        24,
        48
    ],
    [
        26,
        46
    ],
    [
        26,
        47
    ],
    [
        26,
        48
    ],
    [
        27,
        47
    ],
    [
        28,
        47
    ],
    [
        29,
        46
    ],
    [
        29,
        47
    ],
    [
        29,
        48
    ]
]

pentaDecathlonData.forEach(coord => {
    pentaDecathlonMatrix[coord[0]][coord[1]] = 1

})

const pentaDecathlon = {
    name : 'Penta Decathlon',
    matrix : pentaDecathlonMatrix
}

const oscilators = [
    blinker,
    toad,
    beacon,
    pulsar,
    pentaDecathlon
]

const selected = ref(0)

const emit = defineEmits(['structure'])

watch(selected, () => {
    emit('structure', selected.value)
})
</script>
<style lang="">
    
</style>