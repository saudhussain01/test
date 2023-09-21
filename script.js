const hiddenText = document.getElementById("hiddenText");
const toggleButton = document.getElementById("toggleButton");

function toggleText() {
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
    toggleButton.textContent = "Show Less";
  } else {
    hiddenText.style.display = "none";
    toggleButton.textContent = "Show More..";
  }
}

toggleButton.addEventListener("click", toggleText);


// JavaScript for the image slideshow
let slideIndex = 0; // Initialize the slide index to 0

// Function to show the slides
function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset to the first slide
  }
  slides[slideIndex - 1].style.display = "block"; // Display the current slide
  setTimeout(showSlides, 5000); // Change slide every 3 seconds (adjust as needed)
}
function plusSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}
// Start the slideshow when the page loads
window.onload = function () {
  showSlides();
};


// Get the modal and button elements
const contactModal = document.getElementById('contactModal');
const contactButton = document.getElementById('contactButton');
const closeModal = document.getElementById('closeModal');

// Show the modal when the "Contact Us" button is clicked
contactButton.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

// Handle form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;

    // You can now send this data to your server using an AJAX request or any other method.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Description:', description);

    // Close the modal after submission (you can customize this behavior)
    contactModal.style.display = 'none';

    // Reset the form fields if needed
    contactForm.reset();
});

















// Get the booking modal and button elements
const bookingModal = document.getElementById('bookingModal');
const closeBookingModal = document.getElementById('closeBookingModal');
const bookingButtons = document.querySelectorAll('.project-btn');

// Show the booking modal when a category button is clicked
bookingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        bookingModal.style.display = 'block';
    });
});

// Close the booking modal when the close button is clicked
closeBookingModal.addEventListener('click', () => {
    bookingModal.style.display = 'none';
});

// Handle booking form submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather form data
    const bookingName = document.getElementById('bookingName').value;
    const bookingPhone = document.getElementById('bookingPhone').value;
    const bookingEmail = document.getElementById('bookingEmail').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingDuration = document.getElementById('bookingDuration').value;
    const bookingLocation = document.getElementById('bookingLocation').value;

    // You can now send this data to your server using an AJAX request or any other method.
    console.log('Name:', bookingName);
    console.log('Phone:', bookingPhone);
    console.log('Email:', bookingEmail);
    console.log('Date:', bookingDate);
    console.log('Duration:', bookingDuration);
    console.log('Location:', bookingLocation);

    // Close the booking modal after submission (you can customize this behavior)
    bookingModal.style.display = 'none';

    // Reset the form fields if needed
    bookingForm.reset();
});




