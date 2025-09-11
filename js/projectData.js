// Project data in a separate file
const projectData = {
    'synthetic_data_generation_app': {
        // Threading feature'ını eklemem lazım!!!
        title: 'Synthetic Data Generation Pipeline for LLM Fine-Tuning',
        description: `
            <p>
                This project focuses on generating <strong>QA (Question-Answer)</strong> and <strong>QAE (Question-Answer-Evaluation Criteria)</strong> pairs to fine-tune and benchmark large language models (LLMs) with domain-specific knowledge about Türkiye. We developed an end-to-end pipeline that converts PDFs into high-quality QA/QAE pairs.
            </p>
            <hr class="section-divider">
            <h4>Pipeline Overview:</h4>
            <ul>
                <li><strong>PDF Processing:</strong> Split PDFs into 10-page documents and summarize each.</li>
                <li><strong>Semantic Chunking:</strong> Break down documents into semantically meaningful chunks.</li>
                <li><strong>QA/QAE Generation:</strong> For each chunk, combine it with the summary of its document to generate QA(E) pairs.</li>
                <li><strong>LLM Integration:</strong> Used a chain-based LangChain structure for LLM prompting and output parsing.</li>
                <li><strong>Scale:</strong> Generated ~6,000 QA pairs and ~4,000 QAE pairs using an 8-bit quantized <strong>LLaMA 3.3 70B</strong> model.</li>
                <li><strong>User Interface:</strong> Built a frontend with <strong>Gradio</strong> to adjust pipeline parameters and a <strong>Flask</strong> backend for seamless interaction.</li>
                <li><strong>Threading:</strong> The pipeline leverages multithreading with 14 concurrent threads to parallelize LLM calls, significantly improving processing speed and throughput.</li>
            </ul>
            <hr class="section-divider">
            <p>
                This pipeline generates the data required for fine-tuning and evaluating LLMs, helping to keep their knowledge up-to-date with current events and developments in Turkey.
            </p>
            <hr class="section-divider">
        `,        
        tech: 'Python, Langchain, Pandas, FastAPI, Gradio, Git, GitHub',
        hasGithub: false,
        hasDemo: false,
        github: 'https://github.com/mustafaozkanir/',
        demo: 'https://github.com/mustafaozkanir/'

    },
    'os_project': {
        title: 'Operating Systems Projects',
        description: `
        <ol>
            <li><strong>Multi-Process Application: </strong> This application computes the top K values from an input file. It spawns N child processes, which operate concurrently on a <strong>shared memory segment</strong>. The segment is created and managed using the POSIX Shared Memory API.</li>
            <li><strong>Userspace Thread Library: </strong> A cooperative threading library implemented in userspace. It supports thread creation, yield, exit, join, and cancel operations. The project is concluded with a performance analysis of different thread scheduling algorithms and the overhead of context switching.</li>
            <li><strong>Thread-Safe Binary Tree Library:</strong> A shared binary tree abstraction designed for concurrent use by multiple processes. It supports operations such as insert, update, delete, get, and findkeys. Thread-safety is ensured using POSIX Pthreads <strong>mutex locks</strong> and <strong>condition variables</strong>.</li>
            <li><strong>FAT-based Filesystem in Userspace:</strong> A filesystem built on the File Allocation Table (FAT) structure using the FUSE framework, which enables filesystem implementation in userspace. It supports operations such as list, create, delete, get attributes, open, close, read, and write.</li>
        </ol>
        <hr class="section-divider">
        `,
        tech: 'C, Linux, POSIX API, FUSE, Git, GitHub',
        hasGithub: false,
        hasDemo: false,
        github: 'https://github.com/mustafaozkanir/',
        demo: 'https://github.com/mustafaozkanir/'

    },
    'fixpad': {
        title: 'Fixpad++',
        description: 'An interactive web application that visualizes various sorting algorithms in real-time. Users can adjust array size, sorting speed, and compare different algorithms side by side. Educational tool for understanding algorithm complexity.',
        tech: 'JavaScript, HTML5 Canvas, CSS3',
        hasGithub: true,
        hasDemo: true,
        github: 'https://github.com/mustafaozkanir/sorting-visualizer',
        demo: 'https://sorting-visualizer-demo.netlify.app'
    }
};

// Make it available globally
window.projectData = projectData;