(function () {

    /*
     * Desktop Navigation Collapse
     */

    window.onscroll = () => {
        checkScroll()
    };


    function checkScroll() {
        const height = document.documentElement.clientHeight - 160;
        let scrollHeight = document.documentElement.scrollTop;
        if (scrollHeight > height) {
            freezeNav();
        } else {
            unfreezeNav();
        }
    }

    function freezeNav() {
        document.querySelector('.nav').classList.add('nav--sticky');
        document.querySelector('.main').classList.add('main--scrolled');
    }

    function unfreezeNav() {
        document.querySelector('.nav').classList.remove('nav--sticky');
        document.querySelector('.main').classList.remove('main--scrolled');
    }

    /*
     * Navigation 
     */

    const navItems = document.querySelectorAll('.nav__item');

    navItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            window.scrollTo({
                top: getHeight(e.target.dataset.dest) - 50,
                left: 0,
                behavior: "smooth",
            });
            hideNav();
        });
    });

    function getHeight(target) {
        return document.getElementById(target).offsetTop;
    }


    /*
     * Navigation Menu
     */

    const navIcon = document.querySelector('.nav__menu-icon');

    navIcon.addEventListener('click', () => {
        console.log('click');
        checkNav();
    });

    function checkNav() {
        const navDrop = document.querySelector('.nav__drop');
        if (navDrop.classList.contains('nav__drop--hidden')) {
            displayNav()
        } else {
            hideNav()
        }
    }

    function displayNav() {
        document.querySelector('.nav__drop').classList.remove('nav__drop--hidden');
        document.querySelector('.nav__menu-icon').innerText = 'close';
    }

    function hideNav() {
        document.querySelector('.nav__drop').classList.add('nav__drop--hidden');
        document.querySelector('.nav__menu-icon').innerHTML = 'menu';
    }

})();