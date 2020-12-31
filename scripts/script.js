var elements = [];
var totalBars = 60, width = "7px", gap = "5px";
var divs = [];
var flag = 0;  // if array is previously created, flag = 1, else 0
var blue = "#326da8";
var pink = "#e700c8";
var initialDelay = 10;
var moreDelay = 10;
var delays = 10;
// Range slider for number of elements and speed
var rangeSlider = document.getElementById("slider");
function sliderChange(){
    
    switch(rangeSlider.value){
        case "0": totalBars = 10; delays = 100; initialDelay = 100; moreDelay = 100; delays = initialDelay; flag = 1; width = "55px", gap = "10px"; elements = []; createArray(); break;
        case "40": totalBars = 25; delays = 50; initialDelay = 50; moreDelay = 50; delays = initialDelay; flag = 1; width = "20px", gap = "7px"; elements = []; createArray(); break;
        case "80": totalBars = 60; delays = 10; initialDelay = 10; moreDelay = 10; delays = initialDelay; flag = 1 ; width = "7px", gap = "5px"; elements = []; createArray(); break;
        case "120": totalBars = 250; delays = 1; initialDelay = 1; moreDelay = 1; delays = initialDelay; flag = 1; width = "2px", gap = "1px"; elements = []; createArray(); break;
    }
}
//

//The container for appending the height divs
var container = document.getElementById("values");
var innerContainer = document.getElementById("barsDiv")

//Generate array on click event
var generateBtn = document.getElementById("generate")
generateBtn.addEventListener("click", generateNewArray);

//Button on click events
var bubbleSortBtn = document.getElementById("bubbleSortBtn")
bubbleSortBtn.addEventListener("click", function(){
    bubbleSort(elements);
});

var insertionSortBtn = document.getElementById("insertionSortBtn")
insertionSortBtn.addEventListener("click", function(){
    insertionSort(elements);
});

var mergeSortBtn = document.getElementById("mergeSortBtn")
mergeSortBtn.addEventListener("click", function(){
    mergeSorter();
});

var selectionSortBtn = document.getElementById("selectionSortBtn")
selectionSortBtn.addEventListener("click", function(){
    selectionSort();
});
///


function enableAll(){
    bubbleSortBtn.disabled = false;
    insertionSortBtn.disabled = false;
    mergeSortBtn.disabled = false;
    selectionSortBtn.disabled = false;
}

function createArray(){
        while(innerContainer.hasChildNodes())
            innerContainer.removeChild(innerContainer.firstChild); //to make it responsive and not overflow, i am using two containers (divs)
        
        while(container.hasChildNodes())
            container.removeChild(container.firstChild);

        for(var i=0; i<totalBars; i++){
            elements.push(Math.floor(Math.random()*500)+1);
        }

        for(var i=0; i<totalBars; i++){
            divs[i] = document.createElement("div");
            divs[i].className = "heights"
            divs[i].style.height = elements[i]+"px";
            divs[i].style.width = width;
            divs[i].style.marginRight = gap;
            divs[i].style.backgroundColor = blue;
            innerContainer.appendChild(divs[i]);
        }
        container.appendChild(innerContainer);
    enableAll();
}

function generateNewArray(){
    initialDelay = delays;
    moreDelay = delays;
    if(flag == 0){ //No previous array, so create new one and append it to the container
        for(var i=0; i<totalBars; i++){
            elements.push(Math.floor(Math.random()*500)+1);
        }

        for(var i=0; i<totalBars; i++){
            divs[i] = document.createElement("div");
            divs[i].className = "heights"
            divs[i].style.height = elements[i]+"px";
            divs[i].style.width = width;
            divs[i].style.marginRight = gap;
            divs[i].style.backgroundColor = blue;
            innerContainer.appendChild(divs[i]);
        }
        container.appendChild(innerContainer);
        flag = 1;
    }
    else{ //Array already exists... So dont append it to the div, just change the div[] array values
        elements = [];
        for(var i=0; i<totalBars; i++){
            elements.push(Math.floor(Math.random()*500)+1);
        }
        for(var i=0; i<totalBars; i++){
            divs[i].style.height = elements[i]+"px";
            divs[i].style.backgroundColor = blue;
        }
    }
    enableAll();
}
