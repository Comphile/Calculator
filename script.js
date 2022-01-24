let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('button');


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*';
        }
        if ((buttonText != 'C' && buttonText != '=') && (buttonText != 'Log' && buttonText != 'n!')) {
            screen.value += buttonText; //adds the string to the expression
        }
    })
}

let ans = document.getElementById("ans");
ans.addEventListener('click', function () {
    try {
        var userVal = screen.value;
        if (userVal.length != 0) {
            var finalans = eval(userVal);
            screen.value = finalans;
        }
        else {
            screen.value = "";
        }
    }
    catch (a) {
        alert("Enter Valid Expression");
        console.log(a);
    }
})

let clear = document.getElementById("clear");
clear.addEventListener('click', function () {
    screen.value = "";
})

let logButton = document.getElementById("log");
logButton.addEventListener('click', function () {
    var logValue = Math.log(eval(screen.value));
    // console.log(logValue);
    if (!isNaN(logValue)) {
        screen.value = logValue;
    }
    else {
        alert("Enter valid log expression");
    }
})

let factButton = document.getElementById("fact");
factButton.addEventListener('click', function () {
    var inputValue = eval(screen.value);
    if (inputValue < 0) {
        alert("Bruh");
    }
    else if (inputValue == 0) {
        screen.value = 1;
    }
    else {
        let fact = 1;
        for (i = 1; i <= inputValue; i++) {
            fact *= i;
        }
        screen.value = fact;
    }

})
function clickThis(butt) {
    butt.click();
}

document.addEventListener('keypress', function (e) {
    if (e.key == "=" || e.key == "Enter") {
        ans.click();
    }
    else {
        screen.focus();
    }
})