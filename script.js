const project1 = document.getElementById('project1');
const details1 = document.getElementById('details1');

const project2 = document.getElementById('project2');
const details2 = document.getElementById('details2');

project1.addEventListener('click', function() {
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        button.textContent = 'Show Details';
    }
});