// Curated Mfoni photographs. Original filenames are retained for easy replacement.
const photos = [
  {
    "src": "images/moments/163A0630.jpg",
    "title": "Last light",
    "category": "MOMENTS",
    "ratio": "1800/1200",
    "alt": "A person watching the sun set over the water"
  },
  {
    "src": "images/places/IMG_3264.jpg",
    "title": "Through the arches",
    "category": "PLACES",
    "ratio": "1800/1200",
    "alt": "A curved timber walkway framing a tree-lined path"
  },
  {
    "src": "images/people/DSC09766.jpg",
    "title": "In the frame",
    "category": "PEOPLE",
    "ratio": "1200/1800",
    "alt": "A candid portrait"
  },
  {
    "src": "images/moments/IMG_5953.jpg",
    "title": "After the rain",
    "category": "MOMENTS",
    "ratio": "1800/1200",
    "alt": "An illuminated Japanese street on a rainy evening"
  },
  {
    "src": "images/moments/DSC09219.jpg",
    "title": "Small gestures",
    "category": "MOMENTS",
    "ratio": "1800/1200",
    "alt": "An intimate wedding detail"
  },
  {
    "src": "images/places/DSC08057.jpg",
    "title": "Under glass",
    "category": "PLACES",
    "ratio": "1800/1200",
    "alt": "A lush conservatory interior"
  },
  {
    "src": "images/moments/DSC09758.jpg",
    "title": "Open air",
    "category": "MOMENTS",
    "ratio": "1800/1200",
    "alt": "A paraglider above the ocean"
  },
  {
    "src": "images/places/DSC07982.jpg",
    "title": "In bloom",
    "category": "PLACES",
    "ratio": "1800/1200",
    "alt": "A butterfly resting on orange blossoms"
  },
  {
    "src": "images/people/DSC07727.jpg",
    "title": "Encounter",
    "category": "PEOPLE",
    "ratio": "1200/1800",
    "alt": "A portrait in natural light"
  },
  {
    "src": "images/places/DSC08096.jpg",
    "title": "Reflections",
    "category": "PLACES",
    "ratio": "1800/1200",
    "alt": "A reflective walkway in evening light"
  },
  {
    "src": "images/places/IMG_6285.jpg",
    "title": "By the water",
    "category": "PLACES",
    "ratio": "1800/1200",
    "alt": "A quiet canal in Japan"
  },
  {
    "src": "images/places/DSC08092.jpg",
    "title": "Details",
    "category": "PLACES",
    "ratio": "1800/1200",
    "alt": "A colorful orchid in close-up"
  }
];
const gallery=document.getElementById('gallery');
gallery.innerHTML=photos.map((p,i)=>`<figure class="photo-card" tabindex="0" role="button" aria-label="View ${p.title}" data-index="${i}"><img src="${p.src}" alt="${p.alt}" loading="${i<2?'eager':'lazy'}" style="--ratio:${p.ratio}"><figcaption><span>${p.title}</span><span>${p.category} / ${String(i+1).padStart(2,'0')}</span></figcaption></figure>`).join('');
const dialog=document.getElementById('lightbox'),viewer=dialog.querySelector('img'),caption=dialog.querySelector('.lightbox-caption');let active=0;
function showPhoto(i){active=(i+photos.length)%photos.length;viewer.src=photos[active].src;viewer.alt=photos[active].alt;caption.textContent=`${photos[active].title} — ${String(active+1).padStart(2,'0')} / ${photos.length}`}
function openPhoto(i){showPhoto(i);dialog.showModal()}
gallery.addEventListener('click',e=>{const card=e.target.closest('.photo-card');if(card)openPhoto(Number(card.dataset.index))});gallery.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('.photo-card')){e.preventDefault();openPhoto(Number(e.target.dataset.index))}});
dialog.querySelector('.lightbox-close').onclick=()=>dialog.close();dialog.querySelector('.lightbox-prev').onclick=()=>showPhoto(active-1);dialog.querySelector('.lightbox-next').onclick=()=>showPhoto(active+1);dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowLeft')showPhoto(active-1);if(e.key==='ArrowRight')showPhoto(active+1)});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))};nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('contact-form');form.addEventListener('submit',e=>{if(!form.action||form.action===window.location.href){e.preventDefault();form.querySelector('.form-status').textContent='Form preview only — connect Formspree before publishing to receive inquiries.'}});
