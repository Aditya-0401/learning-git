console.log("Hello World")

let array = [1,12,3,4,54,6]

const newArray = array.map(multiplyByTwo);

function multiplyByTwo(num){
    return num * 2;
}

newArray.forEach((element)=>{
    console.log(element);
})