document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var nav = document.getElementById('nav-bar');

    menu.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    var edit = document.getElementById('editable');
    var inputs = ['a software engineer', 'from Nigeria', 'passionate about web development', 
        'efficient with python and nodejs',
        'skilled in HTML, CSS, jQuery, javaScript, React', 
        'glad you are here!', 'excited to work with you!'];
    var i = 0;
    var charIndex = 0;
    var typeInterval;
    function changeText() {
        if (charIndex < inputs[i].length) {
            edit.innerHTML += inputs[i][charIndex];
            console.log(i);
            charIndex++;
        } else {
            clearInterval(typeInterval);
            setTimeout(deleteText, 1000);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            edit.innerHTML = edit.innerHTML.slice(0, --charIndex);
            console.log(charIndex);
        } else {
            i = (i + 1) % inputs.length;
            clearInterval(typeInterval);
            setTimeout(() => {
                charIndex = 0;
                typeInterval = setInterval(changeText, 100);
            }, 1000);
        }
    }
    typeInterval = setInterval(changeText, 100);
});