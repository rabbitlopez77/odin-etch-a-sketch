const createMultipleDivs = (userNum) =>{
    for(let i = 1; i <= userNum; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'newDiv')
        const newContent = document.createTextNode(i);
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("main");
        currentDiv.appendChild(newDiv)
        //document.body.insertBefore(newDiv, currentDiv);
    }
}
const getInfo = () =>{
   let userNum = document.getElementById('number').value;
   userNum *= userNum
   createMultipleDivs(userNum)
}

//new test code
let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});