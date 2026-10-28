// MFONI — Curated Photography Portfolio

const photos = [
  {
    src: "images/163A0630.jpg",
    title: "Last light",
    category: "MOMENTS",
    ratio: "1800/1200",
    alt: "A person watching the sun set over the water"
  },
  {
    src: "images/IMG_3264.jpg",
    title: "Through the arches",
    category: "PLACES",
    ratio: "1800/1200",
    alt: "A curved timber walkway framing a tree-lined path"
  },
  {
    src: "images/DSC09766.jpg",
    title: "In the frame",
    category: "PEOPLE",
    ratio: "1200/1800",
    alt: "A candid portrait"
  },
  {
    src: "images/IMG_5953.jpg",
    title: "After the rain",
    category: "MOMENTS",
    ratio: "1800/1200",
    alt: "An illuminated Japanese street on a rainy evening"
  },
  {
    src: "images/DSC09219.jpg",
    title: "Small gestures",
    category: "MOMENTS",
    ratio: "1800/1200",
    alt: "An intimate wedding detail"
  },
  {
    src: "images/DSC08057.jpg",
    title: "Under glass",
    category: "PLACES",
    ratio: "1800/1200",
    alt: "A lush conservatory interior"
  },
  {
    src: "images/DSC09758.jpg",
    title: "Open air",
    category: "MOMENTS",
    ratio: "1800/1200",
    alt: "A paraglider above the ocean"
  },
  {
    src: "images/DSC07982.jpg",
    title: "In bloom",
    category: "PLACES",
    ratio: "1800/1200",
    alt: "A butterfly resting on orange blossoms"
  },
  {
    src: "images/DSC07727.jpg",
    title: "Encounter",
    category: "PEOPLE",
    ratio: "1200/1800",
    alt: "A portrait in natural light"
  },
  {
    src: "images/DSC08096.jpg",
    title: "Reflections",
    category: "PLACES",
    ratio: "1800/1200",
    alt: "A reflective walkway in evening light"
  },
  {
    src: "images/IMG_6285.jpg",
    title: "By the water",
    category: "PLACES",
    ratio: "1800/1200",
    alt: "A quiet canal in Japan"
  },
  {
    src: "images/DSC08092.jpg",
    title: "Details",
    category: "PLACES",
    ratio: "1800/1200",
    alt: "A colorful orchid in close-up"
  }
];

// GALLERY

const gallery = document.getElementById("gallery");

gallery.innerHTML = photos.map((photo, index) => `
  <figure
    class="photo-card"
    tabindex="0"
    role="button"
    aria-label="View ${photo.title}"
    data-index="${index}"
  >
    <img
      src="${photo.src}"
      alt="${photo.alt}"
      loading="${index < 2 ? "eager" : "lazy"}"
      style="--ratio:${photo.ratio}"
    >

    <figcaption>
      <span>${photo.title}</span>
      <span>
        ${photo.category} /
        ${String(index + 1).padStart(2, "0")}
      </span>
    </figcaption>
  </figure>
`).join("");


// FULLSCREEN PHOTO VIEWER

const dialog = document.getElementById("lightbox");
const viewer = dialog.querySelector("img");
const caption = dialog.querySelector(".lightbox-caption");

let active = 0;

function showPhoto(index) {
  active = (index + photos.length) % photos.length;

  viewer.src = photos[active].src;
  viewer.alt = photos[active].alt;

  caption.textContent =
    `${photos[active].title} — ` +
    `${String(active + 1).padStart(2, "0")} / ${photos.length}`;
}

function openPhoto(index) {
  showPhoto(index);
  dialog.showModal();
}


// OPEN PHOTO

gallery.addEventListener("click", event => {
  const card = event.target.closest(".photo-card");

  if (card) {
    openPhoto(Number(card.dataset.index));
  }
});


// KEYBOARD ACCESSIBILITY

gallery.addEventListener("keydown", event => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches(".photo-card")
  ) {
    event.preventDefault();
    openPhoto(Number(event.target.dataset.index));
  }
});


// LIGHTBOX CONTROLS

dialog.querySelector(".lightbox-close").onclick = () => {
  dialog.close();
};

dialog.querySelector(".lightbox-prev").onclick = () => {
  showPhoto(active - 1);
};

dialog.querySelector(".lightbox-next").onclick = () => {
  showPhoto(active + 1);
};


// CLOSE WHEN CLICKING OUTSIDE IMAGE

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});


// ARROW KEY NAVIGATION

document.addEventListener("keydown", event => {
  if (!dialog.open) return;

  if (event.key === "ArrowLeft") {
    showPhoto(active - 1);
  }

  if (event.key === "ArrowRight") {
    showPhoto(active + 1);
  }
});


// MOBILE NAVIGATION

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu.onclick = () => {
  const open = nav.classList.toggle("open");

  menu.setAttribute("aria-expanded", String(open));
};

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});


// FOOTER YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// CONTACT FORM
// We'll connect Formspree in the next phase.

const form = document.getElementById("contact-form");

form.addEventListener("submit", event => {
  if (!form.action || form.action === window.location.href) {
    event.preventDefault();

    form.querySelector(".form-status").textContent =
      "Form preview only — connect Formspree to receive inquiries.";
  }
});


// IMAGE ERROR CHECKING

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("error", () => {
    console.error("MFONI: Image failed to load:", img.src);
  });
});
