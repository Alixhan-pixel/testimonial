//Arrays for reviews
const reviews = [

  {
    id:1,
    name: "Farhan Ahmed",
    job: "Front-End & Data-Base Developer",
    img: "./avatar-svgrepo-com (2).svg",
    text: "accusamus ratione reprehenderit culpa, consectetur adipisicing elit. Fugit minima praesentium aperiam doloribus aspernatur consequuntur veritatis quibusdam sapiente numquam nulla tempore accusamus ratione reprehenderit culpa rem dignissimos vero, nesciunt sed.  ",
  },
  {
    id:2,
    name: "Usama Jawad",
    job: "WordPress Developer",
    img: "./avatar-svgrepo-com.svg",
    text: "consectetur adipisicing elit, consectetur adipisicing elit. Fugit minima praesentium aperiam doloribus aspernatur consequuntur veritatis quibusdam sapiente numquam nulla tempore accusamus ratione reprehenderit culpa rem dignissimos vero, nesciunt sed.  ",
  },
  {
    id:3,
    name: "Ali Shan",
    job: "Front-End & Back-End Developer",
    img: "./avatar-svgrepo-com (1).svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minima praesentium aperiam doloribus aspernatur consequuntur veritatis quibusdam sapiente numquam nulla tempore accusamus ratione reprehenderit culpa rem dignissimos vero, nesciunt sed.  ",
  },

]

//selecting all id's

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

//btn Selector using querySelector
const preBtn = document.querySelector('.pre-btn');
const nextBtn = document.querySelector('.next-btn');

//set starting Item
let currentItem = 0;


window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem);
});

function showPerson(person){
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
  job.textContent = item.job;
};

nextBtn.addEventListener('click', function(){
  // document.querySelector('.next-btn').style.backgroundColor = "blue"; 
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

preBtn.addEventListener('click', function(){
  // document.querySelector('.pre-btn').style.fontSize = ""; 
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson(currentItem);
});