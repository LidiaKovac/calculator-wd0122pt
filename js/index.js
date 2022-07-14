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

//math
const chooseOp = function(op) {
    h4.innerText = displayInput.value + op
    CURR_OP = op
    CURR_RES = parseInt(displayInput.value)
    console.log(CURR_OP)
    resetDisplay()
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
        CURR_RES += parseInt(displayInput.value)
    } else if (CURR_OP === "-") {
        CURR_RES -= parseInt(displayInput.value)
    } else if(CURR_OP === "*") {
        CURR_RES *= parseInt(displayInput.value)
    } else if(CURR_OP === "/") {
        CURR_RES /= parseInt(displayInput.value)
    }
    displayInput.value = CURR_RES
    h4.innerText += "=" + CURR_RES
    console.log(CURR_RES)
}


//exec

createNumbers()