// Ambil tanggal dari atribut data-target-date pada elemen dengan id "event-date"
const targetDateString = document.getElementById("event-date").getAttribute("data-target-date");

// Konversi string tanggal target menjadi format Date
const targetDate = new Date(targetDateString).getTime();

// Fungsi untuk memulai countdown
function startCountdown() {
    const countdownInterval = setInterval(function () {
        // Dapatkan tanggal dan waktu saat ini
        const now = new Date().getTime();

        // Temukan jarak antara sekarang dan tanggal tujuan
        const distance = targetDate - now;

        // Perhitungan waktu untuk minggu, hari, jam, menit, dan detik
        const totalDays = Math.ceil(distance / (1000 * 60 * 60 * 24)); // Total jumlah hari
        const weeks = Math.floor(totalDays / 7); // Jumlah minggu penuh
        const days = totalDays; // Menampilkan total hari

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasil di elemen dengan id "countdown"
        document.getElementById("countdown").innerHTML = `
            <div class="row">
                <div class="col">
                    <span>${weeks}</span>
                <br>
                    <span>weeks</span>
                </div>
                <div class="col">
                    <span>${days}</span>
                <br>
                    <span>day</span>
                </div>
                <div class="col">
                    <span>${hours}</span>
                <br>
                    <span>hr</span>
                </div>
                <div class="col">
                    <span>${minutes}</span>
                <br>
                    <span>min</span>
                </div>
                <div class="col">
                    <span>${seconds}</span>
                <br>
                    <span>sec</span>
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
