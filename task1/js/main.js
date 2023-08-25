(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


const textElement = document.querySelector('.typed-text-output');
const texts = ["Web designer", "Software Engineer", "Creative Thinker"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Delay between characters
    } else {
        setTimeout(eraseText, 1000); // Pause before erasing
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Faster erase
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Pause before typing next text
    }
}

// Initial call to start typing
typeText();

// Get all elements with the class "animate-on-scroll"
const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Unobserve after animating once
        }
    });
});

// Observe each element
elementsToAnimate.forEach(element => {
    observer.observe(element);
});
const imgVibrate = document.querySelector('.img-vibrate img');
let isVibrating = false;

// Function to start the vibrate animation
function startVibrateAnimation() {
    imgVibrate.style.animation = 'vibrate 0.3s linear infinite';
    isVibrating = true;
}

// Function to stop the vibrate animation
function stopVibrateAnimation() {
    imgVibrate.style.animation = 'none';
    isVibrating = false;
}

// Start the vibrate animation on mouseenter
imgVibrate.addEventListener('mouseenter', () => {
    if (!isVibrating) {
        startVibrateAnimation();
    }
});

// Stop the vibrate animation on mouseleave
imgVibrate.addEventListener('mouseleave', () => {
    if (isVibrating) {
        stopVibrateAnimation();
    }
});

// Stop the vibrate animation on click
imgVibrate.addEventListener('click', () => {
    if (isVibrating) {
        stopVibrateAnimation();
    }
});
