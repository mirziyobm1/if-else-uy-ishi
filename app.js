// let car={brand:"BMW",model:"X5",color:"back"}
// delete car.model
// console.log(car)

//13
// let users=[
//     {name:"Ali",age:22},
//     {name:"Ali2",age:28},
//     {name:"Ali3",age:19}
// ]
// let user=users.filter(name=>name.age<25)
// console.log(user)

//14
// let prices={apple:5000,banana:7000,orange:6000}
// let summ=Object.values(prices).reduce((ass,b)=>ass+b,0)
// console.log(summ)

//16
// let student={name:"Ali",group:"JS-101"}
// let student1=student
// console.log(student1)

//17
// let company={
//     name:"Techsoft",
//     location:{
//         city:"Toshkent",
//         country:"Uzbekistan"
//     }
// }
// company.location.city="Namangan"
// console.log(company)

//18
// let book = { 
//     title: "Sariq devni minib", 
//     author: "X.To'xtaboyev", 
//     year: 1970 
// };
// let newBook = {
//     title: book.title,
//     author: book.author
// }; 
// console.log(newBook);
  
//19
// let stats={math:90,physics:85,name:"Ali"}
// for (let key in stats){
//     if(typeof stats[key]===Number){
//         continue
//     }
//     else{
//         console.log("Bu obeyktda hamma keylar son turida emas")
//         break
//     }
// }

//20
// let students = [{name: "Laylo", group: { name: "JS-101" } },{ name: "Ali", group: { name: "JS-202" } }];
// for(let i=0;i<2;i++){
//     if(students[i].name==="Ali"){
//         console.log(students[i].group.name)
//     }
//     else{
//         continue
//     }
// }
