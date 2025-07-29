// Search Results Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    // Project database with detailed information
    const projectDatabase = {
        // Software Projects (5)
        'Student Housing App': {
            category: 'Software',
            title: 'Student Housing App',
            description: 'Prototype of a mobile app to streamline student housing searches',
            inspiration: 'The inspiration came from my own experience and conversations with classmates at the University of Galway. Finding student housing was frustrating—multiple listings, inconsistent information, and endless back-and-forth emails. For our Human-Computer Interaction class, we wanted to design a solution that could help students navigate this process more efficiently, especially for international students unfamiliar with local rental norms.',
            learned: 'Through this project, I learned how to use Figma from scratch—starting with basic wireframes and progressing to fully interactive prototypes. We followed the five-stage design process: empathizing with users through interviews, defining pain points, ideating solutions, prototyping in Figma, and testing with real students. This structured approach helped me understand how to translate user needs into design decisions and reinforced the importance of accessibility, cultural inclusivity, and usability in building effective digital products.',
            skills: ['Figma', 'Design Thinking', 'UX Principles', 'Persona Creation', 'User Interviews'],
            image: 'images/student-housing-app.PNG',
            projectLink: 'https://www.figma.com/proto/sJa9HhAKPPtUe9nClCFPT3/Student-Housing-App?node-id=1-4&p=f&t=ycIs95DkdxS4T1vh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4'
        },
        'PeopleCode.AI Website': {
            category: 'Software',
            title: 'PeopleCode.AI Website',
            description: 'PeopleCode.AI enables anyone to create customized chatbots and AI apps with step-by-step tutorials—no coding experience needed.',
            inspiration: 'The idea behind PeopleCode.AI came from seeing how powerful AI is becoming, yet how many people—especially educators and community leaders—struggle to create software that could help their learners and communities. We wanted to break down the barriers of coding knowledge and enable anyone to build AI-powered tools using just natural language or simple coding methods. By making software creation more accessible, we hope to empower a broader group of creators to innovate and make a real impact.',
            learned: 'Building PeopleCode.AI involved not only working with the OpenAI\'s API to power our AI tools but also designing and developing the website itself. This gave me valuable experience in web development—everything from layout and responsive design to creating a smooth user experience. I also learned how to integrate the API into Python libraries and apps, enabling dynamic, generative AI features like chatbots.',
            skills: ['Python', 'OpenAI API', 'Cursor', 'Thunkable', 'React', 'GitHub', 'Node.js'],
            image: 'images/people-code-website.PNG',
            projectLink: 'https://www.peoplecode.ai/'
        },
        'Context Sensitive Selective Undo': {
            category: 'Software',
            title: 'Context Sensitive Selective Undo',
            description: 'An algorithm that redefines undo by mixing selective and context sensitive properties of elements',
            inspiration: 'I was inspired by the limitations of current undo systems in text editors and applications. Traditional undo often doesn\'t consider the context of user actions, leading to frustrating experiences. I wanted to create a more intelligent undo system.',
            learned: 'This experience taught me how to develop complex object-oriented models in both Python and Java, specifically a Context-Sensitive Selective Undo Model. Collaborating closely with researchers, I gained insight into moving an algorithm from concept to practical implementation. I also enhanced my skills in designing usability experiments—storyboarding user flows, prototyping in Figma, and testing interactions using the Godot engine. Because this was such a novel and self-driven project, it taught me motivation, how to step up and make decisions independently, and how to confidently stand behind the work I produce. Most importantly, I learned to think critically about user experience and how targeted functionality can significantly improve everyday software tools.',
            skills: ['Python', 'Java', 'Algorithm Design', 'Figma', 'Godot'],
            image: 'images/ctrl-z.PNG',
            projectLink: 'https://github.com/AshleshaBhagat04/Context-Sensitive-Selective-Undo'
        },
        'CryptoLearner': {
            category: 'Software',
            title: 'CryptoLearner',
            description: 'A fun edtech app that teaches users crypto concepts!!',
            inspiration: 'At HACKRPI X, I was driven by the challenge of making cryptography—a complex and often intimidating subject—more accessible and engaging for learners. Our team aimed to create an educational tool that simplifies cryptography concepts through interactive visualizations, helping students grasp difficult topics more intuitively.',
            learned: 'Building CryptoLearner pushed me to quickly learn and apply PySide6 and NumPy for creating interactive EdTech applications. I gained hands-on experience in front-end development using QT for Python and explored QML and Directive UI to enhance user interaction. Working under a tight 25-hour deadline taught me teamwork, rapid prototyping, and the importance of clear communication. Winning first place in the Cyber Security category among 500 teams was a rewarding validation of our approach and effort.',
            skills: ['Python', 'Qt for Python', 'Computer App Design', 'Cryptology', 'Graphical User Interface'],
            image: 'images/cryptolearner.PNG',
            projectLink: 'https://github.com/smullahy/CryptoLearner'
        },
        'ScrumApp': {
            category: 'Software',
            title: 'ScrumApp',
            description: 'A scrum app to help professors and students keep track of class projects',
            inspiration: 'In my Software Design class at Union College, we saw an opportunity to improve an existing Scrum application by enhancing its architecture and security features. Our goal was to create a more robust and user-friendly tool for both students and professors to manage projects efficiently within an academic setting.',
            learned: 'Through this project, I deepened my understanding of JavaFX and advanced class design, focusing on building scalable and secure applications. Applying Agile and Scrum methodologies helped me appreciate iterative development and effective team collaboration. I also gained practical experience using version control and implementing design patterns, which strengthened my skills in managing large-scale software projects.',
            skills: ['JavaFX', 'Gradle', 'SQL', 'Java', 'Agile Methodology'],
            image: 'images/scrum-app.PNG',
            projectLink: '#'
        },
        
        // ML Projects (3)
        'Mary - Your Guide to Women in Computing': {
            category: 'ML',
            title: 'Mary - Your Guide to Women in Computing',
            description: 'An advanced custom chatbot that tells you all about women in computing and makes calling cards for them as well!',
            inspiration: 'I was inspired by the need to highlight and celebrate the contributions of women in computing. There are so many incredible women who have shaped the field of computer science, but their stories often go untold. I wanted to create an interactive way to learn about these pioneers and their achievements.',
            learned: 'I learned how to integrate AI technologies with web development, specifically working with ZeroWidth for creating conversational AI experiences. The project taught me about deploying AI applications on Vercel and creating engaging user interfaces with Framer. I also gained experience in designing conversational flows and making AI interactions feel natural and informative.',
            skills: ['ZeroWidth', 'Vercel', 'Framer', 'GitHub', 'JavaScript'],
            image: 'images/mary-chatbot.PNG',
            projectLink: 'https://zerowidth.ai/c/demo/xWcXgWtXg83CA2pYdKbT/draft'
        },
        'Predicting Anime Scores Using ML Models': {
            category: 'ML',
            title: 'Predicting Anime Scores Using ML Models',
            description: 'Explore the potential of machine learning models to predict anime scores based on different features.',
            inspiration: 'I was fascinated by the challenge of predicting user ratings for anime based on various features like genre, studio, year, and other characteristics. This project allowed me to explore different machine learning approaches and understand how to work with real-world datasets.',
            learned: 'This project gave me hands-on experience with scikit-learn, pandas, and numpy for data manipulation and machine learning. I learned about feature engineering, data preprocessing, and model evaluation techniques. The project also taught me how to compare different algorithms and understand their strengths and weaknesses.',
            skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Regression Models', 'Classification Models', 'Colab Notebooks', 'Feature Engineering', 'Data Cleaning and Preprocessing', 'ML Modelling and Evaluation'],
            image: 'images/predicting-anime-scores.png',
            projectLink: 'https://colab.research.google.com/drive/18sHAG4PoO7f0pJkPF9xnj5uCcKGtT-kB?usp=sharing'
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q') || '';
    searchInput.value = searchQuery;

    function searchProjects(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        Object.entries(projectDatabase).forEach(([key, project]) => {
            const titleMatch = project.title.toLowerCase().includes(queryLower);
            const descriptionMatch = project.description.toLowerCase().includes(queryLower);
            const skillsMatch = project.skills.some(skill => skill.toLowerCase().includes(queryLower));
            const categoryMatch = project.category.toLowerCase().includes(queryLower);
            const keyMatch = key.toLowerCase().includes(queryLower);
            if (titleMatch || descriptionMatch || skillsMatch || categoryMatch || keyMatch) {
                results.push({ key, ...project });
            }
        });
        return results;
    }

    function displayResults(results) {
        resultsGrid.innerHTML = '';
        if (results.length === 0) {
            resultsGrid.style.display = 'none';
            noResults.style.display = 'block';
            resultsCount.textContent = 'No projects found';
        } else {
            resultsGrid.style.display = 'grid';
            noResults.style.display = 'none';
            resultsCount.textContent = `${results.length} project${results.length === 1 ? '' : 's'} found`;
            results.forEach((project, index) => {
                const projectTile = document.createElement('div');
                projectTile.className = 'project-tile';
                projectTile.style.animationDelay = `${index * 0.1}s`;
                projectTile.innerHTML = `
                    <div class="project-image"><img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'250\\' viewBox=\\'0 0 400 250\\'><rect width=\\'400\\' height=\\'250\\' fill=\\'%23f1f3f4\\'/><text x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\' dy=\\'.3em\\' fill=\\'%235f6368\\' font-family=\\'Arial\\' font-size=\\'16\\'>Image not available</text></svg>'"></div>
                    <div class="project-content">
                        <span class="project-category">${project.category}</span>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-skills">${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</div>
                    </div>
                `;
                projectTile.addEventListener('click', function() { 
                    openModal(project.title); 
                });
                resultsGrid.appendChild(projectTile);
            });
        }
    }

    if (searchQuery) {
        const results = searchProjects(searchQuery);
        displayResults(results);
    } else {
        const allProjects = Object.entries(projectDatabase).map(([key, project]) => ({ key, ...project }));
        displayResults(allProjects);
    }

    // Real-time search
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        const results = searchProjects(query);
        displayResults(results);
    });

    // Enter key to update URL
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });

    // Suggestion tags
    document.querySelectorAll('.suggestion-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const keyword = this.textContent;
            searchInput.value = keyword;
            const results = searchProjects(keyword);
            displayResults(results);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl+F or Cmd+F to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        
        // Escape to clear search and show all projects
        if (e.key === 'Escape') {
            searchInput.value = '';
            const allProjects = Object.entries(projectDatabase).map(([key, project]) => ({ key, ...project }));
            displayResults(allProjects);
        }
    });

    // Back navigation
    const backLink = document.querySelector('.nav-link[href="index.html"]');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            setTimeout(() => { window.location.href = 'index.html'; }, 300);
        });
    }

    // Add "All Projects" functionality
    const allProjectsLink = document.querySelector('.nav-link[href="#"]');
    if (allProjectsLink && allProjectsLink.textContent === 'All Projects') {
        allProjectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Clear search and show all projects
            searchInput.value = '';
            const allProjects = Object.entries(projectDatabase).map(([key, project]) => ({ key, ...project }));
            displayResults(allProjects);
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

    // Responsive behavior
    window.addEventListener('resize', function() {
        // Adjust grid layout based on screen size
        const width = window.innerWidth;
        if (width < 768) {
            resultsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        } else {
            resultsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
        }
    });

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');

    function openModal(projectTitle) {
        const project = projectDatabase[projectTitle];
        if (!project) return;

        // Populate modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalImage').alt = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalInspiration').textContent = project.inspiration;
        document.getElementById('modalLearned').textContent = project.learned;
        document.getElementById('modalProjectLink').href = project.projectLink;

        // Populate skills
        const modalSkills = document.getElementById('modalSkills');
        modalSkills.innerHTML = '';
        project.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            modalSkills.appendChild(skillTag);
        });

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners for modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

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

    console.log('Search Results Page loaded successfully! 🔍');
}); 