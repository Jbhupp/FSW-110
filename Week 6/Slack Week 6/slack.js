function concat(str1, str2) {
    return str1.concat(str2);
}
console.log(concat("basketball", "baseball"));
function indexOf(str) {
    return str.indexOf("e");
}
console.log(indexOf("sports"));
function lastIndexOf(str) {
    return str.lastIndexOf("t");
}
console.log(lastIndexOf("Elephant"));
var strA = "The basketball game was ended after overtime."
function match(str) {
    return str.match(/was/);
}
console.log(match(strA));
var strA = "The truck pulled, a full pull."
function replace(str) {
    return str.replace(/pulled/g, "half");
}
console.log(replace(strA));
var myString = "basketball";
function slice(str) {
    return str.slice(0, 5);
}
console.log(slice(myString));
var myStringA = "I would like to go on vacation."
function split(str) {
    return str.split(" ");
}
console.log(split(myStringA));
var myStringB = "Basketball";
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase(myStringB));
var myStringC = "Baseball";
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toUpperCase(myStringC));
var myStringD = "Truck";
function substr(str) {
    return str.substr(1, 4);
}
console.log(substr(myStringD));