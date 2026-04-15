/**
 * Din Psikolojisi — Dijital Kaynak Kütüphanesi
 * Application Logic: Bento Grid Repository & Dynamic File Browser
 * 
 * ════════════════════════════════════════════════════
 *  YENİ KAYNAK EKLEME REHBERİ:
 *  1. PDF/DOCX dosyasını assets/docs/asama-X/ klasörüne koyun
 *  2. Aşağıdaki libraryData objesinde ilgili stage → group → files
 *     dizisine yeni bir satır ekleyin:
 *     { name: "Görünecek İsim", path: "assets/docs/asama-X/dosya-adi.pdf", type: "pdf" }
 *  3. Video için:
 *     { name: "Video İsmi", path: "https://youtube.com/...", type: "video" }
 *  4. Sayfa otomatik olarak yeni dosyayı listeleyecektir.
 * ════════════════════════════════════════════════════
 */

// =============================================
//  DATA MODEL — Asset Paths & Educational Content
// =============================================
const libraryData = {
  4: {
    title: 'İhtisas Yolunda',
    badge: 'Aşama 4',
    badgeClass: 'modal-badge--gold',
    groups: [
      {
        title: 'Teorik Derinleşme — Hümanistik ve Varoluşçu Yaklaşım',
        files: [
          { name: 'Erich Fromm, Viktor Frankl ve Abraham Maslow', path: 'assets/docs/asama-4/1. Teorik Derinleşme ve Ekol Analizi/Hümanistik ve Varoluşçu Yaklaşım/Erich Fromm, Viktor Frankl ve Abraham Maslow.pdf', type: 'pdf' },
          { name: 'Erich Fromm ve Din', path: 'https://www.youtube.com/watch?v=4K6jeitaTZ8', type: 'video' },
          { name: 'Victor Frankle ve Din', path: 'https://www.youtube.com/watch?v=lwkbbjWcQyM', type: 'video' },
          { name: 'Abraham Maslow ve Din', path: 'https://www.youtube.com/watch?v=PJkkesiOEyA', type: 'video' }
        ]
      },
      {
        title: 'Teorik Derinleşme — Psikanalitik Yaklaşım',
        files: [
          { name: "Freud ve Yung'un Görüşlerine Göre Din Analizi", path: "assets/docs/asama-4/1. Teorik Derinleşme ve Ekol Analizi/Psikanalitik Yaklaşım/Freud ve Yung'un Görüşlerine Göre Din Analizi.pdf", type: 'pdf' },
          { name: 'Freud ve Din', path: 'https://www.youtube.com/watch?v=SKbeMS6mQkw', type: 'video' },
          { name: 'Carl Jung ve Din', path: 'https://www.youtube.com/watch?v=4OhNzvfF-ag', type: 'video' },
          { name: 'Jung ve Kolektif Bilinçdışı', path: 'https://www.youtube.com/watch?v=rEHassBa54E', type: 'video' }
        ]
      },
      {
        title: 'Metodolojik Yetkinlik — Nicel ve Nitel Araştırma',
        files: [
          { name: 'Dini Başa Çıkma Tarzları', path: 'assets/docs/asama-4/2. Metodolojik Yetkinlik Nicel ve Nitel Araştırma/Dini Başa Çıkma Tarzları.pdf', type: 'pdf' },
          { name: 'Manevi İyi Oluş', path: 'assets/docs/asama-4/2. Metodolojik Yetkinlik Nicel ve Nitel Araştırma/Manevi İyi Oluş.pdf', type: 'pdf' },
          { name: 'Ölüm Kaygısı Thorson-Powell Ölçeği', path: 'assets/docs/asama-4/2. Metodolojik Yetkinlik Nicel ve Nitel Araştırma/Ölüm Kaygısı  Thorson-Powell Ölçeği.pdf', type: 'pdf' },
          { name: 'Dindarlık ve Dinin Gelişim Evreleri', path: 'https://www.youtube.com/watch?v=wV6tozh9yuE', type: 'video' },
        ]
      },
      {
        title: 'Vaka Analizi',
        files: [
          { name: 'Vaka Analizi Deneme Örneği', path: 'assets/docs/asama-4/3. Vaka Analizi/Vaka Analizi Deneme Örneği.pdf', type: 'pdf' },
          { name: 'Vaka Analizi ve Örnekleri', path: 'assets/docs/asama-4/3. Vaka Analizi/Vaka Analizi ve Örnekleri.pdf', type: 'pdf' },
        ]
      },
      {
        title: 'Güncel Temalar ve Niş Alanlar',
        files: [
          { name: 'Tema ve Alan Fikirleri', path: 'assets/docs/asama-4/4. Güncel Temalar ve Niş Alanlar/Tema ve Alan Fikirleri.pdf', type: 'pdf' },
        ]
      }
    ]
  },

  5: {
    title: 'Temel Referans',
    badge: 'Temel Referans',
    badgeClass: 'modal-badge--gold',
    groups: [
      {
        title: 'Hayati Hökelekli — Din Psikolojisi',
        files: [
          { name: 'Din Psikolojisi (Hayati Hökelekli, Hüseyin Peker vd.)', path: 'assets/docs/asama-5/Din Psikolojisi (Hayati Hökelekli, Hüseyin Peker etc.) (z-library.sk, 1lib.sk, z-lib.sk).pdf', type: 'pdf' }
        ]
      }
    ]
  },

  1: {
    title: 'Metodoloji ve Tenkit',
    badge: 'Aşama 1',
    badgeClass: 'modal-badge--emerald',
    groups: [
      {
        title: 'Makale Analizi',
        files: [
          { name: 'Makale Analizi Nasıl Yapılır', path: 'https://www.youtube.com/watch?v=5xU6vOopSJY', type: 'video' },
          { name: 'Literatür Taraması', path: 'https://www.youtube.com/watch?v=QsFlEBcTxyE', type: 'video' },
          { name: 'Örnek Makale İncelemesi', path: 'https://www.youtube.com/watch?v=L02822H8_BE', type: 'video' },
          { name: 'Şerh-Haşiye', path: 'https://www.youtube.com/watch?v=MNNJwwolCy4', type: 'video' },
        ]
      },
      {
        title: 'Mantık ve Dil',
        files: [
          { name: 'İletişim Bağlamında Mantık ve Dil', path: 'assets/docs/asama-1/iletisim-baglaminda-mantik-ve-dil.pdf', type: 'pdf' },
          { name: 'Usul ve Mantık İlişkisi 1', path: 'https://www.youtube.com/watch?v=wXcf1vyuW8Um', type: 'video' },
          { name: 'Usul ve Mantık İlişkisi 2', path: 'https://www.youtube.com/watch?v=I0DOmgE2KHY', type: 'video' },
        ]
      },
      {
        title: 'Metodoloji ve Usul',
        files: [
          { name: 'İslami İlimlerde Metodoloji-Usul', path: 'assets/docs/asama-1/islami-ilimlerde-metodoloji-usul.pdf', type: 'pdf' },
          { name: "Peygamber'in (s.a.v.) Dil Unsurları", path: 'assets/docs/asama-1/peygamberin-sav-dil-unsurlari.pdf', type: 'pdf' },
          { name: 'İslam Bilimlerinde Usûl ve Metodoloji Konferans', path: 'https://www.youtube.com/watch?v=cNJTJj-OTbc', type: 'video' },
        ]
      }
    ]
  },

  2: {
    title: 'Sosyal Bilimler ve Din',
    badge: 'Aşama 2',
    badgeClass: 'modal-badge--emerald',
    groups: [
      {
        title: 'Din Psikolojisi',
        files: [
          { name: 'Din Psikolojisi ve Tasavvuf', path: 'assets/docs/asama-2/din-psikolojisi-ve-tasavvuf.pdf', type: 'pdf' },
          { name: 'Psikologların Din ve Tanrı Görüşleri', path: 'assets/docs/asama-2/psikologlarin-din-ve-tanri-gorusleri.pdf', type: 'pdf' },
          { name: 'İnsanın Anlam Arayışı ve Din', path: 'assets/docs/asama-2/insanin-anlam-arayisi-ve-din.pdf', type: 'pdf' },
          { name: 'Carl Jung ve Arketipler', path: 'https://www.youtube.com/watch?v=9mT0sm2ygdA', type: 'video' },
          { name: 'Erlik Exorcist Analizi', path: 'https://www.youtube.com/watch?v=nRjABDJSCeI', type: 'video' },
        ]
      },
      {
        title: 'Din Sosyolojisi',
        files: [
          { name: 'Toplumsal Değişme ve Din', path: 'assets/docs/asama-2/toplumsal-degisme-ve-din.pdf', type: 'pdf' },
          { name: 'Türkiye\'de Toplumsal Çözülme ve Din', path: 'assets/docs/asama-2/turkiyede-toplumsal-cozulme-ve-din.pdf', type: 'pdf' },
          { name: 'İlahiyat Fak. Öğrencilerinin Din Anlayışı Üzerine', path: 'assets/docs/asama-2/ilahiyat-fak-ogrencilerinin-din-anlayisi-uzerine.pdf', type: 'pdf' },
          { name: 'Max Weber ve Din Sosyolojisi', path: 'https://www.youtube.com/watch?v=m105B5yB8FQ', type: 'video' },
          { name: 'Emile Durkheim ve Din Sosyolojisi', path: 'https://www.youtube.com/watch?v=GFToW_JaGF8', type: 'video' },
        ]
      },
      {
        title: 'Felsefe ve Din',
        files: [
          { name: 'Felsefe ve Din', path: 'assets/docs/asama-2/felsefe-ve-din.pdf', type: 'pdf' },
          { name: 'Postmodern Felsefe ve Din', path: 'assets/docs/asama-2/postmodern-felsefe-ve-din.pdf', type: 'pdf' },
          { name: 'İbn-i Rüşd Felsefe ve Din', path: 'assets/docs/asama-2/ibn-i-rusd-felsefe-ve-din.pdf', type: 'pdf' },
          { name: '10 Farklı Filozof ve Tanrı Görüşü', path: 'https://www.youtube.com/watch?v=Y1_u6fc_Cd4', type: 'video' },
          { name: 'İbni Rüşd\'e Göre Din ve Felsefe İlişkisi', path: 'https://www.youtube.com/watch?v=vtyU1Ag_o6Y', type: 'video' },
        ]
      }
    ]
  },

  3: {
    title: 'Temel İlimlere Genel Bakış',
    badge: 'Aşama 3',
    badgeClass: 'modal-badge--emerald',
    groups: [
      {
        title: 'Akaid',
        files: [
          { name: 'Akaid İlminde Aklın ve Vahyin Yeri', path: 'assets/docs/asama-3/Akaid/Akaid İlminde Aklın ve Vahyin Yeri.pdf', type: 'pdf' },
          { name: 'Kavaid-ül Akaid', path: 'assets/docs/asama-3/Akaid/Kavaid-ül Akaid.pdf', type: 'pdf' },
          { name: 'Kelam-Akaid İlişkisi Üzerine', path: 'assets/docs/asama-3/Akaid/Kelam-Akaid İlişkisi Üzerine.pdf', type: 'pdf' },
          { name: 'Akaid Dersleri', path: 'https://www.youtube.com/watch?v=ootzgmhbBBU&list=PLL7A4DgUqDQUS0sqxsdZfgPevos68lx2s', type: 'video' }
        ]
      },
      {
        title: 'Fıkıh Usulü',
        files: [
          { name: 'Fıkıh Usülü ve İncelemeleri', path: 'assets/docs/asama-3/Fıkıh Usulü/Fıkıh Usülü ve İncelemeleri.pdf', type: 'pdf' },
          { name: 'Fıkıh ve Tasavvuf', path: 'assets/docs/asama-3/Fıkıh Usulü/Fıkıh ve Tasavvuf.pdf', type: 'pdf' },
          { name: 'Reşid Rıza ve Modern Fıkıh Üzerine', path: 'assets/docs/asama-3/Fıkıh Usulü/Reşid Rıza ve Modern Fıkıh Üzerine.pdf', type: 'pdf' },
          { name: 'Fıkıh Dersleri', path: 'https://www.youtube.com/watch?v=byfXHTjYelI&list=PLqtnZxd-0v4y5N4lStt80a_WdgPb3e6NJ', type: 'video' }
        ]
      },
      {
        title: 'Kelam',
        files: [
          { name: 'Gazali ve Kelam Metodu', path: 'assets/docs/asama-3/Kelam/Gazali ve Kelam Metodu.pdf', type: 'pdf' },
          { name: 'Kelam İlminde Klasik Yaklaşımlar', path: 'assets/docs/asama-3/Kelam/Kelam İlminde Klasik Yaklaşımlar.pdf', type: 'pdf' },
          { name: 'Niçin Kelam', path: 'assets/docs/asama-3/Kelam/Niçin Kelam.pdf', type: 'pdf' },
          { name: 'Kelam Dersleri', path: 'https://www.youtube.com/watch?v=Va3MydW3oIA&list=PLJxwshiwIwfPMkwmmlnn1Ttzs0YQVu4GY', type: 'video' }
        ]
      }
    ]
  }
};


// =============================================
//  SVG ICON TEMPLATES
// =============================================
const icons = {
  pdf: `<svg class="file-icon file-icon--pdf" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="15" y2="17"/>
  </svg>`,

  docx: `<svg class="file-icon file-icon--docx" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="12" y2="17"/>
  </svg>`,

  video: `<svg class="file-icon file-icon--video" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" opacity="0.5"/>
  </svg>`,

  externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`,

  zen: `<svg class="empty-state-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="32" cy="32" r="24" opacity="0.3"/>
    <path d="M20 38 C20 38 26 28 32 28 C38 28 44 38 44 38" opacity="0.4"/>
    <circle cx="32" cy="22" r="3" opacity="0.25"/>
  </svg>`,

  preparing: `<svg class="file-icon file-icon--preparing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="12" r="10" opacity="0.4"/>
    <path d="M12 6v6l4 2" stroke-linecap="round"/>
  </svg>`
};


// =============================================
//  DOM REFERENCES
// =============================================
const modalOverlay = document.getElementById('modal-overlay');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalBadge = document.getElementById('modal-badge');
const modalBody = document.getElementById('modal-body');


// =============================================
//  MODAL MANAGEMENT
// =============================================
function openModal(stageKey) {
  const data = libraryData[stageKey];
  if (!data) return;

  // Set header
  modalBadge.textContent = data.badge;
  modalBadge.className = `modal-badge ${data.badgeClass}`;
  modalTitle.textContent = data.title;

  // Generate content synchronously
  modalBody.innerHTML = renderFileGroups(data.groups);

  // Stagger file item animations
  const items = modalBody.querySelectorAll('.file-item');
  items.forEach((item, i) => {
    item.style.animationDelay = `${i * 0.04}s`;
  });

  // Show modal immediately
  modalOverlay.classList.add('is-active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => modalClose.focus(), 100);
}

function closeModal() {
  modalOverlay.classList.remove('is-active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


// =============================================
//  RENDER FILE GROUPS (Synchronous)
// =============================================
function renderFileGroups(groups) {
  if (!groups || groups.length === 0) {
    return renderEmptyState();
  }

  return groups.map(group => {
    let filesHtml = '';

    if (group.files && group.files.length > 0) {
      filesHtml = group.files.map(file => renderFileItem(file)).join('');
    } else {
      filesHtml = renderEmptyState();
    }

    return `
      <div class="file-group">
        <h3 class="file-group-title">${escapeHtml(group.title)}</h3>
        ${filesHtml}
      </div>
    `;
  }).join('');
}


function renderFileItem(file) {
  let icon = '';
  let action = '';

  if (file.type === 'video') {
    // Video — always external link
    icon = icons.video;
    action = `
      <a class="file-action file-action--link" 
         href="${escapeAttr(file.path)}" 
         target="_blank" 
         rel="noopener noreferrer">
        <span>Bağlantı</span>
        ${icons.externalLink}
      </a>`;
  } else if (file.type === 'pdf') {
    // PDF — open in new tab
    icon = icons.pdf;
    action = `
      <a class="file-action file-action--view" 
         href="${escapeAttr(file.path)}" 
         target="_blank" 
         rel="noopener noreferrer">
        Görüntüle
      </a>`;
  } else if (file.type === 'docx') {
    // DOCX — open in new tab
    icon = icons.docx;
    action = `
      <a class="file-action file-action--docx-view" 
         href="${escapeAttr(file.path)}" 
         target="_blank" 
         rel="noopener noreferrer">
        Görüntüle
      </a>`;
  }

  return `
    <div class="file-item">
      ${icon}
      <span class="file-name">${escapeHtml(file.name)}</span>
      ${action}
    </div>
  `;
}


function renderEmptyState() {
  return `
    <div class="empty-state">
      ${icons.zen}
      <p class="empty-state-text">Yakında</p>
      <p class="empty-state-sub">Bu bölüm geliştirilme aşamasında</p>
    </div>
  `;
}


// =============================================
//  UTILITY FUNCTIONS
// =============================================
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Converts a Turkish display name to an SEO-friendly slug.
 * Usage: toSlug("Freud ve Din: Psikanalitik Perspektif") 
 *        → "freud-ve-din-psikanalitik-perspektif"
 */
function toSlug(text) {
  const turkishMap = {
    'ç': 'c', 'Ç': 'C', 'ğ': 'g', 'Ğ': 'G',
    'ı': 'i', 'İ': 'I', 'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S', 'ü': 'u', 'Ü': 'U'
  };

  return text
    .split('')
    .map(char => turkishMap[char] || char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // remove non-alphanumeric
    .replace(/\s+/g, '-')           // spaces → hyphens
    .replace(/-+/g, '-')            // collapse multiple hyphens
    .replace(/^-|-$/g, '');          // trim leading/trailing hyphens
}


// =============================================
//  EVENT LISTENERS
// =============================================

// Card clicks → open modal
document.querySelectorAll('.bento-card').forEach(card => {
  const stage = card.dataset.stage;

  card.addEventListener('click', () => openModal(parseInt(stage)));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(parseInt(stage));
    }
  });
});

// Close modal
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
    closeModal();
  }
});


// =============================================
//  INTERSECTION OBSERVER — Scroll Animations
// =============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.bento-card').forEach(card => {
  card.style.animationPlayState = 'paused';
  scrollObserver.observe(card);
});

// Trigger immediate for cards already in viewport
setTimeout(() => {
  document.querySelectorAll('.bento-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.style.animationPlayState = 'running';
    }
  });
}, 50);


// =============================================
//  CURSOR GLOW EFFECT ON CARDS
// =============================================
document.querySelectorAll('.bento-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});


console.log('📚 Din Psikolojisi — Dijital Kaynak Kütüphanesi loaded.');
