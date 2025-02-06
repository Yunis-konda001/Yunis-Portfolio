
document.addEventListener("DOMContentLoaded", function() {
// The name to be typed
const name = "Meet Kumi Yunis";
const nameElement = document.getElementById("typed-name");
let index = 0;

// Function to type one letter at a time
function typeLetter() {
    if (index < name.length) {
        nameElement.textContent += name.charAt(index);
        index++;
        setTimeout(typeLetter, 150); // Adjust typing speed here (150ms)
    }
}

// Start typing when the page loads
typeLetter();
});
