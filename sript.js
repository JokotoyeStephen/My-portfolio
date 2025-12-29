// light  mood and dark mood
function darkMood(){
  const body = document.getElementById("bodys");
  const icon = document.getElementById("dark");

  // Toggle dark mode
  body.classList.toggle("money");

  // If dark mode is ON → show moon
  if (body.classList.contains("money")) {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  } 
  // If dark mode is OFF → show sun
  else {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
}}


    // const menuToggle = document.getElementById('menu-toggle');
    // const mobileMenu = document.getElementById('mobile-menu');

    // menuToggle.addEventListener('click', () => {
    //     mobileMenu.classList.toggle('hidden');
    // });


    // });
  // back to top
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

// axios animation9
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });

//change the navbar background color once scrolled  
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

// the aabou me section the scrolling number
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

//  const menuIcon = document.getElementById('our');
// const navlinks = document.getElementById('menuicon');

// menuIcon.addEventListener('click', () => {
//     navlinks.classList.toggle('active');
// });

// typing in the hero section
 var typed = new Typed('#typed', {
      strings: ["Cyber Security Expert","Full-stack developer","Software Engineer","Graphics Designer", "Network Engineer"],
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
//   const menuToggle = document.getElementById("menu-toggle");
//   const mobileMenu = document.getElementById("mobile-menu");

//   // Safety check
//   if (!menuToggle || !mobileMenu) return;

//   // Toggle menu on button click
//   menuToggle.addEventListener("click", (e) => {
//     e.stopPropagation();
//     mobileMenu.classList.toggle("hidden");
//   });

//   // Close menu when clicking outside
//   document.addEventListener("click", (e) => {
//     if (
//       !mobileMenu.contains(e.target) &&
//       !menuToggle.contains(e.target)
//     ) {
//       mobileMenu.classList.add("hidden");
//     }
//   });

//   // Close menu when a link is clicked
//   mobileMenu.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", () => {
//       mobileMenu.classList.add("hidden");
//     });
//   });
// });<script>
// const form = document.getElementById("contactForm");

// form.addEventListener("submit", async function(e) {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());

//   // Loading alert
//   Swal.fire({
//     title: "Sending message...",
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     }
//   });

//   try {

//     const response = await fetch("/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     });

//     const result = await response.json();

//     if (result.status === "success") {

//       Swal.fire({
//         icon: "success",
//         title: "Message Sent!",
//         text: "Your message has been sent successfully.",
//         confirmButtonColor: "#2563eb"
//       });

//       form.reset();

//     } else {

//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Email could not be sent."
//       });

//     }

//   } catch (error) {

//     Swal.fire({
//       icon: "error",
//       title: "Server Error",
//       text: "Please try again later."
//     });
//   }
// });