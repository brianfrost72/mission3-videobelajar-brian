document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Selamat! Kamu menjadi pelanggan kami!";
  document.getElementById("msg").style.color = "lightgreen";
});

const authMenu = document.getElementById("authMenu");
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");

// Ambil status login dari localStorage
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

// Update navbar sesuai status login
function updateNavbar() {
  if (isLoggedIn) {
    authMenu.innerHTML = `
      <div class="nav-account" id="accountIcon">
        <img src="assets/images/img/accountpic.png" alt="Avatar">
        
        <ul class="dropdown">
          <li><a href="#">Akun Saya</a></li>
          <li><a href="#" id="logoutBtn">Logout</a></li>
        </ul>
      </div>
    `;

    const accountIcon = document.getElementById("accountIcon");
    accountIcon.addEventListener("click", () => {
      accountIcon.classList.toggle("active");
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
      isLoggedIn = false;
      localStorage.setItem("isLoggedIn", "false");
      updateNavbar();
      alert("Anda berhasil logout!");
    });
  } else {
    authMenu.innerHTML = `<a href="login/login">Login</a>`;
  }
}

updateNavbar();

// ✅ Toggle menu mobile
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Add active class to the current button (highlight it)
let header = document.getElementById("myDIV");
let btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Tombol scroll
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Tampilkan tombol saat scroll > 200px
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Klik tombol → scroll ke atas dengan halus
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
