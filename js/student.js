const activityData = {
    "Sports": {
        photos: [
            { src: "/images/Facilities/Basketball Courts.webp", caption: "Basketball courts" },
            { src: "/images/Facilities/Volleyball Courts.webp", caption: "Volleyball courts" },
            { src: "/images/Facilities/Main Field.webp", caption: "Main sports field" }
        ],
        desc: "Sports are integral to student life at POMNSoE. Activities include basketball, volleyball, netball, and athletics, promoting physical health, teamwork, and discipline. Regular practices and matches build endurance and sportsmanship."
    },
    "Library": {
        photos: [
            { src: "/images/Gallery/Facilities (Library) 1.webp", caption: "Library reading area" },
            { src: "/images/Gallery/Facilities (Library) 2.webp", caption: "Research resources available" },
            { src: "/images/Gallery/Facilities (Library) 3.webp", caption: "Students studying quietly" }
        ],
        desc: "The school library is a hub for academic excellence. Students access books, computers, and study spaces for research, reading, and quiet study. Librarians provide guidance on resources and study skills."
    },
    "Tech Labs & WiFi": {
        photos: [
            { src: "/images/Facilities/Tech Lab 1.jpeg", caption: "Computer lab setup" },
            { src: "/images/Facilities/Tech Lab 2.jpeg", caption: "Students using technology" },
            { src: "/images/Gallery/Students Learning 1.webp", caption: "WiFi-enabled learning" }
        ],
        desc: "Technology labs and WiFi connectivity enhance modern learning. Students use computers for coding, research, presentations, and online collaboration. Reliable internet supports digital literacy and project work."
    },
    "Classroom Life": {
        photos: [
            { src: "/images/Gallery/Students Learning 2.webp", caption: "Interactive classroom discussion" },
            { src: "/images/Gallery/Students Learning 3.webp", caption: "Group project work" },
            { src: "/images/Gallery/Students Learning 4.webp", caption: "Student presentations" }
        ],
        desc: "Classrooms are dynamic environments for active learning. Teachers facilitate discussions, experiments, and collaborative projects. Students engage in critical thinking, problem-solving, and peer learning."
    },
    "Community & Faith": {
        photos: [
            { src: "/images/Gallery/PNC 1.webp", caption: "School community service" },
            { src: "/images/Gallery/PNC 2.webp", caption: "Religious Education session" },
            { src: "/images/Gallery/PNC 3.webp", caption: "Student group gathering" }
        ],
        desc: "Community and faith activities foster values and belonging. Services, RE sessions, and student groups build character, ethics, and social responsibility. Students develop leadership and community awareness."
    },
    "Discipline & Structure": {
        photos: [
            { src: "/images/Gallery/Assembly 1.webp", caption: "School assembly" },
            { src: "/images/Gallery/Assembly 2.webp", caption: "Structured daily routine" },
            { src: "/images/Gallery/Assembly 3.webp", caption: "Accountability in action" }
        ],
        desc: "Discipline and structure provide a foundation for growth. Clear expectations, routines, and accountability help students develop self-control, responsibility, and respect. Consistent systems support academic and personal development."
    }
};

// Activity modal
const activityModal = document.getElementById('activityModal');
const activityTitle = document.getElementById('activityTitle');
const photo1 = document.getElementById('photo1');
const caption1 = document.getElementById('caption1');
const photo2 = document.getElementById('photo2');
const caption2 = document.getElementById('caption2');
const photo3 = document.getElementById('photo3');
const caption3 = document.getElementById('caption3');
const activityDesc = document.getElementById('activityDesc');

document.querySelectorAll('.life-card').forEach(card => {
    card.addEventListener('click', () => {
        const activity = card.dataset.activity;
        if (activityData[activity]) {
            const data = activityData[activity];
            activityTitle.textContent = activity;
            photo1.src = data.photos[0].src;
            caption1.textContent = data.photos[0].caption;
            photo2.src = data.photos[1].src;
            caption2.textContent = data.photos[1].caption;
            photo3.src = data.photos[2].src;
            caption3.textContent = data.photos[2].caption;
            activityDesc.textContent = data.desc;
            activityModal.style.display = 'flex';
        }
    });
});

document.getElementById('closeActivity').addEventListener('click', () => {
    activityModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === activityModal) {
        activityModal.style.display = 'none';
    }
});