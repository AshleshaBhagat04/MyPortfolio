document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const aiMlBtn = document.querySelector('.ai-ml-btn');
    const searchContainer = document.querySelector('.search-input-container');

    // Focus search input on page load
    searchInput.focus();

    // Project database for search functionality
    const projectDatabase = {
        // Software Projects (5)
        'housing': { 
            category: 'software', 
            title: 'Student Housing App', 
            description: 'Prototype of a mobile app to streamline student housing searches',
            skills: ['Figma', 'Design Thinking', 'UX Principles', 'Persona Creation', 'User Interviews'] 
        },
        'peoplecode': { 
            category: 'software', 
            title: 'PeopleCode.AI Website', 
            description: 'PeopleCode.AI enables anyone to create customized chatbots and AI apps with step-by-step tutorials—no coding experience needed.',
            skills: ['Python', 'OpenAI API', 'Cursor', 'Thunkable', 'React', 'GitHub', 'Node.js'] 
        },
        'undo': { 
            category: 'software', 
            title: 'Context Sensitive Selective Undo', 
            description: 'An algorithm that redefines undo by mixing selective and context sensitive properties of elements',
            skills: ['Python', 'Java', 'Algorithm Design', 'Figma', 'Godot'] 
        },
        'crypto': { 
            category: 'software', 
            title: 'CryptoLearner', 
            description: 'A fun edtech app that teaches users crypto concepts!!',
            skills: ['Python', 'Qt for Python', 'Computer App Design', 'Cryptology', 'Graphical User Interface'] 
        },
        'scrum': { 
            category: 'software', 
            title: 'ScrumApp', 
            description: 'A scrum app to help professors and students keep track of class projects',
            skills: ['JavaFX', 'Gradle', 'SQL', 'Java', 'Agile Methodology'] 
        },
        
        // ML Projects (3)
        'peoplecode': { 
            category: 'ml', 
            title: 'PeopleCode.AI Website', 
            description: 'PeopleCode.AI enables anyone to create customized chatbots and AI apps with step-by-step tutorials—no coding experience needed.',
            skills: ['Python', 'OpenAI API', 'Cursor', 'Thunkable', 'React', 'GitHub', 'Node.js'] 
        },
        'mary': { 
            category: 'ml', 
            title: 'Mary - Your Guide to Women in Computing', 
            description: 'An advanced custom chatbot that tells you all about women in computing and makes calling cards for them as well!',
            skills: ['ZeroWidth', 'Vercel', 'Framer', 'GitHub', 'JavaScript'] 
        },
        'anime': { 
            category: 'ml', 
            title: 'Predicting Anime Scores Using ML Models', 
            description: 'Explore the potential of machine learning models to predict anime scores based on different features.',
            skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Regression Models', 'Classification Models', 'Colab Notebooks', 'Feature Engineering', 'Data Cleaning and Preprocessing', 'ML Modelling and Evaluation'] 
        },
    };

    // Search functionality
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Navigate to search results page
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    }

    // Project category functions
    function openSoftwareEngineering() {
        const query = searchInput.value.trim();
        if (query) {
            // Navigate to software projects page with search query
            window.location.href = `software-projects.html?search=${encodeURIComponent(query)}`;
        } else {
            // Navigate to software projects page
            window.location.href = 'software-projects.html';
        }
    }

    function openAIML() {
        const query = searchInput.value.trim();
        if (query) {
            // Navigate to ML projects page with search query
            window.location.href = `ml-projects.html?search=${encodeURIComponent(query)}`;
        } else {
            // Navigate to ML projects page
            window.location.href = 'ml-projects.html';
        }
    }

    // Event listeners
    (document.querySelector('.software-btn')).addEventListener('click', openSoftwareEngineering);
    aiMlBtn.addEventListener('click', openAIML);

    // Enter key to search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Real-time search suggestions
    let searchSuggestions = [
        'react', 'vue', 'angular', 'javascript', 'next', 'code',
        'portrait', 'character', 'ui', '3d', 'motion', 'abstract',
        'image', 'nlp', 'recommendation', 'forecasting', 'vision', 'reinforcement',
        'assistant', 'support', 'tutor', 'healthcare', 'shopping', 'language'
    ];

    // Add some interactivity to the search box
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length > 0) {
            // Add a subtle animation
            searchContainer.style.transform = 'scale(1.01)';
            setTimeout(() => {
                searchContainer.style.transform = 'scale(1)';
            }, 150);
        }
    });

    // Add hover effects for buttons
    const buttons = document.querySelectorAll('.software-btn, .ai-ml-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Ctrl+K or Cmd+K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        
        // Escape to clear search
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.focus();
        }
    });

    // Add navigation link functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            if (linkText === 'All Projects') {
                // Navigate to search results page to show all projects
                window.location.href = 'search-results.html';
            }
        });
    });

    // Add footer link functionality
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            if (linkText === 'Contact Me') {
                alert('Feel free to reach out at bhagata@union.edu');
            } else {
                alert(`${linkText} page would open here. This is a demo version.`);
            }
        });
    });

    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add loading animation for search
    function showSearchLoading() {
        (document.querySelector('.software-btn')).textContent = 'Loading...';
        (document.querySelector('.software-btn')).disabled = true;
        
        setTimeout(() => {
            (document.querySelector('.software-btn')).textContent = 'Software Engineering';
            (document.querySelector('.software-btn')).disabled = false;
        }, 2000);
    }

    // Enhanced search with loading animation
    const originalSearchFunction = performSearch;
    performSearch = function() {
        const query = searchInput.value.trim();
        if (query) {
            showSearchLoading();
            setTimeout(() => {
                originalSearchFunction();
            }, 500);
        } else {
            originalSearchFunction();
        }
    };

    // Add responsive design enhancements
    function handleResize() {
        const width = window.innerWidth;
        const searchContainer = document.querySelector('.search-container');
        
        if (width < 480) {
            searchContainer.style.padding = '0 10px';
        } else {
            searchContainer.style.padding = '0';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load

    console.log('Ashlesha Search Homepage loaded successfully!');
}); 