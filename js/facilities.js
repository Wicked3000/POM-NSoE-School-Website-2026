const facilities = [
    { name: "Tech Lab 1", category: "academic", img: "../../images/Facilities/Tech Lab 1.jpeg", desc: "Computing Lab for the Grade 11 students." },
    { name: "Tech Lab 2", category: "academic", img: "../../images/Facilities/Tech Lab 2.jpeg", desc: "Computing Lab for the Grade 12 students." },
    { name: "Engineering Room", category: "academic", img: "../../images/Facilities/DJI_0166.webp", desc: "Engineering room." },
    { name: "Physics Lab 1", category: "academic", img: "../../images/Facilities/Physics Lab 1.jpeg", desc: "Physics Laboratory." },
    { name: "Physics Lab 2", category: "academic", img: "../../images/Facilities/Physics Lab 2.jpeg", desc: "Physics Laboratory." },
    { name: "Library", category: "academic", img: "../../images/Facilities/Library.jpeg", desc: "Academic resource center." },
    { name: "Chem Lab 1", category: "academic", img: "../../images/Facilities/Chem Lab 1.jpeg", desc: "Chemistry Laboratory." },
    { name: "Chem Lab 2", category: "academic", img: "../../images/Facilities/Chem Lab 2.jpeg", desc: "Chemistry Laboratory." },
    { name: "Biology Lab 1", category: "academic", img: "../../images/Facilities/Bio Lab 1.jpeg", desc: "Biology Laboratory." },
    { name: "Biology Lab 2", category: "academic", img: "../../images/Facilities/Bio Lab 2.jpeg", desc: "Biology Laboratory." },
    { name: "Classrooms (16)", category: "academic", img: "../../images/Facilities/Classroom.jpeg", desc: "Multiple learning spaces for Mathematics, English, Business, Economics, and Geography." },

    { name: "Basketball Courts", category: "sports", img: "../../images/Facilities/Basketball Courts.webp", desc: "Outdoor courts." },
    { name: "Volleyball Courts", category: "sports", img: "../../images/Facilities/Volleyball Courts.webp", desc: "Volleyball area." },
    { name: "Netball Courts", category: "sports", img: "../../images/Facilities/Netball Courts.webp", desc: "Netball facilities." },
    { name: "Main Field", category: "sports", img: "../../images/Facilities/Main Field.webp", desc: "Large sports field." },

    { name: "Multicomplex Hall", category: "general", img: "../../images/Facilities/Multicomplex Hall.webp", desc: "Multi-purpose hall." },
    { name: "Diowai Conference Center", category: "general", img: "../../images/Facilities/DCC.webp", desc: "Conference Center for the School." },
    { name: "Staff Accommodation", category: "general", img: "../../images/Facilities/Staff Accommodation.jpeg", desc: "Housing for staff." },
    { name: "Clocktower", category: "general", img: "../../images/Facilities/Clock Tower.jpeg", desc: "Central landmark." }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById("facGrid");

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeModal = document.getElementById("closeModal");

    function renderFacilities(filter = "all") {
        grid.innerHTML = "";

        facilities.forEach((fac, index) => {
            if (filter !== "all" && fac.category !== filter) return;

            const card = document.createElement("div");
            card.classList.add("fac-card");

            card.innerHTML = `
                <img src="${fac.img}">
                <h3>${fac.name}</h3>
                <p>${fac.desc}</p>
            `;

            card.addEventListener("click", () => {
                modal.style.display = "flex";
                modal.classList.add("open");
                modalImg.src = fac.img;
                modalTitle.innerText = fac.name;
                modalDesc.innerText = fac.desc;
            });

            grid.appendChild(card);
        });
    }

    renderFacilities();

    document.querySelectorAll(".filter-buttons button").forEach(btn => {
        btn.addEventListener("click", () => {
            const activeBtn = document.querySelector(".filter-buttons .active");
            if (activeBtn && activeBtn !== btn) {
                activeBtn.classList.remove("active");
            }
            btn.classList.add("active");
            renderFacilities(btn.dataset.filter);
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("open");
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
            modal.style.display = "none";
        }
    });
});