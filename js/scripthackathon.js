
function showAlert(item) {
    alert("Você clicou em: " + item);
}


const navItems = document.querySelectorAll('#navbar li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        showAlert(item.textContent);
    });
});
