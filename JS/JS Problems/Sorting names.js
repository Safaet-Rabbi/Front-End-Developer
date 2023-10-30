//by names alphabetically
const students = ["Safaet","Samantha","Rimti","Tuhin","Numan","Ismail"];
console.log(students.sort())

//by roll
const roll = [1,3,29,8,47,45,23,4];
console.log(roll.sort(function(a,b){
    return a-b;
}))