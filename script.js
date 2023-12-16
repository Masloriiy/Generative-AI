const items = document.querySelectorAll(".accordion a");
function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.remove('btn-up_hide');
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.add('btn-up_hide');
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    addEventListener() {
        // при прокрутке окна (window)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            // если пользователь прокрутил страницу более чем на 200px
            if (scrollY > 400) {
                // сделаем кнопку .btn-up видимой
                this.show();
            } else {
                // иначе скроем кнопку .btn-up
                this.hide();
            }
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            // переместиться в верхнюю часть страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();


if (window.innerWidth > 767) {
    VANTA.WAVES({
        el: "#black-block",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        waveSpeed: 1.00,
        shininess: 0.00
    });
}


document.addEventListener("DOMContentLoaded", function () {
    // Массив с путями к изображениям
    var images = ["bgimage1.png", "bgimage.png", "bgimage3.png", "bgimages4.png", "bgimages5.png"];

    // Генерация случайного индекса из массива
    var randomIndex = Math.floor(Math.random() * images.length);

    // Получение случайного пути к изображению
    var randomImagePath = images[randomIndex];

    // Установка случайного изображения в качестве фона body
    document.body.style.backgroundImage = "url('" + randomImagePath + "')";
});


document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById('menu__toggle');
    var menuItems = document.querySelectorAll('.menu__item');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuToggle.checked = false;
        });
    });
});