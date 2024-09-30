
const mapRoutes = document.querySelector('.map-routes');

mapRoutes.addEventListener('scroll', function () {
    if (mapRoutes.scrollLeft > 700) {
        mapRoutes.scrollTo({
            left: 700,
            // behavior: 'smooth'  // Menambahkan animasi smooth pada scroll
        });
    }
});


let isDown = false;
let startX;
let scrollLeft;

mapRoutes.addEventListener('mousedown', (e) => {
    isDown = true;
    mapRoutes.classList.add('active');
    startX = e.pageX - mapRoutes.offsetLeft;
    scrollLeft = mapRoutes.scrollLeft;
    mapRoutes.style.cursor = 'grabbing';
});

mapRoutes.addEventListener('mouseleave', () => {
    isDown = false;
    mapRoutes.classList.remove('active');
    mapRoutes.style.cursor = 'grab';
});

mapRoutes.addEventListener('mouseup', () => {
    isDown = false;
    mapRoutes.classList.remove('active');
    mapRoutes.style.cursor = 'grab';
});

mapRoutes.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // Hentikan jika mouse tidak ditekan
    e.preventDefault();
    const x = e.pageX - mapRoutes.offsetLeft;
    const walk = (x - startX) * 2;  // Adjust kecepatan scroll
    mapRoutes.scrollLeft = scrollLeft - walk;
});
