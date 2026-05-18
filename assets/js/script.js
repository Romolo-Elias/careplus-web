const searchInput = document.querySelector('.consulta-search');

const consultaCards = document.querySelectorAll('.consulta-card');



searchInput.addEventListener('input', () => {

    const searchTerm = searchInput.value.toLowerCase();

    consultaCards.forEach((card) => {
        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }

    });

});

const consultaSearch = document.querySelector('.consulta-search');

const consultaCard = document.querySelectorAll('.consulta-card');

consultaSearch.addEventListener('input', () => {

    const searchTerm = consultaSearch.value.toLowerCase();

    consultaCard.forEach((card) => {

        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchTerm)) {

            card.style.display = 'flex';

        } else {

            card.style.display = 'none';
        }

    });

});


const filterSelect = document.querySelector('.consulta-filter');

filterSelect.addEventListener('change', () => {

    const selectedStatus = filterSelect.value;

    consultaCard.forEach((card) => {

        const statusElement = card.querySelector('.consulta-status');

        if (
            selectedStatus === 'all' ||
            statusElement.classList.contains(selectedStatus)
        ) {

            card.style.display = 'flex';

        } else {

            card.style.display = 'none';
        }

    });

});

const confirmButtons = document.querySelectorAll('.consulta-btn-confirm');

confirmButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const card = button.closest('.consulta-card');

        const status = card.querySelector('.consulta-status');

        status.classList.remove('pending');
        status.classList.remove('canceled');

        status.classList.add('confirmed');

        status.innerText = 'Confirmada';

    });

});

const remarcarButtons = document.querySelectorAll('.consulta-btn-remarcar');

remarcarButtons.forEach((button) => {

    button.addEventListener('click', () => {
        
        alert('Em breve entraremos em contato para remarcar sua consulta.');

        const card = button.closest('.consulta-card');

        const status = card.querySelector('.consulta-status');

        status.classList.remove('confirmed');
        status.classList.remove('pending');

        status.classList.add('canceled');

        status.innerText = 'Cancelada';

    });

});

const rotaButtons = document.querySelectorAll('.consulta-btn-rota');

rotaButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const card = button.closest('.consulta-card');

        const endereco = card
            .querySelector('.consulta-location')
            .innerText;

        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;

        window.open(mapsUrl, '_blank');

    });

});