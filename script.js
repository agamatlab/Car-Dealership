document.addEventListener('DOMContentLoaded', () => {
  const carouselTrack = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');

  // Example carousel items
  const carouselItems = [
    { image: 'image1.jpg', alt: 'Car 1' },
    { image: 'image2.jpg', alt: 'Car 2' },
    { image: 'image3.jpg', alt: 'Car 3' },
    { image: 'image4.jpg', alt: 'Car 4' }
  ];

  // Add carousel items if more than 3
  if (carouselItems.length > 3) {
    carouselItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'carousel-item';
      div.innerHTML = `<img src="${item.image}" alt="${item.alt}">`;
      carouselTrack.appendChild(div);
    });
  }

  let currentIndex = 0;

  const updateCarousel = () => {
    const itemWidth = carouselTrack.querySelector('.carousel-item').offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
  };

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Example car cards
  const cars = [
    { name: 'Car 1', price: '$20,000' },
    { name: 'Car 2', price: '$25,000' },
    { name: 'Car 3', price: '$30,000' },
    { name: 'Car 4', price: '$35,000' },
    { name: 'Car 5', price: '$40,000' },
    { name: 'Car 6', price: '$45,000' }
  ];

  const carCards = document.querySelector('.car-cards');

  // Add car cards
  cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <div class="car-image"></div>
      <h3>${car.name}</h3>
      <p>${car.price}</p>
    `;
    carCards.appendChild(card);
  });
});
