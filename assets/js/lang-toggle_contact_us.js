
console.log("Language toggle script loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle"); // Button to switch languages
    const langOptions = languageToggle.querySelectorAll(".lang-option"); // Language text spans
    let currentLang = localStorage.getItem("lang") || "en"; // Store user's preference

    function loadLanguage(lang) {
        fetch("/assets/js/lang_contact_us.js") // Fetch the JSON file
            .then(response => response.json())
            .then(data => {
                document.getElementById("nav_about").textContent = data[lang].nav_about;
                document.getElementById("nav_tech").textContent = data[lang].nav_tech;
                document.getElementById("nav_news").textContent = data[lang].nav_news;
                document.getElementById("nav_contact").textContent = data[lang].nav_contact;
                document.getElementById("title").textContent = data[lang].title;
                document.getElementById("sub_title").textContent = data[lang].sub_title;
                document.getElementById("send_r").textContent = data[lang].send_r;
                document.getElementById("reach_us").textContent = data[lang].reach_us;
                document.getElementById("name").textContent = data[lang].name;
                document.getElementById("phone").textContent = data[lang].phone;
                document.getElementById("email").textContent = data[lang].email;
                document.getElementById("subject").textContent = data[lang].subject;
                document.getElementById("message").textContent = data[lang].message;
                document.getElementById("email2").textContent = data[lang].email2;
                document.getElementById("address").textContent = data[lang].address;
                document.getElementById("send").textContent = data[lang].send;
                document.getElementById("y_message").placeholder = data[lang].y_message;

                
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
