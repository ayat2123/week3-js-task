
 const buttonEL= document.querySelector("button")
 
 buttonEL.addEventListener("click",(event)=>{
     event.preventDefault()
     const changecolor = event.target.body
     document.body.style.backgroundColor = "blue"

 })