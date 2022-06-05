const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const gallery = $(".gallery");
const close = $(".close");
const prev = $(".prev");
const next = $(".next");
const imageItems = $$(".image img");
const innerImg = $(".gallery__img");

var currentIndex = 0;
function showGallery() {
  //prev button
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }
  //next button
  if (currentIndex == imageItems.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  //show gallery modal
  innerImg.src = imageItems[currentIndex].src;
  gallery.classList.add("show");
}

imageItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showGallery();
  });
});

close.addEventListener("click", function () {
  gallery.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    gallery.classList.remove("show");
  }
});

prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});
next.addEventListener("click", function () {
  if (currentIndex < imageItems.length - 1) {
    currentIndex++;
    showGallery();
  }
});

//prev and next by keyboard
document.onkeydown = function (e) {
  if (e.keyCode == "37" && currentIndex > 0) {
    currentIndex--;
    showGallery();
  } else if (e.keyCode == "39" && currentIndex < imageItems.length - 1) {
    currentIndex++;
    showGallery();
  }
};
