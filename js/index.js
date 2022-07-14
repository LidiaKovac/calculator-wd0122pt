let CURR_RES = 0
let CURR_OP = null

let displayInput = document.querySelector("#screen")
let h4 = document.querySelector("h4")

//create buttons && screen handling
const createNumbers = function() {
    let numpadDiv = document.querySelector("#numpad")
    for(let i = 0; i <= 9; i++) {
        numpadDiv.innerHTML += `<button onclick="displayNumber(event)" class="btn--numbers" id="num_${i}">${i}</button>`
    }
}

const displayNumber = function(clickEvent) {
    let buttonClickedValue = clickEvent.target.innerText //string
    displayInput.value += buttonClickedValue
}

const resetDisplay = function() {
    displayInput.value = ""
}

const checkLetters = function(keyEvent) {
    //if(keyEvent.key.match("[A-Za-z]") !== null) {
        console.log(isNaN(parseInt(keyEvent.target.value)))
    if(isNaN(keyEvent.target.value)){
        //it's a letter! TRIGGER ERROR!
        displayInput.value = "Syntax Error!"
    }
}

const backSpace = function() {
    //take the input value 
    let inputValue = displayInput.value
    //take away the last num 
        //divide the string into an array of letters 
    let arrayOfChars = inputValue.split("")
    console.log(arrayOfChars)
    
    // delete the last element 
    arrayOfChars.pop()
    console.log(arrayOfChars)
    // put it back together as a string
    let newValue = arrayOfChars.join("")
    console.log(newValue)
    //show it
    displayInput.value = newValue
}

//math
const chooseOp = function(op) {
    h4.innerText = displayInput.value + op
    CURR_OP = op
    CURR_RES = parseFloat(displayInput.value)
    console.log(CURR_OP)
    resetDisplay()
}

const insertFloat = function() {
    displayInput.value += "."
}

const calculateResult = function() {
    h4.innerText += displayInput.value
    if(h4.innerText.includes("=")) {
        h4.innerText = CURR_RES + CURR_OP + displayInput.value 
    }
    // if op is sum = CURR_RES + displayInput.value
    // if op is sub = CURR_RES - displayInput.value
    // op???? => CURR_OP
    if(CURR_OP === "+") {
        CURR_RES += parseFloat(displayInput.value)
    } else if (CURR_OP === "-") {
        CURR_RES -= parseFloat(displayInput.value)
    } else if(CURR_OP === "*") {
        CURR_RES *= parseFloat(displayInput.value)
    } else if(CURR_OP === "/") {
        CURR_RES /= parseFloat(displayInput.value)
    }
    displayInput.value = CURR_RES
    h4.innerText += "=" + CURR_RES
    console.log(CURR_RES)
}

//exec

createNumbers()