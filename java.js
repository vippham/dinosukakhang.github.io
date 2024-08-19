document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const text = "Python Coder";
    const typedTextElement = document.getElementById('typed-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        } else {
            typedTextElement.innerHTML += '<span class="cursor">|</span>';
        }
    }

    typeText();

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Back to Top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill bars animation
    const skillBars = document.querySelectorAll('.progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
        });
    };

    // Parallax scrolling
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });

        // Animate skill bars when in view
        if (isInViewport(document.getElementById('skills'))) {
            animateSkillBars();
        }
    });

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
// Các hàm hiện có giữ nguyên

// Skill bars animation
const skillBars = document.querySelectorAll('.progress');
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
};

// Back to Top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }

    // Animate skill bars when in view
    if (isInViewport(document.getElementById('skills'))) {
        animateSkillBars();
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}