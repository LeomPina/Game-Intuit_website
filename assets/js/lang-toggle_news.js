
console.log("Language toggle script loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle"); // Button to switch languages
    const langOptions = languageToggle.querySelectorAll(".lang-option"); // Language text spans
    let currentLang = localStorage.getItem("lang") || "en"; // Store user's preference

    function loadLanguage(lang) {
        fetch("/assets/js/lang_news.js") // Fetch the JSON file
            .then(response => response.json())
            .then(data => {
                document.getElementById("nav_about").innerHTML = data[lang].nav_about;
                document.getElementById("nav_tech").innerHTML = data[lang].nav_tech;
                document.getElementById("nav_news").innerHTML = data[lang].nav_news;
                document.getElementById("nav_contact").innerHTML = data[lang].nav_contact;
                document.getElementById("lt").innerHTML = data[lang].lt;
                document.getElementById("lt_text").innerHTML = data[lang].lt_text;
                document.getElementById("title_1").innerHTML = data[lang].title_1;
                document.getElementById("main_text_1").innerHTML = data[lang].main_text_1;
                document.getElementById("date_1").innerHTML = data[lang].date_1;

                
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


