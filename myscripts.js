const createMultipleDivs = (userNum) =>{
    for(let i = 1; i <= userNum; i++){
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(i);
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("main");
        document.body.insertBefore(newDiv, currentDiv);
    }
}
const getInfo = () =>{
   let userNum = document.getElementById('number').value;
   userNum *= userNum
   createMultipleDivs(userNum)
}
