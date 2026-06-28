const data = {
    timeline: [
        { year: 1995, title: "Founded", desc: "School established." },
        { year: 2000, title: "Expansion", desc: "New buildings added." },
        { year: 2010, title: "Programs", desc: "Academic programs expanded." },
        { year: 2020, title: "Modernization", desc: "Digital systems introduced." }
    ],
    events: [
        { img: "/images/Gallery/30 years.webp", title: "Anniversary", desc: "Major celebration." },
        { img: "/images/Gallery/ICT Presentation1.webp", title: "Competition", desc: "National award." }
    ],
    stats: [
        { year: 1995, students: 60 },
        { year: 2000, students: 100 },
        { year: 2005, students: 140 },
        { year: 2010, students: 250 },
        { year: 2015, students: 390 },
        { year: 2020, students: 420 },
        { year: 2025, students: 490 }
    ]
};

function renderTimeline(range = "all") {
    const timelineEl = document.getElementById("timeline");
    if (!timelineEl) return;
    timelineEl.innerHTML = "";

    data.timeline.forEach(item => {
        if (range !== "all") {
            const [start, end] = range.split("-").map(Number);
            if (item.year < start || item.year > end) return;
        }

        const itemEl = document.createElement("div");
        itemEl.className = "timeline-item";
        itemEl.innerHTML = `
            <div class="timeline-item-year">${item.year}</div>
            <div class="timeline-item-body">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        timelineEl.appendChild(itemEl);
    });
}

function renderEvents() {
    const eventsEl = document.getElementById("events");
    if (!eventsEl) return;
    eventsEl.innerHTML = "";

    data.events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
            <img src="${event.img}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.desc}</p>
        `;
        eventsEl.appendChild(card);
    });
}

function drawChart() {
    const canvas = document.getElementById("statsChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let progress = 0;
    const padding = 60;
    const width = canvas.width;
    const height = canvas.height;
    const max = Math.max(...data.stats.map(s => s.students));

    function animate() {
        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = "#333";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();

        const steps = 5;
        ctx.font = "18px Poppins, sans-serif";
        ctx.fillStyle = "#333";
        ctx.textAlign = "left";

        for (let i = 0; i <= steps; i++) {
            const value = (max / steps) * i;
            const y = height - padding - (i / steps) * (height - padding * 2);
            ctx.strokeStyle = "#ddd";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();

            ctx.fillStyle = "#333";
            ctx.fillText(Math.round(value), 12, y + 6);
        }

        ctx.textAlign = "center";
        data.stats.forEach((point, i) => {
            const x = padding + i * ((width - padding * 2) / (data.stats.length - 1));

            ctx.strokeStyle = "#eee";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, height - padding);
            ctx.lineTo(x, padding);
            ctx.stroke();

            ctx.fillStyle = "#333";
            ctx.fillText(point.year, x, height - padding + 28);
        });

        ctx.strokeStyle = "rgb(107, 16, 107)";
        ctx.lineWidth = 3;
        ctx.beginPath();

        data.stats.forEach((point, i) => {
            const x = padding + i * ((width - padding * 2) / (data.stats.length - 1));
            const y = height - padding - (point.students / max) * (height - padding * 2);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                const prev = data.stats[i - 1];
                const prevX = padding + (i - 1) * ((width - padding * 2) / (data.stats.length - 1));
                const prevY = height - padding - (prev.students / max) * (height - padding * 2);
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(prevX + (x - prevX) * progress, prevY + (y - prevY) * progress);
            }
        });
        ctx.stroke();

        data.stats.forEach((point, i) => {
            const x = padding + i * ((width - padding * 2) / (data.stats.length - 1));
            const y = height - padding - (point.students / max) * (height - padding * 2);
            ctx.fillStyle = "rgb(238, 225, 40)";
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#333";
            ctx.fillText(point.students, x, y - 16);
        });

        if (progress < 1) {
            progress += 0.02;
            requestAnimationFrame(animate);
        }
    }

    animate();
}

function initializeHistoryPage() {
    renderTimeline();
    renderEvents();
    drawChart();

    document.querySelectorAll(".timeline-controls button").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".timeline-controls button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderTimeline(btn.dataset.range);
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeHistoryPage);
} else {
    initializeHistoryPage();
}
