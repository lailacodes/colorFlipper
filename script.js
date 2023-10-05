// function will click all buttons 
function clickAll(){
    let btns = document.getElementsByName('flip');
    for(let i = 0; i < btns.length; i++){
        btns.item(i).click()
    }
}

// function that will change the background color to random color
function changeColor(elementID) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + "," + green + "," + blue + ")";

    document.getElementById(elementID).style.backgroundColor = color;
}
