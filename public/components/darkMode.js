// Dark Theme
const checkbox = document.getElementById('toggle_daynight');       // Get the checkbox
const isDarkTheme = localStorage.getItem('darkTheme') === 'true';   // localStorage is used to save the user's theme preference, so it persists across page reloads.

if (isDarkTheme) {
    document.body.classList.add('dark_theme');
    checkbox.checked = true;
}

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        document.body.classList.add('dark_theme');
        localStorage.setItem('darkTheme', 'true');
    } else {
        document.body.classList.remove('dark_theme');
        localStorage.setItem('darkTheme', 'false');
    }
});