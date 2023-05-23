<template lang="">

    <div>
        <label for="oscilators">Oscilators</label><br>
        <select v-model="selected" id="oscilators"> 
            <option disabled value="">Select one</option>
            <option v-for="(item, index) in oscilators" :value="item">{{item.name}}</option>
        </select>
    </div>
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

const fillMatrix = (matrix, data) => {
    data.forEach(coord => {
    matrix[coord[0]][coord[1]] = 1
    })
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

fillMatrix(pulsarMatrix, pulsar_data)

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

fillMatrix(pentaDecathlonMatrix, pentaDecathlonData)

const pentaDecathlon = {
    name : 'Penta Decathlon',
    matrix : pentaDecathlonMatrix
}

const kokGalaxyMatrix = props.createMatrix(props.cols, props.rows)

const kokGalaxyData = [
    [
        21,
        38
    ],
    [
        21,
        39
    ],
    [
        21,
        41
    ],
    [
        21,
        42
    ],
    [
        21,
        43
    ],
    [
        21,
        44
    ],
    [
        21,
        45
    ],
    [
        21,
        46
    ],
    [
        22,
        38
    ],
    [
        22,
        39
    ],
    [
        22,
        41
    ],
    [
        22,
        42
    ],
    [
        22,
        43
    ],
    [
        22,
        44
    ],
    [
        22,
        45
    ],
    [
        22,
        46
    ],
    [
        23,
        38
    ],
    [
        23,
        39
    ],
    [
        24,
        38
    ],
    [
        24,
        39
    ],
    [
        24,
        45
    ],
    [
        24,
        46
    ],
    [
        25,
        38
    ],
    [
        25,
        39
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
        26,
        38
    ],
    [
        26,
        39
    ],
    [
        26,
        45
    ],
    [
        26,
        46
    ],
    [
        27,
        45
    ],
    [
        27,
        46
    ],
    [
        28,
        38
    ],
    [
        28,
        39
    ],
    [
        28,
        40
    ],
    [
        28,
        41
    ],
    [
        28,
        42
    ],
    [
        28,
        43
    ],
    [
        28,
        45
    ],
    [
        28,
        46
    ],
    [
        29,
        38
    ],
    [
        29,
        39
    ],
    [
        29,
        40
    ],
    [
        29,
        41
    ],
    [
        29,
        42
    ],
    [
        29,
        43
    ],
    [
        29,
        45
    ],
    [
        29,
        46
    ]
]

fillMatrix(kokGalaxyMatrix, kokGalaxyData)

const kokGalaxy = {
    name : "Kok's Galaxy",
    matrix : kokGalaxyMatrix
}

const oscilators = [
    blinker,
    toad,
    beacon,
    pulsar,
    pentaDecathlon,
    kokGalaxy
]

const selected = ref(0)

const emit = defineEmits(['structure'])

watch(selected, () => {
    emit('structure', selected.value)
})
</script>
<style lang="">
    
</style>