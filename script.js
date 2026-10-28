// Replace these temporary stock images with your own exported photos in /images/.
// Example: src: 'images/my-photo.jpg'. Keep the descriptive alt text.
const photos = [
 {src:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=82',title:'Stillness',category:'PLACES',ratio:'3/2',alt:'Lake and mountains in soft evening light'},
 {src:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=82',title:'In passing',category:'PEOPLE',ratio:'3/4',alt:'Close-up portrait in natural light'},
 {src:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1000&q=82',title:'After dark',category:'MOMENTS',ratio:'4/5',alt:'Atmospheric evening sky'},
 {src:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=82',title:'The city',category:'PLACES',ratio:'3/2',alt:'City architecture and illuminated buildings'},
 {src:'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1400&q=82',title:'Somewhere quiet',category:'PLACES',ratio:'3/2',alt:'Open landscape under warm sunlight'},
 {src:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=82',title:'Together',category:'PEOPLE',ratio:'3/2',alt:'Friends enjoying a candid moment together'},
 {src:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=82',title:'The distance',category:'PLACES',ratio:'3/2',alt:'Mountain scenery reflected in a lake'},
 {src:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=82',title:'A face, a moment',category:'PEOPLE',ratio:'3/4',alt:'Editorial portrait'},
 {src:'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&q=82',title:'Blue hour',category:'PLACES',ratio:'3/4',alt:'Mountain beneath a starry sky'},
 {src:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=82',title:'Last light',category:'MOMENTS',ratio:'3/2',alt:'Warm golden sunset'}
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
