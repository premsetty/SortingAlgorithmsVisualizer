//Merge Sort Code
function mergeSorter(){
    disableButtons();
    initialDelay = delays*5;
    moreDelay = initialDelay;
    merge(0, elements.length-1);
    enableButtons();
}

function mergeSort(l, m, r){
    var p = l, q = m+1;
    var array = [], k = 0;
    for(var i=l; i<=r; i++){
        if(p>m){
            array[k++] = elements[q++];
            updateDiv(q-1, elements[q-1], "orange");
        }
        else if(q>r){
            array[k++] = elements[p++];
            updateDiv(p-1, elements[p-1], "orange");
        }
        else if(elements[p] < elements[q]){
            array[k++] = elements[p++];
            updateDiv(p-1, elements[p-1], "orange");
        }
        else{
            array[k++] = elements[q++];
            updateDiv(q-1, elements[q-1], "orange");
        }
    }

    for(var x=0; x<k; x++){
        elements[l++] = array[x];
        updateDiv(l-1, elements[l-1], "green");
    }
}

function merge(l, r){
    if(l < r){
        var m = Math.floor((l+r)/2);
        updateDiv(m, elements[m], pink);

        merge(l, m);
        merge(m+1, r);
        mergeSort(l, m, r);
    }
}
