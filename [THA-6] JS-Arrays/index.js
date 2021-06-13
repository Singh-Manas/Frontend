// Question 1
function is_array(arr) {
    return Array.isArray(arr);
}
console.log(is_array("This is a String"));
console.log(is_array([1,2,3]));

// Question 2
function array_clone(arr) {
    return arr.splice(0);
}
console.log(array_clone([1,2,3]));
console.log(array_clone([]));

// Question 3
function first(arr, n) {
    if (arr == null){
        return [];
    } else if (n == null) {
        return arr[0];
    } else if (n < 0) {
        return [];
    } else {
        return arr.splice(0,n);
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Question 4
function joinElements(arr, separator) {
    return arr.join(separator);
}
console.log(joinElements(["Red", "Green", "White", "Black"], "+"));

// Question 5
function mostFrequentItem(arr) {
    var max = 0;
    var ans;
    for(let i = 0; i < arr.length; i++) {
        var count = 1;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
            if(count > max){
                max = count;
                ans = arr[i];
            }
        }
    }
    return ans;
}
console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));