const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const apps = [
  {
    icon: 'ai-photo-editor', name: 'AI Photo Editor', category: 'AI · iOS',
    desc: 'AI-powered photo editing application focused on image processing and a responsive mobile workflow.',
    tags: ['Core Image', 'CoreML', 'Vision'],
    stores: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/ai-photo-editor/id6742357101' }],
  },
  {
    icon: 'chat-ai', name: 'Chat AI — Advance Assistant', category: 'AI · iOS',
    desc: 'Native AI chat application powered by OpenAI APIs and designed around conversational workflows.',
    tags: ['OpenAI API', 'REST', 'iOS'],
    stores: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/chat-ai-advance-assistant/id1670916217' }],
  },
  {
    icon: 'call-recorder-zoom', name: 'Call Recorder Zoom', category: 'Call Record · iOS',
    desc: 'Call-recording experience built around Twilio SDK integration and mobile audio workflows.',
    tags: ['Twilio', 'Audio', 'iOS'],
    stores: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/call-recorder-zoom/id1144341450' }],
  },
  {
    icon: 'scibai', name: 'SCIBAI', category: 'AI · iOS + Android',
    desc: 'Vegetable diagnosis and social networking application delivered for iOS and Android using Flutter.',
    tags: ['Flutter', 'AI', 'iOS + Android'],
    stores: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/scibai-diag-sns-for-veggie/id1496787519' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.miraiscien.scibai' },
    ],
  },
  {
    icon: 'hokkaido-golf', name: 'Hokkaido Classic Golf Club', category: 'Sports · iOS',
    desc: 'Member-facing mobile experience designed for reservations, check-in, information, and club services.',
    tags: ['iOS', 'QR', 'Push'],
    stores: [{ label: 'App Store', href: 'https://apps.apple.com/jp/app/hokkaido-classic-golf-club/id1554845469' }],
  },
  {
    icon: 'looptube-hd', name: 'LoopTube HD', category: 'Video · iOS',
    desc: 'Video player with search, autoplay, channel lists, and single-video or multi-video looping.',
    tags: ['YouTube API', 'Player', 'iOS'],
    stores: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/looptube-hd-autoplay-videos-in-a-loop/id525948340' }],
  },
  {
    icon: 'photoglow-ai', name: 'PhotoGlow AI', category: 'AI · iOS',
    desc: 'AI-powered photo editing and enhancement experience with generative and cleanup workflows.',
    tags: ['AI', 'Image', 'iOS'],
    stores: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/photoglow-ai/id6740266746' }],
  },
  {
    icon: 'gram-stain', name: 'Gram Stain', category: 'Reference · Android',
    desc: 'Microbiology reference application delivered for mobile, with searchable reference content.',
    tags: ['iOS', 'Android', 'Reference'],
    stores: [
      { label: 'App Store', href: 'https://apps.apple.com/jp/app/jp.or.ohtahp.gramstain/id923956608' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=jp.or.ohtahp.gramstain' },
    ],
  },
];

const appsGrid = document.getElementById('apps-grid');
if (appsGrid) {
  appsGrid.innerHTML = apps.map((app, i) => {
    const delay = i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : '';
    const storeLinks = app.stores
      .map((s) => `<a class="app-store-link" href="${s.href}" rel="noreferrer" target="_blank">${s.label} <span>↗</span></a>`)
      .join('');
    const footerLinks = app.stores.length > 1
      ? `<div class="app-store-links">${storeLinks}</div>`
      : storeLinks;
    return `<article class="app-card reveal${delay}">
<div class="app-card-main">
<img alt="${app.name} app icon" class="app-icon" src="assets/apps/icons/${app.icon}.png"/>
<div class="app-identity-copy">
<h3>${app.name}</h3>
<span>${app.category}</span>
</div>
</div>
<p>${app.desc}</p>
<div class="app-card-footer">
<div class="app-tags">${app.tags.map((t) => `<span>${t}</span>`).join('')}</div>
${footerLinks}
</div>
</article>`;
  }).join('');
}

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
