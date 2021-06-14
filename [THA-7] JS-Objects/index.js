// Question 1
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: "12"
};
console.log(Object.keys(student));

// Question 2
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: "12"
};
console.log(student);
delete student.rollno;
console.log(student);

// Question 3
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: "12"
};
// Objects.keys() function returns an array with all keys in the object. Then length function is used to find length.
console.log(Object.keys(student).length);   

// Question 4
var library = [ {   author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
                {   author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
                {   author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
// Outer loop is for traversing in an array.
// Inner loop is for traversing the object.
library.forEach(element => {
    for (let item in element) {
        console.log(element[item]);
    }
});

// Question 5
// Object Constructor is used to create many objects to the same type 
// Object Constructor Function for Cylinder
function cylinder(radius, height) {     
    this.radius = radius;
    this.height = height;
}
// We cannot directly add new properties to constructor functions.
// To add new properties to constructor function, we need to use prototype property.
cylinder.prototype.volume = function () {
    return Math.PI * this.radius * this.radius * this.height;
}
var cyl = new cylinder(1, 7);   // Creating new Object
console.log(cyl.volume().toFixed(4));   // Fixing Output to 4 decimal places

// Question 6
// We can sort an array of objects using custom sort function as default sort function will not work.
function compareID(a, b) {
    // When we want a should come before b, then result should be negative
    if(a.libraryID < b.libraryID) {
        return -1;
    // When we want a should come after b, then result should be negative
    } else if(a.libraryID > b.libraryID) {
        return 1;
    // a and b should come in same order
    } else {
        return 0;
    }
}
var library = [ 
    {   
        title: 'The Road Ahead', 
        author: 'Bill Gates', 
        libraryID: 1254 
    }, 
    { 
        title: 'Walter Isaacson', 
        author: 'Steve Jobs', 
        libraryID: 4264 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245 
    }]; 
console.log("Before Sorting");
console.log(library);
var lib = library.slice(0);
console.log("After Sorting");
console.log(lib.sort(compareID));