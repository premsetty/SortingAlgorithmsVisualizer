//Merge Sort Code 2
function mergeSorter(){
    disableButtons();
    initialDelay = delays*5;
    moreDelay = initialDelay;
    merge(elements, 0, elements.length-1);
    for(var i = 0; i <elements.length; i++){
        updateDiv(i, elements[i], "green");
    }
    enableButtons();
}

function mergeSort(elements, l, m, r){
    var i = l, j = m + 1; k = 0;

    var temp = [];
    while((i <= m) && (j <= r)){
        if(elements[i] < elements[j]){
            temp[k++] = elements[i++];
            updateDiv(i-1, elements[i-1], "orange");
        }
        else{
            temp[k++] = elements[j++];
            updateDiv(j-1, elements[j-1], "orange");
        }
    }

    while(j <= r){
        temp[k++] = elements[j++];
        updateDiv(j-1, elements[j-1], "orange");
    }
    while(i <= m){
        temp[k++] = elements[i++];
        updateDiv(i-1, elements[i-1], "orange");
    }

    for(i = l, k = 0; i <= r; i++, k++){
        elements[i] = temp[k];
        updateDiv(i, elements[i], blue);
    }
    temp = [];
}

function merge(elements, l, r){
    if(l < r){
        var m = Math.floor((l+r)/2);
        updateDiv(m, elements[m], pink);

        merge(elements, l, m);
        merge(elements, m+1, r);
        if(elements[m] > elements[m+1])
            mergeSort(elements, l, m, r);
    }
}
