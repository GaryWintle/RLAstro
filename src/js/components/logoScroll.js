export function initLogoScroll() {
  // Logo Scroll Effect with Vanilla JavaScript
  const logoContainer = document.querySelector(".logo-scroll-container");

  // Use Vite's glob import to dynamically import all SVGs from a specific directory
  const importedLogos = import.meta.glob("/src/images/homepage/logos/*.svg");

  async function loadLogos() {
    // Convert the imported logos object into an array of logo sources
    const logoSources = await Promise.all(
      Object.keys(importedLogos).map(async (path) => {
        const module = await importedLogos[path]();
        return module.default;
      })
    );

    // Create and append logo elements
    logoSources.forEach((logoSrc) => {
      const logoImg = document.createElement("img");
      logoImg.src = logoSrc;
      logoImg.classList.add("logo");
      logoContainer.appendChild(logoImg);
    });
  }

  function handleScroll() {
    // Adjust the scroll multiplier to control the speed of logo movement
    const scrollTranslation = window.scrollY * 0.5;
    logoContainer.style.transform = `translateX(-${scrollTranslation}px)`;
  }

  // Initialize logos and add scroll listener
  loadLogos();
  window.addEventListener("scroll", handleScroll);

  // Optional: Clean up event listener if needed
  // window.removeEventListener('scroll', handleScroll);
}
