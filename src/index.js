// console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',(event)=>{
 loadImages();
 loadBreeds();
})

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl).then(res =>res.json())
  .then(json=>json.message.forEach(
  y=>addImage(y) ))
}

function addImage(image) {
  const contenair = document.getElementById("dog-image-container")
  const im = document.createElement('img')
  im.src = image
  contenair.appendChild(im)
}
function  loadBreeds() {

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
 return fetch(breedUrl).then(res=>res.json()).then(json=>breeds(json.message))
}

function breeds(json) {
  let u = document.getElementById("dog-breeds")

  for (const k in json) {
    let i = document.createElement('li')
    i.innerText = `${k}`;
     u.appendChild(i);
     i.addEventListener('click', (event)=>{
       event.target.style.color ='blue';
     })
  }

}



// const selected = ducument.getElementById('breed-dropdown');
// const value = selected.value;
//    for (const k in json) {
//      filter(k=> {
//         k.startsWith(value)
//         let i = document.querySelector('label')
//         let p = document.createElement('p')
//         p.innerText = `${k}`;
//         i.appendChild(p);
//
//      })
//
//
//
// }
// }
//
