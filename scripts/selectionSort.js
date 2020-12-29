// To check if my sorting is correct with js native sorting
// var a = [];
// for(var x = 0; x<elements.length; x++){ 
    //     a.push(elements[x]);
    // }
    // a.sort(function(a, b){ 
    //     return a-b;
    // });
// 
// put this at the end >>>
// console.log(JSON.stringify(a) == JSON.stringify(elements)); // true = all ok, false = bug in a code

// Selection Sort code

function selectionSort(){

    disableButtons();
    initialDelay = delays/5;
    moreDelay = initialDelay;
    var n = elements.length;

    for(var i=0; i<n; i++){
        
        updateDiv(i, elements[i], "orange");
        var minIdx = i;
        for(var j=i+1; j<n; j++){
            updateDiv(j, elements[j], pink);

            if(elements[j] < elements[minIdx]){
                if(minIdx != i){
                    updateDiv(minIdx, elements[minIdx], blue);
                }
                minIdx = j;
                updateDiv(minIdx, elements[minIdx], "orange");
            }
            else{
                updateDiv(j, elements[j], blue);
            }
        }
        
        if(minIdx != i){
            var temp = elements[minIdx];
            elements[minIdx] = elements[i];
            elements[i] = temp;

            updateDiv(minIdx, elements[minIdx], "orange");
            updateDiv(i, elements[i], "orange");
            updateDiv(minIdx, elements[minIdx], blue);
        }
        updateDiv(i, elements[i], "green");
    }
    updateDiv(i, elements[i], "green");
    enableButtons();
}