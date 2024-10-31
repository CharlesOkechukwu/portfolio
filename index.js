document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var nav = document.getElementById('nav-bar');

    menu.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});