
console.log("Language toggle script loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle"); // Button to switch languages
    const langOptions = languageToggle.querySelectorAll(".lang-option"); // Language text spans
    let currentLang = localStorage.getItem("lang") || "en"; // Store user's preference

    function loadLanguage(lang) {
        fetch("/assets/js/lang_tech.js") // Fetch the JSON file
            .then(response => response.json())
            .then(data => {
                document.getElementById("nav_about").textContent = data[lang].nav_about;
                document.getElementById("nav_tech").textContent = data[lang].nav_tech;
                document.getElementById("nav_news").textContent = data[lang].nav_news;
                document.getElementById("nav_contact").textContent = data[lang].nav_contact;
                document.getElementById("title").textContent = data[lang].title;
                document.getElementById("sub_title").textContent = data[lang].sub_title;
                document.getElementById("date_1").textContent = data[lang].date_1;
                document.getElementById("tech_1").textContent = data[lang].tech_1;
                document.getElementById("rm_1").textContent = data[lang].rm_1;
                document.getElementById("date_2").textContent = data[lang].date_2;
                document.getElementById("tech_2").textContent = data[lang].tech_2;
                document.getElementById("rm_2").textContent = data[lang].rm_2;
                document.getElementById("date_3").textContent = data[lang].date_3;
                document.getElementById("tech_3").textContent = data[lang].tech_3;
                document.getElementById("rm_3").textContent = data[lang].rm_3;
                
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


