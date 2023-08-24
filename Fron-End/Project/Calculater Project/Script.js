let screen = document.querySelector('#screen');
btn = document.querySelectorAll('button');
let clutter = '';
for (item of btn) {
    item.addEventListener('click', function (targetvalue) {
        buttonText = targetvalue.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            clutter += buttonText;
            screen.value = clutter;
        }
        else if (buttonText == 'AC') {
            clutter = "";
            screen.value = clutter;
        }
        else if (buttonText == '=') {
            screen.value = eval(clutter);
        }
        else {
            clutter += buttonText;
            screen.value = clutter;
        }

    })
}
