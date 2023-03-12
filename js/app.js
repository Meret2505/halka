
let menu = document.querySelector('.menu-bar')
let navBar = document.querySelector('.navbar')

window.onscroll = () => {
    navBar.classList.remove('active');
    menu.src = "../fontisto-master/fontisto-master/icons/png/interfaces/nav-icon-a(white).jpg";
}
// =============================== burger ================================
menu.onclick = function () {
    navBar.classList.toggle('active');
    if (navBar.classList.contains('active')) {
        menu.src = "../fontisto-master/fontisto-master/icons/png/interfaces/close-a(white).jpg"

    } else {
        menu.src = "../fontisto-master/fontisto-master/icons/png/interfaces/nav-icon-a(white).jpg"
    }
};
const slider = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInterfaction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// ================== brand slider
var news = new Swiper(".review-slide", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1800,
        disableOnInterfaction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var brand = new Swiper(".brand-slider", {
    spaceAround: 20,
    loop: true,
    autoplay: {
        delay: 1800,
        disableOnInterfaction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});
// ============================= dark theme ===========================
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "../fontisto-master/fontisto-master/icons/png/weather/day-sunny(white).jpg"
    } else {

        icon.src = "../fontisto-master/fontisto-master/icons/png/weather/night-clear.jpg"
    }
}
var arrLang = {
    'en': {
        'home': 'Home',
        'about': 'About us',
        'goods': 'Goods',
        'news': 'News',
        'links': 'Links',
        'news-text': `Halka distributor group is one of the largest distributors and works with a total of 5 brands of international products.
        Distribution facilities are certified according to international food quality and safety standards. They operate a product safety management system with a quality management system that meets the requirements of the enterprises, which is confirmed by the presence of certificates of conformity in each production enterprise.
        `,
        'follow': 'Follow us',
        'brand': 'Brands',
        'adress': 'G.Kulyyew street(Obyezdnoy street), Döwletli office block, 2nd floor, 205',
        'see-more': 'See more...',
        'footer': 'Building good business relationships, efficient cooperation with partners, well-organized sharing are the main principles of Halka H.K.',
        'about-text': `Building good business relationships, working efficiently with partners, and well-organized sharing are the main principles of Halka H.K. We have extensive experience in the field of sales, strong leadership in the implementation and development of brands.
        i.e., it has contributed to the development of the world's largest manufacturers, Dippo, Chacha, 77, Greengo, Hlexkompanies. Each of our employees is an expert in his field of work, and through this, we feel that we are among the first in the trade.
        Emphasis is placed on quality and mass distribution of everyday goods, open commercial reproduction, and acting as representative.
        Our main goal is to recruit experienced professionals, invest in business development, retain and train the best employees.
 `
    },
    'ru': {
        'home': 'Главная',
        'about': 'О нас',
        'goods': 'Товары',
        'news': 'Новости',
        'links': 'Ссылки',
        'news-text': `Дистрибьюторская группа Halka является одним из крупнейших дистрибьюторов и работает с 5 брендами международной продукции.
        Торговые объекты сертифицированы в соответствии с международными стандартами качества и безопасности пищевых продуктов. В них действует система управления безопасностью продукции с системой менеджмента качества, отвечающей требованиям предприятий, что подтверждается наличием сертификатов соответствия на каждом производственном предприятии.
        `,
        'follow': 'Следи нас',
        'brand': 'Бренды',
        'adress': 'Улица Г.Кулиев(Объездной), здания Довлетли, этаж 2, 205',
        'see-more': 'Смотреть больше...',
        'footer': 'Построение хороших деловых отношений, эффективное сотрудничество с партнерами, хорошо организованный обмен информацией – основные принципы Halka H.K.',
        'about-text': `Построение хороших деловых отношений, эффективная работа с партнерами и хорошо организованный обмен - основные принципы Halka H.K. У нас большой опыт в сфере продаж, сильное лидерство во внедрении и развитии брендов.
        т. е. способствовало развитию крупнейших мировых производителей, Dippo, Chacha, 77, Greengo, Hlex.Каждый из наших сотрудников является экспертом в своей области работы, и благодаря этому мы чувствуем себя одними из первых в торговля.',
        Акцент делается на качественном и массовом распространении товаров повседневного спроса, открытом коммерческом воспроизведении и выступлении в качестве представителя.
        Наша главная цель – привлекать опытных специалистов, инвестировать в развитие бизнеса, удерживать и обучать лучших сотрудников.
         `,
    },
};
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');
        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
AOS.init();

AOS.init({

    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

});
