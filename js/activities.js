const sections = document.querySelectorAll('.act-section');

const reveal = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < trigger) {
            sec.classList.add('show');
        }
    });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);