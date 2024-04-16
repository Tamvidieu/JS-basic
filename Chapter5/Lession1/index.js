let a = [
    {name:"Tam",age:21},
    {name:"Thang",age:18},
    {name:"Thao",age:23},
    {name:"Ha",age:27},
    {name:"Truc",age:18},
    {name:"Trang",age:30},
]

let b = a.filter((item) =>  item.age > 22).map((item) => item.name);

console.log(b);
