const data = [
  "img/pexels-ihsanaditya-1056251.jpg",
  "img/pexels-kmerriman-20787.jpg",
  "img/pexels-pixabay-45201.jpg",
  "img/pexels-pixabay-104827.jpg",
  "img/pexels-pixabay-416160.jpg",
  "img/pexels-vatius-127028.jpg"
];


let imgCount = 0;
const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");

function fetchImage() {
  if (imgCount < 1000) {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        const randomSize = Math.random()*30+"rem";
        console.log(randomSize);
        const image = document.createElement("img");
        image.src = data[i];
        image.style.width = randomSize;
        rootElement.appendChild(image);
      }
      imgCount += 5;
    }, 500);
  } else {
    console.log("fail");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  };

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchImage();
      }
    });
  }

  let observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(loader);
});