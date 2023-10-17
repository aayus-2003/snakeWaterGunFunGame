
let info = document.getElementById("info")
let right = document.getElementById("right")
let first = document.getElementById("first")
let second = document.getElementById("second")

info.addEventListener('click',()=>{
   right.classList.toggle("none")
})

let input = document.getElementById("input")
let btn = document.getElementById("btn")



btn.addEventListener('click',()=>{
   
let cpu1 = Math.floor(Math.random()*3)
let cpu = ["snake", "water", "gun"][cpu1]

   let inp = input.value
   first.classList.toggle("display")
   first.innerHTML = `U Choose ${inp} and Computer will be ${cpu}`
   
   second.classList.toggle("display")
   if(inp == cpu){
     second.innerHTML = `This Match Was No One Win ( round was tai )` 
    setTimeout(()=>{
      second.innerHTML = `PLAY AGAIN CHEAF I KNOW U WIN` 
    },6000)
   }
   
   else if(inp == "snake" && cpu == "gun"){
    setTimeout(() => {
      document.getElementsByTagName("img")[0].src = "img/lose.jpg"
    },2000);
   }
   
   else if(inp == "snake" && cpu == "water"){
    setTimeout(() => {
      document.getElementsByTagName("img")[0].src = "img/win.jpg"
    },2000);
   }
   
   
   else if(inp == "water" && cpu == "g"){
    setTimeout(() => {
      document.getElementsByTagName("img")[0].src = "img/win.jpg"
    },2000);
   }
   
   else if(inp == "water" && cpu == "snake"){
    setTimeout(() => {
      document.getElementsByTagName("img")[0].src = "img/lose.jpg"
    },2000);
   }
   
   
   else if(inp == "gun" && cpu == "water"){
    setTimeout(() => {
      document.getElementsByTagName("img")[0].src = "img/lose.jpg"
    },2000);
   }
   
   else if(inp == "gun" && cpu == "snake"){
     setTimeout(() => {
      document.getElementsByTagName("img")[0].src = "img/win.jpg"
    },2000);
   }

   input.value = ""

   setTimeout(() => {
    alert('If U Want To Play This Game Again . Then Load This Website')
   }, 9000);
})

