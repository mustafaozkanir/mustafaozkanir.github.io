// Project data in a separate file
const projectData = {
    'web-app': {
        title: 'E-Commerce Platform',
        description: 'A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Designed with responsive layout and optimized for performance.',
        tech: 'React, Node.js, MongoDB, Express, Stripe API',
        github: 'https://github.com/mustafaozkanir/ecommerce-platform',
        demo: 'https://ecommerce-demo.netlify.app'
    },
    'mobile-app': {
        title: 'Book Tracker App',
        description: 'A mobile application for book enthusiasts to track their reading progress, create personal libraries, and discover new books. Features barcode scanning, reading statistics, and social sharing capabilities.',
        tech: 'React Native, Firebase, Google Books API',
        github: 'https://github.com/mustafaozkanir/book-tracker',
        demo: 'https://play.google.com/store/apps/book-tracker'
    },
    'algorithm': {
        title: 'Sorting Visualizer',
        description: 'An interactive web application that visualizes various sorting algorithms in real-time. Users can adjust array size, sorting speed, and compare different algorithms side by side. Educational tool for understanding algorithm complexity.',
        tech: 'JavaScript, HTML5 Canvas, CSS3',
        github: 'https://github.com/mustafaozkanir/sorting-visualizer',
        demo: 'https://sorting-visualizer-demo.netlify.app'
    },
    'database': {
        title: 'Library Management System',
        description: 'A comprehensive database design project for managing library operations. Includes book inventory, member management, borrowing system, and automated fine calculations. Implemented with proper normalization and indexing.',
        tech: 'PostgreSQL, Python, Flask, SQLAlchemy',
        github: 'https://github.com/mustafaozkanir/library-management',
        demo: 'https://library-demo.herokuapp.com'
    },
    'game': {
        title: 'Chess Engine',
        description: 'A fully functional chess engine implemented in C++ with advanced features like move validation, check detection, and AI opponent with multiple difficulty levels. Includes a clean command-line interface.',
        tech: 'C++, Object-Oriented Programming, Game AI',
        github: 'https://github.com/mustafaozkanir/chess-engine',
        demo: 'https://chess-engine-web.netlify.app'
    }
};

// Make it available globally
window.projectData = projectData;