
console.log("Language toggle script loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle"); // Button to switch languages
    const langOptions = languageToggle.querySelectorAll(".lang-option"); // Language text spans
    let currentLang = localStorage.getItem("lang") || "en"; // Store user's preference

    function loadLanguage(lang) {
        fetch("/assets/js/lang_tech_1.js") // Fetch the JSON file
            .then(response => response.json())
            .then(data => {
                document.getElementById("nav_about").innerHTML = data[lang].nav_about;
                document.getElementById("nav_tech").innerHTML = data[lang].nav_tech;
                document.getElementById("nav_news").innerHTML = data[lang].nav_news;
                document.getElementById("nav_contact").innerHTML = data[lang].nav_contact;
                document.getElementById("main_text").innerHTML = data[lang].main_text;
                document.getElementById("sub_text").innerHTML = data[lang].sub_text;
                document.getElementById("bul_p_1").innerHTML = data[lang].bul_p_1;
                document.getElementById("bul_p_2").innerHTML = data[lang].bul_p_2;

                
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


