// Get the content wrapper
const contentWrapper = document.querySelector('.content-wrapper');

// Set up an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contentWrapper.classList.add('in-view');
    } else {
      contentWrapper.classList.remove('in-view');
    }
  });
}, { threshold: 0.5 }); // Adjust 

// Start observing the content wrapper
observer.observe(contentWrapper);


