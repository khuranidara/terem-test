document.addEventListener('DOMContentLoaded', function() {
    const warningButton = document.querySelector('.btn-warning');
    if (warningButton) {
        warningButton.addEventListener('click', toggleBlock);
    }
});

function toggleBlock() {
    const block = document.getElementById("fullWidthBlock");
    block.style.display = block.style.display === "none" ? "block" : "none";
    block.setAttribute('aria-hidden', block.style.display === "none");
}