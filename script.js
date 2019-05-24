(function() {

    window.onscroll = () => {checkScroll()};
    const height = document.documentElement.clientHeight;

    function checkScroll() {
        let scrollHeight = document.documentElement.scrollTop;
        if (scrollHeight > height) {
            freezeNav();
        } else {
            unfreezeNav();
        }

    }

    function freezeNav() {
        document.querySelector('.nav').classList.add('nav--sticky');
        document.querySelector('.about').classList.add('about--scrolled');
    }

    function unfreezeNav() {
        document.querySelector('.nav').classList.remove('nav--sticky');
        document.querySelector('.about').classList.remove('about--scrolled');
    }

})();