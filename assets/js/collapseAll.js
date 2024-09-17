const expandCollapseBtn = document.getElementById('expandCollapseAll');
const accordions = document.querySelectorAll('.accordion-collapse');
const accordionButtons = document.querySelectorAll('.accordion-button');
let isExpanded = false;

expandCollapseBtn.addEventListener('click', function () {
    if (!isExpanded) {
        // Expand all
        accordions.forEach(accordion => {
            accordion.classList.add('show');
        });
        accordionButtons.forEach(button => {
            button.classList.remove('collapsed'); // Tambahkan gaya sesuai CSS
        });
        expandCollapseBtn.textContent = 'Close All';
    } else {
        // Collapse all, including the first one
        accordions.forEach(accordion => {
            accordion.classList.remove('show');
        });
        accordionButtons.forEach(button => {
            button.classList.add('collapsed'); // Kembalikan gaya default
        });
        expandCollapseBtn.textContent = 'Expand All';
    }
    isExpanded = !isExpanded;
});

// Tambahkan event listener untuk mengubah warna tombol accordion ketika dibuka atau ditutup
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));

        collapseElement.addEventListener('shown.bs.collapse', function () {
            button.classList.remove('collapsed'); // Tambahkan gaya ketika accordion terbuka
        });

        collapseElement.addEventListener('hidden.bs.collapse', function () {
            button.classList.add('collapsed'); // Hapus gaya ketika accordion tertutup
        });
    });
});
