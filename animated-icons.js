const icons = document.querySelectorAll('.blur-icon');

const iconData = [];

const SPEED = 0.03;
const FADE_SPEED = 0.005;

icons.forEach(icon => {
  const top = Math.random() * 70 + 15;
  const left = Math.random() * 70 + 15;
  const angle = Math.random() * 2 * Math.PI;
  icon.style.top = top + '%';
  icon.style.left = left + '%';
  icon.style.opacity = 1;
  iconData.push({
    el: icon,
    top,
    left,
    angle,
    opacity: 1,
    fadingOut: false,
  });
});

function detectCollision(a, b) {
  const dx = a.left - b.left;
  const dy = a.top - b.top;
  const distance = Math.sqrt(dx*dx + dy*dy);
  return distance < 10;
}

function bounceOffEdges(data) {
  if (data.left <= 5) data.angle = Math.PI - data.angle;
  if (data.left >= 95) data.angle = Math.PI - data.angle;
  if (data.top <= 5) data.angle = -data.angle;
  if (data.top >= 95) data.angle = -data.angle;
  data.angle = (data.angle + 2 * Math.PI) % (2 * Math.PI);
}

function updatePositions() {
  for (let i = 0; i < iconData.length; i++) {
    const data = iconData[i];
    
    // Update posisi
    data.left += Math.cos(data.angle) * SPEED;
    data.top += Math.sin(data.angle) * SPEED;
    bounceOffEdges(data);

    // Cek collision & ubah arah kalau tabrakan
    for (let j = 0; j < iconData.length; j++) {
      if (i === j) continue;
      if (detectCollision(data, iconData[j])) {
        data.angle += Math.PI / 2;
        data.angle %= 2 * Math.PI;
      }
    }

    // Fade in/out logic
    if (!data.fadingOut && Math.random() < 0.002) {
      data.fadingOut = true;
    }

    if (data.fadingOut) {
      data.opacity -= FADE_SPEED;
      if (data.opacity <= 0) {
        data.opacity = 0;
        data.fadingOut = false;
        // Reset posisi & arah saat muncul lagi
        data.top = Math.random() * 70 + 15;
        data.left = Math.random() * 70 + 15;
        data.angle = Math.random() * 2 * Math.PI;
      }
    } else if (data.opacity < 1) {
      data.opacity += FADE_SPEED;
      if (data.opacity > 1) data.opacity = 1;
    }

    data.el.style.top = data.top + '%';
    data.el.style.left = data.left + '%';
    data.el.style.opacity = data.opacity;
  }
  requestAnimationFrame(updatePositions);
}

updatePositions();
