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
    const mainContent = document.querySelector('.main-content-wrapper');

    projectDetails.style.visibility = 'hidden';

    /**  Project Item and Details Container Logic:
    * Decision 1: If currently no container is currently open, a hover over a project item opens its details container. (Disabled for now)
    * Decision 2: An opened container remains open until one of the followings happen:
    *               * Decision 2.1: User clicks close button.
    *               * Decision 2.2: User clicks somewhere outside the details container.
    *               * Decision 2.3: User clicks on another project item. (Also see Decision 3)
    * Decision 3: If currently a details container is open, no hover works.
    * */
   
    // Add click event listeners to project items
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.dataset.project;
            const data = window.projectData[projectId];
            
            // Populate details
            detailsTitle.textContent = data.title;
            detailsDescription.innerHTML = data.description;
            detailsTech.textContent = data.tech;
            detailsGithub.href = data.github;
            detailsDemo.href = data.demo;
            
            // Show details
            showDetails();
        });
    });

    // Handle close button click
    if (closeDetailsButton) {
        closeDetailsButton.addEventListener('click', hideDetails);
    }

    // Handle clicks outside the panel (global listener)
    document.addEventListener('click', (e) => {
        if (projectDetails && 
            !projectDetails.contains(e.target) && 
            e.target.closest('.project-item') === null && 
            projectDetails.style.visibility !== 'hidden') {
            
            hideDetails();
        }
    });

    // Add hover event listeners for conditional hover behavior
    /*projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Only show hover details if no panel is currently open
            if (projectDetails.style.visibility === 'hidden') {
                const projectId = item.dataset.project;
                const data = window.projectData[projectId];
                
                // Populate details
                detailsTitle.textContent = data.title;
                detailsDescription.innerHTML = data.description;
                detailsTech.textContent = data.tech;
                detailsGithub.href = data.github;
                detailsDemo.href = data.demo;
                
                // Show details
                showDetails();
            }
        });
    });*/
    /***** Project Item and Details Container Opening Closing Logic *****/

    // Function to show details and shift content
    function showDetails() {
        projectDetails.style.opacity = '1';
        projectDetails.style.visibility = 'visible';
        mainContent.classList.add('shift-left');
    }

    // Function to hide details and return content
    function hideDetails() {
        projectDetails.style.opacity = '0';
        projectDetails.style.visibility = 'hidden';
        mainContent.classList.remove('shift-left');
    }

    
});