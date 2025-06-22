

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