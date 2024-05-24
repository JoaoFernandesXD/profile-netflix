//Efeito Delay list profile
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('container');
    setTimeout(function() {
        container.classList.remove('hidden');
        container.classList.add('visible'); 
    }, 100); 
});
