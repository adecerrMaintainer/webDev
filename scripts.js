const buttons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab-content');


buttons.forEach(btn => {
btn.addEventListener('click', () => {
const id = btn.dataset.tab;


tabs.forEach(tab => tab.classList.remove('active'));
document.getElementById(id).classList.add('active');
});
});
