document.addEventListener('DOMContentLoaded', function() {

    // Change the background color of the header on click
    const header = document.querySelector('.bg-dark');
    header.addEventListener('click', function() {
        header.style.backgroundColor = 'red';
    });

    // Add a border to the thumbnails on mouseover
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', function() {
            thumbnail.style.border = '2px solid #fff';
        });

        thumbnail.addEventListener('mouseout', function() {
            thumbnail.style.border = 'none';
        });
    });

    // Alert on footer click
    const footer = document.querySelector('footer');
    footer.addEventListener('click', function() {
        alert('Footer clicked!');
    });

    // Toggle text color on navbar link click
    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            link.style.color = (link.style.color === 'red') ? 'black' : 'red';
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

    // Toggle visibility of a hidden element on button click
    const toggleButton = document.getElementById('toggleButton');
    const hiddenElement = document.getElementById('hiddenElement');

    toggleButton.addEventListener('click', function() {
        hiddenElement.style.display = (hiddenElement.style.display === 'none') ? 'block' : 'none';
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

    

});

