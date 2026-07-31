document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    title.classList.toggle("open");
    title.nextElementSibling.classList.toggle("open");
  });
});

document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const slides = track.children.length;
  const dotsWrap = carousel.querySelector(".carousel-dots");
  let index = 0;

  for (let i = 0; i < slides; i++) {
    const dot = document.createElement("span");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  }

  function goTo(i) {
    index = (i + slides) % slides;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsWrap.querySelectorAll(".carousel-dot").forEach((d, di) => d.classList.toggle("active", di === index));
  }

  carousel.querySelector(".carousel-prev").addEventListener("click", () => goTo(index - 1));
  carousel.querySelector(".carousel-next").addEventListener("click", () => goTo(index + 1));
});

document.querySelectorAll(".flip-card").forEach(card => {
  const inner = card.querySelector(".flip-card-inner");
  const back = card.querySelector(".flip-card-back");

  inner.addEventListener("transitionend", () => {
    if (!card.classList.contains("flipped") && back) {
      back.scrollTop = 0;
    }
  });

  card.addEventListener("click", () => {
    const wasFlipped = card.classList.contains("flipped");
    document.querySelectorAll(".flip-card.flipped").forEach(c => c.classList.remove("flipped"));
    if (!wasFlipped) card.classList.add("flipped");
  });
});
