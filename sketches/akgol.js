

//var cells;
var grid;

function setup () {
  createCanvas(1000, 1000);
   grid = new Grid(10);
   grid.randomize();
}

function draw () {
  background(100);
  grid.updateNeighborCounts();
  grid.updatePopulation();
  grid.draw();
  
}


function mousePressed()
{
  //grid.randomize();
  //grid.updateNeighborCounts();
  //grid.updatePopulation();
  print(grid.cells)
}


class Grid {
  constructor (cellSize) {
    this.cellSize = cellSize;
    this.numberOfRows = height / this.cellSize;
    this.numberOfColumns = width / this.cellSize;
    
    this.cells = new Array(this.numberOfColumns);
    
    for (var i = 0; i < this.cells.length; i++)
    {
      this.cells[i] = new Array(this.numberOfRows);
    }
    
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize);
      }
    }
    //print(cells)
  }


  draw () {
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].drawcells();
      }
    }
  }
  
  randomize(){
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].setIsAlive(floor(random(2)));
      }
    }
  }
  
  updatePopulation(){
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
      this.cells[column][row].liveOrDie();
      }
    }
  }
  
  getNeighbors(currentCell){
    var neighbors = [];
    
    for(var xOffset = -1; xOffset <=1; xOffset++){
      for(var yOffset = -1; yOffset <=1; yOffset++ ){
        var neighborColumn = currentCell.column + xOffset;
        var neighborRow = currentCell.row + yOffset;
        
        
        if(this.isValidPosition(neighborColumn,neighborRow)  && (xOffset * yOffset + xOffset + yOffset !== 0) ){
           neighbors.push(this.cells[neighborColumn][neighborRow]);
         }
      }
    }
    return neighbors;
  }
  
  isValidPosition (column, row) {
  if ((column >= 0 && column < this.numberOfColumns) && (row >=0 && row < this.numberOfRows)){
    return true;
  }
  else{
    return false
  }
  }
  
  updateNeighborCounts(){
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].liveNeighborCount=0;
        
        var cellNeighbors = this.getNeighbors(this.cells[column][row]);
        
        for(var i =0; i < cellNeighbors.length; i++){
          if (cellNeighbors[i].isAlive){
            this.cells[column][row].liveNeighborCount++;
          }
        }
        
      }
    }
  }
  
    displayText()
  {
    textAlign(LEFT, BASELINE)
    fill(255, 216, 0)
    text('Alive Cells' )
  }
  
  
}


class Cell {
  constructor (column, row, size){
  this.column = column;
  this.row = row;
  this.size = size;
  this.isAlive = false;
  this.liveNeighborCount = 0;
  }
  
  drawcells(){
        if (this.isAlive === true){
          fill(0, 255, 0);
        } 
        else{
          fill(0);
        }
        noStroke();
        /*rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);*/
        polygon(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, 8)
  }
  
  setIsAlive(value){
     if (value === 1){  
          this.isAlive = true
        } 
        else{
          this.isAlive = false;
        }
  }
  
  liveOrDie(){
    if (this.isAlive===true && this.liveNeighborCount < 2){
      this.isAlive = false;
    }
    else if(this.isAlive===true && this.liveNeighborCount > 3){
      this.isAlive = false;
    }
    else if (this.isAlive===false && this.liveNeighborCount===3) {
      this.isAlive = true;
    }
  }

  
}

function polygon(x, y, radius, npoints){
    let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
