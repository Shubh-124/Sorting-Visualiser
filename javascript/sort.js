function swap(a, b) {
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
    document.querySelector(".bubsort").disabled = true;
    document.querySelector(".insertionsort").disabled = true;
    document.querySelector(".mergesort").disabled = true;
    document.querySelector(".selectionsort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
    document.querySelector(".bubsort").disabled = false;
    document.querySelector(".insertionsort").disabled = false;
    document.querySelector(".mergesort").disabled = false;
    document.querySelector(".selectionsort").disabled = false;

}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
    document.querySelector(".arr").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
    document.querySelector(".arr").disabled = false;
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
let arraySize = document.querySelector('#arr_sz');
arraySize.addEventListener('input', function () {

    createNewArray(parseInt(arraySize.value));
});

let delay = 260;
let delayElement = document.querySelector('#speed_input');
delayElement.addEventListener('input', function () {

    delay = 320 - parseInt(delayElement.value);
});

let array = [];
createNewArray();

function createNewArray(num_bars = 60) {
    console.log("hi");
    deleteChild();
    for (let i = 0; i < num_bars; i++) {
        array.push(Math.floor(Math.random() * 43) + 1);
    }

    const bars = document.querySelector("#bars");
    for (let i = 0; i < num_bars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 1.4}vh`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
    array = [];
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}


const newArray = document.querySelector(".arr");
newArray.addEventListener("click", function () {
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});