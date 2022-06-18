
const boss = document.querySelectorAll(".btn");

const root = document.querySelectorAll(".question-info")

boss.forEach (function(change){
change.addEventListener("click", function(e){
  const man = e.currentTarget.parentElement.nextElementSibling;
     console.log(man)

     root.forEach(function(item){
        console.log(item)
        if(item !==man){
      item.classList.remove("showman")
        }
     })
     man.classList.toggle("showman")
//   root.forEach (function(tim){
//    console.log(e.target.parentElement.parentEnextElementSibling)
//    tim.classList.toggle("showman")
//    const hop = document.querySelector("showman")
//    console.log(hop);
//    console.log(354)
  })
// const man = e.currentTarget.root;
//   root.classList.toggle(".showman");


})


// })
