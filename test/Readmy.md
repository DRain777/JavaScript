# My Image Carousel

<div id="imageCarousel" style="max-width: 250px; margin: auto; overflow: hidden;">
  <img src="https://reqres.in/img/faces/6-image.jpg" alt="Image 1" style="width: 50%;"> clark
  <img src="https://reqres.in/img/faces/7-image.jpg" alt="Image 2" style="width: 50%;"> Ban
  <img src="https://reqres.in/img/faces/8-image.jpg" alt="Image 3" style="width: 50%;">
</div>

<script>
  let currentIndex = 0;
  const images = document.querySelectorAll('#imageCarousel img');
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((image, i) => {
      image.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  // Initial display
  showImage(currentIndex);

  // Add event listeners for navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  });
</script>











# My Image Carousel

<div id="imageCarousel" style="max-width: 500px; margin: auto; overflow: hidden;">
  <img src="https://reqres.in/img/faces/6-image.jpg" alt="Image 1" style="width: 100%;">
  <img src="https://reqres.in/img/faces/7-image.jpg" alt="Image 2" style="width: 100%;">
  <img src="https://reqres.in/img/faces/8-image.jpg" alt="Image 3" style="width: 100%;">
</div>

<script>
  let currentIndex = 0;
  const images = document.querySelectorAll('#imageCarousel img');
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((image, i) => {
      image.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  // Initial display
  showImage(currentIndex);

  // Add event listeners for navigation
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  });
</script>
