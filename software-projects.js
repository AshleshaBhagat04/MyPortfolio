// Software Projects Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const projectTiles = document.querySelectorAll('.project-tile');
    const skillTags = document.querySelectorAll('.skill-tag');

    // Project data for modal
    const projectData = {
        'Student Housing App': {
            title: 'Student Housing App',
            category: 'Software',
            description: 'Prototype of a mobile app to streamline student housing searches',
            inspiration: 'The inspiration came from my own experience and conversations with classmates at the University of Galway. Finding student housing was frustrating—multiple listings, inconsistent information, and endless back-and-forth emails. For our Human-Computer Interaction class, we wanted to design a solution that could help students navigate this process more efficiently, especially for international students unfamiliar with local rental norms.',
            learned: 'Through this project, I learned how to use Figma from scratch—starting with basic wireframes and progressing to fully interactive prototypes. We followed the five-stage design process: empathizing with users through interviews, defining pain points, ideating solutions, prototyping in Figma, and testing with real students. This structured approach helped me understand how to translate user needs into design decisions and reinforced the importance of accessibility, cultural inclusivity, and usability in building effective digital products.',
            skills: ['Figma', 'Design Thinking', 'UX Principles', 'Persona Creation', 'User Interviews'],
            image: 'images/student-housing-app.PNG',
            projectLink: 'https://www.figma.com/proto/sJa9HhAKPPtUe9nClCFPT3/Student-Housing-App?node-id=1-4&p=f&t=ycIs95DkdxS4T1vh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4'
        },
        'PeopleCode.AI Website': {
            title: 'PeopleCode.AI Website',
            category: 'Software',
            description: 'PeopleCode.AI enables anyone to create customized chatbots and AI apps with step-by-step tutorials—no coding experience needed.',
            inspiration: 'The idea behind PeopleCode.AI came from seeing how powerful AI is becoming, yet how many people—especially educators and community leaders—struggle to create software that could help their learners and communities. We wanted to break down the barriers of coding knowledge and enable anyone to build AI-powered tools using just natural language or simple coding methods. By making software creation more accessible, we hope to empower a broader group of creators to innovate and make a real impact.',
            learned: 'Building PeopleCode.AI involved not only working with the OpenAI\'s API to power our AI tools but also designing and developing the website itself. This gave me valuable experience in web development—everything from layout and responsive design to creating a smooth user experience. I also learned how to integrate the API into Python libraries and apps, enabling dynamic, generative AI features like chatbots.',
            skills: ['Python', 'OpenAI API', 'Cursor', 'Thunkable', 'React', 'GitHub', 'Node.js'],
            image: 'images/people-code-website.PNG',
            projectLink: 'https://www.peoplecode.ai/'
        },
        'Context Sensitive Selective Undo': {
            title: 'Context Sensitive Selective Undo',
            category: 'Software',
            description: 'An algorithm that redefines undo by mixing selective and context sensitive properties of elements',
            inspiration: 'I was inspired by the limitations of current undo systems in text editors and applications. Traditional undo often doesn\'t consider the context of user actions, leading to frustrating experiences. I wanted to create a more intelligent undo system.',
            learned: 'This experience taught me how to develop complex object-oriented models in both Python and Java, specifically a Context-Sensitive Selective Undo Model. Collaborating closely with researchers, I gained insight into moving an algorithm from concept to practical implementation. I also enhanced my skills in designing usability experiments—storyboarding user flows, prototyping in Figma, and testing interactions using the Godot engine. Because this was such a novel and self-driven project, it taught me motivation, how to step up and make decisions independently, and how to confidently stand behind the work I produce. Most importantly, I learned to think critically about user experience and how targeted functionality can significantly improve everyday software tools.',
            skills: ['Python', 'Java', 'Algorithm Design', 'Figma', 'Godot'],
            image: 'images/ctrl-z.PNG',
            projectLink: 'https://github.com/AshleshaBhagat04/Context-Sensitive-Selective-Undo'
        },
        'CryptoLearner': {
            title: 'CryptoLearner',
            category: 'Software',
            description: 'A fun edtech app that teaches users crypto concepts!!',
            inspiration: 'At HACKRPI X, I was driven by the challenge of making cryptography—a complex and often intimidating subject—more accessible and engaging for learners. Our team aimed to create an educational tool that simplifies cryptography concepts through interactive visualizations, helping students grasp difficult topics more intuitively.',
            learned: 'Building CryptoLearner pushed me to quickly learn and apply PySide6 and NumPy for creating interactive EdTech applications. I gained hands-on experience in front-end development using QT for Python and explored QML and Directive UI to enhance user interaction. Working under a tight 25-hour deadline taught me teamwork, rapid prototyping, and the importance of clear communication. Winning first place in the Cyber Security category among 500 teams was a rewarding validation of our approach and effort.',
            skills: ['Python', 'Qt for Python', 'Computer App Design', 'Cryptology', 'Graphical User Interface'],
            image: 'images/cryptolearner.PNG',
            projectLink: 'https://github.com/smullahy/CryptoLearner'
        },
        'ScrumApp': {
            title: 'ScrumApp',
            category: 'Software',
            description: 'A scrum app to help professors and students keep track of class projects',
            inspiration: 'In my Software Design class at Union College, we saw an opportunity to improve an existing Scrum application by enhancing its architecture and security features. Our goal was to create a more robust and user-friendly tool for both students and professors to manage projects efficiently within an academic setting.',
            learned: 'Through this project, I deepened my understanding of JavaFX and advanced class design, focusing on building scalable and secure applications. Applying Agile and Scrum methodologies helped me appreciate iterative development and effective team collaboration. I also gained practical experience using version control and implementing design patterns, which strengthened my skills in managing large-scale software projects.',
            skills: ['JavaFX', 'Gradle', 'SQL', 'Java', 'Agile Methodology'],
            image: 'images/scrum-app.PNG',
            projectLink: '#'
        }
    };

    // Modal elements
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalInspiration = document.getElementById('modalInspiration');
    const modalLearned = document.getElementById('modalLearned');
    const modalSkills = document.getElementById('modalSkills');
    const modalProjectLink = document.getElementById('modalProjectLink');
    const closeBtn = document.querySelector('.close');

    // Function to open modal
    function openModal(projectName) {
        const project = projectData[projectName];
        if (project) {
            modalTitle.textContent = project.title;
            modalCategory.textContent = project.category;
            modalImage.src = project.image;
            modalImage.alt = project.title;
            modalDescription.textContent = project.description;
            modalInspiration.textContent = project.inspiration;
            modalLearned.textContent = project.learned;
            
            // Clear and populate skills
            modalSkills.innerHTML = '';
            project.skills.forEach(skill => {
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill;
                modalSkills.appendChild(skillTag);
            });
            
            // Set up project link
            if (project.projectLink) {
                modalProjectLink.href = project.projectLink;
                modalProjectLink.style.display = 'inline-flex';
            } else {
                modalProjectLink.style.display = 'none';
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Add click functionality to project tiles
    projectTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            openModal(projectTitle);
        });

        // Add keyboard navigation
        tile.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

        // Make tiles focusable
        tile.setAttribute('tabindex', '0');
    });

    // Add hover effects for skill tags
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add loading animation for images
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><rect width="400" height="250" fill="%23f1f3f4"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%235f6368" font-family="Arial" font-size="16">Image not available</text></svg>';
        });
    });

    // Add intersection observer for lazy loading
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectTiles.forEach(tile => {
        observer.observe(tile);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl+F or Cmd+F to search (if search is implemented)
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            // Could implement search functionality here
            console.log('Search functionality could be implemented here');
        }
        
        // Escape to clear any active states
        if (e.key === 'Escape') {
            projectTiles.forEach(tile => {
                tile.blur();
            });
        }
    });

    // Add smooth animations for page transitions
    function animatePageLoad() {
        const header = document.querySelector('.page-header');
        const grid = document.querySelector('.projects-grid');
        
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                header.style.transition = 'all 0.6s ease-out';
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (grid) {
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                grid.style.transition = 'all 0.6s ease-out';
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
            }, 300);
        }
    }

    // Call animation on page load
    animatePageLoad();

    // Add responsive behavior
    function handleResize() {
        const width = window.innerWidth;
        const grid = document.querySelector('.projects-grid');
        
        if (width < 768) {
            if (grid) {
                grid.style.gap = '20px';
            }
        } else {
            if (grid) {
                grid.style.gap = '30px';
            }
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load

    // Add project tile interaction feedback
    projectTiles.forEach(tile => {
        tile.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        tile.addEventListener('focus', function() {
            this.style.outline = '2px solid #1a73e8';
            this.style.outlineOffset = '2px';
        });
        
        tile.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Add skill tag interaction
    skillTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering project tile click
            const skillName = this.textContent;
            filterProjectsBySkill(skillName);
        });
    });

    // Function to filter projects by skill
    function filterProjectsBySkill(skillName) {
        const projectTiles = document.querySelectorAll('.project-tile');
        const projectsGrid = document.querySelector('.projects-grid');
        const pageTitle = document.querySelector('.page-title');
        const pageSubtitle = document.querySelector('.page-subtitle');
        
        // Store original content
        if (!window.originalProjectsContent) {
            window.originalProjectsContent = {
                title: pageTitle.textContent,
                subtitle: pageSubtitle.textContent,
                tiles: Array.from(projectTiles).map(tile => tile.outerHTML)
            };
        }

        // Find projects that use this skill
        const matchingProjects = [];
        Object.entries(projectData).forEach(([projectName, project]) => {
            if (project.skills.some(skill => skill.toLowerCase().includes(skillName.toLowerCase()))) {
                matchingProjects.push(projectName);
            }
        });

        if (matchingProjects.length > 0) {
            // Update page header
            pageTitle.textContent = `Projects using ${skillName}`;
            pageSubtitle.textContent = `Found ${matchingProjects.length} project${matchingProjects.length === 1 ? '' : 's'} using ${skillName}`;

            // Show only matching projects
            projectTiles.forEach(tile => {
                const projectTitle = tile.querySelector('.project-title').textContent;
                if (matchingProjects.includes(projectTitle)) {
                    tile.style.display = 'block';
                } else {
                    tile.style.display = 'none';
                }
            });

            // Add back button
            if (!document.querySelector('.back-to-all-btn')) {
                const backButton = document.createElement('button');
                backButton.className = 'back-to-all-btn';
                backButton.textContent = '← Back to All Projects';
                backButton.style.cssText = `
                    background: linear-gradient(135deg, #1a73e8, #1557b0);
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    margin: 20px auto;
                    display: block;
                    transition: all 0.2s ease;
                `;
                backButton.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 12px rgba(26, 115, 232, 0.3)';
                });
                backButton.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
                backButton.addEventListener('click', restoreAllProjects);
                projectsGrid.parentNode.insertBefore(backButton, projectsGrid);
            }
        } else {
            // No projects found with this skill
            pageTitle.textContent = `No projects using ${skillName}`;
            pageSubtitle.textContent = 'Try selecting a different skill';
            
            projectTiles.forEach(tile => {
                tile.style.display = 'none';
            });

            // Add back button
            if (!document.querySelector('.back-to-all-btn')) {
                const backButton = document.createElement('button');
                backButton.className = 'back-to-all-btn';
                backButton.textContent = '← Back to All Projects';
                backButton.style.cssText = `
                    background: linear-gradient(135deg, #1a73e8, #1557b0);
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    margin: 20px auto;
                    display: block;
                    transition: all 0.2s ease;
                `;
                backButton.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 12px rgba(26, 115, 232, 0.3)';
                });
                backButton.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
                backButton.addEventListener('click', restoreAllProjects);
                projectsGrid.parentNode.insertBefore(backButton, projectsGrid);
            }
        }
    }

    // Function to restore all projects
    function restoreAllProjects() {
        const pageTitle = document.querySelector('.page-title');
        const pageSubtitle = document.querySelector('.page-subtitle');
        const projectTiles = document.querySelectorAll('.project-tile');
        const backButton = document.querySelector('.back-to-all-btn');

        // Restore original content
        if (window.originalProjectsContent) {
            pageTitle.textContent = window.originalProjectsContent.title;
            pageSubtitle.textContent = window.originalProjectsContent.subtitle;
        }

        // Show all projects
        projectTiles.forEach(tile => {
            tile.style.display = 'block';
        });

        // Remove back button
        if (backButton) {
            backButton.remove();
        }
    }

    // Add navigation functionality
    const backLink = document.querySelector('.nav-link[href="index.html"]');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Add smooth transition back to main page
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 300);
        });
    }

    // Add "All Projects" functionality
    const allProjectsLink = document.querySelector('.nav-link[href="#"]');
    if (allProjectsLink && allProjectsLink.textContent === 'All Projects') {
        allProjectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Navigate to search results page to show all projects
            window.location.href = 'search-results.html';
        });
    }

    // Add footer link functionality
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent;
            if (linkText === 'Contact Me') {
                e.preventDefault();
                alert('Feel free to reach out at bhagata@union.edu');
            } else if (linkText === 'GitHub' || linkText === 'LinkedIn') {
                // Allow GitHub and LinkedIn links to work normally
                return;
            } else {
                e.preventDefault();
                alert(`${linkText} page would open here. This is a demo version.`);
            }
        });
    });

    // Add page visibility API for better UX
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            // Page became visible again
            console.log('Software projects page is now visible');
        }
    });

    // Modal event listeners
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Add console message
    console.log('Software Projects page loaded successfully! 💻');
}); 