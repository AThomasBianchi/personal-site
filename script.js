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
     * Style Buttons
     */
    const buttons = document.querySelectorAll('.btn');
    const brutalist = document.querySelector('.js__brutalist');

    buttons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            addClickedState(e.target);
        });
    })

    // brutalist.onclick = (e) => {
        
    //     console.log(e)
    //     addClickedState(e.target)
    // }

    function change_style(target) {
        console.log(target);
    };

    function addClickedState(target) {
        const active = document.querySelectorAll('.btn--active');
        if (active.length > 0) {
            active.forEach((each) => {
                each.classList.remove('btn--active');
            });
        }
        target.classList.add('btn--active');
    }

    /*
     ! Albert Thomas Stuff
    const name = document.querySelector('.js__lbert');

    name.onclick = () => {
        if (document.querySelector('.lbert').classList.contains('lbert--moved')) {
            document.querySelector('.a').classList.remove('a--moved');
            document.querySelector('.lbert').classList.remove('lbert--moved');
            document.querySelector('.t').classList.remove('t--moved');
            document.querySelector('.homas').classList.remove('homas--moved');
            document.querySelector('.bianchi').classList.remove('bianchi--moved');
        } else {
            document.querySelector('.a').classList.add('a--moved');
            document.querySelector('.lbert').classList.add('lbert--moved');
            document.querySelector('.t').classList.add('t--moved');
            document.querySelector('.homas').classList.add('homas--moved');
            document.querySelector('.bianchi').classList.add('bianchi--moved');
        }


        console.log('click');
    }
    */

})();