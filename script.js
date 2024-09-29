document.addEventListener('DOMContentLoaded', function () {
    

    // Get all the expand buttons
    const expandButtons = document.querySelectorAll('.expand-btn');

    // expandButtons.forEach(button => {
    //     button.addEventListener('click', function() {
    //         const panel = this.nextElementSibling;
    //         panel.classList.toggle('active');

    //         // Toggle button text
    //         if (panel.classList.contains('active')) {
    //             this.textContent = 'Hide Details';
    //         } else {
    //             this.textContent = 'View Details';
    //         }
    //     });
    // });

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Navigate to the parent '.job' div
            const job = this.closest('.job');
            if (!job) return;

            // Select the '.job-details' div within the same '.job' div
            const panel = job.querySelector('.job-details');
            if (!panel) return;

            // Toggle the 'active' class to show/hide details
            panel.classList.toggle('active');

            // Select the arrow span within the button
            const arrow = this.querySelector('.arrow');
            if (arrow) {
                arrow.classList.toggle('up');
            }
        });
    });

        /* Accordion Functionality */
        const jobTitles = document.querySelectorAll('.job-title');

        jobTitles.forEach(function(title) {
            title.addEventListener('click', function() {
                const job = this.parentElement; // Get the parent '.job' div
                const details = job.querySelector('.job-details'); // Find '.job-details' within this job
                details.classList.toggle('expanded');
                // Toggle the arrow icon
                this.classList.toggle('active');
            });
        });

    


    /* Search Functionality */
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const jobs = document.querySelectorAll('.job');

        jobs.forEach(function(job) {
            const text = job.innerText.toLowerCase();
            if (text.includes(filter)) {
                job.style.display = '';
            } else {
                job.style.display = 'none';
            }
        });
    });

    /* Animated Skill Bars */
    window.addEventListener('scroll', function() {
        const skillsSection = document.getElementById('skills');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (skillsPosition < screenPosition) {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(function(bar) {
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage;
            });
        }
    });

    /* Dark Mode Toggle */
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
    });

    /* Smooth Scrolling */
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });

    /* Fade-in Animations */
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(function(fader) {
        appearOnScroll.observe(fader);
    });

    /* Modal Pop-ups */
    const achievements = document.querySelectorAll('.achievement');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    achievements.forEach(function(achievement) {
        achievement.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    /* Contact Form Submission */
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement EmailJS or other email service
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});

