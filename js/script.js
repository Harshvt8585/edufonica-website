/* =================================================================
   1. SCROLL REVEAL
   ================================================================= */
const revealElements = document.querySelectorAll('.reveal');
 
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
});
 
revealElements.forEach((el) => {
  revealObserver.observe(el);
});

/* =================================================================
   2. MOBILE NAVIGATION TOGGLE
   ================================================================= */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener('click', () => {
    // Toggles the 'active' class which sets display:block in CSS
    mainNav.classList.toggle('active');
  });
}

/* =================================================================
   3. SERVICES SEARCH/FILTER
   ================================================================= */
const serviceSearch = document.getElementById('serviceSearch');
const servicesGrid = document.getElementById('servicesGrid');
const noResultsMsg = document.getElementById('noResultsMsg');

if (serviceSearch && servicesGrid) {
  const serviceCards = servicesGrid.querySelectorAll('.service-card');

  serviceSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let visibleCount = 0;

    serviceCards.forEach(card => {
      // Look at the text inside the whole card (h3 and p)
      const text = card.textContent.toLowerCase();
      
      if (text.includes(searchTerm)) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Show/hide the "No results found" message
    if (visibleCount === 0) {
      noResultsMsg.style.display = 'block';
    } else {
      noResultsMsg.style.display = 'none';
    }
  });
}

/* =================================================================
   4. CONTACT FORM VALIDATION
   ================================================================= */
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Prevent the default browser form submission
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
      formFeedback.textContent = 'Please fill out all fields.';
      formFeedback.className = 'form-feedback error';
      return;
    }
    
    // If valid, pretend to send data and show success message
    formFeedback.textContent = 'Thank you! Your message has been sent. We will reach out shortly.';
    formFeedback.className = 'form-feedback success';
    
    // Reset the form fields
    contactForm.reset();
  });
}
