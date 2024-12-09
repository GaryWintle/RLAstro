export function initDynamicImageCollage() {
  // Use Vite's import.meta.glob to dynamically import images from a folder
  const imageModules = import.meta.glob(
    "/src/images/homepage/gallery/*.{png,jpg,jpeg,gif,webp}",
    { eager: true }
  );

  // Convert the modules object to an array of image URLs
  const imageLibrary = Object.values(imageModules).map(
    (module) => module.default
  );

  const collageContainer = document.querySelector(".image-collage");

  // Track the currently displayed images
  let currentImages = [];

  // Initialize collage with unique images
  const initialImages = getUniqueImages(9);
  currentImages = [...initialImages];

  // Render initial images
  collageContainer.innerHTML = initialImages
    .map(
      (img) => `
          <img src="${img}" alt="Dynamic collage image" class="collage-image">
        `
    )
    .join("");

  // Set up image-changing interval
  // setInterval(changeRandomImage, Math.floor(Math.random() * 4000) + 30);

  // Get a specified number of unique images
  function getUniqueImages(count, excludeImages = []) {
    const availableImages = imageLibrary.filter(
      (img) => !excludeImages.includes(img)
    );

    // Shuffle available images and return the required number
    return shuffleArray(availableImages).slice(0, count);
  }

  // Shuffle an array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Change a random image in the collage
  function changeRandomImage() {
    const imageElements = collageContainer.querySelectorAll(".collage-image");

    // Choose a random index to replace
    const indexToReplace = Math.floor(Math.random() * imageElements.length);

    // Get a new unique image that is not currently displayed
    const newImage = getUniqueImages(1, currentImages)[0];

    // Replace the image at the selected index
    imageElements[indexToReplace].src = newImage;

    // Update the `currentImages` state
    currentImages[indexToReplace] = newImage;
  }
}
