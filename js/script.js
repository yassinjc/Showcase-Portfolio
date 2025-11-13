// Process Carousel JS
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".process-slide");
    const nextBtn = document.querySelector(".process-next");
    const prevBtn = document.querySelector(".process-prev");
    const progressThumb = document.querySelector(".process-progress .thumb");
    let current = 0;

    function showSlide(index) {
        slides.forEach((s, i) => s.classList.toggle("active", i === index));

        if (progressThumb) {
            const progress = ((index + 1) / slides.length) * 100;
            progressThumb.style.width = `${progress}%`;
        }

        if (index === 0) {
            prevBtn.style.visibility = "hidden";
            nextBtn.style.visibility = "visible";
        } else if (index === slides.length - 1) {
            nextBtn.style.visibility = "hidden";
            prevBtn.style.visibility = "visible";
        } else {
            prevBtn.style.visibility = "visible";
            nextBtn.style.visibility = "visible";
        }
    }

    nextBtn.addEventListener("click", () => {
        if (current < slides.length - 1) current++;
        showSlide(current);
    });

    prevBtn.addEventListener("click", () => {
        if (current > 0) current--;
        showSlide(current);
    });

    showSlide(current);
});

// SwiperJS Configuratie
const swiper = new Swiper('.projects-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    centeredSlides: true,
    loop: false,
    initialSlide: 1,
    grabCursor: true,
    slideToClickedSlide: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.projects-next',
        prevEl: '.projects-prev',
    },

    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        700: { slidesPerView: 1.6, spaceBetween: 40 },
        1100: { slidesPerView: 2.5, spaceBetween: 50 },
        1400: { slidesPerView: 3, spaceBetween: 60 },
    }
});