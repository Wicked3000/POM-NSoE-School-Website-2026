const streams = [
    {
        name: "Humanities Stream",
        key: "humanities",
        subjects: [
            {
                name: "Business Stream",
                subs: [
                    "General Mathematics",
                    "Geography",
                    "Business",
                    "English",
                    "Economics",
                    "Personal Development"
                ]
            },
            {
                name: "Block Social Science Stream",
                subs: [
                    "Advanced Mathematics",
                    "Geography or Business",
                    "History",
                    "English",
                    "Economics",
                    "Personal Development"
                ]
            }
        ]
    },
    {
        name: "Science Stream",
        key: "science",
        subjects: [
            {
                name: "Block Science Stream",
                subs: [
                    "Advanced Mathematics",
                    "Physics",
                    "Chemistry",
                    "Biology",
                    "English",
                    "Personal Development"
                ]
            },
            {
                name: "Physics-Chemistry Stream",
                subs: [
                    "Advanced Mathematics",
                    "Physics",
                    "Chemistry",
                    "English",
                    "ICT or Geography",
                    "Personal Development"
                ]
            }
        ]
    },
    {
        name: "STEM Stream",
        key: "stem",
        subjects: [
            {
                name: "Mathematics",
                subs: [
                    "STEM Mathematics",
                    "Advanced Mathematics"
                ]
            },
            "English",
            "Technology",
            "Engineering",
            {
                name: "Sciences",
                subs: [
                    "STEM Biology",
                    "STEM Chemistry",
                    "STEM Physics",
                    "SBC Biology",
                    "SBC Chemistry",
                    "SBC Physics"
                ]
            }
        ]
    }
];

const container = document.getElementById("streamsContainer");

function renderStreams(filter = "all") {
    container.innerHTML = "";

    streams.forEach(stream => {
        if (filter !== "all" && stream.key !== filter) return;

        const box = document.createElement("div");
        box.classList.add("stream-box");

        let gridClass = stream.subjects.length > 2 ? 'subjects-grid two-columns' : 'subjects-grid';

        let subjectsHtml = `<div class="${gridClass}">`;

        stream.subjects.forEach(sub => {
            if (typeof sub === 'string') {
                subjectsHtml += `<div class="subject-item">${sub}</div>`;
            } else {
                subjectsHtml += `
                    <details class="subject-group">
                        <summary class="subject-item"><span class="toggle-icon">+</span>${sub.name}</summary>
                        <div class="subject-subs">
                            ${sub.subs.map(s => {
                                if (typeof s === 'string') {
                                    return `<div class="subject-sub">${s}</div>`;
                                } else {
                                    return `
                                        <details class="subject-group nested">
                                            <summary class="subject-item"><span class="toggle-icon">+</span>${s.name}</summary>
                                            <div class="subject-subs">
                                                ${s.subs.map(sub => `<div class="subject-sub">${sub}</div>`).join('')}
                                            </div>
                                        </details>
                                    `;
                                }
                            }).join('')}
                        </div>
                    </details>
                `;
            }
        });

        subjectsHtml += '</div>';

        box.innerHTML = `
            <h3>${stream.name}</h3>
            <div class="subjects-container">
                <h4>Subject Combinations</h4>
                ${subjectsHtml}
            </div>
        `;

        container.appendChild(box);
    });
}

renderStreams();

function attachToggleListeners() {
    document.querySelectorAll(".subject-group").forEach(details => {
        const toggleIcon = details.querySelector(".toggle-icon");
        if (toggleIcon) {
            details.addEventListener("toggle", () => {
                toggleIcon.textContent = details.open ? "-" : "+";
            });
        }
    });
}

attachToggleListeners();

document.querySelectorAll(".stream-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".stream-buttons .active");
        if (activeBtn && activeBtn !== btn) {
            activeBtn.classList.remove("active");
        }
        btn.classList.add("active");
        renderStreams(btn.dataset.stream);
        attachToggleListeners();
    });
});