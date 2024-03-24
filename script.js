function showPopup(insect) {
    var popup = document.getElementById(insect + '-popup');
    if (popup) {
        popup.style.display = 'block';
    }
}

function hidePopup(insect) {
    var popup = document.getElementById(insect + '-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}