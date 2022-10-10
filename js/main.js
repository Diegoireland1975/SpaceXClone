const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("main-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  mobileMenu.classList.toggle("show-menu");
});
// ##########################//
// Enable hidden header
// ##############################//

const mainHeader = document.querySelector(".main-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    mainHeader.classList.add("header-hidden");
    mobileMenu.classList.remove("show-menu");
    btn.classList.remove("open");
  } else {
    mainHeader.classList.remove("header-hidden");
  }

  lastScrollY = window.scrollY;
});

// ###################//
// COUNTER##///////////
// #################////
document.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  if (scrollPos > 150 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 150 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
});
function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute("data-target");
      // Get current counter value
      const c = +counter.innerText;

      // Create increment
      const increment = target / 100;

      // If counter is less than target add increment
      if (c < target) {
        // Round up and set the counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 35);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
