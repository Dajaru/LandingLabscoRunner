const routeImage = document.querySelector('.routes-overlay');
const card10k = document.querySelectorAll('.card-10k');
const card5k = document.querySelectorAll('.card-5k');
const distanceValue = document.querySelectorAll('.distance-value');
const estimateValue = document.querySelectorAll('.estimate-value');
const startTime = document.querySelectorAll('.start-time');
const deskRun = document.querySelectorAll('.desk-run');

// Fungsi untuk menambahkan dan menghapus class fade-in
function applyFadeIn(elements) {
    elements.forEach((el) => {
        el.classList.remove('fade-in'); // Hapus class dulu untuk reset animasi
        void el.offsetWidth; // Trigger reflow
        el.classList.add('fade-in'); // Tambahkan class fade-in
    });
}

// Fungsi untuk mengubah rute 10K
const activate10KRoute = () => {
    // Animasi gambar rute
    routeImage.classList.remove('fade-in');
    void routeImage.offsetWidth;
    routeImage.classList.add('fade-in');
    routeImage.src = '../assets/images/run-route/10k.svg'; // Path SVG 10K

    // Animasi nilai jarak, estimasi, dan waktu mulai
    distanceValue.forEach((el) => el.textContent = '10.32');
    estimateValue.forEach((el) => el.textContent = '45.00');
    startTime.forEach((el) => el.textContent = '06.00');

    // Animasi deskripsi
    deskRun.forEach((el) => el.textContent = 'A 10km long track that takes runners through the beautiful landscape of Sudirman and Thamrin Urban areas.');

    // Apply fade-in animation ke elemen yang berubah
    applyFadeIn(distanceValue);
    applyFadeIn(estimateValue);
    applyFadeIn(startTime);
    applyFadeIn(deskRun);

    // Update hanya card active
    card10k.forEach((el) => el.classList.add('active'));
    card5k.forEach((el) => el.classList.remove('active'));
};

// Fungsi untuk mengubah rute 5K
const activate5KRoute = () => {
    // Animasi gambar rute
    routeImage.classList.remove('fade-in');
    void routeImage.offsetWidth;
    routeImage.classList.add('fade-in');
    routeImage.src = '../assets/images/run-route/5k.svg'; // Path SVG 5K

    // Animasi nilai jarak, estimasi, dan waktu mulai
    distanceValue.forEach((el) => el.textContent = '5.00');
    estimateValue.forEach((el) => el.textContent = '25.00');
    startTime.forEach((el) => el.textContent = '06.30');

    // Animasi deskripsi
    deskRun.forEach((el) => el.textContent = 'A scenic 5km course designed for those looking to experience the thrill of competitive running in a shorter distance.');

    // Apply fade-in animation ke elemen yang berubah
    applyFadeIn(distanceValue);
    applyFadeIn(estimateValue);
    applyFadeIn(startTime);
    applyFadeIn(deskRun);

    // Update hanya card active
    card5k.forEach((el) => el.classList.add('active'));
    card10k.forEach((el) => el.classList.remove('active'));
};

// Event listener untuk rute 10K
card10k.forEach((el) => el.addEventListener('click', activate10KRoute));

// Event listener untuk rute 5K
card5k.forEach((el) => el.addEventListener('click', activate5KRoute));
