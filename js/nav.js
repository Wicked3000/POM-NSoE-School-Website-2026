document.addEventListener("DOMContentLoaded", function () {

    const navbarElement = document.getElementById("navbar");
    const footerElement = document.getElementById("footer");

    if (!navbarElement) {
        console.error("Navbar element not found!");
        return;
    }
    if (!footerElement) {
        console.error("Footer element not found!");
        return;
    }

    const navbarHTML = `
<header class="main-header">
    <div class="top-ribbon">
        <div class="top-ribbon-inner">
            <a href="/index.html" class="logo-link">
                <div class="logo-container">
                    <img src="/images/School Logo.png" alt="School Logo" class="logo">
                    <div class="logo-divider"></div>
                    <div class="school-name-container">
                        <h1 class="site-name">Port Moresby National School Of Excellence</h1>
                        <p class="school-motto">To do Great Things with God's Help</p>
                    </div>
                </div>
            </a>
            <div class="top-right-controls">
                <div class="search-container">
                    <button id="search-btn" class="search-btn">
                        <i class="fas fa-search"></i>
                    </button>
                    <input type="text" id="search-input" placeholder="Search" class="search-input">
                </div>
                <a href="/main pages/about.html#contact-section" class="contact-btn">Contact</a>
            </div>
        </div>
    </div>
    <nav class="nav-ribbon">
        <div class="nav-container">
            <div class="menu-toggle" id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-mobile-header mobile-only">
                    <div class="mobile-header-logo">
                        <img src="/images/School Logo.png" alt="School Logo">
                        <span class="mobile-header-name">POMNSoE</span>
                    </div>
                    <button id="menu-close-btn" type="button" aria-label="Close menu">&times;</button>
                </li>
                <li class="nav-item"><a href="/index.html">Home</a></li>
                <li class="nav-item dropdown">
                    <a href="/main pages/about.html">About</a>
                    <button class="dropdown-toggle mobile-only" aria-label="Toggle About submenu">+</button>
                    <ul class="dropdown-menu">
                        <li><a href="/main pages/sub-pages/administration.html">Administration</a></li>
                        <li><a href="/main pages/sub-pages/facilities.html">Facilities</a></li>
                        <li><a href="/main pages/sub-pages/history.html">History</a></li>
                        <li><a href="/main pages/sub-pages/staff.html">Staff</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="/main pages/key-messages.html">Key Messages</a>
                    <button class="dropdown-toggle mobile-only" aria-label="Toggle Key Messages submenu">+</button>
                    <ul class="dropdown-menu">
                        <li><a href="/main pages/sub-pages/principal-message.html">Principal</a></li>
                        <li><a href="/main pages/sub-pages/dp-academic-message.html">DP Academic</a></li>
                        <li><a href="/main pages/sub-pages/dp-admin-message.html">DP Administration</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="/main pages/admissions.html">Admissions</a></li>
                <li class="nav-item dropdown">
                    <a href="/main pages/academics.html">Academics</a>
                    <button class="dropdown-toggle mobile-only" aria-label="Toggle Academics submenu">+</button>
                    <ul class="dropdown-menu">
                        <li><a href="/main pages/sub-pages/academic-cal.html">Academic Calendar</a></li>
                        <li><a href="/main pages/sub-pages/extra-activ.html">Extracurricular Activities</a></li>
                        <li><a href="/main pages/sub-pages/uniform.html">Uniform Policy</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="/main pages/announcements.html">Announcements</a></li>
                <li class="nav-item"><a href="/main pages/gallery.html">Gallery</a></li>
                <li class="nav-item dropdown">
                    <a href="/main pages/student.html">Students</a>
                    <button class="dropdown-toggle mobile-only" aria-label="Toggle Students submenu">+</button>
                    <ul class="dropdown-menu">
                        <li><a href="/main pages/sub-pages/studenteng.html">Student Engagement</a></li>
                        <li><a href="/main pages/sub-pages/studentldr.html">Student Leadership</a></li>
                    </ul>
                </li>
                <li class="nav-item mobile-only search-mobile">
                    <div class="search-container">
                        <button id="search-btn-mobile" class="search-btn">
                            <i class="fas fa-search"></i>
                        </button>
                        <input type="text" id="search-input-mobile" placeholder="Search" class="search-input">
                    </div>
                </li>
                <li class="nav-footer mobile-only">
                    <div class="nav-footer-inner">
                        <div class="school-contact-section">
                            <h4 class="school-contact-heading">School Contact</h4>
                            <div class="mobile-footer-contacts">
                                <span>+675 326 2855</span>
                                <span>+675 326 2856</span>
                                <span>pomnsoe2023@gmail.com</span>
                                <span>Goro - Kaeaga Rd, Port Moresby, Papua New Guinea</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</header>
`;

    const footerHTML = `
<footer class="main-footer">
    <div class="footer-content">

        <div class="footer-section brand-column">
            <div class="footer-logo-container">
                <img src="/images/School Logo.png" alt="POMNSoE Logo" class="footer-logo">
                <span class="footer-school-name">POMNSoE</span>
            </div>
            <p class="footer-motto">To do Great Things with God's Help</p>
            <p class="footer-about-text">
                Port Moresby National School of Excellence is dedicated to academic excellence,
                discipline, and the holistic development of every student in our care.
            </p>
        </div>

        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                <li><a href="/main pages/about.html"><i class="fa-solid fa-chevron-right"></i> About</a></li>
                <li><a href="/main pages/admissions.html"><i class="fa-solid fa-chevron-right"></i> Admissions</a></li>
                <li><a href="/main pages/academics.html"><i class="fa-solid fa-chevron-right"></i> Academics</a></li>
                <li><a href="/main pages/announcements.html"><i class="fa-solid fa-chevron-right"></i> Announcements</a></li>
                <li><a href="/main pages/student.html"><i class="fa-solid fa-chevron-right"></i> Students</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Contact Information</h3>
            <ul class="footer-contact-info">
                <li>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>PO Box 1004, Goro - Kaeaga Rd,<br>Waigani, Port Moresby, Papua New Guinea</span>
                </li>
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+6753262855">+675 326 2855</a>
                </li>
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+6753262856">+675 326 2856</a>
                </li>
                <li>
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:pomnsoe2023@gmail.com">pomnsoe2023@gmail.com</a>
                </li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Connect With Us</h3>
            <div class="social-icons">
                <a href="https://www.instagram.com/pomnsoe_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/p/Port-Moresby-National-School-of-Excellence-Pomnsoe-61574543230672/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <div class="footer-social-wrapper">
                <h4>School Hours</h4>
                <ul class="footer-contact-info">
                    <li>
                        <i class="fa-solid fa-clock"></i>
                        <span>Monday - Friday<br>7:30 AM - 4:00 PM</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <div class="footer-bottom">
        <div class="footer-bottom-inner">
            <p>&copy; 2026 Port Moresby National School Of Excellence | All Rights Reserved.</p>
            <p class="footer-developer-credit">Developed by 12H, Era XXXI</p>
        </div>
    </div>
</footer>`;

    document.getElementById("navbar").innerHTML = navbarHTML;
    document.getElementById("footer").innerHTML = footerHTML;

    initializeNavigation();
    initializeBreadcrumbs();
    initializeSearch();
});

function initializeNavigation() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");
    const links = document.querySelectorAll("#nav-menu a");
    const dropdownButtons = document.querySelectorAll(".dropdown-toggle");
    const currentPage = window.location.pathname.split("/").pop();

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active");
            menu.classList.toggle("active");
            if (menu.classList.contains("active")) {
                const scrollY = window.scrollY;
                document.body.dataset.scrollY = scrollY;
                document.body.style.position = "fixed";
                document.body.style.top = `-${scrollY}px`;
                document.body.style.left = "0";
                document.body.style.right = "0";
                document.body.style.overflow = "hidden";
            } else {
                const scrollY = document.body.dataset.scrollY || 0;
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";
                document.body.style.overflow = "";
                window.scrollTo(0, parseInt(scrollY, 10));
            }
        });
        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains("active")) {
                toggle.classList.remove("active");
                menu.classList.remove("active");
                const scrollY = document.body.dataset.scrollY || 0;
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";
                document.body.style.overflow = "";
                window.scrollTo(0, parseInt(scrollY, 10));
            }
        });

        const closeBtn = document.getElementById("menu-close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                toggle.classList.remove("active");
                menu.classList.remove("active");
                const scrollY = document.body.dataset.scrollY || 0;
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.left = "";
                document.body.style.right = "";
                document.body.style.overflow = "";
                window.scrollTo(0, parseInt(scrollY, 10));
                document.querySelectorAll(".dropdown-menu.active").forEach(dropdown => dropdown.classList.remove("active"));
                document.querySelectorAll(".dropdown-toggle.active").forEach(btn => btn.classList.remove("active"));
            });
        }

        links.forEach(link => {
            link.addEventListener("click", (e) => {
                const parentLi = link.parentElement;
                const isDropdown = parentLi.classList.contains("dropdown");

                if (window.innerWidth <= 1280 && !isDropdown) {
                    toggle.classList.remove("active");
                    menu.classList.remove("active");
                    const scrollY = document.body.dataset.scrollY || 0;
                    document.body.style.position = "";
                    document.body.style.top = "";
                    document.body.style.left = "";
                    document.body.style.right = "";
                    document.body.style.overflow = "";
                    window.scrollTo(0, parseInt(scrollY, 10));
                }
            });
        });
    }

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();

            const parentItem = this.closest(".nav-item.dropdown");
            if (!parentItem) return;

            const dropdownMenu = parentItem.querySelector(".dropdown-menu");
            if (!dropdownMenu) return;

            const isCurrentlyOpen = dropdownMenu.classList.contains("active");

            if (isCurrentlyOpen) {
                dropdownMenu.classList.remove("active");
                this.classList.remove("active");
                this.textContent = "+";
                return;
            }

            document.querySelectorAll(".dropdown-menu.active").forEach(menu => {
                menu.classList.remove("active");
            });
            document.querySelectorAll(".dropdown-toggle.active").forEach(btn => {
                btn.classList.remove("active");
                btn.textContent = "+";
            });

            dropdownMenu.classList.add("active");
            this.classList.add("active");
            this.textContent = "-";
        });
    });

    links.forEach(link => {
        const href = link.getAttribute("href");
        const linkPage = href ? href.split("/").pop() : "";

        if (linkPage === currentPage || (linkPage === "" && currentPage === "")) {
            link.classList.add("active");
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1280) {
            if (toggle) toggle.classList.remove("active");
            if (menu) menu.classList.remove("active");
            const scrollY = document.body.dataset.scrollY || 0;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.overflow = "";
            window.scrollTo(0, parseInt(scrollY, 10));
        }
    });

    initializeSearch();
}

function initializeSearch() {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const searchContainer = document.querySelector(".search-container");

    if (searchInput && searchBtn && searchContainer) {
        initializeSearchElement(searchInput, searchBtn, searchContainer);
    }

    const searchInputMobile = document.getElementById("search-input-mobile");
    const searchBtnMobile = document.getElementById("search-btn-mobile");
    const searchContainerMobile = document.querySelector(".search-mobile .search-container");

    if (searchInputMobile && searchBtnMobile && searchContainerMobile) {
        initializeSearchElement(searchInputMobile, searchBtnMobile, searchContainerMobile);
    }
}

function initializeSearchElement(searchInput, searchBtn, searchContainer) {
    searchBtn.addEventListener("click", function(e) {
        if (!searchContainer.classList.contains("expanded")) {
            e.preventDefault();
            searchContainer.classList.add("expanded");
            searchInput.focus();
        } else {
            performSearch(searchInput.value);
        }
    });

    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            performSearch(searchInput.value);
        }
    });

    searchInput.addEventListener("blur", function() {
        if (this.value.trim() === "") {
            searchContainer.classList.remove("expanded");
        }
    });

    searchInput.addEventListener("input", function() {
        if (this.value.trim() === "") {
            clearSearchHighlights();
        }
    });
}

function performSearch(query) {
    if (!query) {
        const searchInput = document.activeElement;
        if (searchInput && searchInput.classList.contains("search-input")) {
            query = searchInput.value.trim().toLowerCase();
        }
    }

    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    clearSearchHighlights();

    window.location.href = `/search-results.html?q=${encodeURIComponent(query)}`;
}



function clearSearchHighlights() {
    const highlights = document.querySelectorAll(".search-highlight");
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.innerHTML = parent.textContent;
    });
}

function initializeBreadcrumbs() {
    const breadcrumbsContainer = document.getElementById("breadcrumbs");
    if (!breadcrumbsContainer) return;

    const currentPath = window.location.pathname;
    const breadcrumbs = generateBreadcrumbs(currentPath);

    if (breadcrumbs.length > 1) {
        breadcrumbsContainer.innerHTML = `
            <nav class="breadcrumb-nav" aria-label="Breadcrumb">
                <ol class="breadcrumb-list">
                    ${breadcrumbs.map((crumb, index) => `
                        <li class="breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}">
                            ${index === breadcrumbs.length - 1 ?
                                `<span>${crumb.title}</span>` :
                                `<a href="${crumb.url}">${crumb.title}</a>`
                            }
                        </li>
                    `).join('')}
                </ol>
            </nav>
        `;
    }
}

function generateBreadcrumbs(currentPath) {
    let relativePath = decodeURIComponent(currentPath);

    if (relativePath.startsWith('/')) {
        const mainPagesIndex = relativePath.indexOf('/main pages/');
        const indexHtmlIndex = relativePath.indexOf('/index.html');

        if (mainPagesIndex !== -1) {
            relativePath = relativePath.substring(mainPagesIndex);
        } else if (indexHtmlIndex !== -1) {
            relativePath = '/index.html';
        } else if (relativePath.includes('index.html')) {
            relativePath = '/index.html';
        }
    }

    const breadcrumbMap = {
        '/index.html': [{ title: "Home", url: "/index.html" }],
        '/search-results.html': [
            { title: "Home", url: "/index.html" },
            { title: "Search Results", url: "/search-results.html" }
        ],
        '/main pages/about.html': [
            { title: "Home", url: "/index.html" },
            { title: "About", url: "/main pages/about.html" }
        ],
        '/main pages/admissions.html': [
            { title: "Home", url: "/index.html" },
            { title: "Admissions", url: "/main pages/admissions.html" }
        ],
        '/main pages/academics.html': [
            { title: "Home", url: "/index.html" },
            { title: "Academics", url: "/main pages/academics.html" }
        ],
        '/main pages/announcements.html': [
            { title: "Home", url: "/index.html" },
            { title: "Announcements", url: "/main pages/announcements.html" }
        ],
        '/main pages/gallery.html': [
            { title: "Home", url: "/index.html" },
            { title: "Gallery", url: "/main pages/gallery.html" }
        ],
        '/main pages/student.html': [
            { title: "Home", url: "/index.html" },
            { title: "Students", url: "/main pages/student.html" }
        ],
        '/main pages/sub-pages/administration.html': [
            { title: "Home", url: "/index.html" },
            { title: "About", url: "/main pages/about.html" },
            { title: "Administration", url: "/main pages/sub-pages/administration.html" }
        ],
        '/main pages/sub-pages/facilities.html': [
            { title: "Home", url: "/index.html" },
            { title: "About", url: "/main pages/about.html" },
            { title: "Facilities", url: "/main pages/sub-pages/facilities.html" }
        ],
        '/main pages/sub-pages/history.html': [
            { title: "Home", url: "/index.html" },
            { title: "About", url: "/main pages/about.html" },
            { title: "History", url: "/main pages/sub-pages/history.html" }
        ],
        '/main pages/sub-pages/staff.html': [
            { title: "Home", url: "/index.html" },
            { title: "About", url: "/main pages/about.html" },
            { title: "Staff", url: "/main pages/sub-pages/staff.html" }
        ],
        '/main pages/sub-pages/academic-cal.html': [
            { title: "Home", url: "/index.html" },
            { title: "Academics", url: "/main pages/academics.html" },
            { title: "Academic Calendar", url: "/main pages/sub-pages/academic-cal.html" }
        ],
        '/main pages/sub-pages/extra-activ.html': [
            { title: "Home", url: "/index.html" },
            { title: "Academics", url: "/main pages/academics.html" },
            { title: "Extracurricular Activities", url: "/main pages/sub-pages/extra-activ.html" }
        ],
        '/main pages/sub-pages/uniform.html': [
            { title: "Home", url: "/index.html" },
            { title: "Academics", url: "/main pages/academics.html" },
            { title: "Uniform Policy", url: "/main pages/sub-pages/uniform.html" }
        ],
        '/main pages/sub-pages/studenteng.html': [
            { title: "Home", url: "/index.html" },
            { title: "Students", url: "/main pages/student.html" },
            { title: "Student Engagement", url: "/main pages/sub-pages/studenteng.html" }
        ],
        '/main pages/sub-pages/studentldr.html': [
            { title: "Home", url: "/index.html" },
            { title: "Students", url: "/main pages/student.html" },
            { title: "Student Leadership", url: "/main pages/sub-pages/studentldr.html" }
        ]
    };

    return breadcrumbMap[relativePath] || [{ title: "Home", url: "/index.html" }];
}

function initializeSearch() {
    const desktopInput = document.getElementById("search-input");
    const desktopBtn = document.getElementById("search-btn");
    const mobileInput = document.getElementById("search-input-mobile");
    const mobileBtn = document.getElementById("search-btn-mobile");

    const executeSearch = (query) => {
        if (query.trim()) {
            let relativePrefix = "./";
            const currentPath = window.location.pathname;
            
            if (currentPath.includes("/sub-pages/")) {
                relativePrefix = "../../";
            } else if (currentPath.includes("/main pages/")) {
                relativePrefix = "../";
            }
            
            window.location.href = `${relativePrefix}search-results.html?q=${encodeURIComponent(query.trim())}`;
        }
    };

    if (desktopInput && desktopBtn) {
        desktopBtn.addEventListener("click", () => executeSearch(desktopInput.value));
        desktopInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") executeSearch(desktopInput.value);
        });
    }

    if (mobileInput && mobileBtn) {
        mobileBtn.addEventListener("click", () => executeSearch(mobileInput.value));
        mobileInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") executeSearch(mobileInput.value);
        });
    }
}

