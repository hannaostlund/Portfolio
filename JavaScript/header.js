document.addEventListener('DOMContentLoaded', function() {
    const headerTemplate = document.createElement('header');
    headerTemplate.classList.add('navbar');
    headerTemplate.innerHTML = `
        <div class="left-section">
            <div class="stars-icon">
                <a href="/">
                    <img src="../Images/stars.svg" alt="stars svg" />
                </a>            
            </div>
            <a href="/" div class="name">
                Home
                </a>            
        </div>
        <div class="contact-link">
            <a href="../pages/projects.html">Projects</a>
            <a href="../pages/aboutme.html">About me</a>
            <a href="../pages/contact.html">Contact</a>
        </div>
    `;

    const container = document.querySelector('.container-body'); //connecting the header to the container class 
    if (container) {
        container.insertBefore(headerTemplate, container.firstChild);
    } else {
        console.error('Container element with class "container-body" not found.'); //error handling
    }
});

//creating a reusable header for the other pages, I didnt get it to work properly on home page
//so on home page i just used a normal html nav.
