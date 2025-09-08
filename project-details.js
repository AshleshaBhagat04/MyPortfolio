// Centralized Project Details
// This file contains all project information for the portfolio

const projectData = {
    
    'Context Sensitive Selective Undo': {
        title: 'Context Sensitive Selective Undo',
        category: ['Software Engineering', 'UI/UX'],
        description: 'An algorithm that redefines undo by mixing selective and context sensitive properties of elements',
        overview: 'Context-Sensitive Selective Undo Model, developed in Python, is aimed at improving text editing efficiency by enabling precise undo operations on user-selected portions of text. This model was integrated into existing text editors, filtering existing history lists of applications to align with specific user-selected content. Additionally, I built high-fidelity prototypes in Figma and interactive experiments in Godot to validate usability improvements through real-world testing.',
        'motivation/purpose': 'As an art major with extensive experience using Photoshop, I’ve always found the traditional undo model to be extremely inflexible. Often, I couldn’t do half of what I wanted, and a single wrong undo could result in losing a significant portion of my work. So, when I encountered the undo project developed by my professors, I was immediately sold. I approached them with a new way of thinking: a context-sensitive undo, where users could select a portion of the document and create a history list specific to that selection. This project quickly became one of my most significant undertakings. From algorithm design, writing pseudocode, to unit testing, everything was on me. There was no existing model that could do what I envisioned, which gave me the opportunity to really think through every aspect from the user’s perspective. It was a chance to design something truly user-centric. The experience taught me a lot about how users think and interact with tools. When designing the experiment, I had to constantly take a step back, pause, and consider what the user would experience—how they would approach the interface and how my design choices would impact their workflow.',
        skills: ['Python', 'Java', 'Algorithm Design', 'Figma', 'Godot'],
        image: 'images/ctrl-z.PNG',
        projectLink: 'https://github.com/AshleshaBhagat04/Context-Sensitive-Selective-Undo'
    },
    'PeopleCode.AI Website': {
        title: 'PeopleCode.AI Website',
        category: ['Software Engineering', 'AI/ML', 'UI/UX'],
        description: 'PeopleCode.AI enables anyone to create customized chatbots and AI apps with step-by-step tutorials—no coding experience needed.',
        overview: 'PeopleCode.AI is a platform designed to democratize AI and software creation by offering accessible tutorials and tools for beginners. It empowers users to build AI-powered applications using Python, the OpenAI API, and Streamlit. I contributed to the development of PeopleCode.AI by designing and launching the platform, developing its Python-based generative AI tutorials.',
        'motivation/purpose': 'Growing up in a technical environment, I have been exposed to coding for as long as I can remember. During my internship at the University of San Francisco, I served as a teaching assistant for an introductory computer science class. The professor used Thunkable, a block-based coding platform, to teach beginners how to code and develop apps. Acting as a teaching assistant made me realize how privileged I was in understanding the underlying logic of code. For some people, this concept can be challenging to grasp, and many don’t have the resources to learn coding on their own. This experience solidified my desire to democratize software development—something my professor often emphasized—and inspired me to pursue opportunities that would allow me to make coding and technology more accessible. That’s why I joined PeopleCode, where I had the chance to develop tutorials aimed at helping non-technical users. This role forced me to think from the perspective of those without a technical background. I had to consider aspects as basic as users’ familiarity with the command line and what functions they could execute, especially when the focus was on AI. For those without coding knowledge, AI can seem like an even greater barrier to entry, making it all the more crucial to create accessible learning pathways.',
        skills: ['Python', 'OpenAI API', 'Cursor', 'Thunkable', 'React', 'GitHub', 'Node.js'],
        image: 'images/people-code-website.PNG',
        projectLink: 'https://www.peoplecode.ai/'
    },
    'Student Housing App': {
        title: 'Student Housing App',
        category: ['UI/UX'],
        description: 'Prototype of a mobile app to streamline student housing searches',
        overview: 'I designed and prototyped a mobile app in Figma to centralize housing listings for Irish students, reducing search time by 15-20%. Through user research with 25+ students, I identified key pain points and developed wireframes that were validated through usability testing. By applying UX principles from my coursework, I ensured the app was accessible and inclusive, addressing the needs of 8 diverse student personas.',
        'motivation/purpose': 'The idea for the student housing app was inspired by my friend’s real-life experiences with accommodation challenges. Over the past year, accommodation scams have increased by nearly 20% in Ireland, which highlighted the need for a more secure and transparent way to find housing. With this in mind, I wanted to create a project that could make a real impact and help students like my friends. While developing the user persona for the app, I came across a wide variety of stories—from international students and domestic students to individuals with disabilities and those with families. It became clear that there was no comprehensive solution, at least in the form of an app, that could address all their diverse needs. This app was designed to fill that gap. For each housing listing, all accommodation details and requirements would be clearly outlined. We also included a dedicated legal section to educate users about the laws surrounding accommodation scams and ways to prevent them. Our goal was to connect students to trustworthy housing opportunities while empowering them with the knowledge needed to navigate the housing market safely.',
        skills: ['Figma', 'Design Thinking', 'UX Principles', 'Persona Creation', 'User Interviews'],
        image: 'images/student-housing-app.PNG',
        projectLink: 'https://www.figma.com/proto/sJa9HhAKPPtUe9nClCFPT3/Student-Housing-App?node-id=1-4&p=f&t=ycIs95DkdxS4T1vh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4'
    },
    'Predicting Anime Scores Using ML Models': {
        title: 'Predicting Anime Scores Using ML Models',
        category: 'AI/ML',
        description: 'Explore the potential of machine learning models to predict anime scores based on different features.',
        overview: 'The project explores using machine learning models to predict anime scores based on features like genre, episode count, studio, producer, source, etc. It compares the accuracy of simpler models like Linear Regression against more complex models like Decision Tree. The project also investigates how smaller models with feature selection can outperform more complex ones, highlighting the efficiency of feature selection. Genres and Studios were found to be two key predictors.',
        'motivation/purpose': 'As a big anime fan, I\'ve always been curious about what factors influence how people rate an anime. I wanted to use data to analyze these factors, and machine learning seemed like the perfect tool for the job. I was particularly interested in comparing simpler models to more complex ones. In machine learning, there\'s often a rush to use advanced models like neural networks or deep learning, but I noticed that many studies I came across—especially those predicting anime ratings—were either difficult to reproduce or relied on overly complex models. I wanted to see if simpler models, such as Linear Regression or Decision Trees, could also provide solid predictive power. Another key area I wanted to explore was feature selection. As models grow larger, they become harder to maintain, so I aimed to compare prediction accuracy with both more and fewer features to highlight how important feature engineering is. It was particularly fun to see that genre and studio emerged as the two key features influencing ratings, as it mirrored my own preferences when selecting anime.',
        skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Regression Models', 'Classification Models', 'Colab Notebooks', 'Feature Engineering', 'Data Cleaning and Preprocessing', 'ML Modelling and Evaluation'],
        image: 'images/predicting-anime-scores.png',
        projectLink: 'https://colab.research.google.com/drive/18sHAG4PoO7f0pJkPF9xnj5uCcKGtT-kB?usp=sharing'
    },
    'CryptoLearner': {
        title: 'CryptoLearner',
        category: ['Software Engineering', 'UI/UX'],
        description: 'A fun edtech app that teaches users crypto concepts!!',
        overview: 'CryptoLearner is an interactive EdTech application (based in PySide6 and NumPy) that enables students to learn and practice cryptography in real time. I led the front-end development with Qt for Python, designing intuitive UIs and building interactive layouts with QML and Directive UI. This project also won 1st place in the Cyber Security category, outperforming 500 teams at HackRPI\'s hackathon.',
        'motivation/purpose': 'I wanted to challenge myself with CryptoLearner because it offered an opportunity to push my limits in a high-pressure, fast-paced environment. In the industry, quick turnarounds for feature development are common, and participating in a hackathon gave me a chance to experience that firsthand. My teammates, who had brought up the idea, played a key role in the brainstorming process, fostering a collaborative and focused atmosphere for creative problem-solving and innovation. I’ve always been interested in user interface design but had never worked on front-end development before. This project was a perfect chance to dive into front-end development while my teammates focused on the back end, allowing me to learn how the two components collide and integrate. I also gained hands-on experience with multiple new APIs, which are essential skills for most software development roles. This project not only helped me grow technically but also reinforced the importance of teamwork and innovation under tight deadlines.',
        skills: ['Python', 'Qt for Python', 'Computer App Design', 'Cryptology', 'Graphical User Interface'],
        image: 'images/cryptolearner.PNG',
        projectLink: 'https://github.com/smullahy/CryptoLearner'
    },
    'Mary - Your Guide to Women in Computing': {
        title: 'Mary - Your Guide to Women in Computing',
        category: 'AI/ML',
        description: 'An advanced custom chatbot that tells you all about women in computing and makes calling cards for them as well!',
        overview: 'In a team of 3, we developed Mary, a custom chatbot focused on women in computing, which answers related questions and generates personalized calling cards for each figure. Mary was designed to only cover a specific time period and region, providing in-depth information. To enhance its knowledge base, we integrated a web search function that draws only from Britannica’s history of women in computing section, ensuring accurate and authoritative responses.',
        'motivation/purpose': 'After our visit to the Computer History Museum (CHM), our group was inspired to explore the human side of computing, focusing on the people who shaped the field. We realized that the history of computing is intertwined with the contributions of individuals, and it felt natural to focus on the history of humans in computing. In particular, we wanted to recognize the unsung women who played a significant role in the development of computing, many of whom were overlooked or not credited at the time. As a woman, I was especially driven to uncover the stories of these pioneering figures and address questions like: What roles did women hold in early computing? Why did they face resistance in the industry? How did they advance the field? This project became an opportunity to highlight these remarkable individuals and give them the recognition they deserve.',
        skills: ['ZeroWidth', 'Vercel', 'Framer', 'GitHub', 'JavaScript'],
        image: 'images/mary-chatbot.PNG',
        projectLink: 'https://zerowidth.ai/c/demo/xWcXgWtXg83CA2pYdKbT/draft'
    },
    'ScrumApp': {
        title: 'ScrumApp',
        category: 'Software Engineering',
        description: 'A scrum app to help professors and students keep track of class projects',
        overview: 'I collaborated in a 4-person team to enhance a JavaFX-based Scrum application, focusing on advanced class design, architecture, and implementing secure login features, which doubled the application\'s security. I redesigned the UI using JavaFX, HTML, and CSS, improving usability and responsiveness for students and professors, leading to a 40% increase in user satisfaction.',
        'motivation/purpose': 'This project was part of our Large-Scale Software Design class, where we had the opportunity to work with legacy code—a common challenge in the real world. Often, developers must work around existing code to implement new features, and in this case, we were tasked with improving a Scrum app from a previous iteration of the course. One of our main focuses was security, as handling sensitive data and implementing proper login methods is crucial in real-world applications. The project also provided valuable insight into the practical application of Scrum and Agile methodologies. We experienced firsthand how teams collaborate in an iterative development process, making it easier to understand the dynamics of real-world software development.',
        skills: ['JavaFX', 'Gradle', 'SQL', 'Java', 'Agile Methodology'],
        image: 'images/scrum-app.PNG',
        projectLink: 'https://github.com/AshleshaBhagat04/ScrumApp'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectData;
}

