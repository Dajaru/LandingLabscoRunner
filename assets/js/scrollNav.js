let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Scroll ke bawah, sembunyikan navbar
    if (scrollTop > lastScrollTop && scrollTop > 600) {
        navbar.classList.add('hidden');
    } else {
        // Scroll ke atas, tampilkan navbar
        navbar.classList.remove('hidden');
    }

    // Jika scroll lebih dari 100px, ubah background menjadi putih
    if (scrollTop > 10) {
        navbar.classList.add('scrolled');
    } else {
        // Jika di posisi paling atas, kembalikan ke background transparan
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});