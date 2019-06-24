## What is the Game of Life?
From the Wikipedia entry for [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules):

>The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

>- Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
>- Any live cell with two or three live neighbours lives on to the next generation.
>- Any live cell with more than three live neighbours dies, as if by overpopulation.
>- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


>The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

You can also try out this Interactive Game of Life (https://bitstorm.org/gameoflife/) to get a better idea of what you're about to build.

We're going to build one that starts out with just the basic functionality on a simple web site, and will look like this:

![gif of the game of life](https://media.giphy.com/media/QfsvYoBSSpfbtFJIVo/giphy.gif)

### Project Requirements

What will our Game of Life (GOL) program need to be able to do?

We'll implement the following requirements in steps so that the program always runs and we can see the improvements over time:

- draw a two-dimensional grid of square cells
- keep track of each cell in the grid
- a cell can be in one of 2 states: dead or alive
- create an initial population to seed the grid with dead and alive cells
- get the 8 neighbors for any cell and count how many neighbors are alive
- change a cell to being alive or dead based on the rules
- transition all cells from one generation to the next at the same time
