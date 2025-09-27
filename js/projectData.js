// Project data in a separate file
const projectData = {
    'synthetic_data_generation_app': {
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
                <li><strong>User Interface:</strong> Built a frontend with <strong>Gradio</strong> to adjust pipeline parameters and a <strong>FastAPI</strong> backend for seamless interaction.</li>
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
        description: `
        <p>
            The purpose of this research project is to automate bug fix verification process through a multi-agent framework. The system comprises 3 collaborating agents: Action, Observation and Reflection. They take raw issue descriptions from <a href="https://github.com/notepad-plus-plus/notepad-plus-plus" target="_blank">official Notepad++ repository</a> and interact with Notepad++ environment through GUI interactions     to reproduce and verify bugs, simulating the work of a QA engineer.
        </p>
        <hr class="section-divider">
        <h4>Project Overview:</h4>
        <ul>
            <li><strong>Screen Parsing:</strong> Uses OmniParser V2 to connect the LLMs with the screen.</li>
            <li><strong>Action Manager:</strong> Parses LLM responses and executes actions via PyAutoGUI. </li>
            <li><strong>Environment Manager:</strong> Handles screenshots, bug detection, and version control.</li>
            <li><strong>ReAct Prompting:</strong> Alternates between reasoning, acting, and observing to refine actions based on feedback, using specialized agents with hand-crafted prompts.</li>
            <li><strong>LLM Backbone:</strong> Powered by Gemini 2.0 Flash for fast and efficient reasoning.</li>
        </ul>
        <hr class="section-divider">
        <h4>Results:</h4>
        <ul>
            <li>Curated a dataset of 104 issues, including descriptions, buggy versions, and patched versions of Notepad++.</li>
            <li>Achieved 64.28% verification accuracy with an average runtime of 119 seconds per issue.</li>
        </ul>
        <hr class="section-divider">

        `,
        tech: 'Python, PyAutoGUI, OmniParser V2, Google Vertex AI API, Git, GitHub',
        hasGithub: false,
        hasDemo: true,
        github: 'https://github.com/mustafaozkanir',
        demo: 'https://www.youtube.com/watch?v=ppRHBtrGXnY'
    },
    'databoss': {
        title: 'Self-RAG QA System',
        description: `
        <p>
            This project developed a research-oriented question answering system over Turkish Ministry of Education documents, inspired by the research paper <a href="https://arxiv.org/abs/2310.11511" target="_blank"><em>Self-RAG</em></a>. The system integrates hybrid retrieval techniques, cross-encoder reranking, and an interactive interface, simulating the full retrieval–generation–reflection workflow for accurate and grounded answers.
        </p>
        <hr class="section-divider">
        <h4>Project Overview:</h4>
        <ul>
            <li><strong>Hybrid Retrieval Pipeline:</strong> Combined BM25, ColBERTv2, and Jina embeddings, followed by cross-encoder reranking for improved relevance.</li>
            <li><strong>LLM Integration:</strong> Utilized open-source models from Ollama for generation and reasoning.</li>
            <li><strong>System Integration:</strong> Built the pipeline using LangGraph and LangChain, developed a Chainlit-based interactive interface for querying.</li>
            <li><strong>Vector Database:</strong> Deployed Vespa in Docker to manage large-scale document embeddings and retrieval efficiently.</li>
        </ul>
        <hr class="section-divider">
        `,
        tech: 'Python, LangGraph, LangChain, Chainlit, Vespa, ColBERTv2, Jina Embeddings, Jina Reranker, Ollama',
        hasGithub: true,
        hasDemo: false,
        github: 'https://github.com/mustafaozkanir/advanced-self-rag-implementation',
        demo: ''
    }


};

// Make it available globally
window.projectData = projectData;