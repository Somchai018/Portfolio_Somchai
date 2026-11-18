/* =====================================================================
   PortFolio 2026 — script.js (สมบูรณ์และปรับสมดุลเลย์เอาต์)
   ===================================================================== */
(function () {
  'use strict';

  var DEFAULT_DATA = {
    profile: {
      name: 'สมชาย แซ่หง',
      nameZh: 'Hong Yun Shan',
      lead: 'สมชาย แซ่หง — นักศึกษา ปวส.1 สาขาเทคโนโลยีสารสนเทศ (IT401) วิทยาลัยเทคโนโลยีพายัพและบริหารธุรกิจ อายุ 23 ปี ' +
            'พัฒนาเว็บ มินิเกม ถ่ายภาพคน และสอนภาษาจีนมาแล้ว 4 ปี',
      aboutNote: 'ชื่อเล่น Sang · อายุ 23 ปี · ปวส.1 พายัพ · สอนภาษาจีน 4 ปี',
      bio: [
        'อายุ 23 ปี เรียนที่วิทยาลัยเทคโนโลยีพายัพและบริหารธุรกิจ ตั้งแต่ ปวช.1 ถึง ปวช.3 แล้วต่อ ปวส.1 ' +
        'ระหว่างเรียนก็เริ่มพัฒนาเว็บแอปพลิเคชัน มินิเกม และรับงานถ่ายภาพไปด้วย เพราะงานทั้งสองอย่างแก้ปัญหาเดียวกัน: ' +
        'จัดลำดับสิ่งที่ตาเห็น ให้คนอ่านและใช้งานได้ง่ายขึ้น',
        'สอนภาษาจีนมาแล้ว 4 ปี เริ่มจากติวการบ้านให้เพื่อนแลกกับข้าวมื้อเย็น จากนั้นค่อยรับสอนจริงจัง ' +
        'ทั้งตัวต่อตัวและกลุ่มเล็ก ตั้งแต่ผู้เริ่มต้นจนถึงระดับ HSK 4',
        'ช่วง ปวช.3 ได้ฝึกงานที่ฝ่ายไอทีของโรงพยาบาล ดูแลเครื่อง ติดตั้งโปรแกรม และซัพพอร์ตผู้ใช้หน้างาน ' +
        'ปัจจุบันแบ่งเวลาเป็นสามก้อน: เรียน พัฒนาเว็บ–มินิเกม–ถ่ายภาพ และสอนภาษาจีน'
      ],
      email: 'cchai3058@gmail.com',
      phone: '+66 80 981 0377',
      ig: 'a_sang_na',
      city: 'เชียงใหม่',
      contactLine: 'ส่งโจทย์งานเว็บ มินิเกม ถ่ายภาพ หรือถามเรื่องเรียนจีนมาทางอีเมลหรือ IG (@a_sang_na) ได้เลย ' +
                   'ถ้าต้องการคุยเร็ว ๆ โทรมาช่วงเย็นหลังเลิกเรียน'
    },

    roles: [
      { k: 'พัฒนาเว็บ & มินิเกม', d: 'HTML · CSS · JavaScript · GitHub Pages', y: '2022–ปัจจุบัน' },
      { k: 'ภาพถ่าย', d: 'ภาพคน · แสงธรรมชาติ · แต่งรูปเอง', y: '2022–ปัจจุบัน' },
      { k: 'สอนภาษาจีน', d: 'ผู้เริ่มต้นถึง HSK 4 · ตัวต่อตัวและกลุ่มเล็ก', y: '2022–ปัจจุบัน' }
    ],

    /* ส่วนผลงาน: ตัดส่วนเกินออก เหลือแต่มินิเกม และวิดีโอ YouTube ที่สมบูรณ์ */
    works: [
      {
        title: 'Chinese Culture Boardgame (มินิเกมวัฒนธรรมจีน)',
        kind: 'GitHub Mini-Game / JavaScript · Web App',
        year: '2026',
        desc: 'มินิเกมเว็บแอปพลิเคชันจำลองบอร์ดเกมวัฒนธรรมจีน พัฒนาด้วย HTML/CSS/JS และโฮสต์ผ่าน GitHub Pages สามารถคลิกเล่นสดในหน้าเว็บนี้ได้ทันที!',
        src: 'assets/mini game.jpg',
        githubUrl: 'https://github.com/Somchai018/chinese-culture-boardgame.git',
        demoUrl: 'https://somchai018.github.io/chinese-culture-boardgame/'
      },
      {
        title: 'วิดีโอผลงานชิ้นที่ 1 (วัฒนธรรมจีนและการเรียนรู้)',
        kind: 'YouTube / วิดีโอแนะนำผลงาน',
        year: '2026',
        desc: 'นำเสนอผลงานและโปรเจกต์ผ่านช่องทาง YouTube สามารถกดคลิกเพื่อดูวิดีโอเต็มจอในหน้าเว็บได้ทันที',
        youtubeUrl: 'https://youtu.be/bLiOnnJRuvE'
      },
      {
        title: 'วิดีโอผลงานชิ้นที่ 2 (พัฒนาการเว็บและมินิเกม)',
        kind: 'YouTube / เดโมโปรเจกต์',
        year: '2026',
        desc: 'คลิปวิดีโอแสดงการทำงานและฟีเจอร์ของระบบเว็บและมินิเกมที่พัฒนาขึ้น',
        youtubeUrl: 'https://youtu.be/6QRgHNR_trc'
      },
      {
        title: 'วิดีโอผลงานชิ้นที่ 3 (เบื้องหลังงานถ่ายภาพและสื่อการสอน)',
        kind: 'YouTube / เบื้องหลังงานสร้างสรรค์',
        year: '2026',
        desc: 'รวมคลิปวิดีโอเบื้องหลังการถ่ายภาพและการจัดทำสื่อการสอนภาษาจีน',
        youtubeUrl: 'https://youtu.be/RHnbPXy94Pg'
      }
    ],

    /* ใช้กรอบ 3:2 ในแกลเลอรีและเก็บภาพเต็มไว้ใน Lightbox */
    photos: [
      {
        title: 'บรรยากาศสถานีรถไฟยามเย็น',
        meta: 'Photo Portfolio · 2026',
        src: 'assets/ผลงาน1.jpg',
        thumb: 'assets/thumbnails/ผลงาน1.webp'
      },
      {
        title: 'สถาปัตยกรรมและท้องฟ้าสีคราม',
        meta: 'Photo Portfolio · 2026',
        src: 'assets/ผลงาน2.jpg',
        thumb: 'assets/thumbnails/ผลงาน2.webp'
      },
      {
        title: 'ทัศนียภาพยอดเขาและสายหมอก',
        meta: 'Photo Portfolio · 2026',
        src: 'assets/ผลงาน3.jpg',
        thumb: 'assets/thumbnails/ผลงาน3.webp'
      },
      {
        title: 'ช่างภาพในกิจกรรมเปิดโลกการเรียนรู้',
        meta: 'กิจกรรมวิทยาลัย',
        src: 'assets/canva-activity-open-day.jpg'
      },
      {
        title: 'จิตอาสาทำความสะอาดหลังน้ำท่วม',
        meta: 'กิจกรรมจิตอาสา',
        src: 'assets/canva-activity-flood-cleanup.png'
      },
      {
        title: 'ทัศนศึกษาที่ PDKM',
        meta: 'กิจกรรมทัศนศึกษา',
        src: 'assets/canva-activity-field-trip.png'
      },
      {
        title: 'กิจกรรม 5ส. ทำความสะอาด',
        meta: 'กิจกรรมวิทยาลัย',
        src: 'assets/canva-activity-five-s.jpg'
      },
      {
        title: 'กิจกรรมวันคริสต์มาส',
        meta: 'กิจกรรมวิทยาลัย',
        src: 'assets/canva-activity-christmas.png'
      },
      {
        title: 'กิจกรรมกีฬาสี',
        meta: 'กิจกรรมวิทยาลัย',
        src: 'assets/canva-activity-sports-day.jpg'
      },
      {
        title: 'กิจกรรมวันตรุษจีน',
        meta: 'กิจกรรมวิทยาลัย',
        src: 'assets/canva-activity-chinese-new-year.jpg'
      },
      {
        title: 'ช่างภาพในกิจกรรมวันไหว้ครู',
        meta: 'กิจกรรมวิทยาลัย',
        src: 'assets/canva-activity-wai-khru.png'
      }
    ],

    skills: [
      { group: 'การออกแบบเว็บไซต์', name: 'โครงหน้าและลำดับข้อมูล', note: 'Layout · wireframe · 12-col grid', lv: 'ใช้ประจำ', pct: 82 },
      { group: 'การออกแบบเว็บไซต์', name: 'UI / UX', note: 'Figma · ปุ่ม · เส้นนำสายตา', lv: 'ใช้ประจำ', pct: 75 },
      { group: 'การออกแบบเว็บไซต์', name: 'ตัวอักษรบนเว็บ', note: 'ฟอนต์ไทย–อังกฤษ · ลำดับชั้น', lv: 'ใช้ประจำ', pct: 78 },
      { group: 'ภาษาโค้ดและระบบ', name: 'HTML & CSS', note: 'Semantic tag · Grid · Responsive', lv: 'เชี่ยวชาญ', pct: 92 },
      { group: 'ภาษาโค้ดและระบบ', name: 'JavaScript & Mini-Games', note: 'DOM · เกมเพลย์ · PWA', lv: 'เชี่ยวชาญ', pct: 85 },
      { group: 'ภาษาโค้ดและระบบ', name: 'Node.js & SQLite', note: 'Express · REST API · Database', lv: 'ใช้ประจำ', pct: 72 },
      { group: 'ภาพถ่าย', name: 'ถ่ายภาพคน', note: 'Portrait · แสงธรรมชาติ', lv: 'เชี่ยวชาญ', pct: 90 },
      { group: 'ภาพถ่าย', name: 'แต่งรูป', note: 'Lightroom / Photoshop', lv: 'ใช้ประจำ', pct: 78 },
      { group: 'ภาพถ่าย', name: 'สถาปัตยกรรมและทิวทัศน์', note: 'Architecture · landscape', lv: 'ใช้ประจำ', pct: 74 },
      { group: 'ภาษาจีน', name: 'ภาษาจีนกลาง', note: 'สนทนา · อ่าน–เขียน', lv: 'เชี่ยวชาญ', pct: 92 },
      { group: 'ภาษาจีน', name: 'สอนภาษาจีน', note: '4 ปี · HSK 1–4', lv: 'เชี่ยวชาญ', pct: 100 },
      { group: 'ภาษาจีน', name: 'แปล ไทย ↔ จีน', note: 'เอกสาร · เนื้อหาการสอน', lv: 'ใช้ประจำ', pct: 75 }
    ],

    timeline: [
      { y: '2019', t: 'เริ่มเรียนภาษาจีน', d: 'เริ่มจากคำศัพท์วันละสิบคำ และติวให้เพื่อนในห้อง' },
      { y: '2022', t: 'เข้า ปวช.1 · เริ่มสอนจีน', d: 'รับสอนตัวต่อตัวครั้งแรก เปิดห้องเรียนเล็ก ๆ ให้รุ่นน้อง' },
      { y: '2024', t: 'ฝึกงานฝ่ายไอที โรงพยาบาล', d: 'ติดตั้งเครื่อง ซัพพอร์ตผู้ใช้ และแก้ปัญหาหน้างาน' },
      { y: '2025', t: 'จบ ปวช.3 · ต่อ ปวส.1', d: 'เรียนต่อสาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีพายัพและบริหารธุรกิจ' },
      { y: '2026', t: 'ปัจจุบัน · อายุ 23 ปี', d: 'รับงานพัฒนาเว็บ มินิเกม ถ่ายภาพ และสอนภาษาจีน ควบคู่กับการเรียน', now: true }
    ],

    facts: [
      { h: 'เครื่องมือเว็บ & โค้ด', items: ['VS Code · Figma · GitHub Pages', 'HTML · CSS · JS (Mini-Games)'] },
      { h: 'งานภาพ', items: ['Photoshop · Lightroom', 'Nikon D7100', 'ภาพคน · สถาปัตยกรรม'] },
      { h: 'ภาษา', items: ['ไทย — เจ้าของภาษา', 'จีนกลาง — ใช้สอน (HSK 1–4)', 'อังกฤษ — อ่านเอกสารเทคนิค'] }
    ],

    highlights: [
      {
        eyebrow: '01 / ACHIEVEMENT',
        title: 'รางวัลและเกียรติบัตร',
        items: [
          'รางวัลชนะเลิศการแข่งขันสร้างเว็บไซต์ด้วย Adobe Dreamweaver CS6',
          'เกียรติบัตรเข้าร่วมกิจกรรม ComHub ด้านดิจิทัล'
        ],
        images: [
          {
            src: 'assets/canva-award-poster.png',
            alt: 'ภาพประกาศผลการแข่งขันสร้างเว็บไซต์ด้วย Adobe Dreamweaver CS6',
            caption: 'ประกาศผลการแข่งขัน'
          },
          {
            src: 'assets/canva-award-certificate.png',
            alt: 'เกียรติบัตรการแข่งขันทักษะการสร้างเว็บไซต์',
            caption: 'เกียรติบัตร · Dreamweaver CS6'
          },
          {
            src: 'assets/canva-comhub-certificate.png',
            alt: 'เกียรติบัตรเข้าร่วมกิจกรรม ComHub',
            caption: 'เกียรติบัตร · ComHub'
          }
        ]
      },
      {
        eyebrow: '02 / PROJECTS',
        title: 'โครงงานและการออกแบบ',
        items: [
          'เว็บไซต์ประเพณีแต่ละภาค',
          'เว็บไซต์สอนภาษาจีน',
          'ออกแบบแอปพลิเคชันบนมือถือ'
        ],
        images: [
          {
            src: 'assets/canva-project-traditions.png',
            alt: 'ภาพตัวอย่างหน้าเว็บไซต์โครงงานประเพณีแต่ละภาค',
            caption: 'หน้าเว็บไซต์โครงงาน'
          },
          {
            src: 'assets/canva-project-code.png',
            alt: 'ภาพโค้ดจากโครงงานเว็บไซต์ประเพณีแต่ละภาค',
            caption: 'ตัวอย่างโค้ด'
          },
          {
            src: 'assets/canva-project-chinese-site.png',
            alt: 'ภาพตัวอย่างเว็บไซต์สอนภาษาจีน',
            caption: 'เว็บไซต์สอนภาษาจีน'
          },
          {
            src: 'assets/canva-project-app-overview.png',
            alt: 'ภาพรวมหน้าจอแอปพลิเคชันบนมือถือ',
            caption: 'ภาพรวมแบบร่างแอป'
          },
          {
            src: 'assets/canva-project-app-screen.png',
            alt: 'หน้าจอแอปพลิเคชัน C.A.R.E.',
            caption: 'หน้าจอแอป C.A.R.E.'
          }
        ]
      },
      {
        eyebrow: '03 / ACTIVITIES',
        title: 'กิจกรรมที่เข้าร่วม',
        items: [
          'ช่างภาพในกิจกรรมเปิดโลกการเรียนรู้และวันไหว้ครู',
          'จิตอาสาทำความสะอาดโรงเรียนหลังน้ำท่วม',
          'ทัศนศึกษา · 5ส. · คริสต์มาส · กีฬาสี · วันตรุษจีน'
        ]
      },
      {
        eyebrow: '04 / INTERESTS',
        title: 'ความสนใจส่วนตัว',
        items: [
          'อ่านหนังสือ · ดูข่าวและภาพยนตร์',
          'เล่นเกม · พูดคุยแลกเปลี่ยนกับผู้คน'
        ]
      }
    ]
  };

  var data = DEFAULT_DATA;
  var gallery = { list: [], index: 0, returnFocus: null };
  var activeSkillSceneIndex = 0;

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  var attr = esc;
  function $(id) { return document.getElementById(id); }

  function toast(msg) {
    var el = $('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove('on'); }, 2800);
  }

  function extractYouTubeId(url) {
    if (!url) return null;
    var reg = /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
    var m = String(url).match(reg);
    return m ? m[1] : null;
  }

  function mediaMarkup(src, ratio, alt, badgeText, isMediaEmbed) {
    var badge = badgeText
      ? '<span class="media-badge' + (badgeText === 'YouTube' || badgeText === 'GitHub Game' ? ' yt' : '') + '">' + esc(badgeText) + '</span>'
      : '';
    var play = isMediaEmbed
      ? '<span class="play-overlay" aria-hidden="true"><span class="play-icon"></span></span>'
      : '';
    return '<div class="media" data-src="' + attr(src) + '" data-ratio="' + attr(ratio) + '"' +
      ' data-alt="' + attr(alt) + '">' +
      badge + play +
      '<span class="media-note mono">' + esc(src) + '</span></div>';
  }

  function mountMedia(scope) {
    var nodes = (scope || document).querySelectorAll('.media[data-src]');
    Array.prototype.forEach.call(nodes, function (el) {
      if (el.dataset.mounted) return;
      el.dataset.mounted = '1';
      var ratio = el.getAttribute('data-ratio');
      if (ratio) el.style.setProperty('--r', ratio.replace('/', ' / '));

      var src = el.getAttribute('data-src');
      var img = new Image();
      img.alt = el.getAttribute('data-alt') || '';
      img.decoding = 'async';
      img.loading = el.getBoundingClientRect().top < window.innerHeight * 1.5 ? 'eager' : 'lazy';
      img.onload = function () {
        el.classList.add('has-img');
      };
      var usedFallback = false;
      img.onerror = function () {
        if (!usedFallback && src.indexOf('hqdefault.jpg') !== -1) {
          usedFallback = true;
          img.src = src.replace('hqdefault.jpg', '0.jpg');
          return;
        }
        img.remove();
        el.classList.add('is-empty');
      };
      el.appendChild(img);
      img.src = src;
    });
  }

  function carouselSlideState(index, activeIndex, length) {
    if (index === activeIndex) return 'is-active';
    if (length > 2 && index === (activeIndex - 1 + length) % length) return 'is-prev';
    if (index === (activeIndex + 1) % length) return 'is-next';
    return 'is-hidden';
  }

  function renderImageCarousel(items, kind, label, indexOffset) {
    if (!items || !items.length) return '';
    var first = items[0];
    var galleryClass = kind === 'photos' ? 'photo-carousel' : 'highlight-carousel';
    var slides = items.map(function (item, index) {
      var title = item.caption || item.title || label;
      var alt = item.alt || title;
      return '<button class="gallery-slide ' + carouselSlideState(index, 0, items.length) +
        '" type="button" data-gallery="' + kind + '" data-index="' + (indexOffset + index) +
        '" data-caption="' + attr(title) + '" data-meta="' + attr(item.meta || '') +
        '" aria-label="เปิดภาพขนาดเต็ม: ' + attr(title) + '">' +
        mediaMarkup(item.thumb || item.src, '3/2', alt, '', false) +
        '<span class="gallery-slide-open mono" aria-hidden="true">ดูภาพเต็ม ↗</span>' +
      '</button>';
    }).join('');
    var firstTitle = first.caption || first.title || label;
    var disabled = items.length < 2 ? ' disabled' : '';

    return '<div class="gallery-carousel ' + galleryClass + '" data-carousel="' + kind +
      '" data-index="0" role="region" aria-roledescription="แกลเลอรี" aria-label="' + attr(label) + '">' +
      '<div class="gallery-stage">' + slides + '</div>' +
      '<div class="gallery-footer">' +
        '<div class="gallery-caption">' +
          '<span class="gallery-caption-title" data-carousel-caption>' + esc(firstTitle) + '</span>' +
          '<span class="gallery-caption-meta mono" data-carousel-meta>' + esc(first.meta || '') + '</span>' +
        '</div>' +
        '<div class="gallery-controls">' +
          '<button class="gallery-control" type="button" data-carousel-step="-1" aria-label="ภาพก่อนหน้า"' + disabled + '>←</button>' +
          '<span class="gallery-count mono" data-carousel-count aria-live="polite" aria-atomic="true">' +
            '01 / ' + ('0' + items.length).slice(-2) + '</span>' +
          '<button class="gallery-control" type="button" data-carousel-step="1" aria-label="ภาพถัดไป"' + disabled + '>→</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderHero() {
    var p = data.profile;
    var lead = $('heroLead');
    if (lead) lead.textContent = p.lead || '';
    var roles = $('heroRoles');
    if (roles) {
      roles.innerHTML = data.roles.map(function (r) {
        return '<li><span class="k">' + esc(r.k) + '</span><span class="d">' + esc(r.d) + '</span>' +
               '<span class="y">' + esc(r.y) + '</span></li>';
      }).join('');
    }
    mountMedia(document.querySelector('.hero-fig'));
  }

  function renderWorks() {
    var grid = $('workGrid');
    if (!grid) return;
    var count = $('workCount');
    if (count) count.textContent = ('0' + data.works.length).slice(-2) + ' ENTRIES';
    grid.innerHTML = data.works.map(function (w, i) {
      var ytId = extractYouTubeId(w.youtubeUrl);
      var isGame = Boolean(w.demoUrl);
      var thumbSrc = ytId
        ? 'https://img.youtube.com/vi/' + ytId + '/hqdefault.jpg'
        : (w.src || 'assets/ผลงาน1.jpg');
      var ratio = '16/9';
      var badge = ytId ? 'YouTube' : (isGame ? 'GitHub Game' : '');
      var extHref = w.youtubeUrl || w.demoUrl || w.githubUrl || '';
      var extLabel = ytId ? 'ดูบน YouTube ↗' : (isGame ? 'เล่นมินิเกม ↗' : 'เปิดลิงก์ ↗');

      return '<article class="work-card">' +
        '<button class="work-thumb is-video" type="button" data-gallery="works" data-index="' + i +
          '" aria-label="เปิดตัวอย่างผลงาน: ' + attr(w.title) + '">' +
          mediaMarkup(thumbSrc, ratio, w.title, badge, true) +
        '</button>' +
        '<div class="work-cap">' +
          '<div class="top"><h3>' + esc(w.title) + '</h3>' +
            '<span class="year">' + esc(w.year) + '</span></div>' +
          '<span class="kind">' + esc(w.kind) + '</span>' +
          '<p>' + esc(w.desc) + '</p>' +
          '<div class="work-foot">' +
            '<span class="idx">' + ('0' + (i + 1)).slice(-2) + ' / ' + ('0' + data.works.length).slice(-2) + '</span>' +
            (extHref ? '<a class="ext-link" href="' + attr(extHref) + '" target="_blank" rel="noopener">' + extLabel + '</a>' : '') +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');
    mountMedia(grid);
  }

  function renderPhotos() {
    var grid = $('photoGrid');
    if (!grid) return;
    grid.innerHTML = renderImageCarousel(data.photos, 'photos', 'แกลเลอรีภาพถ่าย', 0);
    mountMedia(grid);
  }

  function renderSkills() {
    var wrap = $('skillGroups');
    if (!wrap) return;
    var groups = [];
    data.skills.forEach(function (s) {
      var g = groups.filter(function (x) { return x.name === s.group; })[0];
      if (!g) { g = { name: s.group || 'อื่น ๆ', items: [] }; groups.push(g); }
      g.items.push(s);
    });

    var sceneKinds = ['web', 'code', 'photo', 'chinese'];
    var sceneLabels = ['INTERFACE / GRID', 'SYSTEM / LOGIC', 'OPTICS / FRAME', 'LANGUAGE / FORM'];
    wrap.innerHTML = groups.map(function (g, index) {
      var sceneKind = sceneKinds[index] || 'web';
      return '<div class="skill-group" data-skill-scene-index="' + index + '">' +
        '<div class="sg-head"><span class="n">' + esc(g.name) + '</span>' +
          '<span class="m">' + g.items.length + ' ทักษะ</span></div>' +
        g.items.map(function (s) {
          var pct = Math.max(0, Math.min(100, Number(s.pct) || 0));
          return '<div class="skill-row">' +
            '<div class="txt"><span class="sr-name">' + esc(s.name) + '</span>' +
              (s.note ? '<span class="sr-note">' + esc(s.note) + '</span>' : '') + '</div>' +
            '<div class="meter" aria-hidden="true"><i style="width:' + pct + '%"></i></div>' +
            '<span class="sr-lv">' + esc(s.lv || '') + '</span>' +
          '</div>';
        }).join('') +
      '</div>';
    }).join('');
    renderSkillSceneCarousel(groups, sceneKinds, sceneLabels);
  }

  function renderSkillSceneCarousel(groups, sceneKinds, sceneLabels) {
    var host = $('skillSceneCarousel');
    if (!host) return;
    if (!groups.length) {
      host.innerHTML = '';
      return;
    }
    activeSkillSceneIndex = 0;
    host.setAttribute('data-skill-scene-carousel', '');
    host.innerHTML =
      '<div class="skill-scene-stage">' +
      groups.map(function (group, index) {
        var kind = sceneKinds[index] || 'web';
        var label = sceneLabels[index] || 'SKILL / SCENE';
        return '<button class="skill-scene-slide ' + carouselSlideState(index, 0, groups.length) +
          '" type="button" data-skill-scene-select="' + index + '" data-scene="' + kind +
          '" data-title="' + attr(group.name) + '" data-label="' + attr(label) +
          '" aria-label="เลือกฉากสามมิติ: ' + attr(group.name) + '" aria-pressed="' + (index === 0) + '">' +
          '<canvas class="holo-canvas" data-holo-scene="' + kind + '" aria-hidden="true"></canvas>' +
          (kind === 'chinese' ? '<span class="skill-scene-character" lang="zh" aria-hidden="true">文</span>' : '') +
          '<span class="skill-scene-label mono">' + esc(label) + '</span>' +
          '<span class="skill-scene-status mono" data-skill-scene-status>AUTO / ROTATE</span>' +
        '</button>';
      }).join('') +
      '</div>' +
      '<div class="skill-scene-footer">' +
      '<div class="skill-scene-caption">' +
        '<span class="skill-scene-kicker mono">SKILL SYSTEM · 3D</span>' +
        '<span class="skill-scene-title" data-skill-scene-title>' + esc(groups[0].name) + '</span>' +
        '<span class="skill-scene-subtitle mono" data-skill-scene-label>' + esc(sceneLabels[0]) + '</span>' +
        '<span class="skill-scene-hint mono">AUTO ROTATION · DRAG TO CONTROL</span>' +
      '</div>' +
      '<div class="skill-scene-controls">' +
        '<button class="skill-scene-control" type="button" data-skill-scene-step="-1" aria-label="ฉากทักษะก่อนหน้า">←</button>' +
        '<span class="skill-scene-count mono" data-skill-scene-count aria-live="polite" aria-atomic="true">01 / ' +
          ('0' + groups.length).slice(-2) + '</span>' +
        '<button class="skill-scene-control" type="button" data-skill-scene-step="1" aria-label="ฉากทักษะถัดไป">→</button>' +
      '</div>' +
      '</div>' +
      '<div class="skill-scene-pagination" role="group" aria-label="เลือกสายทักษะ">' +
      groups.map(function (group, index) {
        return '<button type="button" class="skill-scene-dot' + (index === 0 ? ' is-active' : '') +
          '" data-skill-scene-select="' + index + '" aria-label="เลือก' + attr(group.name) +
          '" aria-pressed="' + (index === 0) + '"></button>';
      }).join('') +
      '</div>';
    updateSkillSceneCarousel(0);
  }

  function updateSkillSceneCarousel(index) {
    var host = $('skillSceneCarousel');
    if (!host) return;
    var slides = Array.prototype.slice.call(host.querySelectorAll('.skill-scene-slide'));
    var length = slides.length;
    if (!length) return;
    activeSkillSceneIndex = (index + length) % length;
    host.setAttribute('data-index', String(activeSkillSceneIndex));
    slides.forEach(function (slide, slideIndex) {
      slide.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
      slide.classList.add(carouselSlideState(slideIndex, activeSkillSceneIndex, length));
      var isVisible = slide.classList.contains('is-active') ||
      slide.classList.contains('is-prev') || slide.classList.contains('is-next');
      slide.setAttribute('aria-hidden', String(!isVisible));
      slide.setAttribute('aria-pressed', String(slideIndex === activeSkillSceneIndex));
      slide.tabIndex = isVisible ? 0 : -1;
    });
    host.querySelectorAll('.skill-scene-dot').forEach(function (dot) {
      var active = Number(dot.getAttribute('data-skill-scene-select')) === activeSkillSceneIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
    var activeSlide = slides[activeSkillSceneIndex];
    var title = host.querySelector('[data-skill-scene-title]');
    var label = host.querySelector('[data-skill-scene-label]');
    var count = host.querySelector('[data-skill-scene-count]');
    if (title) title.textContent = activeSlide.getAttribute('data-title') || '';
    if (label) label.textContent = activeSlide.getAttribute('data-label') || '';
    if (count) count.textContent = ('0' + (activeSkillSceneIndex + 1)).slice(-2) +
      ' / ' + ('0' + length).slice(-2);
    document.querySelectorAll('.skill-group').forEach(function (group, groupIndex) {
      group.classList.toggle('is-current', groupIndex === activeSkillSceneIndex);
    });
  }

  function stepSkillScene(direction) {
    updateSkillSceneCarousel(activeSkillSceneIndex + (direction < 0 ? -1 : 1));
  }

  function createHoloPaths(kind) {
    var points = [];
    var paths = [];

    function path(coords, steps) {
      var line = [];
      for (var i = 0; i <= steps; i += 1) {
        var t = i / steps;
        var point = {
          x: coords[0][0] + (coords[1][0] - coords[0][0]) * t,
          y: coords[0][1] + (coords[1][1] - coords[0][1]) * t,
          z: coords[0][2] + (coords[1][2] - coords[0][2]) * t
        };
        points.push(point);
        line.push(point);
      }
      paths.push(line);
    }

    function ring(cx, cy, cz, radius, steps) {
      var line = [];
      for (var i = 0; i <= steps; i += 1) {
        var angle = i / steps * Math.PI * 2;
        var point = {
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          z: cz
        };
        points.push(point);
        line.push(point);
      }
      paths.push(line);
    }

    function box(x, y, z, depth, width, height) {
      var x0 = x - width / 2;
      var x1 = x + width / 2;
      var y0 = y - height / 2;
      var y1 = y + height / 2;
      var z0 = z - depth / 2;
      var z1 = z + depth / 2;
      [[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0]].forEach(function (a, i, face) {
        path([a, face[(i + 1) % face.length]], 26);
      });
      [[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]].forEach(function (a, i, face) {
        path([a, face[(i + 1) % face.length]], 26);
      });
      [[x0,y0],[x1,y0],[x1,y1],[x0,y1]].forEach(function (p) {
        path([[p[0],p[1],z0],[p[0],p[1],z1]], 18);
      });
    }

    if (kind === 'web') {
      box(0, 0.06, 0, 0.36, 1.6, 1.02);
      path([[-0.58,-0.72,0],[0.58,-0.72,0]], 28);
      path([[0,-0.48,0],[0,-0.72,0]], 12);
      path([[-0.72,0.42,0.18],[0.72,0.42,0.18]], 28);
      [-0.48, -0.22, 0.04, 0.3].forEach(function (x, i) {
        path([[x,0.13,0.18],[x,0.3 - (i % 2) * 0.04,0.18]], 9);
      });
      [-0.46, -0.3, -0.15, 0, 0.16, 0.3].forEach(function (y) {
        path([[-0.72,y,0.18],[0.72,y,0.18]], 28);
      });
      path([[-0.66,-0.83,0.08],[0.66,-0.83,0.08]], 24);
      for (var screenRow = 0; screenRow < 9; screenRow += 1) {
        for (var screenCol = 0; screenCol < 23; screenCol += 1) {
          points.push({
            x: -0.66 + screenCol * 0.06,
            y: -0.31 + screenRow * 0.075,
            z: 0.185
          });
        }
      }
    } else if (kind === 'code') {
      box(0, 0, 0, 1.12, 1.12, 1.12);
      [-0.34, 0, 0.34].forEach(function (v) {
        path([[v,-0.56,0.56],[v,0.56,0.56]], 22);
        path([[-0.56,v,0.56],[0.56,v,0.56]], 22);
      });
      for (var cubeX = 0; cubeX < 11; cubeX += 1) {
        for (var cubeY = 0; cubeY < 11; cubeY += 1) {
          points.push({ x: -0.5 + cubeX * 0.1, y: -0.5 + cubeY * 0.1, z: 0.565 });
        }
      }
      ring(0, 0, 0, 0.84, 76);
      path([[-0.82,0,0],[0.82,0,0]], 28);
    } else if (kind === 'photo') {
      box(0, -0.04, -0.12, 0.56, 1.55, 0.94);
      box(-0.2, 0.56, -0.12, 0.24, 0.56, 0.27);
      ring(0, -0.04, 0.2, 0.48, 88);
      ring(0, -0.04, 0.29, 0.34, 76);
      ring(0, -0.04, 0.37, 0.2, 64);
      path([[-0.76,0.23,0.18],[0.76,0.23,0.18]], 28);
    } else {
      [-0.62, -0.42, -0.21, 0, 0.21, 0.42, 0.62].forEach(function (v) {
        var row = [];
        for (var i = 0; i <= 28; i += 1) {
          var x = i / 28 * 1.04;
          var z = 0.1 + 0.14 * x * x - 0.08 * v * v;
          var point = { x: x, y: v, z: z };
          points.push(point);
          row.push(point);
        }
        paths.push(row);
        var opposite = row.map(function (point) {
          return { x: -point.x, y: point.y, z: point.z };
        });
        points = points.concat(opposite);
        paths.push(opposite);
      });
      for (var columnIndex = 0; columnIndex <= 28; columnIndex += 1) {
        var pageX = columnIndex / 28 * 1.04;
        var column = [];
        for (var rowIndex = 0; rowIndex <= 22; rowIndex += 1) {
          var pageY = -0.68 + rowIndex / 22 * 1.36;
          var pageZ = 0.1 + 0.14 * pageX * pageX - 0.08 * pageY * pageY;
          var columnPoint = { x: pageX, y: pageY, z: pageZ };
          points.push(columnPoint);
          column.push(columnPoint);
        }
        paths.push(column);
        var mirroredColumn = column.map(function (point) {
          return { x: -point.x, y: point.y, z: point.z };
        });
        points = points.concat(mirroredColumn);
        paths.push(mirroredColumn);
      }
      path([[0,-0.7,0.09],[0,0.7,0.09]], 18);
      path([[-1.04,-0.68,0.25],[0,-0.68,0.09]], 14);
      path([[0,-0.68,0.09],[1.04,-0.68,0.25]], 14);
      path([[-1.04,0.68,0.25],[0,0.68,0.09]], 14);
      path([[0,0.68,0.09],[1.04,0.68,0.25]], 14);
    }

    return { points: points, paths: paths };
  }

  function initHolograms() {
    var canvases = Array.prototype.slice.call(document.querySelectorAll('.holo-canvas'));
    if (!canvases.length) return;

    var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var reducedMotion = Boolean(motionQuery && motionQuery.matches);
    var scenes = [];
    var frameId = 0;

    function resize(scene) {
      var rect = scene.canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      scene.width = rect.width;
      scene.height = rect.height;
      scene.canvas.width = Math.round(rect.width * ratio);
      scene.canvas.height = Math.round(rect.height * ratio);
      scene.context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function project(point, angleX, angleY, scene) {
      var cosY = Math.cos(angleY);
      var sinY = Math.sin(angleY);
      var cosX = Math.cos(angleX);
      var sinX = Math.sin(angleX);
      var x = point.x * cosY + point.z * sinY;
      var z = -point.x * sinY + point.z * cosY;
      var y = point.y * cosX - z * sinX;
      z = point.y * sinX + z * cosX;
      var perspective = 4.2 / (4.2 - z);
      var scale = Math.min(scene.width, scene.height) * 0.34;
      return {
        x: scene.width / 2 + x * scale * perspective,
        y: scene.height / 2 - y * scale * perspective,
        z: z,
        perspective: perspective
      };
    }

    function draw(scene, animate) {
      if (!scene.ready || !scene.width || !scene.height) return;
      var ctx = scene.context;
      var width = scene.width;
      var height = scene.height;
      var accent = scene.accent;
      var angleY = scene.rotationY;
      var angleX = scene.rotationX;
      ctx.clearRect(0, 0, width, height);

      var hudRadius = Math.min(width, height) * 0.37;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      ctx.arc(0, 0, hudRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 0.34;
      ctx.setLineDash([2, 7]);
      ctx.beginPath();
      ctx.arc(0, 0, hudRadius + 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      for (var i = 0; i < 48; i += 1) {
        var tick = i / 48 * Math.PI * 2;
        var longTick = i % 6 === 0;
        var inner = hudRadius + 5;
        var outer = inner + (longTick ? 8 : 3);
        ctx.globalAlpha = longTick ? 0.5 : 0.24;
        ctx.beginPath();
        ctx.moveTo(Math.cos(tick) * inner, Math.sin(tick) * inner);
        ctx.lineTo(Math.cos(tick) * outer, Math.sin(tick) * outer);
        ctx.stroke();
      }
      ctx.restore();

      scene.paths.forEach(function (line) {
        if (line.length < 2) return;
        var first = project(line[0], angleX, angleY, scene);
        ctx.beginPath();
        ctx.moveTo(first.x, first.y);
        for (var i = 1; i < line.length; i += 1) {
          var next = project(line[i], angleX, angleY, scene);
          ctx.lineTo(next.x, next.y);
        }
        ctx.strokeStyle = accent;
        ctx.globalAlpha = 0.24;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      });

      scene.points.forEach(function (point, index) {
        var pos = project(point, angleX, angleY, scene);
        var depth = Math.max(0.25, Math.min(1, (pos.z + 1.4) / 2.8));
        var radius = Math.max(0.72, (0.86 + (index % 5) * 0.12) * depth * pos.perspective);
        if (index % 7 === 0) {
          ctx.globalAlpha = 0.12 + depth * 0.14;
          ctx.fillStyle = scene.highlight;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, radius * 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 0.62 + depth * 0.38;
        ctx.fillStyle = depth > 0.68 ? scene.highlight : accent;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (animate && scene.autoRotate) scene.rotationY += 0.0027;
    }

    function requestFrame() {
      if (frameId || reducedMotion) return;
      frameId = window.requestAnimationFrame(renderFrame);
    }

    function renderFrame() {
      frameId = 0;
      var keepAnimating = false;
      scenes.forEach(function (scene) {
        if (!scene.visible || !scene.ready) return;
        draw(scene, true);
        if (scene.autoRotate) keepAnimating = true;
      });
      if (keepAnimating) requestFrame();
    }

    scenes = canvases.map(function (canvas) {
      var kind = canvas.getAttribute('data-holo-scene') || 'web';
      var host = canvas.parentElement;
      var context = canvas.getContext('2d');
      if (!context) return null;
      var scene = {
        canvas: canvas,
        context: context,
        host: host,
        kind: kind,
        width: 0,
        height: 0,
        points: [],
        paths: [],
        accent: getComputedStyle(host).getPropertyValue('--holo-accent').trim() || '#9ACDD7',
        highlight: getComputedStyle(host).getPropertyValue('--holo-highlight').trim() || '#91bbc3',
        rotationY: 0.16,
        rotationX: -0.12,
        autoRotate: !reducedMotion,
        pointerId: null,
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0,
        dragging: false,
        ready: true,
        visible: false
      };
      if (reducedMotion) {
        var status = host.querySelector('[data-skill-scene-status]');
        if (status) status.textContent = 'STATIC / REDUCED';
      }
      var geometry = createHoloPaths(kind);
      scene.points = geometry.points;
      scene.paths = geometry.paths;
      resize(scene);
      scene.visible = !('IntersectionObserver' in window);
      if (scene.visible) draw(scene, false);
      host.addEventListener('pointerdown', function (event) {
        if (reducedMotion) return;
        scene.pointerId = event.pointerId;
        scene.startX = scene.lastX = event.clientX;
        scene.startY = scene.lastY = event.clientY;
        scene.dragging = false;
        if (host.setPointerCapture) host.setPointerCapture(event.pointerId);
      });
      host.addEventListener('pointermove', function (event) {
        if (reducedMotion || scene.pointerId !== event.pointerId) return;
        var totalX = event.clientX - scene.startX;
        var totalY = event.clientY - scene.startY;
        if (!scene.dragging && Math.abs(totalX) + Math.abs(totalY) < 5) return;
        if (!scene.dragging) {
          scene.dragging = true;
          scene.autoRotate = false;
          host.classList.add('is-manual');
          var status = host.querySelector('[data-skill-scene-status]');
          if (status) status.textContent = 'MANUAL / DRAG';
        }
        scene.rotationY += (event.clientX - scene.lastX) * 0.012;
        scene.rotationX = Math.max(-1.15, Math.min(1.15,
          scene.rotationX + (event.clientY - scene.lastY) * 0.01));
        scene.lastX = event.clientX;
        scene.lastY = event.clientY;
        requestFrame();
      });
      function endDrag(event) {
        if (scene.pointerId !== event.pointerId) return;
        scene.pointerId = null;
        scene.dragging = false;
      }
      host.addEventListener('pointerup', endDrag);
      host.addEventListener('pointercancel', endDrag);
      host.addEventListener('lostpointercapture', endDrag);
      return scene;
    }).filter(Boolean);

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var scene = scenes.filter(function (item) { return item.host === entry.target; })[0];
          if (!scene) return;
          scene.visible = entry.isIntersecting;
          if (scene.visible) {
            draw(scene, false);
            requestFrame();
          }
        });
      }, { rootMargin: '100px 0px' });
      scenes.forEach(function (scene) { observer.observe(scene.host); });
    }

    window.addEventListener('resize', function () {
      scenes.forEach(function (scene) {
        resize(scene);
        if (reducedMotion) draw(scene, false);
      });
      requestFrame();
    });

    if (reducedMotion) {
      scenes.forEach(function (scene) { draw(scene, false); });
    } else {
      requestFrame();
    }
  }

  function renderAbout() {
    var p = data.profile;
    var note = $('aboutNote');
    if (note) note.textContent = p.aboutNote || '';
    var bio = $('aboutBio');
    if (bio) {
      bio.innerHTML = (p.bio || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
        '<p class="sign">' + esc(p.nameZh || '') + '</p>';
    }
    var highlights = $('portfolioHighlights');
    if (highlights) {
      var highlightImageIndex = 0;
      highlights.innerHTML =
        '<div class="highlights-head"><span class="mono">SELECTED HIGHLIGHTS · PORTFOLIO</span>' +
          '<h3>กิจกรรม รางวัล และโครงงาน</h3></div>' +
        '<div class="highlight-grid">' +
          (data.highlights || []).map(function (item) {
            var images = (item.images || []).map(function (image) {
              return {
                src: image.src,
                alt: image.alt,
                caption: image.caption,
                meta: item.title
              };
            });
            var imageGallery = renderImageCarousel(images, 'highlights', item.title, highlightImageIndex);
            highlightImageIndex += images.length;
            return '<article class="highlight-card">' +
              '<span class="highlight-eyebrow mono">' + esc(item.eyebrow) + '</span>' +
              '<h4>' + esc(item.title) + '</h4>' +
              '<ul>' + item.items.map(function (text) { return '<li>' + esc(text) + '</li>'; }).join('') + '</ul>' +
              imageGallery +
            '</article>';
          }).join('') +
        '</div>';
      mountMedia(highlights);
    }
    var rows = $('tlRows');
    if (rows) {
      rows.innerHTML = data.timeline.map(function (r) {
        return '<div class="tl-row' + (r.now ? ' now' : '') + '">' +
          '<span class="y">' + esc(r.y) + '</span>' +
          '<span class="tl-dot"><i></i></span>' +
          '<div class="tl-body"><span class="t">' + esc(r.t) + '</span>' +
            (r.d ? '<div class="d">' + esc(r.d) + '</div>' : '') + '</div>' +
        '</div>';
      }).join('');
    }
    var facts = $('facts');
    if (facts) {
      facts.innerHTML = data.facts.map(function (f) {
        return '<div class="f"><h4>' + esc(f.h) + '</h4><ul>' +
          f.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') +
        '</ul></div>';
      }).join('');
    }
    mountMedia(document.querySelector('.about-fig'));
  }

  function renderContact() {
    var p = data.profile;
    var list = $('contactList');
    if (list) {
      var rows = [];
      if (p.email) rows.push(['อีเมล', '<a href="mailto:' + attr(p.email) + '">' + esc(p.email) + '</a>']);
      if (p.phone) rows.push(['โทร', '<a href="tel:' + attr(String(p.phone).replace(/[^\d+]/g, '')) + '">' + esc(p.phone) + '</a>']);
      if (p.ig) rows.push(['Instagram', '<a href="https://instagram.com/' + attr(String(p.ig).replace(/^@/, '')) + '" target="_blank" rel="noopener">@' + esc(String(p.ig).replace(/^@/, '')) + '</a>']);
      if (p.city) rows.push(['ที่ตั้ง', esc(p.city)]);
      list.innerHTML = rows.map(function (r) {
        return '<li><span class="k">' + r[0] + '</span><span>' + r[1] + '</span></li>';
      }).join('');
    }
    var line = $('contactLine');
    if (line) line.textContent = p.contactLine || '';
    var foot = document.querySelector('.foot-brand .n');
    if (foot) foot.innerHTML = esc(p.name) + '<span class="z">' + esc(p.nameZh || '') + '</span>';
  }

  function updateCarousel(carousel, activeIndex) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.gallery-slide'));
    var length = slides.length;
    if (!length) return;
    activeIndex = (activeIndex + length) % length;
    carousel.setAttribute('data-index', String(activeIndex));

    slides.forEach(function (slide, index) {
      slide.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
      slide.classList.add(carouselSlideState(index, activeIndex, length));
    });

    var activeSlide = slides[activeIndex];
    var caption = carousel.querySelector('[data-carousel-caption]');
    var meta = carousel.querySelector('[data-carousel-meta]');
    var count = carousel.querySelector('[data-carousel-count]');
    if (caption) caption.textContent = activeSlide.getAttribute('data-caption') || '';
    if (meta) meta.textContent = activeSlide.getAttribute('data-meta') || '';
    if (count) count.textContent = ('0' + (activeIndex + 1)).slice(-2) + ' / ' + ('0' + length).slice(-2);
  }

  function stepCarousel(carousel, direction) {
    var length = carousel.querySelectorAll('.gallery-slide').length;
    if (length < 2) return;
    var currentIndex = Number(carousel.getAttribute('data-index')) || 0;
    updateCarousel(carousel, currentIndex + (direction < 0 ? -1 : 1));
  }

  function openLightbox(kind, index, trigger) {
    var list = kind === 'photos' ? data.photos : data.works;
    if (kind === 'highlights') {
      list = [];
      (data.highlights || []).forEach(function (group) {
        (group.images || []).forEach(function (image) {
          list.push({
            src: image.src,
            title: image.caption || group.title,
            alt: image.alt || image.caption || group.title,
            meta: group.title
          });
        });
      });
    }
    gallery.list = list; gallery.index = index;
    gallery.returnFocus = trigger || document.activeElement;
    var lb = $('lb');
    if (!lb) return;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    paintLightbox();
    var close = $('lbClose');
    if (close) close.focus();
  }

  function paintLightbox() {
    var item = gallery.list[gallery.index];
    if (!item) return;
    var stage = $('lbStage');
    var cap = $('lbCap');
    var ext = $('lbExt');
    var ytId = extractYouTubeId(item.youtubeUrl);
    var demoUrl = item.demoUrl;

    if (stage) {
      if (ytId) {
        stage.innerHTML = '<div class="lb-video-wrap">' +
          '<iframe src="https://www.youtube.com/embed/' + attr(ytId) + '?autoplay=1&rel=0" ' +
          'title="' + attr(item.title || 'YouTube Video') + '" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '</div>';
      } else if (demoUrl) {
        stage.innerHTML = '<div class="lb-video-wrap">' +
          '<iframe src="' + attr(demoUrl) + '" ' +
          'title="' + attr(item.title || 'Mini-Game') + '" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '</div>';
      } else {
        stage.innerHTML = '<img id="lbImg" src="' + attr(item.src) + '" alt="' + attr(item.alt || item.title || '') + '">';
      }
    }

    if (cap) cap.textContent = (item.title || '') + (item.meta ? ' · ' + item.meta : (item.year ? ' · ' + item.year : ''));

    if (ext) {
      var link = item.youtubeUrl || item.demoUrl || item.githubUrl || item.link;
      if (link) {
        ext.href = link;
        ext.textContent = item.youtubeUrl ? 'เปิดบน YouTube ↗' : (item.demoUrl ? 'เล่นมินิเกมแบบเต็มจอ ↗' : (item.githubUrl ? 'ดูซอร์สโค้ด GitHub ↗' : 'เปิดลิงก์ ↗'));
        ext.hidden = false;
      } else {
        ext.hidden = true;
      }
    }
  }

  function step(dir) {
    if (!gallery.list.length) return;
    gallery.index = (gallery.index + dir + gallery.list.length) % gallery.list.length;
    paintLightbox();
  }

  function closeLightbox() {
    var lb = $('lb');
    if (!lb || lb.hidden) return;
    var stage = $('lbStage');
    if (stage) stage.innerHTML = '';
    lb.hidden = true;
    document.body.style.overflow = '';
    if (gallery.returnFocus && gallery.returnFocus.focus) gallery.returnFocus.focus();
    gallery.returnFocus = null;
  }

  function activeNavOnScroll() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
    var sections = links.map(function (a) { return $(a.getAttribute('href').slice(1)); });
    var y = window.scrollY + Math.min(Math.max(180, window.innerHeight * 0.4), 420);
    var active = -1;
    var head = document.querySelector('.site-head');
    if (head) head.classList.toggle('is-scrolled', window.scrollY > 24);
    sections.forEach(function (s, i) {
      if (s && s.offsetTop <= y) active = i;
    });
    links.forEach(function (a, i) {
      if (i === active) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  function bindScrollReveals() {
    var items = Array.prototype.slice.call(document.querySelectorAll(
      '.skill-group,.highlight-card,.tl-row,.facts .f,.contact-list li,.contact-side'
    ));
    var reducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || reducedMotion) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    items.forEach(function (item, index) {
      item.classList.add('reveal-item');
      item.style.transitionDelay = Math.min(index % 4 * 70, 210) + 'ms';
      observer.observe(item);
    });
  }

  function startOpening() {
    var root = document.documentElement;
    var screen = $('openingScreen');
    var skip = $('openingSkip');
    if (!screen || !root.classList.contains('intro-pending')) return;

    var closing = false;
    var timer = setTimeout(close, 1550);

    function close() {
      if (closing) return;
      closing = true;
      clearTimeout(timer);
      document.removeEventListener('pointerdown', close, true);
      document.removeEventListener('wheel', close);
      document.removeEventListener('keydown', onKey);
      if (skip) skip.removeEventListener('click', close);
      root.classList.remove('intro-pending');
      root.classList.add('intro-exiting');
      setTimeout(function () {
        screen.style.display = 'none';
        root.classList.remove('intro-exiting');
        root.classList.add('intro-finished');
      }, 1100);
    }

    function onKey(event) {
      if (event.key === 'Escape') close();
    }

    document.addEventListener('pointerdown', close, true);
    document.addEventListener('wheel', close, { passive: true });
    document.addEventListener('keydown', onKey);
    if (skip) skip.addEventListener('click', close);
  }

  function bindUI() {
    document.addEventListener('click', function (e) {
      var skillSceneStep = e.target.closest('[data-skill-scene-step]');
      if (skillSceneStep) {
        stepSkillScene(Number(skillSceneStep.getAttribute('data-skill-scene-step')));
        return;
      }
      var skillSceneSelect = e.target.closest('[data-skill-scene-select]');
      if (skillSceneSelect) {
        updateSkillSceneCarousel(Number(skillSceneSelect.getAttribute('data-skill-scene-select')) || 0);
        return;
      }
      var carouselControl = e.target.closest('[data-carousel-step]');
      if (carouselControl) {
        var carousel = carouselControl.closest('[data-carousel]');
        if (carousel) stepCarousel(carousel, Number(carouselControl.getAttribute('data-carousel-step')));
        return;
      }
      var trigger = e.target.closest('[data-gallery]');
      if (trigger) {
        var kind = trigger.getAttribute('data-gallery');
        var idx = Number(trigger.getAttribute('data-index')) || 0;
        openLightbox(kind, idx, trigger);
        return;
      }
      if (e.target.closest('#lbClose')) { closeLightbox(); return; }
      if (e.target.closest('#lbPrev')) { step(-1); return; }
      if (e.target.closest('#lbNext')) { step(1); return; }
      if (e.target.id === 'lb' || e.target.id === 'lbStage') closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      var skillCarousel = e.target.closest('[data-skill-scene-carousel]');
      if (skillCarousel && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        stepSkillScene(e.key === 'ArrowLeft' ? -1 : 1);
        return;
      }
      var carousel = e.target.closest('[data-carousel]');
      if (carousel && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        stepCarousel(carousel, e.key === 'ArrowLeft' ? -1 : 1);
        return;
      }
      var lb = $('lb');
      if (!lb || lb.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'Tab') {
        var focusable = Array.prototype.slice.call(lb.querySelectorAll('a[href]:not([hidden]),button:not([hidden])'));
        if (!focusable.length) { e.preventDefault(); return; }
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (!lb.contains(document.activeElement) || (!e.shiftKey && document.activeElement === last)) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    });

    window.addEventListener('scroll', function () {
      if (window.__raf) return;
      window.__raf = requestAnimationFrame(function () {
        window.__raf = null;
        activeNavOnScroll();
      });
    });
  }

  function boot() {
    startOpening();
    renderHero();
    renderWorks();
    renderPhotos();
    renderSkills();
    renderAbout();
    initHolograms();
    renderContact();
    bindScrollReveals();
    bindUI();
    activeNavOnScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();