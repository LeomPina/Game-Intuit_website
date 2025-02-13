
console.log("Language toggle script loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle"); // Button to switch languages
    const langOptions = languageToggle.querySelectorAll(".lang-option"); // Language text spans
    let currentLang = localStorage.getItem("lang") || "en"; // Store user's preference

    function loadLanguage(lang) {
        fetch("/assets/js/lang.js") // Fetch the JSON file
            .then(response => response.json())
            .then(data => {
                document.getElementById("nav_about").textContent = data[lang].nav_about;
                document.getElementById("nav_tech").textContent = data[lang].nav_tech;
                document.getElementById("nav_news").textContent = data[lang].nav_news;
                document.getElementById("nav_contact").textContent = data[lang].nav_contact;
                document.getElementById("hero_title").textContent = data[lang].hero_title;
                document.getElementById("hero_description").textContent = data[lang].hero_description;
            });
        // Update active language in the button
        langOptions.forEach(option => {
            if (option.getAttribute("data-lang") === lang) {
                option.classList.add("active");
            } else {
                option.classList.remove("active");
            }
        });    
           
    }

    // Load default language
    loadLanguage(currentLang);

    // Toggle language on button click
    languageToggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "zh" : "en"; // Toggle between English & Chinese
        localStorage.setItem("lang", currentLang); // Save language preference
        loadLanguage(currentLang);
    });
});


