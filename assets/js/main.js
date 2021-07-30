$(document).ready(function () {
    AOS.init();
    darkModeToggle();
    navScroll();
    bottomNav();
    project();
});

function darkModeToggle() {
    $('.dark-mode-toggle').click(function () {
        $('.card').toggleClass('card-dark');
        $('body').toggleClass('light-mode dark-mode');
        $('.bottom-nav-title').toggleClass('text-light');
        $('.top-btn i').toggleClass('bottom-nav-icon-top bottom-nav-icon-top-dark');
        $('.bottom-nav-content').toggleClass('bottom-nav-light bottom-nav-dark');
        $('.bottom-dark-mode-container svg').toggleClass('icon-hide')
        $('.nav-content').toggleClass('nav-light nav-dark');
        $('.light-icon').toggleClass('icon-hide');
        $('.dark-icon').toggleClass('icon-hide');
        $('.heading-1').toggleClass('text-light');
        $('.heading-2').toggleClass('text-light');
        $('.heading-3').toggleClass('text-light');
        $('.heading-4').toggleClass('text-light');
        $('.nav-link div').toggleClass('nav-link-light nav-link-dark');
        $('.nav-bars').toggleClass('nav-bars-icon nav-bars-icon-dark')
        $('.project-item').toggleClass('border-dark');
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
            })
        } else {
            $('.nav-container').css({
                'top': '0',
                'transition': '.4s ease'
            });
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
        ['Karens House Front End', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.', 'https://ariwiradana.github.io/karenshouseubud/'],
        ['UI/UX Designer', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
        ['Music Producer', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur.'],
    ];

    $.each(data, function (i, obj) {
        $('.project-content').append(`
            <div class="card project-item" data-aos="fade-right" data-aos-duration="1000">
                <div class="project-img-container">
                    <a href="${obj[2]}" target="_blank">
                        <div class="project-visit" id="active-${i + 1}">Visit</div>
                    </a>
                    <div class="project-overlay">
                        <button class="btn-circle btn-primary btn-project" id="btn-project-${i}" data-id="${i + 1}"><i class="uil uil-plus"></i></button>
                    </div>
                    <img class="project-img" src="https://picsum.photos/400/800?random=${i + 1}" alt="">
                </div>
                <div class="project-text-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <div class="heading-4 project-title">${obj[0]}</div>
                    <p class="body-text">${obj[1]}</p>
                </div>
            </div>
        `);
    })

    $('.btn-project').click(function () {
        let id = $(this).data("id");
        $(`#active-${id}`).toggleClass('project-visit-active');

        setTimeout(function () {
            $('.project-img-container div').removeClass('project-visit-active');
        }, 5000);
    });

}