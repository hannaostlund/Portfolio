//Setting up a js reusable footer the same way as the header js i did before
document.addEventListener('DOMContentLoaded', function() {
    const footerTemplate = document.createElement('footer');
    footerTemplate.classList.add('site-footer');
    footerTemplate.innerHTML = `
        <div class="name-footer">
            <h1 class="footer-h1">Get in Touch</h1>
            <p class="footer-text">Let's connect! Always looking for new exciting opportunities</p>
        </div>
        <div class="social-icons">
        <a href="https://www.linkedin.com/in/hanna-%C3%B6stlund-197214ba">
            <img src="/Images/linkedin.svg" alt="Linkedin icon" />
        </a>
        <a href="https://github.com/hannaostlund">
            <img src="/images/githubicon.svg" alt="Github icon" />
        </a>   
        </div>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder'); // placeholder in HTML
    if (footerPlaceholder) {
        footerPlaceholder.appendChild(footerTemplate);
    } else {
        console.error('Footer placeholder element not found.');
    }
});
