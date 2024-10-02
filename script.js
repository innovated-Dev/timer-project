var time = document.querySelector(".time");
var moon = document.querySelector(".fa-solid");
var body = document.querySelector("#body");
var sun = document.querySelector(".fa-regular");
var none = document.querySelector(".none");

function readTime() {
  // /get the current date
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const sec = date.getSeconds();

  //rendering the currnt date to html

  time.innerHTML = `${hour} : ${minute} : ${sec}`;
}
//

readTime();

setInterval(readTime, 1000);


// second way 
moon.addEventListener('click',function(){
    body.classList.add('darkmode')
    body.classList.remove('lightmode')
    moon.style.display='none'
    none.style.display='block'
})
sun.addEventListener('click',function(){
     body.classList.add('lightmode')
     body.classList.remove('darkmode')
    none.style.display='none'
     moon.style.display='block'

})






// moon.addEventListener("click", function () {
//   body.style.backgroundColor = "#000";
//   time.style.color = "#fff";
//   moon.style.display = "none";
//   none.style.display = "block";
// });

// sun.addEventListener("click", function () {
//   body.style.backgroundColor = "#fff";
//   time.style.color = "#000";
//   moon.style.display = "block";
//   none.style.display = "none";
// });

// function auto() {
//   const date = new Date();
//   const hour = date.getHours();

//   if (hour >= 18) {
//     body.style.backgroundColor = "#000";
//     time.style.color = "#fff";
//     moon.style.display = "none";
//     none.style.display = "block";
//   }
//   if (hour > 9) {
//     body.style.backgroundColor = "#fff";
//     time.style.color = "#000";
//     moon.style.display = "block";
//     none.style.display = "none";
//   }
// }

// auto();



// var textx =['i am a developer','i write js',]

