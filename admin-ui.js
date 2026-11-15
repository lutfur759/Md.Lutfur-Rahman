(() => {
  const translations = {
    en: {
      adminAccess: 'ADMIN ACCESS', loginTitle: 'Welcome back', loginSubtitle: 'Sign in to manage your portfolio and site content.', username: 'Username', password: 'Password', signIn: 'Sign in to dashboard', demoOnly: 'Demo login only', demoWarning: 'This static-site login is not secure. Do not use it to protect private content or publish credentials.', workspace: 'WORKSPACE', overview: 'Overview', profile: 'Profile & contact', projects: 'Projects & portfolio', features: 'Features', videos: 'Videos', socialLinks: 'Social links', localDemo: 'Local demo', localDemoText: 'Changes save in this browser only.', dashboard: 'Dashboard', savedLocally: 'Saved locally', previewSite: 'Preview site', logout: 'Log out', dashboardOverview: 'DASHBOARD OVERVIEW', welcomeTitle: 'Your creative workspace', welcomeText: 'Manage your profile, work, videos and contact details from one place.', portfolioManager: 'Portfolio manager', portfolioProjects: 'Portfolio projects', featuredVideos: 'Featured videos', serviceFeatures: 'Service features', socialProfiles: 'Social profiles', quickActions: 'QUICK ACTIONS', manageContent: 'Manage your content', addProject: 'Add a project', addProjectText: 'Showcase recent work', addVideo: 'Add a video', addVideoText: 'Feature a showreel or edit', updateContact: 'Update contact details', updateContactText: 'Keep your profile current', publicProfile: 'PUBLIC PROFILE', profilePreview: 'Profile snapshot', editProfile: 'Edit profile ↗', importantNote: 'Important:', importantNoteText: 'This static version stores content in your browser only. To publish dashboard edits for every visitor, connect a real CMS or backend before launch.', profileSettings: 'PROFILE SETTINGS', profileContactTitle: 'Profile & contact', profileContactDesc: 'Edit the information visitors see on your portfolio.', identityIntro: 'Identity & introduction', identityIntroDesc: 'Your name, professional title and bio.', name: 'Name', professionalTitle: 'Professional title', shortIntro: 'Short introduction', aboutBio: 'About / biography', contactDetails: 'Contact details', contactDetailsDesc: 'Ways for clients and collaborators to reach you.', emailAddress: 'Email address', phone: 'Phone', location: 'Location', cvLink: 'CV / resume link', profileStats: 'Profile statistics', profileStatsDesc: 'Small highlights shown on your public page.', yearsExperience: 'Years of experience', projectsCompleted: 'Projects completed', clients: 'Clients', portfolioManagement: 'PORTFOLIO MANAGEMENT', projectsPortfolioTitle: 'Projects & portfolio', projectsPortfolioDesc: 'Add project highlights and link visitors to your work.', newProject: 'Create a project', newProjectDesc: 'Add a title, description, project link and tags.', projectName: 'Project name', projectUrl: 'Project URL', description: 'Description', tags: 'Tags (comma separated)', addToPortfolio: 'Add to portfolio', publishedProjects: 'Portfolio projects', publishedProjectsDesc: 'Items currently included in your portfolio.', servicesSkills: 'SERVICES & SKILLS', featuresTitle: 'Features', featuresDesc: 'Highlight your services, strengths and creative capabilities.', newFeature: 'Create a feature', newFeatureDesc: 'Add a concise title and a clear description.', featureTitle: 'Feature title', addFeatureAction: 'Add feature', currentFeatures: 'Current features', currentFeaturesDesc: 'Manage the features visitors see.', videoManagement: 'VIDEO MANAGEMENT', videosTitle: 'Videos & showreels', videosDesc: 'Feature your showreel, edits and other video work.', newVideo: 'Add a video', newVideoDesc: 'Paste a YouTube or supported video embed URL.', videoTitle: 'Video title', videoUrl: 'Video URL', addVideoAction: 'Add video', currentVideos: 'Current videos', currentVideosDesc: 'Videos displayed on your portfolio page.', onlinePresence: 'ONLINE PRESENCE', socialLinksTitle: 'Social links', socialLinksDesc: 'Connect visitors to your professional profiles and other sites.', newSocialLink: 'Add a link', newSocialDesc: 'Add a display name and its full URL.', linkName: 'Link name', linkUrl: 'Link URL', addLink: 'Add link', currentLinks: 'Current links', currentLinksDesc: 'Social links shown on your public profile.', adminFooter: 'A simple space for your creative work.', resetData: 'Reset content', delete: 'Delete', project: 'Project', feature: 'Feature', video: 'Video', link: 'Link'
    },
    bn: {
      adminAccess: 'অ্যাডমিন প্রবেশ', loginTitle: 'আবার স্বাগতম', loginSubtitle: 'আপনার পোর্টফোলিও ও ওয়েবসাইটের কনটেন্ট পরিচালনা করতে লগইন করুন।', username: 'ব্যবহারকারীর নাম', password: 'পাসওয়ার্ড', signIn: 'ড্যাশবোর্ডে লগইন', demoOnly: 'শুধু ডেমো লগইন', demoWarning: 'এই স্ট্যাটিক সাইটের লগইন নিরাপদ নয়। ব্যক্তিগত তথ্য সুরক্ষা বা আসল পাসওয়ার্ড ব্যবহারের জন্য এটি ব্যবহার করবেন না।', workspace: 'কাজের জায়গা', overview: 'সারসংক্ষেপ', profile: 'প্রোফাইল ও যোগাযোগ', projects: 'প্রজেক্ট ও পোর্টফোলিও', features: 'সেবা ও দক্ষতা', videos: 'ভিডিও', socialLinks: 'সামাজ��ক লিংক', localDemo: 'লোকাল ডেমো', localDemoText: 'পরিবর্তন শুধু এই ব্রাউজারেই সংরক্ষিত হয়।', dashboard: 'ড্যাশবোর্ড', savedLocally: 'লোকালভাবে সংরক্ষিত', previewSite: 'সাইট দেখুন', logout: 'লগ আউট', dashboardOverview: 'ড্যাশবোর্ড সারসংক্ষেপ', welcomeTitle: 'আপনার সৃজনশীল কর্মক্ষেত্র', welcomeText: 'এক জায়গা থেকে প্রোফাইল, কাজ, ভিডিও ও যোগাযোগের তথ্য পরিচালনা করুন।', portfolioManager: 'পোর্টফোলিও ব্যবস্থাপনা', portfolioProjects: 'পোর্টফোলিও প্রজেক্ট', featuredVideos: 'বিশেষ ভিডিও', serviceFeatures: 'সেবার বৈশিষ্ট্য', socialProfiles: 'সামাজিক প্রোফাইল', quickActions: 'দ্রুত কাজ', manageContent: 'কনটেন্ট পরিচালনা করুন', addProject: 'প্রজেক্ট যোগ করুন', addProjectText: 'সাম্প্রতিক কাজ দেখান', addVideo: 'ভিড���ও যোগ করুন', addVideoText: 'শোরিল বা এডিট দেখান', updateContact: 'যোগাযোগের তথ্য বদলান', updateContactText: 'প্রোফাইল হালনাগাদ রাখুন', publicProfile: 'সবার জন্য প্রোফাইল', profilePreview: 'প্রোফাইলের সংক্ষিপ্ত চিত্র', editProfile: 'প্রোফাইল সম্পাদনা ↗', importantNote: 'গুরুত্বপূর্ণ:', importantNoteText: 'এই স্ট্যাটিক সংস্করণে কনটেন্ট শুধু আপনার ব্রাউজারে থাকে। সবার জন্য পরিবর্তন প্রকাশ করতে চালুর আগে একটি CMS বা ব্যাকএন্ড যুক্ত করুন।', profileSettings: 'প্রোফাইল সেটিংস', profileContactTitle: 'প্রোফাইল ও যোগাযোগ', profileContactDesc: 'পোর্টফোলিওতে দর্শকরা যে তথ্য দেখবেন তা সম্পাদনা করুন।', identityIntro: 'পরিচয় ও পরিচিতি', identityIntroDesc: 'আপনা��� নাম, পেশাগত পরিচয় ও জীবনী।', name: 'নাম', professionalTitle: 'পেশাগত পরিচয়', shortIntro: 'সংক্ষিপ্ত পরিচিতি', aboutBio: 'আমার সম্পর্কে / জীবনী', contactDetails: 'যোগাযোগের তথ্য', contactDetailsDesc: 'ক্লায়েন্ট ও সহযোগীরা যেভাবে আপনার সাথে যোগাযোগ করবেন।', emailAddress: 'ইমেইল ঠিকানা', phone: 'ফোন', location: 'অবস্থান', cvLink: 'সিভি / রেজুমে লিংক', profileStats: 'প্রোফাইল পরিসংখ্যান', profileStatsDesc: 'আপনার ওয়েবসাইটে দেখানো সংক্ষিপ্ত তথ্য।', yearsExperience: 'অভিজ্ঞতার বছর', projectsCompleted: 'সম্পন্ন প্রজেক্ট', clients: 'ক্লায়েন্ট', portfolioManagement: 'পোর্টফোলিও ব্যবস্থাপনা', projectsPortfolioTitle: 'প্রজেক্ট ও পোর্টফোলিও', projectsPortfolioDesc: 'প্রজেক্টের তথ্য যোগ করে আপনার কাজের লিংক দিন।', newProject: 'নতুন প্রজেক্ট তৈরি করুন', newProjectDesc: 'শিরোনাম, বিবরণ, প্রজেক্ট লিংক ও ট্যাগ যোগ করুন।', projectName: 'প্রজেক্টের নাম', projectUrl: 'প্রজেক্ট URL', description: 'বিবরণ', tags: 'ট্যাগ (কমা দিয়ে আলাদা করুন)', addToPortfolio: 'পোর্টফোলিওতে যোগ করুন', publishedProjects: 'পোর্টফোলিও প্রজেক্ট', publishedProjectsDesc: 'আপনার পোর্টফোলিওতে থাকা প্রজেক্টগুলো।', servicesSkills: 'সেবা ও দক্ষতা', featuresTitle: 'বৈশিষ্ট্য', featuresDesc: 'আপনার সেবা, শক্তি ও সৃজনশীল দক্ষতা তুলে ধরুন।', newFeature: 'নতুন বৈশিষ্ট্য তৈরি করুন', newFeatureDesc: 'সংক্ষিপ্ত শিরোনাম ও স্পষ্ট বিবরণ যোগ করুন।', featureTitle: 'বৈশিষ্ট্যের শিরোনাম', addFeatureAction: 'বৈশিষ্ট্য যোগ করুন', currentFeatures: 'বর্তমান বৈশিষ্ট্য', currentFeaturesDesc: 'ওয়েবসাইটে দেখানো বৈশিষ্ট্য পরিচালনা করুন।', videoManagement: 'ভিডিও ব্যবস্থাপনা', videosTitle: 'ভিডিও ও শোরিল', videosDesc: 'আপনার শোরিল, এডিট ও অন্যান্য ভিডিও দেখান।', newVideo: 'ভিডিও যোগ করুন', newVideoDesc: 'YouTube বা সমর্থিত ভিডিও embed URL দিন।', videoTitle: 'ভিডিওর শিরোনাম', videoUrl: 'ভিডিও URL', addVideoAction: 'ভিডিও যোগ করুন', currentVideos: 'বর্তমান ভিডিও', currentVideosDesc: 'পোর্টফোলিও পেজে দেখানো ভিডিওগুলো।', onlinePresence: 'অনলাইন উপস্থিতি', socialLinksTitle: 'সামাজিক লিংক', socialLinksDesc: 'দর্শকদের আপনার পেশাগত প্রোফাইল ও অন্যান্য সাইটে যুক্ত করুন।', newSocialLink: 'নতুন লিংক যোগ করুন', newSocialDesc: 'দেখানোর নাম এবং সম্পূর্ণ URL দিন।', linkName: 'লি���কের নাম', linkUrl: 'লিংকের URL', addLink: 'লিংক যোগ করুন', currentLinks: 'বর্তমান লিংক', currentLinksDesc: 'আপনার পাবলিক প্রোফাইলে দেখানো সামাজিক লিংক।', adminFooter: 'আপনার সৃজনশীল কাজের জন্য একটি সহজ জায়গা।', resetData: 'কনটেন্ট রিসেট', delete: 'মুছুন', project: 'প্রজেক্ট', feature: 'বৈশিষ্ট্য', video: 'ভিডিও', link: 'লিংক'
    }
  };

  const languageKey = 'portfolioAdminLanguage';
  let language = localStorage.getItem(languageKey) === 'bn' ? 'bn' : 'en';
  const sectionKeys = { overview: 'overview', profile: 'profile', projects: 'projects', features: 'features', videos: 'videos', socials: 'socialLinks' };

  function translate() {
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = translations[language][element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll('[data-language-toggle]').forEach((button) => {
      button.textContent = language === 'en' ? 'ব���ংলা' : 'English';
      button.setAttribute('aria-label', language === 'en' ? 'বাংলায় পরিবর্তন করুন' : 'Switch to English');
    });
    document.querySelectorAll('[data-action^="remove-"]').forEach((button) => {
      button.textContent = translations[language].delete;
    });
    updateSectionLabel();
  }

  function updateSectionLabel() {
    const active = document.querySelector('.sidebar .nav-btn.active');
    const label = document.getElementById('currentSectionLabel');
    if (!active || !label) return;
    const key = sectionKeys[active.dataset.section];
    label.textContent = translations[language][key] || 'Overview';
  }

  function switchSection(name) {
    document.querySelectorAll('.dashboard-section').forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === name);
    });
    document.querySelectorAll('.sidebar .nav-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.section === name);
    });
    updateSectionLabel();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-language-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      language = language === 'en' ? 'bn' : 'en';
      localStorage.setItem(languageKey, language);
      translate();
    });
  });

  document.querySelectorAll('.sidebar .nav-btn[data-section]').forEach((button) => {
    button.addEventListener('click', () => switchSection(button.dataset.section));
  });

  document.querySelectorAll('[data-go]').forEach((button) => {
    button.addEventListener('click', () => switchSection(button.dataset.go));
  });

  const observer = new MutationObserver(() => {
    document.querySelectorAll('[data-action^="remove-"]').forEach((button) => {
      button.textContent = translations[language].delete;
    });
    updateCountsAndProfile();
  });
  ['projectList', 'videoList', 'featureList', 'socialList'].forEach((id) => {
    const node = document.getElementById(id);
    if (node) observer.observe(node, { childList: true });
  });

  function updateCountsAndProfile() {
    const getCount = (id) => document.querySelectorAll(`#${id} > .item-row`).length;
    const projectCount = document.getElementById('projectCount');
    const videoCount = document.getElementById('videoCount');
    const featureCount = document.getElementById('featureCount');
    const socialCount = document.getElementById('socialCount');
    if (projectCount) projectCount.textContent = getCount('projectList');
    if (videoCount) videoCount.textContent = getCount('videoList');
    if (featureCount) featureCount.textContent = getCount('featureList');
    if (socialCount) socialCount.textContent = getCount('socialList');
    const getValue = (id, fallback) => document.getElementById(id)?.value || fallback;
    const name = getValue('siteName', 'Md. Lutfur Rahman');
    const title = getValue('siteTitle', 'Editor & Actor');
    const email = getValue('emailInput', 'lutfurme2017@gmail.com');
    const summaryName = document.getElementById('summaryName');
    const summaryTitle = document.getElementById('summaryTitle');
    const summaryEmail = document.getElementById('summaryEmail');
    const initials = document.getElementById('summaryInitials');
    if (summaryName) summaryName.textContent = name;
    if (summaryTitle) summaryTitle.textContent = title;
    if (summaryEmail) summaryEmail.textContent = email;
    if (initials) initials.textContent = name.split(/\s+/).slice(0, 2).map((part) => part[0] || '').join('').toUpperCase();
  }

  document.addEventListener('input', (event) => {
    if (['siteName', 'siteTitle', 'emailInput'].includes(event.target.id)) updateCountsAndProfile();
  });
  document.getElementById('adminYear')?.append(String(new Date().getFullYear()));
  translate();
})();
