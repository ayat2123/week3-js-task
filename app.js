//even number
const numbers =[1,2,3,4,5,6,7,8,9,10]
const evennumber= numbers.filter((number)=>
 (number %2===0)    
)
console.log(evennumber)

//array flattening
const nestedarray= [1,[2,[3,[4]],5]]
const flatarray=nestedarray.flat((Infinity))
console.log(flatarray)

