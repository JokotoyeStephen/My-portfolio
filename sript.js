  window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


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

    

function darkMood() {
    const light = document.querySelector("#light");
    const btn = document.querySelector("#btn");
    const bodys = document.querySelector("#bodys")
    console.log(bodys);
    bodys.classList.toggle("money")
    btn.computedStyleMap.backgroundColor ="white"

}

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

  // document.addEventListener("DOMContentLoaded", () => {
  //   const counters = document.querySelectorAll(".counter");
  //   let started = false; // make sure it only runs once

  //   function animateCounters() {
  //     if (started) return;

  //     const statsSection = document.querySelector("#stats");
  //     if (!statsSection) return;

  //     const sectionTop = statsSection.getBoundingClientRect().top;
  //     const triggerPoint = window.innerHeight * 0.8;

  //     if (sectionTop < triggerPoint) {
  //       started = true;

  //       counters.forEach(counter => {
  //         const target = +counter.getAttribute("data-target");
  //         const duration = 1500; // animation time in ms
  //         const startTime = performance.now();

  //         function update(now) {
  //           const elapsed = now - startTime;
  //           const progress = Math.min(elapsed / duration, 1);
  //           const current = Math.floor(progress * target);
  //           counter.textContent = current;

  //           if (progress < 1) {
  //             requestAnimationFrame(update);
  //           } else {
  //             counter.textContent = target; // ensure final value
  //           }
  //         }

  //         requestAnimationFrame(update);
  //       });
  //     }
  //   }

  //   // Run when scrolling and also once on load
  //   window.addEventListener("scroll", animateCounters);
  //   animateCounters();
  // });
            // const skillsSection = document.getElementById('skills');

            // function fillBars() {
            //     const bars = document.querySelectorAll('.skill-bar');
            //     bars.forEach(bar => {
            //         const skillLevel = bar.getAttribute('data-skill');
            //         bar.style.width = skillLevel + '%';
            //     });
            // }

            // // Detect when the user scrolls to the skills section
            // const observer = new IntersectionObserver(entries => {
            //     entries.forEach(entry => {
            //         if (entry.isIntersecting) {
            //             fillBars();
            //             observer.disconnect(); // Stop observing after filling
            //         }
            //     });
            // });

            // observer.observe(skillsSection);


