// Skills Modal Functionality
document.addEventListener('DOMContentLoaded', function () {
    const skillCards = document.querySelectorAll('.skill-card');
    const skillModal = document.querySelector('.skill-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLevelBar = document.getElementById('modal-level-bar');

    // Skill data
    const skillData = {
        "design-graphics": {
            icon: '<i class="fas fa-paint-brush"></i>',
            title: "Design Grafis",
            description: "Membuat desain visual yang menarik dengan perhatian pada komposisi, teori warna, dan tipografi.",
            level: "100%"
        },
        frontend: {
            icon: '<i class="fas fa-laptop-code"></i>',
            title: "Frontend",
            description: "Mengembangkan tampilan antarmuka pengguna yang responsif dan interaktif menggunakan HTML, CSS, dan JavaScript.",
            level: "75%"
        },
        cpp: {
            icon: '<i class="fas fa-code"></i>',
            title: "C++",
            description: "Pemrograman menggunakan bahasa C++ untuk pengembangan aplikasi dan sistem yang efisien.",
            level: "40%"
        },
        python: {
            icon: '<i class="fab fa-python"></i>',
            title: "Python",
            description: "Pemrograman Python untuk scripting, otomasi, dan pengembangan aplikasi berbasis data.",
            level: "48%"
        },
        networking: {
            icon: '<i class="fas fa-network-wired"></i>',
            title: "Networking",
            description: "Memahami konsep jaringan komputer dan konfigurasi perangkat jaringan.",
            level: "90%"
        },
        pentesting: {
            icon: '<i class="fas fa-user-secret"></i>',
            title: "Penetration Testing",
            description: "Melakukan pengujian keamanan sistem untuk mengidentifikasi celah dan kerentanan.",
            level: "85%"
        },
        "video-editing": {
            icon: '<i class="fas fa-video"></i>',
            title: "Editing Video",
            description: "Mengedit video dengan perangkat lunak editing untuk menghasilkan konten berkualitas.",
            level: "90%"
        }
    };


    // Add click event to each skill card
    skillCards.forEach(card => {
        card.addEventListener('click', function () {
            const skillId = this.getAttribute('data-skill');
            const skill = skillData[skillId];

            // Update modal content
            if (skillModal.classList.contains('active')) return;
            modalIcon.innerHTML = skill.icon;
            modalTitle.textContent = skill.title;
            modalDescription.textContent = skill.description;

            // Animate skill level bar
            setTimeout(() => {
                modalLevelBar.style.width = skill.level;
            }, 100);

            // Show modal
            skillModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking close button
    closeModal.addEventListener('click', function () {
        skillModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        modalLevelBar.style.width = '0';
    });

    // Close modal when clicking outside
    skillModal.addEventListener('click', function (e) {
        if (e.target === skillModal) {
            skillModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            modalLevelBar.style.width = '0';
        }
    });
});

// Generate twinkling stars
const skillsSection = document.querySelector('.skills-section');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.opacity = Math.random();
    skillsSection.appendChild(star);
}
