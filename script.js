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
      aboutNote: 'อายุ 23 ปี · ปวช.1–3 ต่อ ปวส.1 พายัพ · สอนภาษาจีน 4 ปี',
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
        src: 'assets/mini game.JPG',
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

    /* ส่วนภาพถ่ายผลงานจริง พร้อมสัดส่วนที่สมดุล */
    photos: [
      {
        title: 'บรรยากาศสถานีรถไฟยามเย็น',
        meta: 'Photo Portfolio · 2026',
        src: 'assets/ผลงาน1.jpg',
        ratio: '16/9'
      },
      {
        title: 'สถาปัตยกรรมและท้องฟ้าสีคราม',
        meta: 'Photo Portfolio · 2026',
        src: 'assets/ผลงาน2.jpg',
        ratio: '4/5'
      },
      {
        title: 'ทัศนียภาพยอดเขาและสายหมอก',
        meta: 'Photo Portfolio · 2026',
        src: 'assets/ผลงาน3.jpg',
        ratio: '16/9'
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
    ]
  };

  var data = DEFAULT_DATA;
  var gallery = { list: [], index: 0 };

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
      ? '<span class="play-overlay" aria-hidden="true"><span class="play-icon">▶</span></span>'
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
      img.onload = function () {
        el.classList.add('has-img');
        el.appendChild(img);
      };
      img.onerror = function () {
        if (src.indexOf('hqdefault.jpg') !== -1) {
          img.src = src.replace('hqdefault.jpg', '0.jpg');
          return;
        }
        el.classList.add('is-empty');
      };
      img.src = src;
    });
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
        '<button class="work-thumb is-video" type="button" data-gallery="works" data-index="' + i + '">' +
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
    grid.innerHTML = data.photos.map(function (p, i) {
      return '<figure>' +
        '<button class="shot" type="button" data-gallery="photos" data-index="' + i + '">' +
          mediaMarkup(p.src, p.ratio || '16/9', p.title, '', false) +
        '</button>' +
        '<figcaption>' +
          '<div><span class="t">' + esc(p.title) + '</span> · <span class="m mono">' + esc(p.meta) + '</span></div>' +
        '</figcaption>' +
      '</figure>';
    }).join('');
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

    wrap.innerHTML = groups.map(function (g) {
      return '<div class="skill-group">' +
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

  function openLightbox(kind, index) {
    var list = kind === 'photos' ? data.photos : data.works;
    gallery.list = list; gallery.index = index;
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
        stage.innerHTML = '<img id="lbImg" src="' + attr(item.src) + '" alt="' + attr(item.title || '') + '">';
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
  }

  function activeNavOnScroll() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
    var sections = links.map(function (a) { return $(a.getAttribute('href').slice(1)); });
    var y = window.scrollY + 140;
    var active = -1;
    sections.forEach(function (s, i) {
      if (s && s.offsetTop <= y) active = i;
    });
    links.forEach(function (a, i) {
      if (i === active) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  function bindUI() {
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-gallery]');
      if (trigger) {
        var kind = trigger.getAttribute('data-gallery');
        var idx = Number(trigger.getAttribute('data-index')) || 0;
        openLightbox(kind, idx);
        return;
      }
      if (e.target.closest('#lbClose')) { closeLightbox(); return; }
      if (e.target.closest('#lbPrev')) { step(-1); return; }
      if (e.target.closest('#lbNext')) { step(1); return; }
      if (e.target.id === 'lb' || e.target.id === 'lbStage') closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      var lb = $('lb');
      if (!lb || lb.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
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
    renderHero();
    renderWorks();
    renderPhotos();
    renderSkills();
    renderAbout();
    renderContact();
    bindUI();
    activeNavOnScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();