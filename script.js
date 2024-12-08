// Select all sections
const sections = document.querySelectorAll("section");

// Function to check if a section is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight / 2 && // Top of the section enters halfway down
        rect.bottom > window.innerHeight / 2 // Bottom of the section hasn't exited halfway up
    );
}

// Function to handle the scroll event
function handleScroll() {
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add("active"); // Make section visible
        } else {
            section.classList.remove("active"); // Hide section when not visible
        }
    });
}

// Initialize the active state on page load
document.addEventListener("DOMContentLoaded", () => {
    handleScroll(); // Ensure the correct section is active on load
});

// Scroll event listener
window.addEventListener("scroll", handleScroll);

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img').style.transform = 'scale(1.1)';
            item.querySelector('.project-title').style.transform = 'translateY(0)';
            item.querySelector('.project-title').style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('img').style.transform = 'scale(1)';
            item.querySelector('.project-title').style.transform = 'translateY(100%)';
            item.querySelector('.project-title').style.opacity = '0';
        });
    });
});
