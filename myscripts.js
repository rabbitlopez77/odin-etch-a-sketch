const createMultipleDivs = (userNum) =>{
    for(let i = 1; i <= userNum; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'newDiv')
        newDiv.setAttribute('onmouseover', 'myOverFunction()')
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
function myOverFunction() {
    let newDiv = document.getElementsByClassName('newDiv')
    //newDiv.className += 'finalDiv'
    newDiv.target.classList.add('finalDiv')
}