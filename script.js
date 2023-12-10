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
        color: 0x90909,
        waveSpeed: 1.00,
        shininess: 0.00,
        zoom: 0.70
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu__toggle");
    var menuItems = document.querySelectorAll(".menu__item");
    var menuBox = document.querySelector(".menu__box");

    var scrollPosition = { top: 0, left: 0 };

    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            // Меню открывается
            scrollPosition = { top: window.scrollY, left: window.scrollX };
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollPosition.top}px`;
            document.body.style.left = `-${scrollPosition.left}px`;

            // Добавляем обработчик для закрытия меню при клике вне его области
            document.addEventListener("click", closeMenuOnClickOutside);
        } else {
            // Меню закрывается
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            window.scrollTo({ top: scrollPosition.top, left: scrollPosition.left, behavior: 'smooth' });

            // Удаляем обработчик после закрытия меню
            document.removeEventListener("click", closeMenuOnClickOutside);
        }
    });

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            menuToggle.checked = false;
        });
    });

    function closeMenuOnClickOutside(event) {
        // Проверяем, было ли нажатие вне меню
        if (!menuBox.contains(event.target) && event.target !== menuToggle) {
            menuToggle.checked = false;
        }
    }
});