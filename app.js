
var arrId=[ ["r1c1","r1c2", "r1c3"], ["r2c1","r2c2", "r2c3"], ["r3c1","r3c2", "r3c3"] ]
var outcome =[]

//write a function to create an event listener that adds X to the grid


var turn = "X"
var count = 0
function eventListener(arr){

    arr.forEach(row => row.forEach(id => {
        if(!winner(arr,count)){
            var element = document.getElementById(id)
        
            element.addEventListener("click", function add(){
            var element = document.getElementById(id)
            if (element.firstChild.nodeValue!== "X" && element.firstChild.nodeValue!=="O" && turn==="X" && count!==9){
                element.firstChild.nodeValue = "X"
                winner(arrId, count)
                turn = "O"
                count++
                currentWinner(outcome)
            } else if (element.firstChild.nodeValue!== "X" && element.firstChild.nodeValue!=="O" && turn==="O" && count!==9){
                element.firstChild.nodeValue = "O"
                winner(arrId, count)
                turn = "X"
                count++
                currentWinner(outcome)
            }
        
        }, false)

        }
    
    }))
}

eventListener(arrId)


//reset function 
function reset (arr, id){
    var element = document.getElementById(id)
    element.addEventListener("click", function resetNodeValue(){
        arr.forEach(row => row.forEach(id => {
            var node = document.getElementById(id)
            node.firstChild.nodeValue = ""
            count--

        }))
    }, 
    
    false)
}

reset(arrId, "reset")

function getNodeValue(id){
    var element = document.getElementById(id)
    return element.firstChild.nodeValue
}

//write a function to determine who is the winner of the game
    //X wins the game! 
    //O wins the game!
    //Draw
//the function will check the position of the x's and o's in the array
    //checks for vertical/horizontal/diagonal positional pattern to determines the winner of the game

//refactor this function below so you 
function winner (arr, count) {
    if (arr[0].every(id => getNodeValue(id)==="X") || arr[1].every(id => getNodeValue(id)==="X") || arr[2].every(id => getNodeValue(id)==="X")){
        outcome.push("X")
        alert ("X is the winner!")
    } else if(arr[0].every(id => getNodeValue(id)==="O") || arr[1].every(id => getNodeValue(id)==="O") || arr[2].every(id => getNodeValue(id)==="O")){
        alert("O is the winner!")
        outcome.push("O")
    }
     else if(arr.every(row=> getNodeValue(row[0])==="X") || arr.every(row=> getNodeValue(row[1])==="X") || arr.every(row=> getNodeValue(row[2])==="X")){
        outcome.push("X")
        alert("X is the winner!")
        
    } else if(arr.every(row=> getNodeValue(row[0])==="O") || arr.every(row=> getNodeValue(row[1])==="O") || arr.every(row=> getNodeValue(row[2])==="O")){
        outcome.push("O")
        alert("O is the winner!")
        
    } else if (getNodeValue(arr[0][0])==="X" && getNodeValue(arr[1][1])==="X" && getNodeValue(arr[2][2])==="X"){
        outcome.push("X")
        alert("X is the winner!")
        
    } else if (getNodeValue(arr[0][0])==="O" && getNodeValue(arr[1][1])==="O" && getNodeValue(arr[2][2])==="O"){
        outcome.push("O")
        alert("O is the winner!")
        
    } else if (getNodeValue(arr[0][2])==="X" && getNodeValue(arr[1][1])==="X" && getNodeValue(arr[2][0])==="X"){
        outcome.push("X")
        alert("X is the winner!")
        
    } else if (getNodeValue(arr[0][2])==="O" && getNodeValue(arr[1][1])==="O" && getNodeValue(arr[2][0])==="O"){
        outcome.push("O")
        alert("O is the winner!")

    }
    else if (count===8){
        alert("Draw: Reset the game!")
    }
}


function currentWinner(arr){
    if(arr.filter(i => i==="X").length === arr.filter(i => i==="O").length){
        var element = document.getElementById("tally")
        element.addEventListener("click", function tally() {
            element.firstChild.nodeValue = "Game is tied"
        }, false)
        return "Game is tied"
    } else if (arr.filter(i => i==="X").length > arr.filter(i => i==="O").length) {
        var element = document.getElementById("tally")
        element.addEventListener("click", function tally() {
            element.firstChild.nodeValue = "X is up"
        }, false)
        return "X is up"
    } else if (arr.filter(i => i==="X").length < arr.filter(i => i==="O").length){
        var element = document.getElementById("tally")
        element.addEventListener("click", function tally() {
            element.firstChild.nodeValue = "O is up"
        }, false)
        return "O is up"
    }
}

var elementx = document.getElementById("playerX")
var playerx = document.getElementById("player1")
elementx.addEventListener('submit', function addName() {
    playerx.firstChild.nodeValue = `${elementx.firstChild.nodeValue}`
}, false)
