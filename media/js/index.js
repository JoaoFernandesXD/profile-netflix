//Efeito Delay list profile
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('section');
    setTimeout(function() {
        container.classList.remove('hidden');
        container.classList.add('visible'); 
    }, 100); 
});
