/**
* Template Name: Company
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Updated: Jul 31 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);


  
  document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  //side bar
  document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarBtn = document.getElementById('sidebar-btn');
  
    sidebarBtn.addEventListener('click', function() {
      if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0';
        sidebarBtn.style.right = '250px';
      } else {
        sidebar.style.right = '-250px';
        sidebarBtn.style.right = '0';
      }
    });
  
    document.addEventListener('click', function(event) {
      if (!sidebar.contains(event.target) && !sidebarBtn.contains(event.target)) {
        sidebar.style.right = '-250px';
        sidebarBtn.style.right = '0';
      }
    });

  });
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tabContent = document.querySelectorAll('.tab-content');
      const tabButtons = document.querySelectorAll('.tab-button');
  
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      const tabToShow = button.getAttribute('data-tab');
      tabContent.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('id') === tabToShow) {
          tab.classList.add('active');
        }
      });
    });
  });
  
  const images = [
    {src: 'assets/img/uipath/im-hero-2020.avif', heading: 'UiPath AI: Right brain meets left brain. They celebrate.', paragraph: 'UiPath is AI at work.'},
    {src: 'assets/img/uipath/im-hero-2.jpg', heading: 'Automate the future. Start today.', paragraph: 'Discover the power of automation with UiPath.'},
    {src: 'assets/img/uipath/AI quote photo 1.jpg', heading: 'Empower your business with AI.', paragraph: 'Ai and automation, the perfect combination.'}
];

let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slider-image').src = images[currentIndex].src;
    document.getElementById('slider-heading').textContent = images[currentIndex].heading;
    document.getElementById('slider-paragraph').textContent = images[currentIndex].paragraph;
}

setInterval(changeSlide, 4000);
  
  
  
}

)();


// Alert contact.php
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah reload halaman secara default

  const form = this;
  const formData = new FormData(form);

  // Seleksi elemen alert
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.style.display = 'none'; // Sembunyikan alert awalnya

  // Kirim data form ke contact.php
  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json()) // Parsing respon JSON dari PHP
    .then(data => {
      if (data.status === 'success') {
        alertMessage.style.display = 'block';
        alertMessage.className = 'alert-success text-white'; // Tampilkan sebagai alert sukses
        alertMessage.textContent = data.message; // Pesan sukses
        form.reset(); // Reset form setelah sukses
      } else {
        alertMessage.style.display = 'block';
        alertMessage.className = 'alert-danger text-white'; // Tampilkan sebagai alert error
        alertMessage.textContent = data.message; // Pesan error
      }
    })
    .catch(error => {
      alertMessage.style.display = 'block';
      alertMessage.className = 'alert-danger text-white'; // Tampilkan sebagai alert error
      alertMessage.textContent = `Terjadi kesalahan: ${error.message}`; // Pesan kesalahan umum
    });
});
