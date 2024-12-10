document.addEventListener('DOMContentLoaded', function () {
    
    // Dark Mode Script
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');  // Dark Mode speichern
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');  // Dark Mode speichern
    }

    const storedDarkMode = localStorage.getItem('darkMode');

    if (storedDarkMode === 'enabled') {
        enableDarkMode();
    } else if (storedDarkMode === 'disabled') {
        disableDarkMode();
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    darkModeToggle.addEventListener('click', function () {
        darkModeToggle.classList.add('clicked');
        setTimeout(() => {
            darkModeToggle.classList.remove('clicked');
        }, 300);

        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});
