/**
 * Cam Moon Pro — Studio Website Controller
 * - Bilingual RTL/LTR switching (Arabic & English)
 * - Responsive Mobile Drawer
 * - Smooth FAQ Accordion
 * - Dynamic version.json syncing
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= 1. MOBILE DRAWER =================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  function setDrawerOpen(isOpen) {
    if (!mobileMenuBtn || !mobileDrawer) return;
    mobileMenuBtn.classList.toggle('is-open', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileDrawer.hidden = !isOpen;
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      setDrawerOpen(mobileDrawer.hidden);
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setDrawerOpen(false));
    });
  }

  // ================= 2. FAQ ACCORDION =================
  const faqBoxes = document.querySelectorAll('.faq-box');
  faqBoxes.forEach(box => {
    const btn = box.querySelector('.faq-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = box.classList.contains('active');
      faqBoxes.forEach(b => b.classList.remove('active'));
      if (!isActive) {
        box.classList.add('active');
      }
    });
  });

  if (faqBoxes.length > 0) {
    faqBoxes[0].classList.add('active');
  }

  // ================= 3. BILINGUAL TRANSLATION =================
  const translations = {
    ar: {
      brand_sub: "4K WEBCAM SYSTEM",
      nav_how: "طريقة التشغيل",
      nav_features: "المميزات",
      nav_downloads: "التحميل",
      nav_faq: "الأسئلة الشائعة",
      nav_btn: "تحميل البرنامج",
      hero_badge: "مجاني بالكامل وبدون علامة مائية",
      hero_title: 'حوّل هاتفك إلى <span class="text-gradient">كاميرا ويب <bdi>4K</bdi></span> احترافية للكمبيوتر',
      hero_lead: 'بث فيديو سينمائي مباشر فائق النقاء عبر كابل <bdi>USB</bdi> أو شبكة <bdi>Wi-Fi</bdi> بدون تقطيع. متوافق بالكامل مع <bdi>Discord</bdi> و <bdi>OBS Studio</bdi> و <bdi>Zoom</bdi> و <bdi>NVIDIA Broadcast</bdi> مع إمكانية إطفاء شاشة الهاتف لحماية البطارية.',
      hero_dl_pc: "تحميل للكمبيوتر (Windows)",
      hero_dl_pc_sub: "ملف تثبيت رسمي • Setup .exe",
      hero_dl_app: "تحميل للهاتف (Android)",
      hero_dl_app_sub: "تثبيت مباشر بصيغة .apk",
      m_latency: "زمن استجابة فائق",
      m_quality: "دقة وسلاسة سينمائية",
      m_gpu: "فك تشفير بكرت الشاشة",
      m_conn: "اتصال مزدوج مرن",
      compat_label: "متوافق ومعتمد من:",
      how_kicker: "البدء السريع",
      how_title: "طريقة التشغيل في 3 خطوات بسيطة",
      how_desc: "بدون تعقيد وبدون الحاجة لخبرة تقنية، جهّز الكاميرا في أقل من دقيقتين:",
      step1_tag: "الكمبيوتر",
      step1_h: "ثبّت برنامج الكمبيوتر",
      step1_t: "حمّل ملف <strong>Cam_Moon_Pro_Setup.exe</strong> وشغّله. سيقوم البرنامج بتهيئة كاميرا الويندوز الافتراضية وإنشاء اختصار سطح المكتب تلقائياً.",
      step2_tag: "الهاتف",
      step2_h: "ثبّت تطبيق الهاتف",
      step2_t: "حمّل تطبيق <strong>Cam_Moon_Pro.apk</strong> وافتحه للتثبيت مباشرة. للاتصال السلكي، فعّل <strong>تصحيح أخطاء USB</strong> من خيارات المطور، أو اتصل لاسلكياً عبر الواي فاي.",
      step3_tag: "البث",
      step3_h: "وصّل وابدأ البث فوراً",
      step3_t: 'وصّل الهاتف عبر كابل <bdi>USB</bdi> أو شبكة <bdi>Wi-Fi</bdi>، ثم افتح <bdi>Discord</bdi> أو <bdi>OBS</bdi> أو <bdi>Zoom</bdi> واختر كاميرا <strong>Cam Moon Pro</strong>!',
      feat_kicker: "أداء استوديو حقيقي",
      feat_title: "لماذا Cam Moon Pro أفضل من برامج الواي فاي؟",
      feat_desc: "أداء هندسي حقيقي يقضي على جميع عيوب تطبيقات الكاميرا التقليدية:",
      f1_title: 'تأخير معدوم (<bdi>&lt; 15ms</bdi>)',
      f1_desc: "نقل بيانات سلكي مباشر عبر كابل USB لا يتأثر بتذبذب الواي فاي، لتحصل على تزامن فوري وحقيقي مع حركة الشفاه.",
      f2_title: "إطفاء الشاشة وتوفير البطارية",
      f2_desc: "خاصية AMOLED Dimmer تطفئ شاشة هاتفك تماماً أثناء البث، مما يوفر 70% من طاقة البطارية ويمنع سخونة الهاتف نهائياً.",
      f3_title: "تحكم كامل بالعدسات والألوان",
      f3_desc: "تحكم من الكمبيوتر في التبديل بين العدسة الواسعة والتقريب، مع ضبط الفوكس اليدوي والـ ISO وفلاتر الألوان السينمائية وعزل الخلفية.",
      f4_title: "تسريع كرت الشاشة (0% معالج)",
      f4_desc: "فك تشفير الصورة يتم عبر شريحة كرت الشاشة GPU (NVDEC / DirectX)، ليبقى معالج جهازك حراً بالكامل للألعاب والبث.",
      dl_kicker: "التحميل الرسمي المباشر",
      dl_title: "تحميل البرنامج مجاناً وبدون قيود",
      dl_desc: "بدون إعلانات وبدون علامة مائية على الفيديو. حمّل الإصدار الرسمي:",
      card_pc_h: "برنامج الكمبيوتر (Windows)",
      card_pc_p: "ملف تثبيت رسمي واحد يحتوي على البرنامج الكامل وتعريف كاميرا الويندوز الافتراضية DirectShow.",
      lbl_size: "الحجم",
      lbl_format: "الصيغة",
      size_pc: "~176 ميجابايت",
      type_pc: "Setup .exe تنفيذي",
      btn_dl_pc: "تحميل التثبيت الرسمي (.exe)",
      card_app_h: "تطبيق الهاتف (Android)",
      card_app_p: "تطبيق أندرويد خفيف وسريع ينزل مباشرة كحزمة تثبيت جاهزة بدون فك ضغط، مع دعم 4K و 60 إطار وإطفاء الشاشة.",
      size_app: "16.8 ميجابايت",
      type_app: "تطبيق أندرويد مباشر (.apk)",
      btn_dl_app: "تحميل تطبيق الهاتف (.apk)",
      faq_kicker: "الدعم والمساعدة",
      faq_title: "الأسئلة الشائعة",
      faq_desc: "إجابات سريعة ومباشرة على استفسارات المستخدمين:",
      q1: "لماذا كابل USB أفضل بكثير من الواي فاي (Wi-Fi)؟",
      a1: "شبكات الواي فاي غير مستقرة وتسبب تأخيراً كبيراً في حركة الشفاه وتقطيعاً في الصورة. كابل الـ USB ينقل الفيديو بشكل سلكي مباشر وفوري بزمن استجابة أقل من 15 مللي ثانية وبأعلى دقة نقية.",
      q2: "الهاتف لم يظهر على شاشة الكمبيوتر، ما الحل؟",
      a2: "تأكد من تفعيل 'تصحيح أخطاء USB (USB Debugging)' من خيارات المطور بالهاتف، واستخدم كابل USB أصلي يدعم نقل البيانات. وعند ظهور رسالة السماح بالاتصال على شاشة الهاتف، اضغط 'سماح دائماً'.",
      q3: "هل يمكنني إطفاء شاشة الهاتف أثناء المكالمات والبث؟",
      a3: "نعم، التطبيق مبرمج ليعمل في الخلفية مع إطفاء الشاشة بدون انقطاع البث، كما يتيح وضع الشاشة السوداء الكاملة (AMOLED Dimmer) لتوفير 70% من طاقة البطارية.",
      q4: "هل البرنامج مجاني؟ وهل توجد علامة مائية على الفيديو؟",
      a4: "البرنامج مجاني بالكامل وبدون أي علامات مائية على الفيديو، وبدون أي إعلانات.",
      dev_kicker: "الدعم المباشر",
      dev_title: "تحتاج مساعدة أو لديك اقتراح؟",
      dev_desc: "للتواصل مع المطور مباشرة عبر تليجرام لأي استفسار أو دعم فني.",
      dev_contact_btn: "للتواصل مع المطور",
      dev_contact_footer: "للتواصل مع المطور: @BlackxMoon1",
      footer_copy: "استوديو كاميرا ويب احترافية عبر USB و Wi-Fi للألعاب والبث المباشر والاجتماعات."
    },
    en: {
      brand_sub: "4K WEBCAM SYSTEM",
      nav_how: "How It Works",
      nav_features: "Features",
      nav_downloads: "Downloads",
      nav_faq: "FAQ",
      nav_btn: "Download",
      hero_badge: "100% Free & No Watermarks",
      hero_title: 'Turn Your Phone into a <span class="text-gradient">4K Pro Webcam</span> for PC',
      hero_lead: "Stream ultra-crisp 4K video over USB or Wi-Fi with zero stutter. Built for Discord, OBS Studio, Zoom, and NVIDIA Broadcast with screen-off AMOLED battery protection.",
      hero_dl_pc: "Download for PC (Windows)",
      hero_dl_pc_sub: "Official Installer • Setup .exe",
      hero_dl_app: "Download for Phone (Android)",
      hero_dl_app_sub: "Direct Install Package • .apk",
      m_latency: "Ultra-Low Latency",
      m_quality: "Cinematic Clarity",
      m_gpu: "GPU Hardware Decode",
      m_conn: "Dual Link Mode",
      compat_label: "Certified & Seamless with:",
      how_kicker: "QUICK START",
      how_title: "Ready in 3 Simple Steps",
      how_desc: "Up and streaming in under two minutes with zero technical hassle:",
      step1_tag: "Desktop",
      step1_h: "Install PC Studio App",
      step1_t: "Download and run <strong>Cam_Moon_Pro_Setup.exe</strong>. It installs the DirectShow virtual camera driver and creates a desktop shortcut automatically.",
      step2_tag: "Mobile",
      step2_h: "Install Android App",
      step2_t: "Download <strong>Cam_Moon_Pro.apk</strong> and tap to install directly. For wired USB streaming, enable <strong>USB Debugging</strong> in Developer Options, or connect via Wi-Fi.",
      step3_tag: "Go Live",
      step3_h: "Connect & Start Streaming",
      step3_t: "Plug in via USB cable or connect over Wi-Fi, open the app, and select <strong>Cam Moon Pro</strong> inside Discord, OBS, or Zoom!",
      feat_kicker: "STUDIO ENGINEERING",
      feat_title: "Why Choose Cam Moon Pro over Wi-Fi Apps?",
      feat_desc: "Engineered from scratch to eliminate the latency and battery drain of legacy webcam apps:",
      f1_title: "Zero-Lag Pipeline (< 15ms)",
      f1_desc: "Direct hardware-encoded USB stream via ADB socket tunneling eliminates Wi-Fi drops and audio/video desync.",
      f2_title: "Screen-Off & Battery Saver",
      f2_desc: "Stream continuously while turning your phone screen completely off. Saves up to 70% battery and prevents overheating.",
      f3_title: "Full Lens & Color Controls",
      f3_desc: "Switch between Ultra-Wide, Wide, and Telephoto lenses remotely from PC, with manual focus, ISO, bokeh blur, and color presets.",
      f4_title: "GPU Hardware Acceleration",
      f4_desc: "Decoded directly on your GPU via NVIDIA NVDEC and DirectX D3D11VA, keeping CPU usage near 0% for games.",
      dl_kicker: "OFFICIAL RELEASES",
      dl_title: "Download Free — No Watermarks, No Ads",
      dl_desc: "Clean, standalone official release. No subscriptions, zero watermarks:",
      card_pc_h: "Windows Desktop Studio",
      card_pc_p: "Complete desktop package with 1-click installer and DirectShow virtual camera driver.",
      lbl_size: "Size",
      lbl_format: "Format",
      size_pc: "~176 MB",
      type_pc: "Standalone Setup .exe",
      btn_dl_pc: "Download Official Setup (.exe)",
      card_app_h: "Android Mobile Client",
      card_app_p: "Lightweight native client delivered directly as a ready-to-install .apk package (no zip extraction) with 4K 60FPS & AMOLED dimmer.",
      size_app: "16.8 MB",
      type_app: "Direct Android Package (.apk)",
      btn_dl_app: "Download Android Client (.apk)",
      faq_kicker: "HELP & SUPPORT",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Quick answers to the most common questions:",
      q1: "Why is USB streaming far better than Wi-Fi?",
      a1: "Wi-Fi connections suffer from packet jitter, latency spikes, and compression artifacts. A direct USB cable provides a rock-solid video tunnel with less than 15ms latency.",
      q2: "My phone isn't detected by PC, how to fix?",
      a2: "Make sure 'USB Debugging' is enabled in Developer Options, use a data-capable USB cable, and tap 'Always allow' when the USB prompt appears on your phone screen.",
      q3: "Can I turn off my phone screen while streaming?",
      a3: "Yes! Cam Moon Pro uses a foreground service with WakeLock and an AMOLED Pitch-Black Dimmer to save up to 70% battery while streaming.",
      q4: "Is the software free? Are there any watermarks?",
      a4: "Yes, 100% free with zero watermarks, subscriptions, or advertisements.",
      dev_kicker: "DIRECT SUPPORT",
      dev_title: "Need help or have a suggestion?",
      dev_desc: "Contact the developer directly on Telegram for support or feedback.",
      dev_contact_btn: "Contact Developer",
      dev_contact_footer: "Contact Developer: @BlackxMoon1",
      footer_copy: "Professional USB & Wi-Fi webcam studio engineered for gaming, streaming, and remote meetings."
    }
  };

  let currentLang = 'ar';
  const langToggleBtn = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function setLanguage(lang) {
    currentLang = lang;
    const isEn = lang === 'en';

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isEn ? 'ltr' : 'rtl');
    document.body.classList.toggle('ltr', isEn);

    if (langLabel) {
      langLabel.textContent = isEn ? 'العربية' : 'English';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });
    if (typeof window.__applyDynamicReleaseState === 'function') {
      window.__applyDynamicReleaseState();
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // ================= 4. AUTO-SYNC LATEST RELEASE (version.json + GitHub Releases) =================
  function parseSemVer(v) {
    const clean = String(v || '').replace(/^[vV]/, '').split('-')[0];
    return clean.split('.').map(n => parseInt(n, 10) || 0);
  }

  function compareSemVer(a, b) {
    const pa = parseSemVer(a);
    const pb = parseSemVer(b);
    const len = Math.max(pa.length, pb.length);
    for (let i = 0; i < len; i++) {
      const da = pa[i] || 0;
      const db = pb[i] || 0;
      if (da !== db) return da > db ? 1 : -1;
    }
    return 0;
  }

  function formatMb(bytes, isEn) {
    if (!bytes || bytes <= 0) return null;
    const mb = bytes / (1024 * 1024);
    const num = mb >= 100 ? Math.round(mb) : mb.toFixed(1);
    return isEn ? `${num} MB` : `${num} ميجابايت`;
  }

  const params = new URLSearchParams(window.location.search);
  const reqPlatform = (params.get('platform') || '').toLowerCase();
  const reqVersion = params.get('v') || '';

  let latestState = {
    version: '',
    pcUrl: '',
    apkUrl: '',
    pcBytes: 0,
    apkBytes: 0,
    notesAr: '',
    notesEn: '',
    notesRaw: ''
  };

  window.__applyDynamicReleaseState = function () {
    const isEn = currentLang === 'en';
    const ver = latestState.version || reqVersion;

    if (ver) {
      document.querySelectorAll('.ver-tag').forEach(tag => {
        tag.textContent = 'v' + ver.replace(/^[vV]/, '');
      });
    }

    if (latestState.pcUrl) {
      const heroPc = document.getElementById('heroPcBtn');
      const cardPc = document.getElementById('cardPcBtn');
      if (heroPc) heroPc.href = latestState.pcUrl;
      if (cardPc) cardPc.href = latestState.pcUrl;
    }
    if (latestState.apkUrl) {
      const heroApp = document.getElementById('heroAppBtn');
      const cardApp = document.getElementById('cardAppBtn');
      if (heroApp) heroApp.href = latestState.apkUrl;
      if (cardApp) cardApp.href = latestState.apkUrl;
    }

    const pcSizeStr = formatMb(latestState.pcBytes, isEn);
    const appSizeStr = formatMb(latestState.apkBytes, isEn);
    const cardPcSize = document.getElementById('cardPcSize');
    const cardAppSize = document.getElementById('cardAppSize');
    if (pcSizeStr && cardPcSize) cardPcSize.textContent = pcSizeStr;
    if (appSizeStr && cardAppSize) cardAppSize.textContent = appSizeStr;

    if (reqPlatform === 'pc' || reqPlatform === 'android') {
      const banner = document.getElementById('updateHighlightBanner');
      const badge = document.getElementById('updateBannerBadge');
      const titleEl = document.getElementById('updateBannerTitle');
      const notesEl = document.getElementById('updateBannerNotes');
      const grid = document.getElementById('dlContainerGrid');
      const pcCard = document.getElementById('downloadCardPc');
      const appCard = document.getElementById('downloadCardApp');
      const pcPill = document.getElementById('pcRecPill');
      const appPill = document.getElementById('appRecPill');

      if (banner && badge && titleEl && notesEl) {
        banner.hidden = false;
        badge.textContent = 'v' + (ver || '1.0.3').replace(/^[vV]/, '');
        titleEl.textContent = isEn
          ? (reqPlatform === 'pc' ? 'Ready to Update Cam Moon Pro for Windows' : 'Ready to Update Cam Moon Pro for Android')
          : (reqPlatform === 'pc' ? 'التحديث الجديد لبرنامج الكمبيوتر جاهز للتحميل' : 'التحديث الجديد لتطبيق الهاتف جاهز للتحميل');
        notesEl.textContent = (isEn ? latestState.notesEn : latestState.notesAr)
          || latestState.notesRaw
          || (isEn ? 'Click the highlighted download button below to get the latest release.' : 'اضغط على زر التحميل المميز بالأسفل لتنزيل أحدث إصدار وتثبيته مباشرة.');
      }

      if (reqPlatform === 'pc' && pcCard && pcPill) {
        pcCard.classList.add('is-highlighted-pc');
        pcPill.hidden = false;
        pcPill.textContent = isEn ? 'Your PC • Latest Update' : 'جهازك الحالي • التحديث الجديد';
      } else if (reqPlatform === 'android' && appCard && appPill) {
        appCard.classList.add('is-highlighted-app');
        appPill.hidden = false;
        appPill.textContent = isEn ? 'Your Phone • Latest Update' : 'هاتفك الحالي • التحديث الجديد';
        if (grid) grid.classList.add('prioritize-app');
      }
    }
  };

  Promise.allSettled([
    fetch('version.json', { cache: 'no-store' }).then(r => (r.ok ? r.json() : null)),
    fetch('https://api.github.com/repos/amrfars/cam-moon-pro/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' }
    }).then(r => (r.ok ? r.json() : null))
  ]).then(([vjRes, ghRes]) => {
    const vj = vjRes.status === 'fulfilled' ? vjRes.value : null;
    const gh = ghRes.status === 'fulfilled' ? ghRes.value : null;

    const vjVer = vj && vj.version ? String(vj.version).replace(/^[vV]/, '') : '';
    const ghVer = gh && !gh.draft && gh.tag_name ? String(gh.tag_name).replace(/^[vV]/, '') : '';

    const ghAssets = Array.isArray(gh && gh.assets) ? gh.assets : [];
    const ghExe = ghAssets.find(a => /\.exe$/i.test(a.name || ''));
    const ghApk = ghAssets.find(a => /\.apk$/i.test(a.name || ''));

    const ghIsNewer = ghVer && (!vjVer || compareSemVer(ghVer, vjVer) > 0);
    const chosenVer = ghIsNewer ? ghVer : (vjVer || ghVer);

    if (chosenVer) latestState.version = chosenVer;

    if (ghIsNewer) {
      latestState.pcUrl = (ghExe && ghExe.browser_download_url) || (gh && gh.html_url) || (vj && vj.pc_download_url) || '';
      latestState.apkUrl = (ghApk && ghApk.browser_download_url) || (vj && vj.android_download_url) || 'downloads/Cam_Moon_Pro.apk';
      latestState.pcBytes = (ghExe && ghExe.size) || 0;
      latestState.apkBytes = (ghApk && ghApk.size) || 0;
      latestState.notesRaw = (gh && gh.body) || '';
    } else if (vj) {
      latestState.pcUrl = (ghExe && ghVer === vjVer && ghExe.browser_download_url) || vj.pc_download_url || '';
      latestState.apkUrl = vj.android_download_url || 'downloads/Cam_Moon_Pro.apk';
      latestState.pcBytes = (ghExe && ghExe.size) || 0;
      latestState.apkBytes = (ghApk && ghApk.size) || 0;
      latestState.notesAr = vj.changelog_ar || '';
      latestState.notesEn = vj.changelog_en || '';
      latestState.notesRaw = (gh && gh.body) || '';
    }

    window.__applyDynamicReleaseState();

    if (reqPlatform === 'pc' || reqPlatform === 'android' || window.location.hash === '#downloads') {
      const dlSec = document.getElementById('downloads');
      if (dlSec) {
        setTimeout(() => dlSec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      }
    }
  });
});
