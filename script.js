(function() {

    /*
     * Movile Navigation Collapse
     */

    window.onscroll = () => {checkScroll()};

    function checkScroll() {
        const height = document.documentElement.clientHeight;
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

    navItems.forEach( (item) => {
        item.addEventListener('click', (e) => {
            console.log(e.target.dataset.dest);
            window.scrollTo({
                top: getHeight(e.target.dataset.dest) - 50,
                left: 0,
                behavior: "smooth",
            });
        });
    });

    function getHeight(target) {
        return document.getElementById(target).offsetTop;
    }

})();