//Bubble Sort code

function bubbleSort(){
    initialDelay = delays;
    disableButtons();
    var n = elements.length, i, j;
    for(i=0; i<n-1; i++){
        for(j=0; j<n-i-1; j++){
            updateDiv(j, elements[j], pink);
            if(elements[j] > elements[j+1]){
                updateDiv(j, elements[j], "orange");
                updateDiv(j+1, elements[j+1], "orange");
                
                var temp = elements[j];
                elements[j] = elements[j+1];
                elements[j+1] = temp;
                
                updateDiv(j, elements[j], "orange");
                updateDiv(j+1, elements[j+1], "orange");
            }
            updateDiv(j, elements[j], blue);
        }
        updateDiv(j, elements[j], "green");
    }
    updateDiv(1, elements[1], "green");
    
    for(var i=0; i<totalBars; i++){
        updateDiv(i, elements[i], "green");
    }
    enableButtons();
}