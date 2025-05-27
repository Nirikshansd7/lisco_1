const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
let angleOffset = 20;
let numStars = 1200;
let centerX, centerY;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  const maxRadius = Math.sqrt(centerX ** 2 + centerY ** 2);
  stars = Array.from({ length: numStars }, () => ({
    baseAngle: Math.random() * 2 * Math.PI,
    distance: Math.random() * maxRadius,
    radius: Math.random() * 1.5 + 0.5,
    speed: 0.001 + Math.random() * 0.002,
    alpha: Math.random()
  }));
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    star.baseAngle += star.speed;
    const x = centerX + Math.cos(star.baseAngle + angleOffset) * star.distance;
    const y = centerY + Math.sin(star.baseAngle + angleOffset) * star.distance;

    star.alpha += (Math.random() - 0.5) * 0.05;
    star.alpha = Math.max(0.2, Math.min(1, star.alpha));

    ctx.beginPath();
    ctx.globalAlpha = star.alpha;
    ctx.fillStyle = 'white';
    ctx.arc(x, y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function animate() {const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  
  let stars = [];
  let angleOffset = 20 * Math.PI / 180; // Convert degrees to radians at initialization
  let numStars = 1200;
  let centerX, centerY;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
  
    const maxRadius = Math.sqrt(centerX ** 2 + centerY ** 2);
    stars = Array.from({ length: numStars }, () => ({
      baseAngle: Math.random() * 2 * Math.PI,
      distance: Math.random() * maxRadius,
      radius: Math.random() * 1.5 + 0.5,
      speed: 0.001 + Math.random() * 0.002,
      alpha: Math.random()
    }));
  }
  
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      star.baseAngle += star.speed;
      const x = centerX + Math.cos(star.baseAngle + angleOffset) * star.distance;
      const y = centerY + Math.sin(star.baseAngle + angleOffset) * star.distance;
  
      star.alpha += (Math.random() - 0.5) * 0.05;
      star.alpha = Math.max(0.2, Math.min(1, star.alpha));
  
      ctx.beginPath();
      ctx.globalAlpha = star.alpha;
      ctx.fillStyle = 'white';
      ctx.arc(x, y, star.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
    ctx.globalAlpha = 1; // Reset after drawing all stars
  }
  
  function animate() {
    angleOffset += 0.0005; // This stays in radians
    drawStars();
    requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', resizeCanvas);
  
  resizeCanvas();
  animate();
  
  // ------------------------------------------------------------------
  
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  angleOffset += 0.0005;
  drawStars();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
animate();
// ------------------------------------------------------------------

  const hamburger = document.getElementById('hamburger');
  const navCollapse = document.getElementById('navbarNav');

  hamburger.addEventListener('click', () => {
    const isShown = navCollapse.classList.contains('showing');

    if (isShown) {
      navCollapse.classList.remove('showing');
      hamburger.classList.add('collapsed');
    } else {
      navCollapse.classList.add('showing');
      hamburger.classList.remove('collapsed');
    }
  });

  // Close menu on nav link click (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        navCollapse.classList.remove('showing');
        hamburger.classList.add('collapsed');
      }
    });
  });



// ================================================================================

 
const cards = document.querySelectorAll('.hologram-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
cards.forEach(card => observer.observe(card));

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left, y = e.clientY - top;
    const rotX = ((y - height/2) / (height/2)) * 10;
    const rotY = ((x - width/2) / (width/2)) * -10;
    card.style.transform = `scale(1.3) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) rotateX(0) rotateY(0)';
  });
  card.addEventListener('touchstart', () => {
    card.style.transform = 'scale(1.2) rotateX(5deg) rotateY(-5deg)';
  });
  card.addEventListener('touchend', () => {
    card.style.transform = 'scale(1) rotateX(0) rotateY(0)';
  });
});
// =========================for email================================

(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("❌ Failed to send message. " + JSON.stringify(error));
    });
});

// ====================================================



window.addEventListener('DOMContentLoaded', () => { 
  const logo = document.getElementById('logo');
  logo.classList.add('zoom-animation');
});






// =========================================
