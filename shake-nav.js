// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-links a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             // Hentikan sementara href lompat agar animasi terlihat dulu
//             e.preventDefault();

//             // Hapus class animasi jika ada (untuk restart animasi)
//             link.classList.remove('shake-y');
//             void link.offsetWidth; // Trigger reflow (restart animasi)
//             link.classList.add('shake-y');

//             // Setelah sedikit delay, baru loncat ke anchor
//             setTimeout(() => {
//                 const targetId = link.getAttribute('href');
//                 const target = document.querySelector(targetId);
//                 if (target) {
//                     target.scrollIntoView({ behavior: 'smooth' });
//                 }
//             }, 250); // kasih waktu animasi selesai dulu
//         });
//     });
// });
