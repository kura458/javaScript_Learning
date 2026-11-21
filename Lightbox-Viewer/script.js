
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

// Open lightbox when a thumbnail is clicked
galleryItems.forEach((image) => {
  image.addEventListener("click", () => {
    const fullSizeImage = image.src.replace("-thumbnail", "");

    lightboxImage.src = fullSizeImage;
    lightbox.style.display = "flex";
  });
});

// Close lightbox when close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox when its background is clicked
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
