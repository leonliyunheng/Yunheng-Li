document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section.scroll-triggered");
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
});

