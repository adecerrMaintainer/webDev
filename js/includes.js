async function loadPartials() {
  const header = await fetch('partials/header.html').then(r => r.text());
  const nav = await fetch('partials/nav.html').then(r => r.text());
  const footer = await fetch('partials/footer.html').then(r => r.text());

  document.getElementById('site-header').innerHTML = header;
  document.getElementById('site-nav').innerHTML = nav;
  document.getElementById('site-footer').innerHTML = footer;

  initMenu();
}

function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (!toggle || !sidebar) return;

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay?.classList.toggle("active");
  });

  overlay?.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.querySelectorAll("#sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay?.classList.remove("active");
    });
  });
}

loadPartials();