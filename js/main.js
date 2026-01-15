document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    title.nextElementSibling.classList.toggle("open");
  });
});
