document.addEventListener('DOMContentLoaded', function() {
    // Change the background color of the header on click
    const header = document.querySelector('.bg-dark');
    header.addEventListener('click', function() {
        header.style.backgroundColor = 'green';
    });

    // Add a border to the sport event images on mouseover
    const sportEventImages = document.querySelectorAll('.caption img');
    sportEventImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.border = '2px solid #fff';
        });

        image.addEventListener('mouseout', function() {
            image.style.border = 'none';
        });
    });

    // Alert on sport event click
    const sportEvents = document.querySelectorAll('.caption');
    sportEvents.forEach(event => {
        event.addEventListener('click', function() {
            alert('Sport event clicked!');
        });
    });

    // Toggle text color on navbar link click
    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            link.style.color = (link.style.color === 'green') ? 'black' : 'green';
        });
    });

    // Form validation on submission
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        const inputField = document.getElementById('inputField');
        if (inputField.value.trim() === '') {
            alert('Please fill in the input field before submitting.');
            event.preventDefault(); // Prevents the form from submitting
        }
    });

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Accordion functionality for FAQ section
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    // Image slideshow
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slideshow-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});
