const calendar = document.getElementById("calendar");
const currentMonthDisplay = document.getElementById("currentMonth");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

// Map date key "MM-DD" to event description
const events = {
    "01-01": "New Year's Day (PNG Holiday)",
    "01-16": "New Student Registration Deadline",
    "01-26": "Term 1 Begins",
    "04-03": "Good Friday (PNG Holiday) & Term 1 Ends",
    "04-06": "Easter Monday (PNG Holiday)",
    "04-20": "Term 2 Begins",
    "05-20": "Family Fun Day",
    "06-08": "King's Birthday (PNG Holiday)",
    "06-15": "Mid-Year Exams Begin",
    "06-25": "Mid-Year Exams End",
    "06-26": "Term 2 Ends",
    "07-13": "Term 3 Begins",
    "08-15": "Parent Teacher Conference",
    "09-16": "Independence Day (PNG Holiday)",
    "09-18": "Term 3 Ends",
    "10-05": "Term 4 Begins",
    "11-09": "Final Exams Begin",
    "11-20": "Final Exams End",
    "12-10": "Graduation Ceremony",
    "12-11": "Term 4 Ends",
    "12-25": "Christmas Day (PNG Holiday)"
};

// School breaks / holiday ranges within 2026
const holidayRanges = [
    { name: "Term 1 Break", start: "04-04", end: "04-19" },
    { name: "Term 2 Break", start: "06-27", end: "07-12" },
    { name: "Term 3 Break", start: "09-19", end: "10-04" },
    { name: "Year-End Holiday", start: "12-12", end: "12-31" }
];

let currentDisplayDate = new Date(2026, 4, 1); // Default to May 2026 (matching active year/month)
const todayDate = new Date();
if (todayDate.getFullYear() === 2026) {
    currentDisplayDate = new Date(todayDate);
}

function updateMonthDisplay() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
    currentMonthDisplay.textContent = `${monthNames[currentDisplayDate.getMonth()]} ${currentDisplayDate.getFullYear()}`;
}

function formatDateMMDD(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}-${day}`;
}

function getHolidayName(dateStr) {
    for (const range of holidayRanges) {
        if (dateStr >= range.start && dateStr <= range.end) {
            return range.name;
        }
    }
    return null;
}

function isToday(date) {
    return date.toDateString() === todayDate.toDateString();
}

function goToToday() {
    currentDisplayDate = new Date(todayDate.getFullYear() === 2026 ? todayDate : new Date(2026, 4, 24));
    updateMonthDisplay();
    generateCalendar();
    document.querySelector(".calendar-container")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function generateCalendar(highlightDay = null) {
    calendar.innerHTML = "";

    const year = currentDisplayDate.getFullYear();
    const month = currentDisplayDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Day of the week of first day (0-6)
    const firstDayIndex = firstDay.getDay();
    const totalDays = lastDay.getDate();

    // Render blank/previous month cells
    const prevLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDayIndex; i > 0; i--) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day", "empty");
        dayElement.textContent = prevLastDay - i + 1;
        calendar.appendChild(dayElement);
    }

    // Render current month days
    for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;

        const currentDay = new Date(year, month, day);
        const dateStr = formatDateMMDD(currentDay);

        if (isToday(currentDay)) {
            dayElement.classList.add("today");
        }

        if (highlightDay && day === highlightDay) {
            dayElement.classList.add("today");
            dayElement.style.boxShadow = "0 0 0 3px var(--primary-gold)";
        }

        const holidayName = getHolidayName(dateStr);
        if (holidayName) {
            dayElement.classList.add("holiday");
            dayElement.setAttribute("data-event", holidayName);
        } else if (events[dateStr]) {
            dayElement.classList.add("marked");
            dayElement.setAttribute("data-event", events[dateStr]);
        }

        calendar.appendChild(dayElement);
    }

    // Fill remaining cells for grid consistency
    const totalCellsSoFar = firstDayIndex + totalDays;
    const remainingCells = 42 - totalCellsSoFar;
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day", "empty");
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    }
}

function changeMonth(direction) {
    currentDisplayDate.setMonth(currentDisplayDate.getMonth() + direction);
    updateMonthDisplay();
    generateCalendar();
}

function navigateToDate(month, day) {
    currentDisplayDate = new Date(2026, month, day);
    updateMonthDisplay();
    generateCalendar(day);
}

prevMonthBtn.addEventListener("click", () => changeMonth(-1));
nextMonthBtn.addEventListener("click", () => changeMonth(1));

const todayBtn = document.getElementById("todayBtn");
if (todayBtn) {
    todayBtn.addEventListener("click", goToToday);
}

// Bind HTML [data-date] span click events
function initDateNavLinks() {
    document.querySelectorAll("span[data-date]").forEach(el => {
        const dateAttr = el.getAttribute("data-date");
        const [mStr, dStr] = dateAttr.split("-");
        const month = parseInt(mStr, 10) - 1;
        const day = parseInt(dStr, 10);

        el.addEventListener("click", () => {
            navigateToDate(month, day);
            document.querySelector(".calendar-container")?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initDateNavLinks();
    
    const refreshBtn = document.getElementById("refreshCalendarSources");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            refreshBtn.disabled = true;
            refreshBtn.textContent = "Refreshing...";
            refreshOfficialCalendarInfo().finally(() => {
                refreshBtn.disabled = false;
                refreshBtn.textContent = "Refresh official source";
            });
        });
    }

    refreshOfficialCalendarInfo();
});

// Fallback initialization if script runs after DOMContentLoaded
if (document.readyState !== "loading") {
    initDateNavLinks();
}

const officialCalendarInfo = {
    downloadsPage: "https://www.education.gov.pg/news/downloads",
    educationCalendarPdf: "https://www.education.gov.pg/admin/images/products/2026_Education_Calendar.pdf",
    msdWebsite: "https://www.msd.gov.pg/"
};

let currentOfficialPdf = officialCalendarInfo.educationCalendarPdf;

function updateOfficialCalendarAnchors(pdfUrl, statusText) {
    const viewLink = document.getElementById("doe-calendar-view");
    const downloadLink = document.getElementById("doe-calendar-download");
    const downloadsPageLink = document.getElementById("doe-downloads-page");
    const statusEl = document.getElementById("doe-calendar-status");

    currentOfficialPdf = pdfUrl;
    if (viewLink) viewLink.href = pdfUrl;
    if (downloadLink) downloadLink.href = pdfUrl;
    if (downloadsPageLink) downloadsPageLink.href = officialCalendarInfo.downloadsPage;
    if (statusEl) statusEl.textContent = statusText;
}

function refreshOfficialCalendarInfo() {
    const statusEl = document.getElementById("doe-calendar-status");
    if (statusEl) {
        statusEl.textContent = "Checking the official Department of Education calendar source...";
    }

    return fetch(officialCalendarInfo.downloadsPage, { mode: "cors" })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load official DoE downloads page.");
            }
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const officialLink = Array.from(doc.querySelectorAll('a[href*="2026_Education_Calendar.pdf"]')).find(a => a.closest("tr")?.textContent.includes("2026 Education Calendar"));
            const pdfUrl = officialLink?.href || officialCalendarInfo.educationCalendarPdf;
            updateOfficialCalendarAnchors(pdfUrl, "Official DoE calendar source loaded.");
            return fetch(pdfUrl, { method: "HEAD", mode: "cors" });
        })
        .then(headResponse => {
            if (!headResponse.ok) {
                return null;
            }
            const lastModified = headResponse.headers.get("last-modified");
            if (lastModified) {
                const date = new Date(lastModified);
                updateOfficialCalendarAnchors(currentOfficialPdf, `Official DoE calendar source loaded. Last updated: ${date.toLocaleDateString('en-PG', { year: 'numeric', month: 'short', day: 'numeric' })}`);
            }
        })
        .catch(error => {
            console.warn("Could not refresh official DoE calendar info:", error);
            updateOfficialCalendarAnchors(officialCalendarInfo.educationCalendarPdf, "Using the official DoE calendar link. Automatic refresh may be blocked by browser CORS.");
        });
}

// Initial draw
updateMonthDisplay();
generateCalendar();