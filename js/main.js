// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const projectItems = document.querySelectorAll('.project-item');
    const projectDetails = document.getElementById('project-details');
    const closeDetailsButton = document.getElementById('close-details-button');
    const detailsTitle = document.getElementById('details-title');
    const detailsDescription = document.getElementById('details-description');
    const detailsTech = document.getElementById('details-tech');
    const detailsGithub = document.getElementById('details-github');
    const detailsDemo = document.getElementById('details-demo');

    projectDetails.style.visibility = 'hidden';

    // Add click event listeners to project items
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.dataset.project;
            const data = window.projectData[projectId];
            
            // Populate details
            detailsTitle.textContent = data.title;
            detailsDescription.textContent = data.description;
            detailsTech.textContent = data.tech;
            detailsGithub.href = data.github;
            detailsDemo.href = data.demo;
            
            // Show details
            projectDetails.style.opacity = '1';
            projectDetails.style.visibility = 'visible';
        });
    });

    // Handle close button click
    if (closeDetailsButton) {
        closeDetailsButton.addEventListener('click', () => {
            projectDetails.style.opacity = '0';
            projectDetails.style.visibility = 'hidden';
        });
    }

    // Handle clicks outside the panel (global listener)
    document.addEventListener('click', (e) => {
        if (projectDetails && 
            !projectDetails.contains(e.target) && 
            e.target.closest('.project-item') === null && 
            projectDetails.style.visibility !== 'hidden') {
            
            projectDetails.style.opacity = '0';
            projectDetails.style.visibility = 'hidden';
        }
    });

    // Add hover event listeners for conditional hover behavior
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Only show hover details if no panel is currently open
            if (projectDetails.style.visibility === 'hidden') {
                const projectId = item.dataset.project;
                const data = window.projectData[projectId];
                
                // Populate details
                detailsTitle.textContent = data.title;
                detailsDescription.textContent = data.description;
                detailsTech.textContent = data.tech;
                detailsGithub.href = data.github;
                detailsDemo.href = data.demo;
                
                // Show details
                projectDetails.style.opacity = '1';
                projectDetails.style.visibility = 'visible';
            }
        });
    });


    
});