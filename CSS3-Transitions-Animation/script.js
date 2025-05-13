const box = document.getElementById("animatedBox");
const messageBox = document.getElementById("displayMessage");

// Apply animation using JavaScript
document.getElementById("startAnimation").addEventListener("click", function() {
    const animationSpeed = document.getElementById("animationSpeed").value;
    const enableAnimation = document.getElementById("enableAnimation").checked;

    if (enableAnimation) {
        box.style.animation = `moveBox ${animationSpeed} forwards`;
    } else {
        alert("Animation is disabled!");
    }
});

// Store background color in localStorage
document.getElementById("saveColor").addEventListener("click", function() {
    localStorage.setItem("bgColor", box.style.backgroundColor);
    alert("Color saved!");
});

// Load saved background color from localStorage
document.getElementById("loadColor").addEventListener("click", function() {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        box.style.backgroundColor = savedColor;
    } else {
        alert("No color saved!");
    }
});

// Display user message
document.getElementById("customMessage").addEventListener("input", function() {
    messageBox.textContent = this.value;
});