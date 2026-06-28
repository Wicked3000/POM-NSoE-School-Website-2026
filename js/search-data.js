const searchData = [
    {
        title: "Home",
        url: "/index.html",
        content: "Port Moresby National School Of Excellence home page. Excellence in education, shaping future leaders of Papua New Guinea. Academic distinction, committed to high achievement. Leadership and character, preparing tomorrow's leaders. Quality academics, committed to high achievement.",
        keywords: ["home", "welcome", "excellence", "education", "leaders", "png", "academic", "distinction", "leadership", "character", "quality", "achievement"],
        category: "main"
    },
    {
        title: "About - Administration",
        url: "/main pages/sub-pages/administration.html",
        content: "School administration, leadership team, principal, teachers, staff members, school management, educational leadership, administrative staff, school governance, management structure.",
        keywords: ["administration", "principal", "leadership", "teachers", "staff", "management", "governance", "structure", "team"],
        category: "about"
    },
    {
        title: "About - Facilities",
        url: "/main pages/sub-pages/facilities.html",
        content: "School facilities, classrooms, laboratories, library, sports facilities, playground, computer labs, science labs, gymnasium, auditorium, cafeteria, modern facilities, well-equipped classrooms.",
        keywords: ["facilities", "classrooms", "laboratories", "library", "sports", "playground", "computer", "science", "gymnasium", "auditorium", "cafeteria", "modern", "equipped"],
        category: "about"
    },
    {
        title: "About - History",
        url: "/main pages/sub-pages/history.html",
        content: "School history, founding, establishment, tradition, heritage, development, growth, educational excellence, Papua New Guinea education, school background, legacy, foundation.",
        keywords: ["history", "founding", "establishment", "tradition", "heritage", "development", "growth", "excellence", "png", "background", "legacy", "foundation"],
        category: "about"
    },
    {
        title: "About - Staff",
        url: "/main pages/sub-pages/staff.html",
        content: "Teaching staff, faculty members, educators, teachers, qualified staff, experienced teachers, professional educators, academic staff, teaching professionals, school faculty.",
        keywords: ["staff", "faculty", "educators", "teachers", "qualified", "experienced", "professional", "academic", "teaching"],
        category: "about"
    },
    {
        title: "About",
        url: "/main pages/about.html",
        sections: [
            {
                id: "about-school",
                content: "Our institution has been a beacon of academic excellence and character formation for generations. We are committed to providing a nurturing environment where students not only excel in their studies but also develop into responsible, compassionate, and innovative individuals. Our comprehensive curriculum, dedicated faculty, and state-of-the-art facilities work together to ensure that every student reaches their full potential and is prepared for success in an ever-changing world. At the heart of our school lies a deep commitment to holistic education. We believe that true learning extends beyond textbooks and classrooms; it encompasses character development, leadership training, and the cultivation of critical thinking skills. Through a blend of rigorous academics, extracurricular activities, and mentorship, we inspire our students to become leaders who make a positive impact in their communities and contribute meaningfully to society."
            },
            {
                id: "principals-message",
                content: "Welcome to our institution. We stand on discipline, tradition, and excellence. Education is not merely the transfer of knowledge; it is the forging of character. Here, we shape minds to think, and hearts to lead."
            },
            {
                id: "mission-vision",
                content: "Our Mission: To deliver quality education that builds strong academic foundations, nurtures creativity, and prepares students for the realities of the modern world. Our Vision: To become a leading institution known for excellence, integrity, and the cultivation of future leaders."
            },
            {
                id: "contact-section",
                content: "Contact information, school address, phone number, email, location, PO Box 1004, Waigani, Port Moresby, Papua New Guinea, contact details, get in touch, school contact."
            }
        ],
        keywords: ["about", "school", "institution", "excellence", "education", "character", "holistic", "mission", "vision", "contact", "principal", "message"],
        category: "about"
    },
    {
        title: "Admissions",
        url: "/main pages/admissions.html",
        sections: [
            {
                id: "admissions-intro",
                content: "Join our institution through a simple and transparent admissions process. We are committed to helping every student begin their academic journey with confidence."
            },
            {
                id: "admissions-process",
                content: "Complete the online or printed application form. Submit report cards, birth certificate, and passport photos. Attend the entrance assessment or interview if required. Receive your admission letter and confirm enrollment."
            },
            {
                id: "tuition-fees",
                content: "Tuition & Fee Schedule Grade 11 Parental Component K1,760 / term Upfront Fee K500 Grade 12 Parental Component K1,767 / term Upfront Fee K500"
            },
            {
                id: "downloadable-forms",
                content: "Downloadable Forms Admission Form Student Profile Form"
            },
            {
                id: "faqs",
                content: "Frequently Asked Questions"
            }
        ],
        keywords: ["admissions", "enrollment", "application", "requirements", "apply", "procedure", "criteria", "form", "join", "tuition", "fees", "forms", "faq"],
        category: "admissions"
    },
    {
        title: "Academics",
        url: "/main pages/academics.html",
        sections: [
            {
                id: "academics-intro",
                content: "Our academic system is designed to cultivate discipline, critical thinking, and excellence. Students are guided through structured pathways that prepare them for higher education and real-world challenges."
            },
            {
                id: "curriculum-overview",
                content: "Curriculum Overview Student Based Curriculum (SBC) A balanced academic approach focused on foundational knowledge, adaptability, and holistic development. STEM Curriculum A specialized pathway emphasizing Science, Technology, Engineering, and Mathematics - preparing students for technical and innovation-driven fields."
            },
            {
                id: "streams",
                content: "Streams All Humanities Science STEM"
            }
        ],
        keywords: ["academics", "curriculum", "streams", "sbc", "stem", "humanities", "science", "education", "learning"],
        category: "academics"
    },
    {
        title: "Academics - Academic Calendar",
        url: "/main pages/sub-pages/academic-cal.html",
        content: "Academic calendar, school year schedule, term dates, holidays, important dates, academic year, school calendar, term schedule, academic planning, school year structure.",
        keywords: ["academic", "calendar", "schedule", "term", "dates", "holidays", "year", "planning", "structure"],
        category: "academics"
    },
    {
        title: "Announcements",
        url: "/main pages/announcements.html",
        content: "School announcements, notices, news, student updates, event alerts, academic reminders, calendar link, important messages, dates.",
        keywords: ["announcements", "notices", "updates", "news", "events", "alerts", "calendar", "school", "students", "parents"],
        category: "announcements"
    },
    {
        title: "Academics - Extracurricular Activities",
        url: "/main pages/sub-pages/extra-activ.html",
        content: "Extracurricular activities, sports, clubs, arts, music, drama, debate, student activities, after school programs, co-curricular activities, student development, holistic education.",
        keywords: ["extracurricular", "activities", "sports", "clubs", "arts", "music", "drama", "debate", "student", "programs", "co-curricular", "development", "holistic"],
        category: "academics"
    },
    {
        title: "Academics - Uniform Policy",
        url: "/main pages/sub-pages/uniform.html",
        content: "School uniform policy, dress code, uniform requirements, school attire, uniform guidelines, proper dress, school dress code, uniform standards, student appearance.",
        keywords: ["uniform", "policy", "dress", "code", "requirements", "attire", "guidelines", "proper", "standards", "appearance"],
        category: "academics"
    },
    {
        title: "Gallery",
        url: "/main pages/gallery.html",
        content: "School gallery, photo gallery, images, pictures, school photos, student photos, school events, school activities, visual memories, school life, photo collection.",
        keywords: ["gallery", "photo", "images", "pictures", "photos", "events", "activities", "memories", "life", "collection"],
        category: "gallery"
    },
    {
        title: "Students - Student Engagement",
        url: "/main pages/sub-pages/studenteng.html",
        content: "Student engagement, student involvement, student participation, school activities, student life, engagement programs, student development, active learning, student participation.",
        keywords: ["student", "engagement", "involvement", "participation", "activities", "life", "programs", "development", "learning"],
        category: "students"
    },
    {
        title: "Students - Student Leadership",
        url: "/main pages/sub-pages/studentldr.html",
        content: "Student leadership, leadership development, student leaders, leadership skills, leadership programs, student council, leadership opportunities, developing leaders, leadership training.",
        keywords: ["student", "leadership", "development", "leaders", "skills", "programs", "council", "opportunities", "training"],
        category: "students"
    }
];