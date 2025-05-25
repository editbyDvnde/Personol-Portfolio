document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".skill-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-description");
  const modalLink = document.getElementById("modalLink"); // Optional if needed
  const modalClose = document.querySelector(".close-modal");

  const skillData = {
  "Design Grafis": {
    desc: "Skilled in creating visually appealing designs with tools like Photoshop, Illustrator, and more.",
    link: "#",
    level: "100%"
  },
  "Frontend": {
    desc: "Comfortable building responsive web pages using HTML, CSS, and JavaScript.",
    link: "#",
    level: "75%"
  },
  "C++": {
    desc: "Basic understanding of C++ syntax and logic building for programming fundamentals.",
    link: "#",
    level: "40%"
  },
  "Python": {
    desc: "Able to automate tasks and build small applications with Python.",
    link: "#",
    level: "48%"
  },
  "Networking": {
    desc: "Understand routing, switching, and network topologies for small networks.",
    link: "#",
    level: "90%"
  },
  "Penetration Testing": {
    desc: "Familiar with basic ethical hacking tools like Kali Linux, Metasploit, and Wireshark.",
    link: "#",
    level: "85%"
  },
  "Editing Video": {
    desc: "Experienced in editing videos using Adobe Premiere Pro and CapCut.",
    link: "#",
    level: "90%"
  }
};


  document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector(".skill-name")?.innerText;
      if (!title || !skillData[title]) return;

      modalTitle.textContent = title;
      modalContent.textContent = skillData[title].desc;
      document.getElementById("modal-level-bar").style.width = skillData[title].level;
      modal.classList.add("active");
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // EDUCATION toggle
  document.querySelectorAll('.toggle-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.parentElement.querySelector('.school-details');
      const isActive = details.classList.contains('active');

      if (isActive) {
        details.classList.remove('active');
        btn.innerHTML = '<span>View Details</span><i class="fas fa-chevron-down"></i>';
      } else {
        details.classList.add('active');
        btn.innerHTML = '<span>Hide Details</span><i class="fas fa-chevron-up"></i>';
      }
    });
  });

  // Open map button
  document.querySelectorAll('.open-map').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-map-url');
      window.open(url, '_blank');
    });
  });
});
