document.addEventListener('DOMContentLoaded', function () {
    // Google Analytics ohne Cookie-Zustimmung
    function loadGoogleAnalytics() {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-24W2ENS4EZ';
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-24W2ENS4EZ');
    }

    
    loadGoogleAnalytics();

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
