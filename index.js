document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav-bar');

    menu.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    const edit = document.getElementById('editable');
    const inputs = [
        'a fullstack software engineer(backend heavy)',
        'a web and sofware developer', 
        'from Nigeria', 
        'passionate about web development', 
        'efficient with python and nodejs', 
        'skilled in HTML, CSS, jQuery, JavaScript, React', 
        'glad you are here!', 
        'excited to work with you!'
    ];
    let i = 0; // Index for the current phrase

    // Function to type text one character at a time
    function typeText(text) {
        return new Promise((resolve) => {
            let charIndex = 0;

            function typeCharacter() {
                if (charIndex < text.length) {
                    edit.textContent += text[charIndex++];
                    setTimeout(typeCharacter, 100);
                } else {
                    setTimeout(resolve, 1000); // Wait before deleting text
                }
            }
            typeCharacter();
        });
    }

    // Function to delete text one character at a time
    function deleteText() {
        return new Promise((resolve) => {
            function deleteCharacter() {
                if (edit.textContent.length > 0) {
                    edit.textContent = edit.textContent.slice(0, -1);
                    setTimeout(deleteCharacter, 50);
                } else {
                    setTimeout(resolve, 500); // Brief pause before next phrase
                }
            }
            deleteCharacter();
        });
    }

    // Main function to loop through texts
    async function loopTexts() {
        while (true) {
            await typeText(inputs[i]);
            await deleteText();
            i = (i + 1) % inputs.length; // Move to the next phrase, loop back to start
            await new Promise(resolve => setTimeout(resolve, 500)); // Small delay between phrases
        }
    }

    // Start the animation
    loopTexts();
});
