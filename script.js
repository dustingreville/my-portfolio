function toggleDetails(id) {
    var details = document.getElementById(id);
    var button = details.previousElementSibling;


    if (details.style.display === "none") {
        details.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        details.style.display = "none";
        button.textContent = "Show Details";
    }
}


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