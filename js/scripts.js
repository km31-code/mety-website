/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission

    // Retrieve the email value from the input field
    const email = document.getElementById('email').value;

    // Call the function to insert email into the database (you should have this function defined in your app.js)
    insertEmail(email);

    // Optionally, you can display a success message or redirect to a thank-you page
    alert('Email submitted successfully!');
  }


window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY > 100) { // Check if scroll position is greater than 300 pixels
            navbarCollapsible.classList.add('navbar-shrink'); // Add the class
        } else {
            navbarCollapsible.classList.remove('navbar-shrink'); // Remove the class
        }
    };

    // Shrink the navbar on page load (if needed)
    navbarShrink();

    // Shrink the navbar when scrolling
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
