
// Function to toggle between dark and light mode
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Update the theme for all elements
    document.querySelectorAll('.change-home-model').forEach(element => {
        element.classList.toggle('dark-light', newTheme === 'dark');

    });

    // Set the icon class based on the saved theme
    const themeIcon = document.querySelector("#mode-button");
    themeIcon.classList.toggle('fa-sun', newTheme === 'dark');
    themeIcon.classList.toggle('fa-moon', newTheme === 'light');

    // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);
}

// Add event listener to the button
const themeIcon = document.querySelector("#mode-button");
themeIcon.addEventListener("click", toggleTheme);


// Load the saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light if not set

        document.querySelectorAll('.change-home-model').forEach(element => {
            element.classList.toggle('dark-light', savedTheme === 'dark');

        });

        // Set the icon class based on the saved theme
        const themeIcon = document.querySelector("#mode-button");
        themeIcon.classList.toggle('fa-sun', savedTheme === 'dark');
        themeIcon.classList.toggle('fa-moon', savedTheme === 'light');

};

// Add event listener to the button
document.getElementById('mode-button').addEventListener('click', toggleTheme);
