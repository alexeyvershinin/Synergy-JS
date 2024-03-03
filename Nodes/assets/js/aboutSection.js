function hideAboutSection() {
    const about = document.getElementById('about');
    const computedStyle = window.getComputedStyle(about);
    const displayValue = computedStyle.getPropertyValue('display');

    if (displayValue === 'block') {
        about.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showAboutSection() {
    const about = document.getElementById('about');
    const computedStyle = window.getComputedStyle(about);
    const displayValue = computedStyle.getPropertyValue('display');

    if (displayValue === 'none') {
        about.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

export { showAboutSection, hideAboutSection };