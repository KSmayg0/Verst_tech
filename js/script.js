
document.addEventListener('DOMContentLoaded', function() {
var closeButton = document.querySelector('.close');
var form = document.querySelector('.container');
var openButton = document.querySelector('.btn-modal');
closeButton.addEventListener('click', () => {
    form.style.display = "none";
});

openButton.addEventListener('click', () => {
    form.style.display = "flex";
});
});