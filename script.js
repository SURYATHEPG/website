// Function to display greeting based on time of day
function showGreeting() {
    let now = new Date();
    let hours = now.getHours();
    let greetingText = "";

    if (hours < 12) {
        greetingText = "Good Morning!";
    } else if (hours < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    document.getElementById("greeting").innerText = greetingText;
}

// Function for button click interaction
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "You clicked the button!";
});

// Run greeting function on page load
showGreeting();
