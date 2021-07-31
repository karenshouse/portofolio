$(document).ready(function () {
    AOS.init();
    darkModeToggle();
    navScroll();
    bottomNav();
    project();
});

function darkModeToggle() {
    $('.dark-mode-toggle').click(function () {
        // body
        $('body').toggleClass('light-mode dark-mode');

        // bottom nav
        $('.bottom-nav-title').toggleClass('text-light');
        $('.top-btn i').toggleClass('bottom-nav-icon-top bottom-nav-icon-top-dark');
        $('.bottom-nav-content').toggleClass('bottom-nav-light bottom-nav-dark');
        $('.bottom-dark-mode-container svg').toggleClass('icon-hide');

        // icon
        $('.light-icon').toggleClass('icon-hide');
        $('.dark-icon').toggleClass('icon-hide');

        // text
        $('.heading-1').toggleClass('text-light');
        $('.heading-2').toggleClass('text-light');
        $('.heading-3').toggleClass('text-light');
        $('.heading-4').toggleClass('text-light');

        // nav
        $('.nav-content').toggleClass('nav-light nav-dark');
        $('.nav-link div').toggleClass('nav-link-light nav-link-dark');
        $('.nav-bars').toggleClass('nav-bars-icon nav-bars-icon-dark');

        // card
        $('.card').toggleClass('card-dark');
        $('.card-img-top').toggleClass('card-img-top-dark');
        $('.card-title').toggleClass('card-title-dark');

        // alert
        $('.alert').toggleClass('alert-light alert-dark');
        $('.alert-title').toggleClass('alert-title-dark');
        $('.alert-icon').toggleClass('alert-icon-dark');
    });
}

function navScroll() {
    let lastScrollTop = 0;
    $(window).scroll(function (event) {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.nav-container').css({
                'top': '-100px',
                'transition': '.4s ease'
            });

            $('.bottom-nav-container').css({
                'bottom': '0',
                'transition': '.4s ease'
            });

            $('.alert-container').removeClass('alert-active');

        } else {
            $('.nav-container').css({
                'top': '0',
                'transition': '.4s ease'
            });

            $('.bottom-nav-container').css({
                'bottom': '-100px',
                'transition': '.4s ease'
            });

            $('.alert-container').removeClass('alert-active');
        }
        lastScrollTop = st;
    });
}

function bottomNav() {
    let projects = $("#projects").offset().top;
    let about = $('#about').offset().top;

    let $window = $(window).scroll(function () {
        if ($window.scrollTop() > projects) {
            $('.bottom-nav-title').text('projects');
        } else if ($window.scrollTop() > about) {
            $('.bottom-nav-title').text('About')
        }
    });
}

function project() {
    let data = [
        ['Web Front End Developer', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.', 'https://ariwiradana.github.io/karenshouseubud/'],
        ['UI/UX Designer', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
        ['Music Producer', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
    ];

    $.each(data, function (i, obj) {
        $('.project-content').append(`
            <div class="card project-item" data-aos="fade-right" data-aos-duration="1000">
                <div class="card-img-top">
                    <div class="card-img-overlay mr-1 mb-1">
                        <button class="btn-circle btn-primary btn-project" id="btn-project-${i}" data-title="${obj[0]}" data-link="${obj[2]}"><i class="uil uil-angle-right"></i></button>
                    </div>
                    <img class="card-img" src="https://source.unsplash.com/random?sig=${i + 1}" alt="">
                </div>
                <div class="card-body" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <div class="card-title">${obj[0]}</div>
                    <p class="body-text">${obj[1]}</p>
                </div>
            </div>
        `);

        $('.btn-project').click(function () {
            let title = $(this).data("title");
            let link = $(this).data("link");

            $('.alert-container').toggleClass('alert-active');
            $('.alert-link').attr('href', link);
            $('.alert-title').text(title);
        });
    })



}