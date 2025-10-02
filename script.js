// script.js

// GANTI SELURUH BLOK KODE MODAL LAMA ANDA DENGAN INI
// --- Logika untuk Modal/Pop-up Portofolio ---
const modalTriggers = document.querySelectorAll('.card-cta');
const modalOverlay = document.getElementById('portfolio-modal');

if (modalOverlay && modalTriggers.length > 0) {
    const modalCloseButton = modalOverlay.querySelector('.modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    function openModal(triggerElement) {
        let title, image, description;

        // --- INI BAGIAN PINTARNYA ---
        // Cek apakah data ada di tombol itu sendiri (untuk kartu LDBI)
        if (triggerElement.dataset.title) {
            title = triggerElement.dataset.title;
            image = triggerElement.dataset.image;
            description = triggerElement.dataset.description;
        } else {
        // Jika tidak, ambil data dari kartu induknya (untuk kartu biasa)
            const card = triggerElement.closest('.portfolio-card');
            title = card.dataset.title;
            image = card.dataset.image;
            description = card.dataset.description;
        }

        modalTitle.textContent = title;
        modalImage.src = image;
        modalDescription.textContent = description;

        modalOverlay.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault(); 
            openModal(trigger);
        });
    });

    modalCloseButton.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
}
