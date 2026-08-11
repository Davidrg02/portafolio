// UI interactions: nav, scroll effects, reveal-on-scroll, counters, scrollspy.

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const scrollProgress = document.getElementById("scrollProgress");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // --- Mobile nav ---
  const closeNav = () => {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  // --- Header state + scroll progress bar ---
  const onScroll = () => {
    header.classList.toggle("header--scrolled", window.scrollY > 8);

    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  // --- Footer year ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Reveal on scroll ---
  const revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // --- Animated counters (hero facts) ---
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const prefix = el.getAttribute("data-prefix") || "";
    const locale = document.documentElement.lang === "en" ? "en-US" : "es-CO";

    if (reduceMotion) {
      el.textContent = prefix + target.toLocaleString(locale);
      return;
    }

    const start = performance.now();
    const duration = 1100;
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent =
        prefix + Math.round(target * eased).toLocaleString(locale);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (counters.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
    } else {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  // --- Animated finding bars (demand-forecasting case study) ---
  const bars = document.querySelectorAll("[data-width]");
  const runBars = () => {
    bars.forEach((bar, i) => {
      const width = `${bar.getAttribute("data-width")}%`;
      if (reduceMotion) {
        bar.style.width = width;
      } else {
        setTimeout(() => {
          bar.style.width = width;
        }, 130 * i);
      }
    });
  };

  if (bars.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      runBars();
    } else {
      const barsContainer = bars[0].closest(".finding__bars") || bars[0].parentElement;
      const barsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runBars();
              barsObserver.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      barsObserver.observe(barsContainer);
    }
  }

  // --- Scrollspy nav highlighting ---
  const navLinks = Array.from(nav.querySelectorAll(".nav__link"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const activeLink = navLinks.find(
            (link) => link.getAttribute("href") === `#${entry.target.id}`
          );
          if (!activeLink) return;
          navLinks.forEach((link) => link.classList.remove("is-active"));
          activeLink.classList.add("is-active");
        });
      },
      { threshold: 0.15, rootMargin: "-30% 0px -55% 0px" }
    );
    sections.forEach((section) => spyObserver.observe(section));
  }
});
