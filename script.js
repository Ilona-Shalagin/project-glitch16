const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["https://cdn.glitch.com/a5af9aed-8f16-4ebb-8ac4-164fd58e8d14%2F1.jpeg?v=1631301901299","https://cdn.glitch.com/a5af9aed-8f16-4ebb-8ac4-164fd58e8d14%2F2.jpeg?v=1631301906824","https://cdn.glitch.com/a5af9aed-8f16-4ebb-8ac4-164fd58e8d14%2F3.jpeg?v=1631301910264","https://cdn.glitch.com/a5af9aed-8f16-4ebb-8ac4-164fd58e8d14%2F4.jpeg?v=1631301913945","https://cdn.glitch.com/a5af9aed-8f16-4ebb-8ac4-164fd58e8d14%2F5.jpeg?v=1631301917562"];
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