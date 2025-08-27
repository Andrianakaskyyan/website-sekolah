// Toggle Dark Mode / Brightness
const toggleModeBtn = document.getElementById("toggleMode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleModeBtn.textContent = "Light Mode";
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#eee";
  } else {
    toggleModeBtn.textContent = "Dark Mode";
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#333";
  }
});

// Efek Web Runtuh - bikin teks jatuh
const runtuhBtn = document.getElementById("runtuhBtn");
runtuhBtn.addEventListener("click", () => {
  if (document.body.classList.contains("runtuh")) return; // cegah klik berulang

  // Ambil elemen yang berisi teks penting
  const teksElemen = document.querySelectorAll(
    "h1, h2, h3, p, li, a, span, strong, em"
  );

  teksElemen.forEach((el) => {
    let teks = el.textContent;
    el.innerHTML = "";
    // Bungkus tiap huruf dengan span untuk animasi jatuh
    for (let huruf of teks) {
      let span = document.createElement("span");
      span.textContent = huruf;
      span.style.display = "inline-block";
      span.style.transition = "transform 1.5s ease, opacity 1.5s ease";
      el.appendChild(span);
    }
  });

  document.body.classList.add("runtuh");

  // Mulai animasi jatuh per span dengan delay acak
  const semuaSpan = document.querySelectorAll("span");
  semuaSpan.forEach((span) => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      span.style.transform = `translateY(${
        Math.random() * 400 + 100
      }px) rotate(${Math.random() * 720 - 360}deg)`;
      span.style.opacity = 0;
    }, delay);
  });

  // Setelah 3 detik reload halaman supaya normal
  setTimeout(() => {
    location.reload();
  }, 3000);
});

// Tombol Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
