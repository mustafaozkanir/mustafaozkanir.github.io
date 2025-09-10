// Project data in a separate file
const projectData = {
    'synthetic_data_generation_app': {
        title: 'Synthetic Data Generation Pipeline for LLM Fine-Tuning',
        description: `
            <p>
                This project focuses on generating <strong>QA (Question-Answer)</strong> and <strong>QAE (Question-Answer-Evaluation Criteria)</strong> pairs to fine-tune and benchmark large language models (LLMs) with domain-specific knowledge about Türkiye. We developed an end-to-end pipeline that converts PDFs into high-quality QA/QAE pairs.
            </p>
            <h4>Pipeline Overview:</h4>
            <ul>
                <li><strong>PDF Processing:</strong> Split PDFs into 10-page documents and summarize each.</li>
                <li><strong>Semantic Chunking:</strong> Break down documents into semantically meaningful chunks.</li>
                <li><strong>QA/QAE Generation:</strong> For each chunk, combine it with the summary of its document to generate QA(E) pairs.</li>
                <li><strong>LLM Integration:</strong> Used a chain-based LangChain structure for LLM prompting and output parsing.</li>
                <li><strong>Scale:</strong> Generated ~6,000 QA pairs and ~4,000 QAE pairs using an 8-bit quantized <strong>LLaMA 3.3 70B</strong> model.</li>
                <li><strong>User Interface:</strong> Built a frontend with <strong>Gradio</strong> to adjust pipeline parameters and a <strong>Flask</strong> backend for seamless interaction.</li>
            </ul>
            <p>
                This pipeline generates the data required for fine-tuning and evaluating LLMs, helping to keep their knowledge up-to-date with current events and developments in Turkey.
            </p>
        `,        
        tech: 'Python, Langchain, Pandas, Flask, Gradio, Git',
        github: 'https://github.com/mustafaozkanir/',
        demo: 'https://ecommerce-demo.netlify.app'
    },
    'self_rag': {
        title: 'Self-RAG Implementation',
        description: 'A mobile application for book enthusiasts to track their reading progress, create personal libraries, and discover new books. Features barcode scanning, reading statistics, and social sharing capabilities.',
        tech: 'React Native, Firebase, Google Books API',
        github: 'https://github.com/mustafaozkanir/book-tracker',
        demo: 'https://play.google.com/store/apps/book-tracker'
    },
    'fixpad': {
        title: 'Fixpad++',
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