

totalList=()=>{
    let vegetables = ["cabbage","onion","chillies"];
let fruits = ["apple","orange","Mango"];
console.log(fruits);
console.log(vegetables);
console.log("the total items are",fruits.concat(vegetables));
}
totalList();
let vegetables = ["cabbage","onion","chillies"];
itemPush=(item)=>{
    vegetables.push(item)
    console.log(vegetables);
    console.log(vegetables.length);
}

itemPush("capsicum");
itemPush("potato");
itemPush('tomato')