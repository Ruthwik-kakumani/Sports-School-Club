document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const dots = document.querySelectorAll(".dot");

    let slideIndex = 0;
    const totalSlides = dots.length;
    const slideWidth = 100; // 100vw for each slide

    // Function to show slide
    function showSlide(index) {
        // Reset all dots
        dots.forEach(dot => dot.classList.remove("active"));

        // Adjust slideIndex for looping
        slideIndex = index % totalSlides;

        // Move carousel container
        if (slideIndex === 0) {
            // Reset transition for smooth transition to first slide
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(0)`;
            setTimeout(() => {
                carousel.style.transition = "transform 0.8s ease"; // Adjust transition duration for smoothness
                carousel.style.transform = `translateX(-${slideIndex * slideWidth}vw)`;
            }, 50); // Delay to reset transition properly
        } else {
            carousel.style.transition = "transform 0.8s ease"; // Adjust transition duration for smoothness
            carousel.style.transform = `translateX(-${slideIndex * slideWidth}vw)`;
        }

        // Highlight current dot
        dots[slideIndex].classList.add("active");
    }

    // Initial slide
    showSlide(slideIndex);

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    // Automatic slide change (optional)
    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 2000); // Change slide every 5 seconds
});


// JavaScript to handle menu icon click and toggle menu visibility

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menu = document.querySelector('.menu');
    const container = document.querySelector('.container');
    const menuItems = document.querySelectorAll('#nav_bar_mbl_tbl li');



    hamburgerIcon.addEventListener('click', function() {
        menu.classList.add('open');
        closeIcon.style.display = 'block';
        hamburgerIcon.style.display = 'none';
        container.style.backgroundColor = '#363839';
        container.style.marginLeft = '0';
        container.style.marginRight = '0';
        container.style.width = '100vw';
    });

    closeIcon.addEventListener('click', function() {
        menu.classList.remove('open');
        closeIcon.style.display = 'none';
        hamburgerIcon.style.display = 'block';
        container.style.backgroundColor = '';
        container.style.margin = '';
        container.style.width = '';
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Select all list items within the mobile/tablet navigation menu
    const menuItems = document.querySelectorAll('#nav_bar_mbl_tbl li');

    // Add click event listeners to each list item
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            // Close the mobile/tablet menu
            closeMobileMenu();
        });
    });

    // Function to close the mobile/tablet menu
    function closeMobileMenu() {
        const menu = document.querySelector('.hamburger-menu');
        menu.classList.remove('open');
        // Adjust other styles if needed
        // For example:
        const closeIcon = document.querySelector('.close-icon');
        closeIcon.style.display = 'none';
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        hamburgerIcon.style.display = 'block';
        const container = document.querySelector('.container');
        container.style.backgroundColor = '';
        container.style.margin = '';
        container.style.width = '';
    }
});