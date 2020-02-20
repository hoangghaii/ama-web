/** ------------- swiper jquery ------------- */

var mySwiper = new Swiper('.top-slide-container', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    }
});

var mySwiper = new Swiper('.slide-container', {
    loop: true,
    effect: 'flip',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var mySwiper = new Swiper('.gallery-slide-container', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});


/** -------------- responsive topnav -------------- */

function button_topnav() {
    var topnav = document.getElementById("top-nav");
    var button_menu = $('a#pull');
    if (topnav.className === "top-nav") {
        topnav.className += " responsive";
        button_menu.html('<i class="fas fa-times" aria-hidden="true"></i>');
    } else {
        topnav.className = "top-nav";
        button_menu.html('<i class="fas fa-bars" aria-hidden="true"></i>');
    }
};

/** --------------- menu content -------------- */

var menu_content = $('li#menu-content');
menu_content.on('click', function () {
    menu_content.removeClass('active');
    $(this).addClass('active');
});


/** -------- toggle on/off dark theme -------- */

var checkbox = $('input[type="checkbox"]#checkbox');
var htmlElement = $('html');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    htmlElement.attr('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        checkbox.attr('checked', 'true');
    }
};

function switchTheme() {
    var status = checkbox.prop('checked');
    if (status === true) {
        htmlElement.attr('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        htmlElement.attr('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
};

checkbox.on('change', switchTheme);


/** -------------- scroll to top -------------- */

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('.btn-scroll').show();
    } else {
        $('.btn-scroll').hide();
    }
});

function scroll_to_top() {
    $('html,body').animate({
        scrollTop: 0
    }, 'fast');
};


/** -------------- validate form -------------- */

$.validator.setDefaults({
    submitHandler: function () {
        alert("Registered!");
    }
});

$("#validate_form").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
        "email": {
            email: true,
        },
    },
    messages: {
        "email": {
            email: "Email không hợp lệ",
        },
    }
});

/** --------- style cursor on gallery --------- */

var gallery = $('.gallery-slide');
gallery.on('mousedown', function () {
    $(this).css('cursor', 'all-scroll');
});
gallery.on('mouseup', function () {
    $(this).css('cursor', 'default');
});