document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectTiles = document.querySelectorAll('.project-tile');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter projects
            projectTiles.forEach(tile => {
                const category = tile.getAttribute('data-category');
                
                const projectTitle = tile.querySelector('.project-title').textContent;
                const project = projectData[projectTitle];
                let shouldShow = false;
                
                if (filter === 'all') {
                    shouldShow = true;
                } else if (category === filter) {
                    shouldShow = true;
                } else if (project && Array.isArray(project.category)) {
                    // Map filter values to category names
                    const filterMap = {
                        'software': 'Software Engineering',
                        'ml': 'AI/ML',
                        'uiux': 'UI/UX'
                    };
                    const mappedFilter = filterMap[filter];
                    shouldShow = project.category.includes(mappedFilter);
                }
                
                if (shouldShow) {
                    tile.style.display = 'flex';
                    tile.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    tile.style.display = 'none';
                }
            });
        });
    });

    // Project data is now loaded from project-details.js

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');

    // Add project tile interactions
    projectTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            
            if (projectData[projectTitle]) {
                openModal(projectData[projectTitle]);
            }
        });

        // Add keyboard navigation for project tiles
        tile.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

        // Make project tiles focusable
        tile.setAttribute('tabindex', '0');
    });

    // Function to open modal
    function openModal(project) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalCategory').textContent = Array.isArray(project.category) ? project.category.join(', ') : project.category;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalImage').alt = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalOverview').textContent = project.overview;
        document.getElementById('modalMotivationPurpose').textContent = project['motivation/purpose'];
        document.getElementById('modalProjectLink').href = project.projectLink;

        // Populate skills
        const skillsContainer = document.getElementById('modalSkills');
        skillsContainer.innerHTML = '';
        project.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });


        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Add navigation link functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            // Navigation links can be added here if needed
        });
    });

    // Add footer link functionality
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent;
            if (linkText === 'Contact Me') {
                e.preventDefault();
                alert('Feel free to reach out at bhagata@union.edu');
            } else if (linkText === 'GitHub' || linkText === 'LinkedIn') {
                // Allow default behavior for GitHub and LinkedIn links
                return;
            } else {
                e.preventDefault();
                alert(`${linkText} page would open here. This is a demo version.`);
            }
        });
    });

    // Add scroll animations for project tiles
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply initial styles and observe project tiles
    projectTiles.forEach((tile, index) => {
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(20px)';
        tile.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(tile);
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add responsive design enhancements
    function handleResize() {
        const width = window.innerWidth;
        const contentGrid = document.querySelector('.content-grid');
        
        if (width < 1024) {
            // Stack layout for smaller screens
            if (contentGrid) {
                contentGrid.style.gridTemplateColumns = '1fr';
            }
        } else {
            // Two column layout for larger screens
            if (contentGrid) {
                contentGrid.style.gridTemplateColumns = '1fr 1fr';
            }
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load

    // Add loading animation for the page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    console.log('Ashlesha Portfolio Homepage loaded successfully!');
}); 