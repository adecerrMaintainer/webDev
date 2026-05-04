document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    title.nextElementSibling.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (toggle && sidebar && overlay) {

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    document.querySelectorAll("#sidebar a").forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
  }
});