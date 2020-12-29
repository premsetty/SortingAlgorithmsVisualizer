function updateDiv(i,height, color){

    window.setTimeout(function(){
        try{
            divs[i].style.backgroundColor = color;
            divs[i].style.height = height;
        }
        catch(err){}
    }, initialDelay += moreDelay);
}

//Enable and Disable the buttons while animations is going on
function enableButtons(){
    window.setTimeout(function (){
        rangeSlider.disabled = false;
        generateBtn.disabled = false;
        bubbleSortBtn.disabled = false;
        insertionSortBtn.disabled = false;
        mergeSortBtn.disabled = false;
        selectionSortBtn.disabled = false;
    },initialDelay += moreDelay);
}

function disableButtons(){
    rangeSlider.disabled = true;
    generateBtn.disabled = true;
    bubbleSortBtn.disabled = true;
    insertionSortBtn.disabled = true;
    mergeSortBtn.disabled = true;
    selectionSortBtn.disabled = true;
}