
const swiper = new Swiper('.swiper', {
    loop: true, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10, 
});


function closeMenu() {
    const menu = document.querySelector('.menu-sup');
    menu.classList.add('hidden');
    
    // Ajusta el margen del contenido para ocupar el espacio del menú
    const content = document.querySelector('.content');
    content.style.marginTop = '0';
}
