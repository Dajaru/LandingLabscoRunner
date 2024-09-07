// Ambil tanggal dari atribut data-target-date pada elemen dengan id "event-date"
// const targetDateString = document.getElementById("event-date").getAttribute("data-target-date");

// Konversi string tanggal target menjadi format Date
// const targetDate = new Date(targetDateString).getTime();
const targetDate = new Date("October 20, 2024 00:00:00").getTime();

// Fungsi untuk memulai countdown
function startCountdown() {
    const countdownInterval = setInterval(function () {
        // Dapatkan tanggal dan waktu saat ini
        const now = new Date().getTime();

        // Temukan jarak antara sekarang dan tanggal tujuan
        const distance = targetDate - now;

        // Perhitungan waktu untuk minggu, hari, jam, menit, dan detik
        const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasil di elemen dengan id "countdown"
        document.getElementById("countdown").innerHTML = `
            <div class="row">
                <div class="col">
                    <div>${weeks}</div>
                    <small>weeks</small>
                </div>
                <div class="col">
                    <div>${days}</div>
                    <small>day</small>
                </div>
                <div class="col">
                    <div>${hours}</div>
                    <small>hr</small>
                </div>
                <div class="col">
                    <div>${minutes}</div>
                    <small>min</small>
                </div>
                <div class="col">
                    <div>${seconds}</div>
                    <small>sec</small>
                </div>
            </div>
        `;

        // Jika countdown selesai, hentikan interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "The event has started!";
        }
    }, 1000);
}

// Mulai countdown saat halaman dimuat
startCountdown();
