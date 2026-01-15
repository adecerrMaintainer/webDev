async function loadPartials() {
  const header = await fetch('partials/header.html').then(r => r.text());
  const nav = await fetch('partials/nav.html').then(r => r.text());
  const footer = await fetch('partials/footer.html').then(r => r.text());

  document.getElementById('site-header').innerHTML = header;
  document.getElementById('site-nav').innerHTML = nav;
  document.getElementById('site-footer').innerHTML = footer;
}

loadPartials();
