//Insertion Sort Code

function insertionSort(){
    initialDelay = delays;
    
    disableButtons();
    var n = elements.length, i, j, key;

    for(i = 0; i < n; i++){
        updateDiv(i, elements[i], pink);
        key = elements[i];
        j = i-1;

        while(j>=0 && elements[j] > key){
            updateDiv(j, elements[j], "orange");
            updateDiv(j+1, elements[j+1], "orange");

            elements[j+1] = elements[j];
            
            updateDiv(j, elements[j], "orange");
            updateDiv(j+1, elements[j+1], "orange");

            updateDiv(i, elements[i], blue);

            if(j == (i-1)){
                updateDiv(j+1, elements[j+1], pink)
            }
            else{
                updateDiv(j+1, elements[j+1], blue);
            }
            j = j - 1;
        }
        elements[j+1] = key; 
    }

    for(var x=0; x<i; x++){
        updateDiv(x, elements[x], "green");
    }
    updateDiv(i-1, elements[i-1], "green");
    enableButtons();
}