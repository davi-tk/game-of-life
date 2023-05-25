# Conway's Game of Life

Web app for Conway's game of life simulation with Vue 3. [Check it out here, Live Now!](https://davi-tk.github.io/game-of-life/)

![application screenshot](https://i.imgur.com/QXbV7zZ.png)

## Table of contents

- [Technologies](#technologies)
- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)

## Technologies
1. Vite
1. Vue
1. Yarn
1. Tailwind
1. Vue 3

## Introduction

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), or simply, Life, is a [Cellular Automaton](https://en.wikipedia.org/wiki/Cellular_automaton) and it is a game that doesn't require players, the evolution of the simulation is determined by it's initial state and doesn't require any other inputs.

Life's evolution follow these specific set of rules :
1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
1. Any live cell with two or three live neighbours lives on to the next generation.
1. Any live cell with more than three live neighbours dies, as if by overpopulation.
1. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Features
- Live interaction with the simulations
- Start the simulation however you want
- Pause the simulation
- Render common oscilators 
- Render R-Pentomino
- Randomize the cells of the simulation
- Clear the board 
## Setup
To run this project, clone it and install it locally using yarn
```
$ git clone https://github.com/davi-tk/game-of-life.git
$ cd ./game-of-life
$ yarn
$ yarn dev
```


