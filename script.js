const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const backToTop = document.querySelector('.back-to-top');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const countObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = target >= 1000 ? value.toLocaleString() + '+' : value + (target === 10 ? '+' : '');
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
    observer.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));


const translations = {"RUKN AL TAYEB JEWELRY": "ركن الطيب للمجوهرات", "About": "من نحن", "Collections": "المنتجات", "Services": "خدماتنا", "Gallery": "معرض الصور", "Contact": "تواصل معنا", "SHARJAH · UNITED ARAB EMIRATES": "الشارقة · الإمارات العربية المتحدة", "Where Authenticity Meets Luxury": "حيث تلتقي الأصالة بالفخامة", "Premium gold and refined jewelry, presented with trust, quality and exceptional service.": "ذهب فاخر ومجوهرات راقية نقدمها بثقة وجودة وخدمة استثنائية.", "Explore Collections": "تصفح مجموعاتنا", "Contact Us": "تواصل معنا", "ABOUT US": "من نحن", "Our story with gold and luxury": "قصتنا مع الذهب والفخامة", "Rukn Al Tayeb Jewelry is a UAE-based company specializing in the trade of gold and high-end jewelry. We offer an exceptional selection of premium pieces and believe that every piece of jewelry tells a story.": "ركن الطيب للمجوهرات شركة إماراتية متخصصة في تجارة الذهب والمجوهرات الراقية. نقدم مجموعة استثنائية من القطع الفاخرة، ونؤمن بأن كل قطعة مجوهرات تحكي قصة.", "Our philosophy is built on elegant design, uncompromising quality and distinguished customer service. We strive to build lasting relationships through trust, transparency and professional care.": "تقوم فلسفتنا على التصميم الراقي والجودة التي لا تقبل التنازل وخدمة العملاء المتميزة. نسعى إلى بناء علاقات طويلة الأمد من خلال الثقة والشفافية والاحترافية.", "OUR COLLECTIONS": "مجموعاتنا", "Collections that dazzle": "تشكيلات تخطف الأنظار", "Selected for everyday elegance, gifts and life’s most memorable occasions.": "تشكيلات مختارة للأناقة اليومية والهدايا وأجمل مناسبات الحياة.", "Gold Sets & Bracelets": "أطقم ذهب وأساور", "Coordinated sets and bracelets crafted with refined artistry.": "أطقم متناسقة وأساور مصنوعة بحرفية راقية.", "Rings & Bands": "خواتم ودبل", "Classic and contemporary designs for occasions and daily wear.": "تصاميم كلاسيكية وعصرية للمناسبات والاستخدام اليومي.", "Chains & Earrings": "سلاسل وأقراط", "Distinctive pieces in elegant designs and varied weights.": "قطع مميزة بتصاميم أنيقة وأوزان متنوعة.", "OUR SERVICES": "خدماتنا", "More than just jewelry": "نقدم أكثر من مجرد مجوهرات", "Professional support from selection to after-sales care.": "دعم احترافي من اختيار القطعة حتى خدمة ما بعد البيع.", "Custom Design": "تصميم حسب الطلب", "Unique pieces created according to your taste and requirements.": "قطع فريدة تُصمم وفق ذوقك ومتطلباتك.", "Repair & Maintenance": "إصلاح وصيانة", "Professional repair, polishing and maintenance by skilled specialists.": "خدمات إصلاح وتلميع وصيانة بأيدي متخصصين.", "Gold Valuation": "تقييم الذهب", "Accurate and transparent valuation based on daily market prices.": "تقييم دقيق وشفاف وفق أسعار السوق اليومية.", "Gift Wrapping": "تغليف الهدايا", "Luxurious presentation suitable for every special occasion.": "تغليف فاخر يليق بكل مناسبة خاصة.", "Free Consultation": "استشارة مجانية", "Guidance to help you choose the right piece for your taste and budget.": "إرشاد لاختيار القطعة المناسبة لذوقك وميزانيتك.", "After-Sales Service": "خدمة ما بعد البيع", "Continuous follow-up and care for your peace of mind.": "متابعة مستمرة واهتمام يمنحك راحة البال.", "Years of Experience": "سنوات خبرة", "Happy Clients": "عميل سعيد", "Designs": "تصميم", "Gold Karats": "عيارات ذهب", "PHOTO GALLERY": "معرض الصور", "A glimpse of our world": "لمحة من عالمنا", "Our showroom and collections reflect the elegance we uphold in every detail.": "يعكس معرضنا وتشكيلاتنا مستوى الأناقة والاحترافية التي نلتزم بها في كل تفصيل.", "CONTACT US": "تواصل معنا", "Visit Rukn Al Tayeb Jewelry": "زوروا ركن الطيب للمجوهرات", "Al Majaz Central Market, Sharjah, United Arab Emirates.": "السوق المركزي – المجاز، الشارقة، الإمارات العربية المتحدة.", "📍 Visit Our Store": "📍 زيارة متجرنا", "Phone": "الهاتف", "Email": "البريد الإلكتروني", "Instagram": "إنستجرام", "WhatsApp": "واتساب", "Working Hours": "ساعات العمل", "Sun–Thu & Sat: 9:00 AM–11:00 PM": "الأحد–الخميس والسبت: 9 صباحًا–11 مساءً", "Fri: 4:00 PM–11:00 PM": "الجمعة: 4 عصرًا–11 مساءً", "© 2026 Rukn Al Tayeb Jewelry L.L.C": "© 2026 ركن الطيب للمجوهرات ذ.م.م", "Shop": "تسوق", "Shop on WhatsApp": "تسوق عبر واتساب", "SHOP BY WHATSAPP": "تسوق عبر واتساب", "Featured jewelry": "مجوهرات مختارة", "Choose a piece and send us a ready-made WhatsApp inquiry.": "اختر القطعة وأرسل لنا استفسارًا جاهزًا عبر واتساب.", "Gold Set": "طقم ذهب", "Elegant Gold Set": "طقم ذهب أنيق", "Premium design for special occasions.": "تصميم فاخر للمناسبات الخاصة.", "Ask on WhatsApp": "استفسر عبر واتساب", "Bracelets": "أساور", "Luxury Bracelets": "أساور فاخرة", "Refined designs with distinctive details.": "تصاميم راقية بتفاصيل مميزة.", "Rings & Earrings": "خواتم وأقراط", "Classic Collection": "التشكيلة الكلاسيكية", "Timeless pieces for gifts and daily elegance.": "قطع خالدة للهدايا والأناقة اليومية."};

const originalTexts = new WeakMap();
const langSwitch = document.getElementById('langSwitch');

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function setLanguage(language) {
  const arabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';

  document.querySelectorAll('a, span, p, h1, h2, h3, strong, footer div').forEach(el => {
    if (el.children.length > 0) return;

    if (!originalTexts.has(el)) {
      originalTexts.set(el, normalizeText(el.textContent));
    }

    const english = originalTexts.get(el);
    el.textContent = arabic && translations[english] ? translations[english] : english;
  });

  langSwitch.textContent = arabic ? 'English' : 'العربية';
  langSwitch.setAttribute('aria-label', arabic ? 'Switch to English' : 'التبديل إلى العربية');
  localStorage.setItem('siteLanguage', language);
}

langSwitch.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
});

setLanguage(localStorage.getItem('siteLanguage') || 'en');
