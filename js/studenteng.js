const activityData = {
    "School Projects": {
        photos: [
            { src: "/images/Gallery/Students Learning 1.webp", caption: "Engineering project in progress" },
            { src: "/images/Gallery/Students Learning 2.webp", caption: "Research investigation" },
            { src: "/images/Gallery/Students Learning 3.webp", caption: "Student presenting project" }
        ],
        desc: "School projects encourage innovation and hands-on learning. Students work on engineering builds, scientific experiments, and research projects that develop critical thinking, creativity, and technical skills. These activities prepare students for real-world challenges."
    },
    "Class Activities": {
        photos: [
            { src: "/images/Gallery/Students Learning 1.webp", caption: "Group discussion in class" },
            { src: "/images/Gallery/Students Learning 2.webp", caption: "Collaborative problem-solving" },
            { src: "/images/Gallery/Students Learning 3.webp", caption: "Interactive learning session" }
        ],
        desc: "Class activities make learning engaging and interactive. Through discussions, group work, presentations, and challenges, students actively participate in their education. This approach fosters deeper understanding and develops communication and teamwork skills."
    },
    "Community Service": {
        photos: [
            { src: "/images/Gallery/PNC 1.webp", caption: "Students volunteering" },
            { src: "/images/Gallery/PNC 2.webp", caption: "Community cleanup" },
            { src: "/images/Gallery/PNC 3.webp", caption: "Service project" }
        ],
        desc: "Community service teaches compassion and responsibility. Students participate in volunteering, environmental projects, and helping others. These experiences build empathy, leadership, and a sense of civic duty."
    },
    "30 Year Anniversary": {
        photos: [
            { src: "/images/Gallery/30 years.webp", caption: "30 Year School Celebration" },
            { src: "/images/Gallery/Assembly 1.webp", caption: "Anniversary assembly" },
            { src: "/images/Gallery/Assembly 2.webp", caption: "School community celebration" }
        ],
        desc: "The 30 Year Anniversary marked a proud milestone for the school community. Students and staff celebrated decades of learning, growth, and achievement through performances, reflections, and shared memories."
    },
    "CEPA Excursion": {
        photos: [
            { src: "/images/Gallery/Excursions (American Kona) 1.webp", caption: "Environmental learning" },
            { src: "/images/Gallery/Excursions (American Kona) 2.webp", caption: "Conservation Authority visit" },
            { src: "/images/Gallery/Excursions (American Kona) 3.webp", caption: "Hands-on experience" }
        ],
        desc: "The CEPA excursion to the Conservation and Environment Protection Authority provided practical environmental education. Students learned about conservation, sustainability, and environmental responsibility through guided tours and interactive sessions."
    }
};

const activityModal = document.getElementById('activityModal');
const activityTitle = document.getElementById('activityTitle');
const photo1 = document.getElementById('photo1');
const caption1 = document.getElementById('caption1');
const photo2 = document.getElementById('photo2');
const caption2 = document.getElementById('caption2');
const photo3 = document.getElementById('photo3');
const caption3 = document.getElementById('caption3');
const activityDesc = document.getElementById('activityDesc');

document.querySelectorAll('.stu-section.story').forEach(section => {
    section.addEventListener('click', () => {
        const activity = section.dataset.activity;
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