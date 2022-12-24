// const grid = document.querySelector("#gridContainer");
// const userInput = document.getElementById("quantity");
// const resetButton = document.querySelector(".reset");
// const createGrid = () => {
//     for (let i = 0; i < 256; i++) {
//       const div = document.createElement("div");
//       div.addEventListener("mouseover", ()=>{div.className="finalDiv"});

//       div.classList.add("square");
//       grid.appendChild(div);
//     }
//   };

const root = document.querySelector("#root");
let grid = null
let eraser = false
let square = false;
const removeAllChildNodes = (parent) =>{
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const onMouseMove = (event) =>{

    if(!eraser){
        if(!square){
        const coords = {x: event.clientX-10,y: event.clientY-10}
        renderCircles(coords)
    }else{
        const coords = {x: event.clientX-10,y: event.clientY-10}
        renderSquares(coords) 
    }
}


}

const circleOver = (event) =>{
    const self = document.elementFromPoint(event.clientX, event.clientY)
    if(self.className === 'circle')
    root.removeChild(self)
    else if(self.className === 'square'){
        root.removeChild(self)
    }

}


const renderCircles = (coords) =>{
    if(grid){
        const newCircle = document.createElement('div')
        newCircle.className = 'circle'
        newCircle.style.left = coords.x+'px';
        newCircle.style.top = coords.y +'px';
        newCircle.style.backgroundColor = 'red'
        newCircle.addEventListener('mouseover',circleOver)
        root.appendChild(newCircle)
    }
}
const renderSquares = (coords) => {
    if(grid){
    const newSquares = document.createElement('div')
    newSquares.className = 'square';
    newSquares.style.left = coords.x+'px';
    newSquares.style.top = coords.y +'px';
    newSquares.style.backgroundColor = 'red';
    newSquares.addEventListener('mouseover', circleOver);
    root.appendChild(newSquares)
    }
}
const toggleSquare = () => {
    square = !square
    if(square)
    document.getElementById('shapeToggle').innerHTML = "Circle";
    else{
        document.getElementById('shapeToggle').innerHTML = 'Square'
    }
}

const createGrid = () => {
    removeAllChildNodes(root)
    const newGrid = document.createElement('div')
    newGrid.className = 'gridContainer'
    newGrid.addEventListener('mousemove',onMouseMove)

    
    grid = newGrid
    root.appendChild(grid)
  };

const toggleEraser = () =>{
    eraser = !eraser
    if(eraser){
        document.getElementById('eraserButton').innerHTML = 'Draw!'
        grid.style.zIndex = 0

    } else {
        document.getElementById('eraserButton').innerHTML = 'Eraser'
        grid.style.zIndex = 3

    }
}

  createGrid()

