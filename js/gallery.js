const albumArray = [
    {
        name: "School Celebrations",
        subAlbums: [
            {
                name: "Assemblies",
                photos: [
                    { img: "/images/Gallery/Assembly 1.webp", title: "Assembly 1", desc: "School assembly" },
                    { img: "/images/Gallery/Assembly 2.webp", title: "Assembly 2", desc: "School assembly" },
                    { img: "/images/Gallery/Assembly 3.webp", title: "Assembly 3", desc: "School assembly" }
                ]
            },
            {
                name: "Parent & Community",
                photos: [
                    { img: "/images/Gallery/PNC 1.webp", title: "PNC 1", desc: "Parent and community event" },
                    { img: "/images/Gallery/PNC 2.webp", title: "PNC 2", desc: "Parent and community event" },
                    { img: "/images/Gallery/PNC 3.webp", title: "PNC 3", desc: "Parent and community event" }
                ]
            },
            {
                name: "Anniversary",
                photos: [
                    { img: "/images/Gallery/30 years.webp", title: "30 Years Celebration", desc: "School milestone" }
                ]
            },
            {
                name: "Cleanup",
                photos: [
                    { img: "/images/Gallery/Cleanup.webp", title: "Cleanup Day", desc: "School community cleanup" },
                    { img: "/images/Gallery/Cleanup 2.webp", title: "Cleanup Team", desc: "Students and staff cleaning up" }
                ]
            }
        ]
    },
    {
        name: "Events",
        subAlbums: [
            {
                name: "Family Fun Day",
                photos: [
                    { img: "/images/Gallery/Events (Family Fun Day) 2.webp", title: "Family Fun Day 2", desc: "Community celebration" },
                    { img: "/images/Gallery/Events (Family Fun Day) 3.webp", title: "Family Fun Day 3", desc: "Community celebration" },
                    { img: "/images/Gallery/Events (Family Fun Day) 4.webp", title: "Family Fun Day 4", desc: "Community celebration" }
                ]
            },
            {
                name: "Grade 12 Luncheon",
                photos: [
                    { img: "/images/Gallery/Events (Grade 12 Luncheon) 1.webp", title: "Grade 12 Luncheon 1", desc: "Senior student event" },
                    { img: "/images/Gallery/Events (Grade 12 Luncheon) 2.webp", title: "Grade 12 Luncheon 2", desc: "Senior student event" },
                    { img: "/images/Gallery/Events (Grade 12 Luncheon) 3.webp", title: "Grade 12 Luncheon 3", desc: "Senior student event" },
                    { img: "/images/Gallery/Events (Grade 12 Luncheon) 4.webp", title: "Grade 12 Luncheon 4", desc: "Senior student event" }
                ]
            }
        ]
    },
    {
        name: "Excursions",
        subAlbums: [
            {
                name: "American Kona",
                photos: [
                    { img: "/images/Gallery/Excursions (American Kona) 1.webp", title: "American Kona 1", desc: "Outdoor learning excursion" },
                    { img: "/images/Gallery/Excursions (American Kona) 2.webp", title: "American Kona 2", desc: "Outdoor learning excursion" },
                    { img: "/images/Gallery/Excursions (American Kona) 3.webp", title: "American Kona 3", desc: "Outdoor learning excursion" },
                    { img: "/images/Gallery/Excursions (American Kona) 4.webp", title: "American Kona 4", desc: "Outdoor learning excursion" },
                    { img: "/images/Gallery/Excursions (American Kona) 5.webp", title: "American Kona 5", desc: "Outdoor learning excursion" }
                ]
            },
            {
                name: "CEPA",
                photos: [
                    { img: "/images/Gallery/Excursions (CEPA) 1.webp", title: "CEPA 1", desc: "Learning excursion" },
                    { img: "/images/Gallery/Excursions (CEPA) 2.webp", title: "CEPA 2", desc: "Learning excursion" },
                    { img: "/images/Gallery/Excursions (CEPA) 3.webp", title: "CEPA 3", desc: "Learning excursion" },
                    { img: "/images/Gallery/Excursions (CEPA) 4.webp", title: "CEPA 4", desc: "Learning excursion" }
                ]
            }
        ]
    },
    {
        name: "Facilities",
        subAlbums: [
            {
                name: "Administration",
                photos: [
                    { img: "/images/Gallery/Facilities (Admin) 1.webp", title: "Administration", desc: "School administration building" }
                ]
            },
            {
                name: "Clock Tower",
                photos: [
                    { img: "/images/Gallery/Facilities (Clock Tower) 1.webp", title: "Clock Tower 1", desc: "Campus landmark" },
                    { img: "/images/Gallery/Facilities (Clock Tower) 2.webp", title: "Clock Tower 2", desc: "Campus landmark" }
                ]
            },
            {
                name: "Hall",
                photos: [
                    { img: "/images/Gallery/Facilities (Hall) 1.webp", title: "Hall 1", desc: "School hall" },
                    { img: "/images/Gallery/Facilities (Hall) 2.webp", title: "Hall 2", desc: "School hall" },
                    { img: "/images/Gallery/Facilities (Hall) 3.webp", title: "Hall 3", desc: "School hall" },
                    { img: "/images/Gallery/Facilities (Hall) 4.webp", title: "Hall 4", desc: "School hall" }
                ]
            },
            {
                name: "Library",
                photos: [
                    { img: "/images/Gallery/Facilities (Library) 1.webp", title: "Library 1", desc: "Library facilities" },
                    { img: "/images/Gallery/Facilities (Library) 2.webp", title: "Library 2", desc: "Library facilities" },
                    { img: "/images/Gallery/Facilities (Library) 3.webp", title: "Library 3", desc: "Library facilities" },
                    { img: "/images/Gallery/Facilities (Library) 4.webp", title: "Library 4", desc: "Library facilities" }
                ]
            },
            {
                name: "Whole School",
                photos: [
                    { img: "/images/Gallery/Facilities (Whole School) 1.webp", title: "Whole School 1", desc: "Campus overview" },
                    { img: "/images/Gallery/Facilities (Whole School) 2.webp", title: "Whole School 2", desc: "Campus overview" }
                ]
            }
        ]
    },
    {
        name: "Students",
        subAlbums: [
            {
                name: "Learning",
                photos: [
                    { img: "/images/Gallery/Students Learning 1.webp", title: "Learning 1", desc: "Classroom learning" },
                    { img: "/images/Gallery/Students Learning 2.webp", title: "Learning 2", desc: "Classroom learning" },
                    { img: "/images/Gallery/Students Learning 3.webp", title: "Learning 3", desc: "Classroom learning" },
                    { img: "/images/Gallery/Students Learning 4.webp", title: "Learning 4", desc: "Classroom learning" }
                ]
            },
            {
                name: "Life",
                photos: [
                    { img: "/images/Gallery/Students 1.webp", title: "Students 1", desc: "Student life" },
                    { img: "/images/Gallery/Students 2.webp", title: "Students 2", desc: "Student life" },
                    { img: "/images/Gallery/Students 3.webp", title: "Students 3", desc: "Student life" },
                    { img: "/images/Gallery/Students 4.webp", title: "Students 4", desc: "Student life" },
                    { img: "/images/Gallery/Students.webp", title: "Students", desc: "Student life" }
                ]
            },
            {
                name: "Projects",
                photos: [
                    { img: "/images/Gallery/Students Projects.webp", title: "Student Projects", desc: "Student work and projects" }
                ]
            },
            {
                name: "Teachers",
                photos: [
                    { img: "/images/Gallery/Teachers 1.webp", title: "Teachers", desc: "Faculty team" }
                ]
            }
        ]
    },
    {
        name: "Programs",
        subAlbums: [
            {
                name: "ICT Presentation",
                photos: [
                    { img: "/images/Gallery/ICT Presentation1.webp", title: "ICT Presentation", desc: "Technology showcase" }
                ]
            }
        ]
    }
];

const albumGrid = document.getElementById("albumGrid");
const albumModal = document.getElementById("albumModal");
const subAlbumGrid = document.getElementById("subAlbumGrid");
const albumTitle = document.getElementById("albumTitle");

const subAlbumModal = document.getElementById("subAlbumModal");
const photoGrid = document.getElementById("photoGrid");
const subAlbumTitle = document.getElementById("subAlbumTitle");

const photoModal = document.getElementById("photoModal");
const photoImg = document.getElementById("photoImg");
const photoTitle = document.getElementById("photoTitle");
const photoDesc = document.getElementById("photoDesc");

const albumFragment = document.createDocumentFragment();
albumArray.forEach(album => {
    const card = document.createElement("div");
    card.classList.add("album-card");

    const firstSub = album.subAlbums[0];
    let coverImg = firstSub.photos[0].img;

    if (album.name === 'Events') {
        const eventCover = album.subAlbums.find(sub => sub.name === 'Grade 12 Luncheon')?.photos[0]?.img;
        coverImg = eventCover || coverImg;
    }

    card.innerHTML = `
        <img src="${coverImg}" alt="${album.name}" loading="lazy">
        <div class="album-card-body">
            <h3>${album.name}</h3>
            <p class="album-meta">${album.subAlbums.length} sub-album${album.subAlbums.length > 1 ? 's' : ''}</p>
        </div>
    `;

    card.addEventListener("click", () => {
        albumModal.style.display = "flex";
        albumTitle.innerText = album.name;
        subAlbumGrid.innerHTML = "";

        const subAlbumFragment = document.createDocumentFragment();
        album.subAlbums.forEach(subAlbum => {
            const subCard = document.createElement("div");
            subCard.classList.add("album-card");

            subCard.innerHTML = `
                <img src="${subAlbum.photos[0].img}" alt="${subAlbum.name}" loading="lazy">
                <div class="album-card-body">
                    <h3>${subAlbum.name === 'General' ? `${album.name} Highlights` : subAlbum.name}</h3>
                    <p class="album-meta">${subAlbum.photos.length} photo${subAlbum.photos.length > 1 ? 's' : ''}</p>
                </div>
            `;

            subCard.addEventListener("click", () => {
                subAlbumModal.style.display = "flex";
                subAlbumTitle.innerText = `${album.name}${subAlbum.name !== 'General' ? ` - ${subAlbum.name}` : ''}`;
                photoGrid.innerHTML = "";

                const photoFragment = document.createDocumentFragment();
                subAlbum.photos.forEach(photo => {
                    const img = document.createElement("img");
                    img.src = photo.img;
                    img.alt = photo.title;
                    img.loading = "lazy";

                    img.addEventListener("click", () => {
                        photoModal.style.display = "flex";
                        photoImg.src = photo.img;
                        photoTitle.innerText = photo.title;
                        photoDesc.innerText = photo.desc;
                    });

                    photoFragment.appendChild(img);
                });
                photoGrid.appendChild(photoFragment);
            });

            subAlbumFragment.appendChild(subCard);
        });
        subAlbumGrid.appendChild(subAlbumFragment);
    });

    albumFragment.appendChild(card);
});
albumGrid.appendChild(albumFragment);

document.getElementById("closeAlbum").addEventListener("click", () => {
    albumModal.style.display = "none";
});

document.getElementById("closeSubAlbum").addEventListener("click", () => {
    subAlbumModal.style.display = "none";
});

document.getElementById("closePhoto").addEventListener("click", () => {
    photoModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === albumModal) albumModal.style.display = "none";
    if (e.target === subAlbumModal) subAlbumModal.style.display = "none";
    if (e.target === photoModal) photoModal.style.display = "none";
});