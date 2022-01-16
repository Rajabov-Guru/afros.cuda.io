$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function progressView() {
    let diagramBox = document.querySelectorAll('.diagram.progress');
    diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 180;
        if (box.dataset.percent >= 50) {
            box.classList.add('over_50');
        } else {
            box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate(' + deg + 'deg)';
    });
}
progressView();
const swiper = new Swiper('.service-slider', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});