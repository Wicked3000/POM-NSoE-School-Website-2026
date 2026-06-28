const executives = [
    {
        name: "Male Co-President",
        role: "Co-President",
        dept: "Executive Leadership",
        email: "copresident.m@school.com",
        img: "/images/ID Photo placeholder.webp"
    },
    {
        name: "Female Co-President",
        role: "Co-President",
        dept: "Executive Leadership",
        email: "copresident.f@school.com",
        img: "/images/ID Photo placeholder.webp"
    },
    {
        name: "Treasurer",
        role: "Treasurer",
        dept: "Finance",
        email: "treasurer@school.com",
        img: "/images/ID Photo placeholder.webp"
    },
    {
        name: "Secretary",
        role: "Secretary",
        dept: "Administration",
        email: "secretary@school.com",
        img: "/images/ID Photo placeholder.webp"
    }
];

const roles = [
    "Academic Affairs",
    "Discipline",
    "Sports",
    "Events",
    "Spiritual Life",
    "Welfare",
    "Communications",
    "Environment",
    "Technology",
    "Culture",
    "Health",
    "Boarding",
    "Logistics",
    "Outreach"
];

const chairpersons = [];

roles.forEach(role => {
    chairpersons.push(
        {
            name: role + " Chair (Male)",
            role: "Chairperson",
            dept: role,
            email: role.toLowerCase().replace(/\s/g, "") + "@school.com",
            img: "/images/ID Photo placeholder.webp"
        },
        {
            name: role + " Chair (Female)",
            role: "Chairperson",
            dept: role,
            email: role.toLowerCase().replace(/\s/g, "") + "f@school.com",
            img: "/images/ID Photo placeholder.webp"
        }
    );
});

const execGrid = document.getElementById("execGrid");
const chairGrid = document.getElementById("chairGrid");
const modal = document.getElementById("modal");

const roleIcons = {
    "Academic Affairs": "fa-graduation-cap",
    "Discipline": "fa-scale-balanced",
    "Sports": "fa-football",
    "Events": "fa-calendar-days",
    "Spiritual Life": "fa-hands-praying",
    "Welfare": "fa-heart-pulse",
    "Communications": "fa-bullhorn",
    "Environment": "fa-leaf",
    "Technology": "fa-laptop-code",
    "Culture": "fa-masks-theater",
    "Health": "fa-house-medical",
    "Boarding": "fa-bed",
    "Logistics": "fa-truck-ramp-box",
    "Outreach": "fa-handshake-angle"
};

function showSingleModal(person) {
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" id="closeModal">&times;</span>
            <div class="modal-avatar">
                <i class="fa-solid fa-user-tie"></i>
            </div>
            <h2>${person.name}</h2>
            <div class="modal-badge">${person.role}</div>
            <div class="modal-info">
                <p><strong>Department:</strong> ${person.dept}</p>
                <p><strong>Email:</strong> <a href="mailto:${person.email}">${person.email}</a></p>
            </div>
        </div>
    `;
    modal.style.display = "flex";
    
    document.getElementById("closeModal").onclick = () => {
        modal.style.display = "none";
    };
}

function showPairModal(role, maleChair, femaleChair) {
    modal.innerHTML = `
        <div class="modal-content large">
            <span class="close-btn" id="closeModal">&times;</span>
            <h2>${role}</h2>
            <p class="modal-subtitle">Student Chairpersons</p>
            <div class="modal-chairperson-grid">
                <div class="modal-chair-card">
                    <div class="modal-avatar">
                        <i class="fa-solid fa-user-large"></i>
                    </div>
                    <h3>${maleChair.name}</h3>
                    <div class="modal-badge">Male Chairperson</div>
                    <p class="modal-email">
                        <i class="fa-regular fa-envelope"></i> 
                        <a href="mailto:${maleChair.email}">${maleChair.email}</a>
                    </p>
                </div>
                <div class="modal-chair-card">
                    <div class="modal-avatar">
                        <i class="fa-solid fa-user-large"></i>
                    </div>
                    <h3>${femaleChair.name}</h3>
                    <div class="modal-badge">Female Chairperson</div>
                    <p class="modal-email">
                        <i class="fa-regular fa-envelope"></i> 
                        <a href="mailto:${femaleChair.email}">${femaleChair.email}</a>
                    </p>
                </div>
            </div>
        </div>
    `;
    modal.style.display = "flex";
    
    document.getElementById("closeModal").onclick = () => {
        modal.style.display = "none";
    };
}

function render(list, container) {
    list.forEach(person => {
        const card = document.createElement("div");
        card.classList.add("src-card");
        card.classList.add("src-card-no-image");

        card.innerHTML = `
            <div class="src-card-content">
                <h3>${person.name}</h3>
                <p>${person.dept}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            showSingleModal(person);
        });

        container.appendChild(card);
    });
}

function renderChairpersons(roles, container) {
    const chairpersonList = document.createElement("div");
    chairpersonList.classList.add("chairperson-list");

    roles.forEach((role, index) => {
        const maleChair = chairpersons[index * 2];
        const femaleChair = chairpersons[index * 2 + 1];
        const iconClass = roleIcons[role] || "fa-users";

        const listItem = document.createElement("div");
        listItem.classList.add("chairperson-item");
        listItem.innerHTML = `
            <div class="chairperson-icon">
                <i class="fa-solid ${iconClass}"></i>
            </div>
            <div class="chairperson-title">${role}</div>
            <div class="chair-view-btn">
                View Chairs <i class="fa-solid fa-arrow-right"></i>
            </div>
        `;

        listItem.addEventListener("click", () => {
            showPairModal(role, maleChair, femaleChair);
        });

        chairpersonList.appendChild(listItem);
    });

    container.appendChild(chairpersonList);
}

render(executives, execGrid);
renderChairpersons(roles, chairGrid);

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};