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

  