// Storyteller Weddings - Interactive Client Engine
const WHATSAPP_PRIMARY = "919923768007";
const WHATSAPP_SECONDARY = "919923768003";

// Authentic Portfolio Photo Gallery Data
const PHOTOS = [
  { id: '1', url: './images/hero.jpg', alt: 'Storyteller Weddings - Royal Wedding Ceremony', category: 'Wedding', title: 'Royal Heritage Ceremony' },
  { id: '2', url: './images/couple_1.jpg', alt: 'Storyteller Weddings - Candid Couple Portrait', category: 'Couple', title: 'Eternal Promise' },
  { id: '3', url: './images/wedding_1.jpg', alt: 'Storyteller Weddings - Festive Wedding Ritual', category: 'Wedding', title: 'Sacred Vows & Joy' },
  { id: '4', url: './images/prewedding_1.jpg', alt: 'Storyteller Weddings - Sunset Pre-Wedding Shoot', category: 'Pre-Wedding', title: 'Golden Hour Symphony' },
  { id: '5', url: './images/couple_2.jpg', alt: 'Storyteller Weddings - Intimate Couple Click', category: 'Couple', title: 'Gentle Whispers' },
  { id: '6', url: './images/wedding_2.jpg', alt: 'Storyteller Weddings - Grand Wedding Celebration', category: 'Wedding', title: 'Grandeur & Emotion' },
  { id: '7', url: './images/prewedding_2.jpg', alt: 'Storyteller Weddings - Scenic Pre-Wedding Romance', category: 'Pre-Wedding', title: 'Where Forever Begins' },
  { id: '8', url: './images/couple_3.jpg', alt: 'Storyteller Weddings - Editorial Couple Portrait', category: 'Couple', title: 'Timeless Connection' },
  { id: '9', url: './images/wedding_3.jpg', alt: 'Storyteller Weddings - Traditional Nuptials', category: 'Wedding', title: 'Peshwai Elegance' },
  { id: '10', url: './images/couple_4.jpg', alt: 'Storyteller Weddings - Fine Art Portrait', category: 'Couple', title: 'Raw & Unscripted' },
  { id: '11', url: './images/wedding_4.jpg', alt: 'Storyteller Weddings - Haldi & Celebration Joy', category: 'Wedding', title: 'Colors of Jubilation' },
  { id: '12', url: './images/prewedding_3.jpg', alt: 'Storyteller Weddings - Pre-Wedding Story', category: 'Pre-Wedding', title: 'A Love Unwritten' },
  { id: '13', url: './images/couple_5.jpg', alt: 'Storyteller Weddings - Romantic Glance', category: 'Couple', title: 'Eyes Speaking Volumes' },
  { id: '14', url: './images/wedding_5.jpg', alt: 'Storyteller Weddings - Baraat & Wedding Magic', category: 'Wedding', title: 'The Royal March' },
  { id: '15', url: './images/couple_6.jpg', alt: 'Storyteller Weddings - Couple Warmth', category: 'Couple', title: 'Pure Affection' },
  { id: '16', url: './images/prewedding_4.jpg', alt: 'Storyteller Weddings - Dreamy Pre-Wedding', category: 'Pre-Wedding', title: 'Chasing Horizons' },
  { id: '17', url: './images/wedding_6.jpg', alt: 'Storyteller Weddings - Sindoor & Sacred Fire', category: 'Wedding', title: 'Sacred Ritual' },
  { id: '18', url: './images/couple_7.jpg', alt: 'Storyteller Weddings - Reception Glamour', category: 'Couple', title: 'Starlight Romance' },
  { id: '19', url: './images/wedding_7.jpg', alt: 'Storyteller Weddings - Candid Family Tears of Joy', category: 'Wedding', title: 'Tears & Triumphs' },
  { id: '20', url: './images/couple_8.jpg', alt: 'Storyteller Weddings - The Final Glance', category: 'Couple', title: 'Together Always' }
];

// Cinematic Wedding Films Data
const FILMS = [
  { 
    id: 'f1', 
    title: 'The Eternal Symphony · Destination Wedding', 
    subtitle: 'Udaipur, Rajasthan',
    videoUrl: 'https://drive.google.com/file/d/1LZZDw-1dJ7-BBZJmmDOW2CoceIWYv8jq/preview' 
  },
  { 
    id: 'f2', 
    title: 'A Royal Heritage · Pune Palace Wedding', 
    subtitle: 'Pune, Maharashtra',
    videoUrl: 'https://drive.google.com/file/d/1LaqAiCd1UVQUk14FqSyY94n-aETDVJ8W/preview' 
  },
  { 
    id: 'f3', 
    title: 'Whispering Winds · Cinematic Pre-Wedding', 
    subtitle: 'Lonavala & Alibaug',
    videoUrl: 'https://drive.google.com/file/d/1xjTQGza2AmcqtWChf6wXSBHdoAL0bmrH/preview' 
  },
  { 
    id: 'f4', 
    title: 'Unscripted Love · Editorial Highlight Film', 
    subtitle: 'Goa Coastline',
    videoUrl: 'https://drive.google.com/file/d/1o31A0rWhyI0ljJy6FLWiyPbS7xquVS01/preview' 
  }
];

let currentLightboxIndex = 0;
let filteredPhotos = [...PHOTOS];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollProgress();
  initGallery();
  initFilterTabs();
  initLightbox();
  initFilms();
  initBookingForm();
  initGSAPAnimations();
});

// Dynamic Navbar Scroll Effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Mobile Menu Drawer Functionality
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (!btn || !menu) return;

  const toggle = (show) => {
    const isOpening = show !== undefined ? show : menu.classList.contains('hidden');
    if (isOpening) {
      menu.classList.remove('hidden');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  btn.addEventListener('click', () => toggle());

  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });
}

// Scroll Progress Bar
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

// Render Gallery Items
function renderGallery(photosToRender) {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = '';
  filteredPhotos = photosToRender;

  photosToRender.forEach((photo, index) => {
    const card = document.createElement('div');
    // Alternate sizing for aesthetic masonry rhythm
    const isTall = index % 5 === 1 || index % 7 === 3;
    const isWide = index % 8 === 0 && index !== 0;

    card.className = `masonry-item group ${isTall ? 'span-tall' : ''} ${isWide ? 'span-wide' : ''}`;
    card.setAttribute('data-index', index);

    card.innerHTML = `
      <img 
        src="${photo.url}" 
        alt="${photo.alt}" 
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover"
        onerror="this.src='./images/hero.jpg'"
      />
      <div class="overlay">
        <span class="overlay-badge">${photo.category}</span>
        <h3 class="overlay-title">${photo.title}</h3>
        <p class="text-xs text-gray-300 font-light mt-1 tracking-wider">Click to view in full screen</p>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    container.appendChild(card);
  });
}

function initGallery() {
  renderGallery(PHOTOS);
}

// Category Filter Tabs
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-pill');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      if (filter === 'all') {
        renderGallery(PHOTOS);
      } else {
        const filtered = PHOTOS.filter(p => p.category.toLowerCase() === filter.toLowerCase());
        renderGallery(filtered);
      }
    });
  });
}

// Fullscreen Lightbox
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  if (!modal) return;

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigateLightbox(-1));
  nextBtn?.addEventListener('click', () => navigateLightbox(1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const category = document.getElementById('lightbox-category');
  if (!modal || !img || !filteredPhotos[index]) return;

  currentLightboxIndex = index;
  const photo = filteredPhotos[index];

  img.src = photo.url;
  img.alt = photo.alt;
  if (title) title.textContent = photo.title;
  if (category) category.textContent = `${photo.category} · Storyteller Weddings`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  if (!filteredPhotos.length) return;
  let nextIndex = currentLightboxIndex + direction;
  if (nextIndex < 0) nextIndex = filteredPhotos.length - 1;
  if (nextIndex >= filteredPhotos.length) nextIndex = 0;
  openLightbox(nextIndex);
}

// Cinematic Films Embeds
function initFilms() {
  const container = document.getElementById('films-container');
  if (!container) return;

  container.innerHTML = '';
  FILMS.forEach(film => {
    const card = document.createElement('div');
    card.className = 'film-card group';
    card.innerHTML = `
      <div class="aspect-video relative overflow-hidden bg-black">
        <iframe 
          src="${film.videoUrl}" 
          title="${film.title}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen 
          loading="lazy"
          class="w-full h-full"
        ></iframe>
      </div>
      <div class="p-5 flex flex-col justify-between bg-zinc-950/80 border-t border-white/5">
        <div>
          <span class="text-[10px] tracking-[0.25em] text-yellow-500 uppercase font-medium block mb-1">Cinematic Wedding Film</span>
          <h3 class="text-xl font-serif text-white group-hover:text-yellow-400 transition-colors">${film.title}</h3>
        </div>
        <p class="text-xs text-gray-400 mt-2 flex items-center gap-2">
          <span>📍</span> ${film.subtitle}
        </p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Booking Form to WhatsApp
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.name.value.trim();
    const phone = form.whatsapp.value.trim();
    const eventType = form.eventType.value;
    const date = form.date.value;
    const city = form.city.value.trim();
    const message = form.message.value.trim();

    const text = `*New Booking Enquiry - Storyteller Weddings* 💍✨
-----------------------------------------
👤 *Client Name:* ${name}
📱 *Phone/WhatsApp:* ${phone}
🎉 *Event Type:* ${eventType}
📅 *Event Date:* ${date}
📍 *Event City/Venue:* ${city}
📝 *Vision & Details:* ${message || 'Looking forward to discussing our wedding photography package!'}

_Enquiry sent via storytellerweddings.com_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PRIMARY}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  });
}

// GSAP Animations (with safety check)
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger);

    // Hero content entrance
    gsap.from('#hero-content', {
      y: 40,
      opacity: 0,
      duration: 1.4,
      ease: 'power3.out',
      delay: 0.2
    });

    // Animate section headings
    gsap.utils.toArray('.section-reveal').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 35,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    });
  } catch (err) {
    console.warn('GSAP animation fallback:', err);
  }
}
