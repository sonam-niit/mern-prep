function merge(left, right) {

    const result = []
    let k = 0;
    let i = 0;
    let j = 0;
    while (i<left.length && j<right.length) {
        if (left[i] > right[j]) {
            result[k] = right[j];
            k++;
            j++;
        } else {
            result[k] = left[i];
            k++;
            i++;
        }
    }
    while(left.length>i){
        result[k++]=left[i++];
    }
    while(right.length>j){
        result[k++]=right[j++];
    }
    console.log(result);
    
}

merge([1, 3, 5, 7], [2, 6, 8, 9, 10])