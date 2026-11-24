(function () {
  'use strict';

  var SEARCH_INDEX = [
    { title: 'Trang chủ', href: '#top', type: 'Trang' },
    { title: 'Giới thiệu', href: 'https://dayboiparksonhungvuong.com/about-us/', type: 'Trang' },
    { title: 'Học phí', href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/', type: 'Trang' },
    { title: 'Phụ Kiện', href: 'https://dayboiparksonhungvuong.com/phu-kien/', type: 'Trang' },
    { title: 'Blog', href: 'https://dayboiparksonhungvuong.com/blog/', type: 'Trang' },
    { title: 'Liên hệ', href: 'https://dayboiparksonhungvuong.com/lien-he/', type: 'Trang' },
    { title: 'Phao Tập Bơi', href: 'https://dayboiparksonhungvuong.com/phao-tap-boi/', type: 'Phụ kiện' },
    { title: 'Bàn Quạt Tay', href: 'https://dayboiparksonhungvuong.com/ban-quat-tay/', type: 'Phụ kiện' },
    { title: 'Chân Vịt', href: 'https://dayboiparksonhungvuong.com/chan-vit/', type: 'Phụ kiện' },
    { title: 'Balo – Túi Đồ Bơi', href: 'https://dayboiparksonhungvuong.com/balo-tui-do-boi/', type: 'Phụ kiện' },
    { title: 'Chống Mờ Kính Bơi', href: 'https://dayboiparksonhungvuong.com/chong-mo-kinh-boi/', type: 'Phụ kiện' },
    { title: 'Nút Bịt Tai', href: 'https://dayboiparksonhungvuong.com/nut-bit-tai/', type: 'Phụ kiện' },
    { title: 'Chăm Sóc Da Tóc', href: 'https://dayboiparksonhungvuong.com/cham-soc-da-toc/', type: 'Phụ kiện' },
    { title: 'Open Water', href: 'https://dayboiparksonhungvuong.com/open-water/', type: 'Phụ kiện' },
    { title: 'Dây Kéo Kháng Lực', href: 'https://dayboiparksonhungvuong.com/day-keo-khang-luc/', type: 'Phụ kiện' },
    { title: 'Phụ Kiện Khác', href: 'https://dayboiparksonhungvuong.com/phu-kien-khac/', type: 'Phụ kiện' },
    { title: 'Tin Tức Bơi Lội', href: 'https://dayboiparksonhungvuong.com/tin-tuc-boi-loi/', type: 'Blog' },
    { title: 'Hướng Dẫn Kỹ Thuật Bơi', href: 'https://dayboiparksonhungvuong.com/huong-dan-ky-thuat-boi/', type: 'Blog' },
    { title: 'Trải Nghiệm Đánh Giá', href: 'https://dayboiparksonhungvuong.com/trai-nghiem-danh-gia/', type: 'Blog' },
    { title: 'Kiến Thức Bơi Lội', href: 'https://dayboiparksonhungvuong.com/kien-thuc-boi-loi/', type: 'Blog' },
    { title: 'Lớp Học Bơi', href: 'https://dayboiparksonhungvuong.com/lop-hoc-boi/', type: 'Blog' },
    { title: 'Thông Tin Bể Bơi', href: 'https://dayboiparksonhungvuong.com/thong-tin-be-boi/', type: 'Blog' },
    { title: 'Bơi Ếch', href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/', type: 'Khóa học' },
    { title: 'Bơi Sải', href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/', type: 'Khóa học' },
    { title: 'Bơi Bướm', href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/', type: 'Khóa học' },
    { title: 'Bơi Ngửa', href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/', type: 'Khóa học' },
    {
      title: 'Sécurité du téléchargement de l’application 1xbet – guide complet',
      href: 'https://dayboiparksonhungvuong.com/securite-du-telechargement-de-l-application-1xbet-guide-complet/',
      type: 'Bài viết'
    },
    {
      title: '1xbet. com : guide complet de vérification de compte',
      href: 'https://dayboiparksonhungvuong.com/1xbet-com-guide-complet-de-verification-de-compte/',
      type: 'Bài viết'
    },
    {
      title: 'Guide complet des bonus 1xbet.com – tout ce qu’il faut savoir',
      href: 'https://dayboiparksonhungvuong.com/guide-complet-des-bonus-1xbet-com-tout-ce-qu-il-faut-savoir/',
      type: 'Bài viết'
    },
    {
      title: '1xbet ci télécharger en France – Guide complet, bonus, paiement et sécurité',
      href: 'https://dayboiparksonhungvuong.com/1xbet-ci-telecharger-en-france-guide-complet-bonus-paiement-et-securite/',
      type: 'Bài viết'
    },
    {
      title: 'Guide de sécurité du 1xbet apk 2022 : installer et jouer en toute confiance',
      href: 'https://dayboiparksonhungvuong.com/guide-de-securite-du-1xbet-apk-2022-installer-et-jouer-en-toute-confiance/',
      type: 'Bài viết'
    },
    {
      title: 'Téléchargements 1xbet APK : aperçu et options',
      href: 'https://dayboiparksonhungvuong.com/telechargements-1xbet-apk-apercu-et-options/',
      type: 'Bài viết'
    }
  ];

  var BRANDS = [
    {
      id: 'brand-macks',
      name: "Mack's",
      image: './images/macks.jpg',
      href: 'https://dayboiparksonhungvuong.com/brand-yingfa/'
    },
    {
      id: 'brand-view',
      name: 'VIEW',
      image: './images/view.jpg',
      href: 'https://dayboiparksonhungvuong.com/brand-alpine-hearing/'
    },
    {
      id: 'brand-arena',
      name: 'Arena',
      image: './images/arena.jpg',
      href: 'https://dayboiparksonhungvuong.com/brand-ybl/'
    },
    {
      id: 'brand-yingfa',
      name: 'Yingfa',
      image: './images/yingfa-1.jpg',
      href: 'https://dayboiparksonhungvuong.com/brand-view/'
    },
    {
      id: 'brand-alpine',
      name: 'Alpine Hearing Protection',
      image: './images/alpine-hearing.jpg',
      href: 'https://dayboiparksonhungvuong.com/brand-arena/'
    }
  ];

  function wrapIndex(current, delta, total) {
    if (total <= 0) return 0;
    return (((current + delta) % total) + total) % total;
  }

  function clampIndex(current, delta, maxIndex) {
    var next = current + delta;
    if (next < 0) return 0;
    if (next > maxIndex) return maxIndex;
    return next;
  }

  function filterContent(query) {
    var q = (query || '').trim().toLowerCase();
    if (!q) return [];
    var matches = [];
    for (var i = 0; i < SEARCH_INDEX.length; i++) {
      if (SEARCH_INDEX[i].title.toLowerCase().indexOf(q) !== -1) {
        matches.push(SEARCH_INDEX[i]);
        if (matches.length >= 8) break;
      }
    }
    return matches;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function initHeaderAndDrawers() {
    var header = document.getElementById('header');
    var backToTopBtn = document.getElementById('back-to-top-btn');

    function handleScroll() {
      var y = window.scrollY || window.pageYOffset || 0;
      if (header) {
        if (y > 180) {
          header.classList.add('header-sticky-active');
        } else {
          header.classList.remove('header-sticky-active');
        }
      }
      if (backToTopBtn) {
        backToTopBtn.hidden = y <= 360;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Desktop Cart
    var desktopCartWrapper = document.getElementById('desktop-cart-wrapper');
    var desktopCartBtn = document.getElementById('desktop-cart-btn');
    var desktopCartPanel = document.getElementById('desktop-cart-panel');

    if (desktopCartBtn && desktopCartPanel) {
      desktopCartBtn.addEventListener('click', function () {
        var nextOpen = desktopCartPanel.hidden;
        desktopCartPanel.hidden = !nextOpen;
        desktopCartBtn.setAttribute('aria-expanded', String(nextOpen));
      });
    }

    // Mobile Cart & Search
    var mobileCartBtn = document.getElementById('mobile-cart-btn');
    var mobileCartPanel = document.getElementById('mobile-cart-panel');
    var mobileSearchBtn = document.getElementById('mobile-search-btn');
    var mobileSearchPanel = document.getElementById('mobile-search-panel');
    var mobileSearchInput = document.getElementById('mobile-search-input');
    var mobileSearchResults = document.getElementById('mobile-search-results');

    if (mobileCartBtn && mobileCartPanel) {
      mobileCartBtn.addEventListener('click', function () {
        var nextOpen = mobileCartPanel.hidden;
        mobileCartPanel.hidden = !nextOpen;
        mobileCartBtn.setAttribute('aria-expanded', String(nextOpen));
        if (nextOpen && mobileSearchPanel && mobileSearchBtn) {
          mobileSearchPanel.hidden = true;
          mobileSearchBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if (mobileSearchBtn && mobileSearchPanel) {
      mobileSearchBtn.addEventListener('click', function () {
        var nextOpen = mobileSearchPanel.hidden;
        mobileSearchPanel.hidden = !nextOpen;
        mobileSearchBtn.setAttribute('aria-expanded', String(nextOpen));
        if (nextOpen) {
          if (mobileCartPanel && mobileCartBtn) {
            mobileCartPanel.hidden = true;
            mobileCartBtn.setAttribute('aria-expanded', 'false');
          }
          if (mobileSearchInput) {
            mobileSearchInput.focus();
          }
        }
      });
    }

    // Desktop Live Search
    var desktopSearchBox = document.getElementById('desktop-search-box');
    var desktopSearchForm = document.getElementById('desktop-search-form');
    var desktopSearchInput = document.getElementById('desktop-search-input');
    var desktopSearchDropdown = document.getElementById('desktop-search-dropdown');

    function renderDesktopSearch() {
      if (!desktopSearchInput || !desktopSearchDropdown) return;
      var q = desktopSearchInput.value.trim();
      if (!q) {
        desktopSearchDropdown.hidden = true;
        desktopSearchDropdown.innerHTML = '';
        return;
      }
      var results = filterContent(q);
      if (results.length > 0) {
        var html = '<ul class="live-search-list">';
        for (var i = 0; i < results.length; i++) {
          html +=
            '<li><a href="' +
            escapeHtml(results[i].href) +
            '" class="live-search-item"><span class="live-search-type">' +
            escapeHtml(results[i].type) +
            ' ·</span>' +
            escapeHtml(results[i].title) +
            '</a></li>';
        }
        html += '</ul>';
        desktopSearchDropdown.innerHTML = html;
      } else {
        desktopSearchDropdown.innerHTML =
          '<div class="live-search-empty">Không tìm thấy nội dung cho "' +
          escapeHtml(q) +
          '".</div>';
      }
      desktopSearchDropdown.hidden = false;
    }

    function renderMobileSearch() {
      if (!mobileSearchInput || !mobileSearchResults) return;
      var q = mobileSearchInput.value.trim();
      if (!q) {
        mobileSearchResults.hidden = true;
        mobileSearchResults.innerHTML = '';
        return;
      }
      var results = filterContent(q);
      if (results.length > 0) {
        var html = '';
        for (var i = 0; i < results.length; i++) {
          html +=
            '<a href="' +
            escapeHtml(results[i].href) +
            '"><span class="live-search-type">' +
            escapeHtml(results[i].type) +
            ' ·</span>' +
            escapeHtml(results[i].title) +
            '</a>';
        }
        mobileSearchResults.innerHTML = html;
      } else {
        mobileSearchResults.innerHTML =
          '<p class="mobile-search-empty">Không tìm thấy kết quả phù hợp.</p>';
      }
      mobileSearchResults.hidden = false;
    }

    if (desktopSearchInput) {
      desktopSearchInput.addEventListener('focus', renderDesktopSearch);
      desktopSearchInput.addEventListener('input', renderDesktopSearch);
    }

    if (desktopSearchForm) {
      desktopSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        renderDesktopSearch();
      });
    }

    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', renderMobileSearch);
    }

    var mobileSearchForm = document.getElementById('mobile-search-form');
    if (mobileSearchForm) {
      mobileSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        renderMobileSearch();
      });
    }

    document.addEventListener('mousedown', function (e) {
      if (desktopCartWrapper && !desktopCartWrapper.contains(e.target)) {
        if (desktopCartPanel && desktopCartBtn) {
          desktopCartPanel.hidden = true;
          desktopCartBtn.setAttribute('aria-expanded', 'false');
        }
      }
      if (desktopSearchBox && !desktopSearchBox.contains(e.target)) {
        if (desktopSearchDropdown) {
          desktopSearchDropdown.hidden = true;
        }
      }
      var mobileControls = document.getElementById('mobile-right-controls');
      if (mobileControls && !mobileControls.contains(e.target)) {
        if (mobileCartPanel && mobileCartBtn) {
          mobileCartPanel.hidden = true;
          mobileCartBtn.setAttribute('aria-expanded', 'false');
        }
        if (mobileSearchPanel && mobileSearchBtn) {
          mobileSearchPanel.hidden = true;
          mobileSearchBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Desktop Dropdown hover aria-expanded sync
    var dropdownItems = document.querySelectorAll('.header-bottom-nav > li.has-dropdown');
    for (var d = 0; d < dropdownItems.length; d++) {
      (function (li) {
        var link = li.querySelector('a.nav-top-link');
        li.addEventListener('mouseenter', function () {
          li.classList.add('dropdown-open');
          if (link) link.setAttribute('aria-expanded', 'true');
        });
        li.addEventListener('mouseleave', function () {
          li.classList.remove('dropdown-open');
          if (link) link.setAttribute('aria-expanded', 'false');
        });
      })(dropdownItems[d]);
    }

    // Mobile Slide-In Drawer
    var drawerOverlay = document.getElementById('mobile-drawer-overlay');
    var drawerBackdrop = document.getElementById('mobile-drawer-backdrop');
    var drawerOpenBtn = document.getElementById('mobile-menu-open-btn');
    var drawerCloseBtn = document.getElementById('mobile-menu-close-btn');

    function setDrawerOpen(open) {
      if (!drawerOverlay || !drawerOpenBtn) return;
      drawerOverlay.hidden = !open;
      drawerOpenBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    if (drawerOpenBtn) {
      drawerOpenBtn.addEventListener('click', function () {
        setDrawerOpen(true);
      });
    }
    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', function () {
        setDrawerOpen(false);
      });
    }
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', function () {
        setDrawerOpen(false);
      });
    }

    var drawerSearchForm = document.getElementById('drawer-search-form');
    if (drawerSearchForm) {
      drawerSearchForm.addEventListener('submit', function (e) {
        e.preventDefault();
      });
    }

    var submenuToggles = document.querySelectorAll('.mobile-drawer-toggle');
    for (var s = 0; s < submenuToggles.length; s++) {
      submenuToggles[s].addEventListener('click', function () {
        var targetId = this.getAttribute('data-submenu-target');
        var targetList = targetId ? document.getElementById(targetId) : null;
        var currentlyExpanded = this.getAttribute('aria-expanded') === 'true';

        for (var j = 0; j < submenuToggles.length; j++) {
          var otherId = submenuToggles[j].getAttribute('data-submenu-target');
          var otherList = otherId ? document.getElementById(otherId) : null;
          submenuToggles[j].setAttribute('aria-expanded', 'false');
          if (otherList) otherList.hidden = true;
        }

        if (!currentlyExpanded && targetList) {
          this.setAttribute('aria-expanded', 'true');
          targetList.hidden = false;
        }
      });
    }

    var drawerLinks = document.querySelectorAll('#main-menu a');
    for (var k = 0; k < drawerLinks.length; k++) {
      drawerLinks[k].addEventListener('click', function () {
        setDrawerOpen(false);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        if (desktopCartPanel && desktopCartBtn) {
          desktopCartPanel.hidden = true;
          desktopCartBtn.setAttribute('aria-expanded', 'false');
        }
        if (desktopSearchDropdown) {
          desktopSearchDropdown.hidden = true;
        }
      }
    });
  }

  function initHeroSlider() {
    var section = document.getElementById('section_557630011');
    var track = document.getElementById('hero-slider-track');
    var prevBtn = document.getElementById('hero-prev-btn');
    var nextBtn = document.getElementById('hero-next-btn');
    if (!section || !track) return;

    var slideCount = track.children.length;
    var currentIndex = 0;
    var isPaused = false;

    function updateSlide() {
      track.style.transform = 'translate3d(-' + currentIndex * 100 + '%, 0, 0)';
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        currentIndex = wrapIndex(currentIndex, -1, slideCount);
        updateSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        currentIndex = wrapIndex(currentIndex, 1, slideCount);
        updateSlide();
      });
    }

    section.addEventListener('mouseenter', function () {
      isPaused = true;
    });
    section.addEventListener('mouseleave', function () {
      isPaused = false;
    });

    window.setInterval(function () {
      if (!isPaused) {
        currentIndex = wrapIndex(currentIndex, 1, slideCount);
        updateSlide();
      }
    }, 6000);
  }

  function initTestimonialsCarousel() {
    var track = document.getElementById('testimonials-track');
    var prevBtn = document.getElementById('testimonial-prev-btn');
    var nextBtn = document.getElementById('testimonial-next-btn');
    if (!track) return;

    var slides = track.querySelectorAll('.col-testimonial');
    var total = slides.length;
    var perView = 4;
    var startIndex = 0;

    function getPerView(width) {
      if (width >= 1024) return 4;
      if (width >= 640) return 2;
      return 1;
    }

    function render() {
      perView = getPerView(window.innerWidth);
      var maxIndex = Math.max(0, total - perView);
      startIndex = clampIndex(startIndex, 0, maxIndex);

      var itemWidth = 100 / perView + '%';
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = itemWidth;
      }

      track.style.transform =
        'translate3d(-' + (startIndex * 100) / perView + '%, 0, 0)';

      var showArrows = perView < total;
      if (prevBtn) {
        prevBtn.hidden = !(showArrows && startIndex > 0);
      }
      if (nextBtn) {
        nextBtn.hidden = !(showArrows && startIndex < maxIndex);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var maxIndex = Math.max(0, total - perView);
        startIndex = clampIndex(startIndex, -1, maxIndex);
        render();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var maxIndex = Math.max(0, total - perView);
        startIndex = clampIndex(startIndex, 1, maxIndex);
        render();
      });
    }

    window.addEventListener('resize', render);
    render();
  }

  function initBrandsCarousel() {
    var track = document.getElementById('brands-track');
    var prevBtn = document.getElementById('brands-prev-btn');
    var nextBtn = document.getElementById('brands-next-btn');
    if (!track) return;

    var startIndex = 0;

    function getPerView(width) {
      if (width >= 1024) return 5;
      if (width >= 640) return 3;
      return 1;
    }

    function render() {
      var perView = getPerView(window.innerWidth);
      var html = '';
      var count = Math.min(perView, BRANDS.length);
      for (var i = 0; i < count; i++) {
        var item = BRANDS[(startIndex + i) % BRANDS.length];
        html +=
          '<a href="' +
          escapeHtml(item.href) +
          '" class="brand-item-link" style="width:' +
          100 / perView +
          '%" aria-label="' +
          escapeHtml(item.name) +
          '">' +
          '<img src="' +
          escapeHtml(item.image) +
          '" alt="' +
          escapeHtml(item.name) +
          '" width="120" height="86" />' +
          '</a>';
      }
      track.innerHTML = html;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        startIndex = wrapIndex(startIndex, -1, BRANDS.length);
        render();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        startIndex = wrapIndex(startIndex, 1, BRANDS.length);
        render();
      });
    }

    window.addEventListener('resize', render);
    render();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHeaderAndDrawers();
    initHeroSlider();
    initTestimonialsCarousel();
    initBrandsCarousel();
  });
})();
