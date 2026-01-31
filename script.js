document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button using its class
    const scrollButton1 = document.querySelector('.scroll-button1');

    scrollButton1.addEventListener('click', (e) => {
        // Prevent the default anchor link behavior if necessary
        e.preventDefault();
        //alert("The script is working correctly!");

        // Get the ID of the target section from the data-target attribute
        const targetId = scrollButton1.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        //console.log("Target ID:", targetId);

        // Check if the target element exists
        if (targetSection) {
            // Use scrollIntoView with smooth behavior
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button using its class
    const scrollButton2 = document.querySelector('.scroll-button2');

    scrollButton2.addEventListener('click', (e) => {
        // Prevent the default anchor link behavior if necessary
        e.preventDefault();
        //alert("The script is working correctly!");

        // Get the ID of the target section from the data-target attribute
        const targetId = scrollButton2.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        //console.log("Target ID:", targetId);

        // Check if the target element exists
        if (targetSection) {
            // Use scrollIntoView with smooth behavior
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button using its class
    const scrollButton3 = document.querySelector('.scroll-button3');

    scrollButton3.addEventListener('click', (e) => {
        // Prevent the default anchor link behavior if necessary
        e.preventDefault();
        //alert("The script is working correctly!");

        // Get the ID of the target section from the data-target attribute
        const targetId = scrollButton3.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        //console.log("Target ID:", targetId);

        // Check if the target element exists
        if (targetSection) {
            // Use scrollIntoView with smooth behavior
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button using its class
    const scrollButton4 = document.querySelector('.scroll-button4');

    scrollButton4.addEventListener('click', (e) => {
        // Prevent the default anchor link behavior if necessary
        e.preventDefault();
        //alert("The script is working correctly!");

        // Get the ID of the target section from the data-target attribute
        const targetId = scrollButton4.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        //console.log("Target ID:", targetId);

        // Check if the target element exists
        if (targetSection) {
            // Use scrollIntoView with smooth behavior
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});