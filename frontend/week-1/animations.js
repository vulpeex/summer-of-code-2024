document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to input fields
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 0 2px rgba(55, 81, 254, 0.2)';
        });
        input.addEventListener('blur', () => {
            input.style.boxShadow = 'none';
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.login-btn, .signup-btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Add active class to current nav item
    const navItems = document.querySelectorAll('.nav-items');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
        });
    });
});