//Questions are in the link given below
//https://docs.google.com/document/d/1ElC4HVna2FO6SqeSd2zuUEuIC2CnnQQqsnOTpL9hydk/edit

//Q1
console.log("Question no.1")
function disp(obj){
    console.log(Object.keys(obj));
}
disp({ name : "David Rayy", sclass : "VI", rollno : 12 })

//Q2
console.log("Question no.2")
function del(obj){
    console.log(obj);
    delete obj['rollno'];
    console.log(obj)
}
del({ name : "David Rayy", sclass : "VI", rollno : 12 } )



//Q3
console.log("Question no.3")
function len(obj){
    console.log(Object.keys(obj).length)
}
len( { name : "David Rayy", sclass : "VI", rollno : 12 })

//Q4
console.log("Question no.4")
function dispQ4(obj){
for(let i=0;i<obj.length;i++){
    console.log(Object.values(obj[i]))
}
}
dispQ4([ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }])

//Q5
console.log("Question no.5")
vol = {
    height: 0,
    radius:0 ,
    volume:(radius,height)=>{
        return (2*3.14.radius*height).toFixed(4);
    }
}


