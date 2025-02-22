
console.log("Language toggle script loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle"); // Button to switch languages
    const langOptions = languageToggle.querySelectorAll(".lang-option"); // Language text spans
    let currentLang = localStorage.getItem("lang") || "en"; // Store user's preference

    function loadLanguage(lang) {
        fetch("/assets/js/lang_about_us.js") // Fetch the JSON file
            .then(response => response.json())
            .then(data => {
                document.getElementById("nav_about").textContent = data[lang].nav_about;
                document.getElementById("nav_tech").textContent = data[lang].nav_tech;
                document.getElementById("nav_news").textContent = data[lang].nav_news;
                document.getElementById("nav_contact").textContent = data[lang].nav_contact;
                document.getElementById("desc_title").textContent = data[lang].desc_title;
                document.getElementById("desc").textContent = data[lang].desc;
                document.getElementById("mot").textContent = data[lang].mot;
                document.getElementById("A_prof").textContent = data[lang].A_prof;
                document.getElementById("A_desc").textContent = data[lang].A_desc;
                document.getElementById("J_prof").textContent = data[lang].J_prof;
                document.getElementById("J_desc").textContent = data[lang].J_desc;
                document.getElementById("V_prof").textContent = data[lang].V_prof;
                document.getElementById("V_desc").textContent = data[lang].V_desc;
                document.getElementById("L_prof").textContent = data[lang].L_prof;
                document.getElementById("L_desc").textContent = data[lang].L_desc;
                document.getElementById("R_prof").textContent = data[lang].R_prof;
                document.getElementById("R_desc").textContent = data[lang].R_desc;
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


