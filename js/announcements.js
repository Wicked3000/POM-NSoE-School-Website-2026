const announcements = [
    {
        date: "May 20, 2026",
        title: "Mid-Term Assembly and Progress Reports",
        summary: "A reminder that the mid-term assembly begins at 8:30 AM in the main hall. Progress reports will be distributed to parents and guardians after the assembly.",
        img: "/images/Gallery/Assembly 1.webp"
    },
    {
        date: "June 5, 2026",
        title: "Science and Technology Expo",
        summary: "Students in Science and Technology streams will present projects in the school gym. Parents and community members are invited to view innovations and learning demonstrations.",
        img: "/images/Gallery/Students Projects.webp"
    },
    {
        date: "July 15, 2026",
        title: "Parent-Teacher Conference",
        summary: "Parent-teacher conferences will be held throughout the day. Please book your appointment in advance with the school office or your student's homeroom teacher.",
        img: "/images/Gallery/Teachers 1.webp"
    },
    {
        date: "August 1, 2026",
        title: "Annual Sports Registration Opens",
        summary: "School sports registration opens for athletics, football, volleyball, and netball. Students should sign up with their coaches before the end of the week.",
        img: "/images/Facilities/Basketball Courts.webp"
    }
];

const announcementGrid = document.getElementById("announcementGrid");

function renderAnnouncements() {
    if (!announcementGrid) return;

    announcementGrid.innerHTML = announcements.map(item => `
        <article class="announcement-card">
            <img src="${item.img}" alt="${item.title}">
            <div class="announcement-content">
                <span class="announcement-date">${item.date}</span>
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
            </div>
        </article>
    `).join("");
}

renderAnnouncements();

const sections = document.querySelectorAll('.announce-section');

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
