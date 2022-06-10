let obj = {
   key: "valuuuuue",
   second: 2,
   third: "THREE",
   four: {          // nested object
      five: 5,
      six: "SIXX"
   },
   eight:          // array
     [
       {
         color: "red"
       },
       {
         color: "blue"
       }
     ]
}

console.log(obj.third);
console.log(obj.four.five);
console.log(obj.eight);
console.log(obj.eight[1].color);
