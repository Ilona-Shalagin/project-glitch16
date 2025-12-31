const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["images/new-york.jpeg","images/NY2","images/NY3.jpeg","images/NY4.jpeg,"images/NY5.jpeg"];
let i = 0;

next.addEventListener("click",() => {
  i++;
  if(i>photos.length-1){
      i=0;
  }
  document.querySelector("#pictures").src = photos[i];
})

back.addEventListener("click",() => {
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector("#pictures").src = photos[i];
})
