function darkMood(){
  const body = document.getElementById("bodys");
  const icon = document.getElementById("dark");

  // Toggle dark mode
  body.classList.toggle("money");

  // If dark mode is ON → show moon
  if (body.classList.contains("money")) {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  } 
  // If dark mode is OFF → show sun
  else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
}}
  
const goTop = document.getElementById("goTop");

goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTop.classList.remove("hidden");
  } else {
    goTop.classList.add("hidden");
  }
});

  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
 
 window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


 console.log("hello");

 fetch("http://localhost:5000/contact")
 
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));


  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let started = false; // make sure it only runs once

    function animateCounters() {
      if (started) return;

      const statsSection = document.querySelector("#stats");
      if (!statsSection) return;

      const sectionTop = statsSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;

      if (sectionTop < triggerPoint) {
        started = true;

        counters.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          const duration = 1500; // animation time in ms
          const startTime = performance.now();

          function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * target);
            counter.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              counter.textContent = target; // ensure final value
            }
          }

          requestAnimationFrame(update);
        });
      }
    }

    // Run when scrolling and also once on load
    window.addEventListener("scroll", animateCounters);
    animateCounters();
  });

const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = menuToggle.querySelector('.hamburger');
    const closeIcon = menuToggle.querySelector('.close');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    



 var typed = new Typed('#typed', {
      strings: ["Cyber Security Expert","Full-stack developer","Software Engineer","Data Scientist", "Network Engineer"],
      typeSpeed: 100,
      backspeed: 50,
      backDelay: 1000,
      loop: true
    });

      // Auto-update year
  document.getElementById("year").textContent = new Date().getFullYear();

// 
    window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});