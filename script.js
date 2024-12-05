// Toggle project details visibility
function toggleDetails(id) {
    var details = document.getElementById(id);
    var button = details.previousElementSibling; // Get the button next to the details

    // Toggle visibility and change button text
    if (details.style.display === "none") {
        details.style.display = "block"; // Show details
        button.textContent = "Hide Details"; // Change button text to "Hide Details"
    } else {
        details.style.display = "none"; // Hide details
        button.textContent = "Show Details"; // Change button text to "Show Details"
    }
}

// Attach event listeners to buttons after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    var project1Button = document.getElementById('project1');
    var project2Button = document.getElementById('project2');

    project1Button.addEventListener('click', function () {
        toggleDetails('details1');
    });

    project2Button.addEventListener('click', function () {
        toggleDetails('details2');
    });
});