function toggleContainer() {
    var container = document.getElementById('container');
    if (container.style.display === 'none') {
        container.style.display = 'block';
        toggleButton.textContent = toggleButton.textContent === "Apply Colors" ? "Remove Colors" : "Remove Colors";
    } else {
        container.style.display = 'none';
        toggleButton.textContent = toggleButton.textContent === "Remove Colors" ? "Apply Colors" : "Remove Colors";
    }
}