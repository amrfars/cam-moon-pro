/**
 * Cam Moon Pro — Clean UI Controller
 * - 100% Full Bilingual System (Arabic RTL / English LTR)
 * - Single-click FAQ toggling
 */

document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. FAQ ACCORDION =================
  const faqBoxes = document.querySelectorAll('.faq-box');
  faqBoxes.forEach(box => {
    const btn = box.querySelector('.faq-btn');
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

  // ================= 2. INTERACTIVE STUDIO CONTROLS =================
  const lensBtns = document.querySelectorAll('.lens-switch-btn');
  lensBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lensBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const presetPills = document.querySelectorAll('.preset-pill');
  presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      presetPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // ================= 2. COMPLETE BILINGUAL TRANSLATION =================
  const translations = {
    ar: {
      brand_sub: "STUDIO WEBCAM",
      nav_how: "طريقة التشغيل",
      nav_features: "المميزات",
      nav_downloads: "التحميل",
      nav_faq: "الأسئلة الشائعة",
      nav_btn: "تحميل البرنامج",
      hero_title: 'حوّل هاتفك إلى <span class="text-cyan">كاميرا ويب 4K</span> احترافية للكمبيوتر',
      hero_lead: "بث فيديو سينمائي مباشر فائق النقاء عبر كابل الـ USB مباشرة وبدون تقطيع الواي فاي. متوافق بنسبة 100% مع Discord و OBS Studio و Zoom و NVIDIA Broadcast، مع إمكانية إطفاء شاشة الهاتف لحماية البطارية.",
      hero_dl_pc: "تحميل للكمبيوتر (Windows)",
      hero_dl_pc_sub: "ملف تثبيت رسمي فوري • Setup .exe",
      hero_dl_app: "تحميل للهاتف (Android)",
      hero_dl_app_sub: "تطبيق الهاتف المباشر • App .apk",
      compat_label: "متوافق ومعتمد من:",
      studio_conn: "متصل عبر USB 3.0",
      hud_stream_active: "البث المباشر نشط",
      hud_codec_tag: "NVIDIA NVDEC • 0% CPU",
      hud_af: "تركيز تلقائي ذكي • تتبع الوجه",
      lens_wide: "0.5x واسعة جداً",
      lens_main: "1x العدسة الرئيسية",
      lens_tele: "3x تقريب سينمائي",
      toggle_dimmer: "إطفاء الشاشة (AMOLED)",
      toggle_grid: "الشبكة",
      insp_title: "لوحة التحكم بالبث",
      insp_direct: "سلكي مباشر",
      ctrl_focus: "التركيز البؤري (Focus)",
      ctrl_auto: "تلقائي (AF-C)",
      ctrl_iso: "حساسية الضوء (ISO)",
      ctrl_presets: "الفلاتر السينمائية",
      p_cinematic: "Cinematic Pro",
      p_studio: "Clean Studio",
      p_hdr: "Vivid HDR",
      route_target: "الكاميرا الافتراضية للويندوز",
      route_sub: "Discord, OBS, Zoom, Teams",
      route_active: "نشط (NV12)",
      phone_battery: "حرارة وبطارية الهاتف",
      phone_status: "98% • شاشة مطفأة • 31°C",
      route_cool: "مثالي",
      how_title: "طريقة التشغيل في 3 خطوات بسيطة",
      how_desc: "بدون تعقيد وبدون الحاجة لخبرة تقنية، جهّز الكاميرا في أقل من دقيقتين:",
      step1_h: "ثبّت برنامج الكمبيوتر",
      step1_t: "حمّل ملف <strong>Cam_Moon_Pro_Setup.exe</strong> وشغّله. سيقوم البرنامج بتهيئة وتثبيت كاميرا الويندوز الافتراضية وصنع اختصار لسطح المكتب بضغطة زر واحدة.",
      step2_h: "فعّل تصحيح USB بالهاتف",
      step2_t: "من إعدادات هاتفك، ادخل إلى 'حول الهاتف' واضغط 7 مرات على 'رقم الإصدار'، ثم ادخل على 'خيارات المطور' وفعّل خيار <strong>تصحيح أخطاء USB (USB Debugging)</strong>.",
      step3_h: "وصّل الكابل وابدأ البث",
      step3_t: "وصّل الهاتف بالكمبيوتر عبر كابل USB وشغّل التطبيق والبرنامج. ثم افتح Discord أو OBS أو Zoom واختر كاميرا <strong>Cam Moon Pro</strong> من قائمة الكاميرات!",
      feat_title: "لماذا Cam Moon Pro أفضل من برامج الواي فاي؟",
      feat_desc: "أداء هندسي حقيقي يقضي على جميع عيوب تطبيقات الكاميرا التقليدية:",
      f1_title: "تأخير معدوم (< 15ms)",
      f1_desc: "نقل بيانات سلكي مباشر عبر كابل USB لا يتأثر بتذبذب الواي فاي، لتحصل على تزامن فوري وحقيقي مع حركة الشفاه.",
      f2_title: "إطفاء الشاشة وتوفير البطارية",
      f2_desc: "خاصية AMOLED Dimmer تطفئ شاشة هاتفك تماماً أثناء البث، مما يوفر 70% من طاقة البطارية ويمنع سخونة الهاتف نهائياً.",
      f3_title: "تحكم كامل بالعدسات والألوان",
      f3_desc: "تحكم من جهاز الكمبيوتر في التبديل بين العدسة الواسعة والتقريب، مع ضبط الفوكس اليدوي والـ ISO وفلاتر الألوان السينمائية.",
      f4_title: "تسريع كرت الشاشة (0% معالج)",
      f4_desc: "فك تشفير الصورة يتم عبر شريحة كرت الشاشة GPU (NVDEC / DirectX)، ليبقى معالج جهازك حراً بالكامل للألعاب والبث.",
      dl_title: "تحميل البرنامج مجاناً وبدون قيود",
      dl_desc: "بدون إعلانات وبدون علامة مائية على الفيديو. حمّل الإصدار الرسمي:",
      card_pc_h: "برنامج الكمبيوتر (Windows)",
      card_pc_p: "ملف تثبيت رسمي واحد يحتوي على البرنامج الكامل وتعريف كاميرا الويندوز الافتراضية DirectShow.",
      size_pc: "الحجم: ~145 ميجابايت",
      type_pc: "النوع: Setup .exe تنفيذي",
      btn_dl_pc: "تحميل التثبيت الرسمي (.exe)",
      card_app_h: "تطبيق الهاتف (Android)",
      card_app_p: "تطبيق أندرويد خفيف وسريع، يدعم دقة 4K و 60 إطار في الثانية، وخاصية البث أثناء إطفاء الشاشة.",
      size_app: "الحجم: 17 ميجابايت",
      type_app: "النوع: تطبيق أندرويد (.apk)",
      btn_dl_app: "تحميل تطبيق الهاتف (.apk)",
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
      footer_copy: "استوديو كاميرا ويب احترافية عبر USB للألعاب والبث المباشر والاجتماعات."
    },
    en: {
      brand_sub: "STUDIO WEBCAM",
      nav_how: "How It Works",
      nav_features: "Features",
      nav_downloads: "Downloads",
      nav_faq: "FAQ",
      nav_btn: "Get Started",
      hero_title: 'Turn Your Phone into a <span class="text-cyan">4K Pro Webcam</span> for PC',
      hero_lead: "Direct wired 4K video streaming over USB with zero Wi-Fi stutter. 100% certified for Discord, OBS Studio, Zoom, and NVIDIA Broadcast with screen-off battery saving.",
      hero_dl_pc: "Download for PC (Windows)",
      hero_dl_pc_sub: "Official 1-Click Installer • Setup .exe",
      hero_dl_app: "Download for Phone (Android)",
      hero_dl_app_sub: "Direct Mobile App • App .apk",
      compat_label: "Certified & Seamless with:",
      studio_conn: "USB 3.0 Connected",
      hud_stream_active: "LIVE STREAM ACTIVE",
      hud_codec_tag: "NVIDIA NVDEC • 0% CPU",
      hud_af: "SMART AUTO-FOCUS • FACE TRACKING",
      lens_wide: "0.5x Ultra-Wide",
      lens_main: "1x Main Lens",
      lens_tele: "3x Telephoto",
      toggle_dimmer: "AMOLED Screen-Off",
      toggle_grid: "Grid",
      insp_title: "STREAM CONTROLS",
      insp_direct: "WIRED USB",
      ctrl_focus: "Focus Tracking",
      ctrl_auto: "Auto (AF-C)",
      ctrl_iso: "Exposure (ISO)",
      ctrl_presets: "Studio Presets",
      p_cinematic: "Cinematic Pro",
      p_studio: "Clean Studio",
      p_hdr: "Vivid HDR",
      route_target: "Windows Virtual Camera",
      route_sub: "Discord, OBS, Zoom, Teams",
      route_active: "Active (NV12)",
      phone_battery: "Phone Battery & Temp",
      phone_status: "98% • Screen Off • 31°C",
      route_cool: "Optimal",
      how_title: "Quick 3-Step Setup",
      how_desc: "Up and streaming in under two minutes with zero technical hassle:",
      step1_h: "Install PC Studio App",
      step1_t: "Download and run <strong>Cam_Moon_Pro_Setup.exe</strong>. It installs the DirectShow virtual camera driver and creates a desktop shortcut in seconds.",
      step2_h: "Enable USB Debugging on Phone",
      step2_t: "On your phone, go to Settings &rarr; About Phone &rarr; tap Build Number 7 times, then go to Developer Options and toggle <strong>USB Debugging</strong> ON.",
      step3_h: "Plug In & Start Streaming",
      step3_t: "Connect your phone via USB cable, open the mobile app and desktop studio. Select <strong>Cam Moon Pro</strong> in Discord, OBS, or Zoom!",
      feat_title: "Why Choose Cam Moon Pro over Wi-Fi Apps?",
      feat_desc: "Engineered from scratch to eliminate the latency and battery drain of legacy webcam apps:",
      f1_title: "Zero-Lag Pipeline (< 15ms)",
      f1_desc: "Direct hardware-encoded USB stream via ADB socket tunneling. Eliminates Wi-Fi drops and audio/video desync.",
      f2_title: "Screen-Off & Battery Saver",
      f2_desc: "Stream continuously while turning your phone screen completely off. Saves up to 70% battery and prevents overheating.",
      f3_title: "Full Lens & Color Controls",
      f3_desc: "Switch between Ultra-wide, Wide, and Telephoto lenses remotely from PC. Control manual focus, ISO, and color presets.",
      f4_title: "GPU Hardware Acceleration",
      f4_desc: "Decoded straight on your GPU via NVIDIA NVDEC and DirectX D3D11VA, keeping CPU usage near 0% for games and apps.",
      dl_title: "Download Free — No Watermarks, No Ads",
      dl_desc: "Clean, standalone official release. No subscriptions, zero watermarks:",
      card_pc_h: "Windows Desktop Studio",
      card_pc_p: "Complete desktop package with 1-click installer and DirectShow virtual camera driver.",
      size_pc: "Size: ~145 MB",
      type_pc: "Format: Standalone Setup .exe",
      btn_dl_pc: "Download Official Setup (.exe)",
      card_app_h: "Android Mobile Client",
      card_app_p: "Ultra-lightweight native client with AMOLED dimmer, 4K 60FPS support, and background streaming.",
      size_app: "Size: 17 MB",
      type_app: "Format: Direct Android .apk",
      btn_dl_app: "Download Android Client (.apk)",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Quick answers to the most common questions:",
      q1: "Why is USB streaming far better than Wi-Fi?",
      a1: "Wi-Fi connections suffer from packet jitter, heavy latency spikes, and image compression artifacts. A direct USB cable provides an uncompressed, rock-solid video tunnel with less than 15ms latency.",
      q2: "My phone isn't detected by PC, how to fix?",
      a2: "Make sure 'USB Debugging' is enabled in Developer Options, use a quality USB cable that supports data transfer (not charge-only), and tap 'Always allow' when the USB prompt appears on your phone screen.",
      q3: "Can I turn off my phone screen while streaming?",
      a3: "Yes! Cam Moon Pro uses a foreground sticky service with WakeLock. You can lock or turn off your screen completely, or use the AMOLED Pitch-Black Dimmer to save 70% battery while streaming.",
      q4: "Is the software free? Are there any watermarks?",
      a4: "Yes, 100% free and open without any video watermarks, subscription fees, or advertisements.",
      footer_copy: "Professional USB webcam studio engineered for gaming, streaming, and remote meetings."
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

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  // ================= 3. AUTO-LOAD LATEST VERSION FROM VERSION.JSON =================
  fetch('version.json')
    .then(res => res.json())
    .then(data => {
      if (data && data.version) {
        document.querySelectorAll('.ver-tag').forEach(tag => {
          tag.textContent = 'v' + data.version;
        });
      }
    })
    .catch(() => {
      // Offline or local file fallback, default HTML tags remain intact
    });

});
