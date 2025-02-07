//even number
// const numbers =[1,2,3,4,5,6,7,8,9,10]
// const evennumber= numbers.filter((number)=>
//  (number %2===0)    
// )
// console.log(evennumber)






//array flattening
// const nestedarray= [1,[2,[3,[4]],5]]
// const flatarray=nestedarray.flat((Infinity))
// console.log(flatarray)






//sorted list
// const unsortnumber=[1,8,11,5,7,19,2,4,3,6,9,10]
// const sortednumber=unsortnumber.sort((a,b)=>(a-b))
// console.log(sortednumber)






//property counter
// function countProperties(obj) {
//     const count = 0;
//     function recursiveCount(currentObj) {
//       for (const key in currentObj) {
//         if (currentObj.hasOwnProperty(key)) {
//           count++; 
//           if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
//             recursiveCount(currentObj[key]);
//           }
//         }
//       }
//     }
//     recursiveCount(obj);
//     return count;
//   }
  





  //countdown
  // function startcountdown(second){
  //   const counter=second
  //   setInterval(()=>{
  //   counter--;
  //   console.log(counter)
  // })
  //  if(counter===0){
  //       clearInterval(counterinterval)
  //   }
  // }
  // startcountdown(10)
 

//change background
 const buttonEL= document.querySelector("button")
 
 buttonEL.addEventListener("click",(event)=>{
     event.preventDefault()
     const changecolor = event.target.body
     document.body.style.backgroundColor = "blue"

 })

  
 