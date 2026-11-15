const DEFAULT_DATA = {
  profile: {
    name: 'Md. Lutfur Rahman',
    title: 'Editor & Actor',
    subtitle: 'Creative professional focused on visual storytelling',
    bio: 'Professional editor and actor with a passion for crafting stories that connect with audiences. I bring creativity, timing, and discipline to every project, from concept to final delivery.',
    email: 'lutfurme2017@gmail.com',
    phone: '+880 0000 000000',
    location: 'Bangladesh',
    resume: '#',
    stats: { years: '6+', projects: '25+', clients: '12+' },
  },
  socials: [
    { label: 'Facebook', url: 'https://www.facebook.com/lutfur759' },
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'YouTube', url: 'https://youtube.com' },
  ],
  features: [
    { title: 'Video Editing', description: 'Clean, engaging edits for interviews, promos, and creative short-form storytelling.' },
    { title: 'Acting', description: 'Strong screen presence and expressive performance for professional productions.' },
    { title: 'Visual Storytelling', description: 'Crafting emotional, well-paced visual narratives that connect with audiences.' },
  ],
  projects: [
    { title: 'Short Film Edit', description: 'Post-production support for a short visual story with cinematic pacing and music sync.', link: '#', tags: ['Editing', 'Color', 'Post'] },
    { title: 'Brand Campaign', description: 'Campaign visuals for a social-first brand promo with engaging hooks and transitions.', link: '#', tags: ['Marketing', 'Video'] },
    { title: 'Actor Portfolio', description: 'Performance reel and casting showcase built to present range and professionalism.', link: '#', tags: ['Acting', 'Portfolio'] },
  ],
  videos: [
    { title: 'Showreel', url: 'https://www.youtube.com/embed/VIDEO_ID' },
    { title: 'Featured Edit', url: 'https://www.youtube.com/embed/VIDEO_ID_2' },
  ],
};

const STORAGE_KEY = 'portfolioAdminData_v1';
const ADMIN_PASSWORD = 'admin123';

function readData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : structuredClone(DEFAULT_DATA);
  } catch (error) {
    return structuredClone(DEFAULT_DATA);
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function youtubeEmbed(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
}

function renderPublicSite() {
  const data = readData();
  const profile = data.profile || DEFAULT_DATA.profile;
  const socials = data.socials || [];
  const features = data.features || [];
  const projects = data.projects || [];
  const videos = data.videos || [];

  document.getElementById('brandName').textContent = profile.name;
  document.getElementById('heroTitle').textContent = profile.title;
  document.getElementById('profileName').textContent = profile.name;
  document.getElementById('heroBio').textContent = profile.subtitle;
  document.getElementById('aboutText').textContent = profile.bio;
  document.getElementById('emailLink').textContent = profile.email;
  document.getElementById('emailLink').href = `mailto:${profile.email}`;
  document.getElementById('phoneText').textContent = profile.phone;
  document.getElementById('locationText').textContent = profile.location;
  document.getElementById('resumeLink').href = profile.resume || '#';
  document.getElementById('footerName').textContent = profile.name;
  document.getElementById('yearStamp').textContent = new Date().getFullYear();

  document.getElementById('statYears').textContent = profile.stats?.years || '6+';
  document.getElementById('statProjects').textContent = profile.stats?.projects || '25+';
  document.getElementById('statClients').textContent = profile.stats?.clients || '12+';

  const socialRoot = document.getElementById('socialLinks');
  socialRoot.innerHTML = socials
    .map((item) => `<a class="social-chip" href="${escapeHtml(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a>`)
    .join('');

  const featuresRoot = document.getElementById('featuresGrid');
  featuresRoot.innerHTML = features
    .map(
      (item) => `
        <article class="feature-card">
          <span class="mini-label">Feature</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join('');

  const projectsRoot = document.getElementById('projectsGrid');
  projectsRoot.innerHTML = projects
    .map(
      (item) => `
        <article class="project-card">
          <span class="mini-label">Portfolio</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="tag-group">
            ${(item.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <a class="project-link" href="${escapeHtml(item.link || '#')}" target="_blank" rel="noopener">View project</a>
        </article>
      `
    )
    .join('');

  const videosRoot = document.getElementById('videoGrid');
  videosRoot.innerHTML = videos
    .map(
      (item) => `
        <article class="video-card">
          <div class="video-frame">
            <iframe src="${youtubeEmbed(item.url)}" allowfullscreen title="${escapeHtml(item.title)}"></iframe>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
        </article>
      `
    )
    .join('');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function bindAdminPage() {
  const authPanel = document.getElementById('authPanel');
  const adminPanel = document.getElementById('adminPanel');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginForm = document.getElementById('loginForm');
  const saveBtn = document.getElementById('saveAllBtn');
  const resetBtn = document.getElementById('resetBtn');

  function isLoggedIn() {
    return localStorage.getItem('adminAuth') === 'true';
  }

  function setLoggedIn(value) {
    localStorage.setItem('adminAuth', value ? 'true' : 'false');
  }

  function renderAdmin() {
    const data = readData();
    const profile = data.profile || DEFAULT_DATA.profile;

    document.getElementById('siteName').value = profile.name;
    document.getElementById('siteTitle').value = profile.title;
    document.getElementById('siteSubtitle').value = profile.subtitle;
    document.getElementById('bioText').value = profile.bio;
    document.getElementById('emailInput').value = profile.email;
    document.getElementById('phoneInput').value = profile.phone;
    document.getElementById('locationInput').value = profile.location;
    document.getElementById('resumeInput').value = profile.resume || '#';
    document.getElementById('statsYears').value = profile.stats?.years || '6+';
    document.getElementById('statsProjects').value = profile.stats?.projects || '25+';
    document.getElementById('statsClients').value = profile.stats?.clients || '12+';

    const socials = data.socials || [];
    document.getElementById('socialList').innerHTML = socials
      .map(
        (item, index) => `
          <div class="item-row">
            <div>
              <strong>${escapeHtml(item.label)}</strong>
              <small>${escapeHtml(item.url)}</small>
            </div>
            <div class="row-actions">
              <button class="ghost-btn" data-action="remove-social" data-index="${index}">Delete</button>
            </div>
          </div>
        `
      )
      .join('');

    document.getElementById('featureList').innerHTML = (data.features || [])
      .map(
        (item, index) => `
          <div class="item-row">
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(item.description)}</small>
            </div>
            <div class="row-actions">
              <button class="ghost-btn" data-action="remove-feature" data-index="${index}">Delete</button>
            </div>
          </div>
        `
      )
      .join('');

    document.getElementById('projectList').innerHTML = (data.projects || [])
      .map(
        (item, index) => `
          <div class="item-row">
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(item.description)}</small>
            </div>
            <div class="row-actions">
              <button class="ghost-btn" data-action="remove-project" data-index="${index}">Delete</button>
            </div>
          </div>
        `
      )
      .join('');

    document.getElementById('videoList').innerHTML = (data.videos || [])
      .map(
        (item, index) => `
          <div class="item-row">
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <small>${escapeHtml(item.url)}</small>
            </div>
            <div class="row-actions">
              <button class="ghost-btn" data-action="remove-video" data-index="${index}">Delete</button>
            </div>
          </div>
        `
      )
      .join('');
  }

  function collectDataFromForm() {
    const siteName = document.getElementById('siteName').value.trim();
    const siteTitle = document.getElementById('siteTitle').value.trim();
    const siteSubtitle = document.getElementById('siteSubtitle').value.trim();
    const bioText = document.getElementById('bioText').value.trim();
    const emailInput = document.getElementById('emailInput').value.trim();
    const phoneInput = document.getElementById('phoneInput').value.trim();
    const locationInput = document.getElementById('locationInput').value.trim();
    const resumeInput = document.getElementById('resumeInput').value.trim();

    const data = readData();
    data.profile = {
      ...data.profile,
      name: siteName || data.profile.name,
      title: siteTitle || data.profile.title,
      subtitle: siteSubtitle || data.profile.subtitle,
      bio: bioText || data.profile.bio,
      email: emailInput || data.profile.email,
      phone: phoneInput || data.profile.phone,
      location: locationInput || data.profile.location,
      resume: resumeInput || data.profile.resume,
      stats: {
        years: document.getElementById('statsYears').value.trim() || data.profile.stats.years,
        projects: document.getElementById('statsProjects').value.trim() || data.profile.stats.projects,
        clients: document.getElementById('statsClients').value.trim() || data.profile.stats.clients,
      },
    };

    return data;
  }

  function handleSave() {
    const data = collectDataFromForm();
    saveData(data);
    renderAdmin();
    renderPublicSite();
    showToast('Project data saved');
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;

      if (username === 'admin' && password === ADMIN_PASSWORD) {
        setLoggedIn(true);
        authPanel.classList.add('hidden');
        adminPanel.classList.remove('hidden');
        renderAdmin();
        showToast('Login successful');
      } else {
        showToast('Invalid username or password');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      setLoggedIn(false);
      adminPanel.classList.add('hidden');
      authPanel.classList.remove('hidden');
      loginForm.reset();
      showToast('Logged out');
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', handleSave);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);
      saveData(structuredClone(DEFAULT_DATA));
      renderAdmin();
      renderPublicSite();
      showToast('Reset to default data');
    });
  }

  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const action = target.dataset.action;
    if (!action) return;

    const data = readData();
    const index = Number(target.dataset.index);

    if (action === 'remove-social') {
      data.socials.splice(index, 1);
      saveData(data);
      renderAdmin();
      renderPublicSite();
      showToast('Social link removed');
    }

    if (action === 'remove-feature') {
      data.features.splice(index, 1);
      saveData(data);
      renderAdmin();
      renderPublicSite();
      showToast('Feature removed');
    }

    if (action === 'remove-project') {
      data.projects.splice(index, 1);
      saveData(data);
      renderAdmin();
      renderPublicSite();
      showToast('Project removed');
    }

    if (action === 'remove-video') {
      data.videos.splice(index, 1);
      saveData(data);
      renderAdmin();
      renderPublicSite();
      showToast('Video removed');
    }
  });

  document.getElementById('addSocialBtn')?.addEventListener('click', () => {
    const label = document.getElementById('socialLabel').value.trim();
    const url = document.getElementById('socialUrl').value.trim();
    if (!label || !url) {
      showToast('Add both label and URL');
      return;
    }

    const data = readData();
    data.socials.push({ label, url });
    saveData(data);
    renderAdmin();
    renderPublicSite();
    document.getElementById('socialLabel').value = '';
    document.getElementById('socialUrl').value = '';
    showToast('Social link added');
  });

  document.getElementById('addFeatureBtn')?.addEventListener('click', () => {
    const title = document.getElementById('featureTitle').value.trim();
    const description = document.getElementById('featureDescription').value.trim();
    if (!title || !description) {
      showToast('Add feature title and description');
      return;
    }

    const data = readData();
    data.features.push({ title, description });
    saveData(data);
    renderAdmin();
    renderPublicSite();
    document.getElementById('featureTitle').value = '';
    document.getElementById('featureDescription').value = '';
    showToast('Feature added');
  });

  document.getElementById('addProjectBtn')?.addEventListener('click', () => {
    const title = document.getElementById('projectTitle').value.trim();
    const description = document.getElementById('projectDescription').value.trim();
    const link = document.getElementById('projectLink').value.trim();
    const tags = document.getElementById('projectTags').value.split(',').map((tag) => tag.trim()).filter(Boolean);

    if (!title || !description) {
      showToast('Add project title and description');
      return;
    }

    const data = readData();
    data.projects.push({ title, description, link, tags });
    saveData(data);
    renderAdmin();
    renderPublicSite();
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('projectLink').value = '';
    document.getElementById('projectTags').value = '';
    showToast('Project added');
  });

  document.getElementById('addVideoBtn')?.addEventListener('click', () => {
    const title = document.getElementById('videoTitle').value.trim();
    const url = document.getElementById('videoUrl').value.trim();
    if (!title || !url) {
      showToast('Add video title and URL');
      return;
    }

    const data = readData();
    data.videos.push({ title, url });
    saveData(data);
    renderAdmin();
    renderPublicSite();
    document.getElementById('videoTitle').value = '';
    document.getElementById('videoUrl').value = '';
    showToast('Video added');
  });

  if (isLoggedIn()) {
    authPanel.classList.add('hidden');
    adminPanel.classList.remove('hidden');
    renderAdmin();
  }
}

function init() {
  if (document.body.dataset.page === 'public') {
    renderPublicSite();
  }

  if (document.body.dataset.page === 'admin') {
    bindAdminPage();
  }
}

window.addEventListener('DOMContentLoaded', init);

if (!localStorage.getItem(STORAGE_KEY)) {
  saveData(structuredClone(DEFAULT_DATA));
}
