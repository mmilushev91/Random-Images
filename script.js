const imageContainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".btn");
const loadedImagesCount = 8;
let imageCounter = 9;

buttonEl.addEventListener("click", function () {
  createImages();
});

function createImages() {
  for (let i = 0; i < loadedImagesCount; i++) {
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300/300?random=${imageCounter}`;
    imageContainerEl.appendChild(newImageEl);
    imageCounter++;
  }
}
