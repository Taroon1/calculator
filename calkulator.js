let inputValue = document.getElementById("display");

function numberForEqual() {
    let number = inputValue.innerHTML;
    return number;
}

function numPut(number) {
    if(inputValue.innerHTML === "Infinity" || inputValue.innerHTML === "-Infinity"){
        number ='clear';
    }
    if(inputValue.innerHTML === "undefined" || inputValue.innerHTML === "NaN"){
        number ='clear';
    }
    if(inputValue.innerHTML === "0"){
        if(number === "0"){
            number = ""
        }
    }
        if(number === "+") {
        if (inputValue.innerHTML.slice("-1") === "/") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "*") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "-") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === number) {
            number = ""
        }
    }


    if(number === "-") {
        if (inputValue.innerHTML.slice("-1") === "/") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "*") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "+") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === number) {
            number = ""
        }
    }
    if(number === "*"){
        if (inputValue.innerHTML.slice("-1") === "") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "/") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "+") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "-") {
            number = ""
        }
        if(inputValue.innerHTML.slice("-1") === number){
            number = ""
        }
    }
    
    if(number === "/") {
        if (inputValue.innerHTML.slice("-1") === "") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "+") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "*") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === "-") {
            number = ""
        }
        if (inputValue.innerHTML.slice("-1") === number) {
            number = ""
        }
    }
    if(number === ".") {
        if (inputValue.innerHTML.slice("-1") === number) {
            number = "";
        }
        if(inputValue.innerHTML.indexOf(".") != -1){
            number = "";
        }
    }

    if(number === 'clear') {
        inputValue.innerHTML = "";
        return;
    }
    if(number === "back"){
        inputValue.innerHTML = inputValue.innerHTML.substring(0,inputValue.innerHTML.length - 1);
        return;
    }
     inputValue.innerHTML +=  number;
}
function equal(){
    inputValue.innerHTML = eval(this.numberForEqual());
}

