(function (cb) {
    // browser event has already occurred.
    if (document.readyState === 'complete') {
        return setTimeout(cb);
    }

    // Mozilla, Opera and webkit style
    if (window.addEventListener) {
        return window.addEventListener('load', cb, false);
    }

    // If IE event model is used
    if (window.attachEvent) {
        return window.attachEvent('onload', cb);
    }
})(function () {
    // Main Menu Submenu Open
    const mainMenu = document.querySelector('.main-menu');
    const mainSubmenu = mainMenu.querySelectorAll(
        '.main-menu__link + .main-menu__list'
    );
    // Main Menu Submenu Open on MOBILE
    const mobileMainMenu = mainMenu.querySelector('.menu-mobile');
    const mobileMainSubmenu = mobileMainMenu.querySelectorAll(
        '.menu-mobile__link + .menu-mobile__list'
    );
    // Main Menu Open on MOBILE
    const mainMenuOpen = document.querySelector('#mainMenuOpen');
    // Main Menu Close on MOBILE
    const mainMenuClose = document.querySelector('#mainMenuClose');
    // Catalog Submenu Open
    const cat = document.querySelector('.catalog-menu');
    const catSubmenu = cat.querySelectorAll(
        '.catalog-menu__link + .catalog-menu__list'
    );
    // Catalog Submenu Open on MOBILE
    const mobileCatMenu = cat.querySelector('.menu-mobile');
    const mobileCatSubmenu = mobileCatMenu.querySelectorAll(
        '.menu-mobile__link + .menu-mobile__list'
    );
    // Catalog Menu Open on Mobile
    const catOpen = document.querySelector('#catalogMenuOpen');
    // Catalog Menu Close on Mobile
    const catClose = document.querySelector('#catalogMenuClose');
    // Catalog Button in Main Mobile Menu
    const catBtn = document.querySelector('#catBtn');

    function toggleMenu(e) {
        e.preventDefault();
        let ulClass = this.ulClass;
        let linkClass = this.linkClass;
        let ul = this.ul;
        let link = this.link;
        let subUl = ul.querySelectorAll('ul');
        if (ul.classList.contains(ulClass)) {
            subUl.forEach((elem) => {
                if (elem.classList.contains(ulClass)) {
                    elem.classList.remove(ulClass);
                    elem.previousElementSibling.classList.remove(linkClass);
                }
            });
            ul.classList.remove(ulClass);
            link.classList.remove(linkClass);
        } else {
            ul.classList.add(ulClass);
            link.classList.add(linkClass);
        }
    }

    function toggleMobileMenu(e) {
        const parentClass = `.${this.menuClass}`;
        const mobileClass = `${this.menuClass}_mobile`;
        const parent = document.querySelector(parentClass);
        const menuContent = parent.querySelector('.menu-mobile');
        const menuBackground = parent.querySelector('.menu-background');
        const wrapClass = `${this.menuClass}__menu-mobile`;
        const menuWrap = parent.querySelector(`.${wrapClass}`);
        let isShown = parent.classList.contains(mobileClass);

        if (isShown) {
            parent.classList.remove(mobileClass);
            menuContent.classList.remove('menu-mobile_shown');
            setTimeout(() => {
                menuContent.classList.remove('menu-mobile_block');
            }, 200);
            setTimeout(() => {
                menuBackground.classList.remove('menu-background_shown');
            }, 100);
            setTimeout(() => {
                menuBackground.classList.remove('menu-background_block');
            }, 600);
            setTimeout(() => {
                menuWrap.classList.remove(`${wrapClass}_shown`);
            }, 600);
        } else {
            if (menuWrap) {
                menuWrap.classList.add(`${wrapClass}_shown`);
            }
            parent.classList.add(mobileClass);
            menuBackground.classList.add('menu-background_block');
            setTimeout(() => {
                menuBackground.classList.add('menu-background_shown');
            }, 0);
            setTimeout(() => {
                menuContent.classList.add('menu-mobile_block');
            }, 0);
            setTimeout(() => {
                menuContent.classList.add('menu-mobile_shown');
            }, 400);
        }
    }

    function addEventListenerSubmenu(element, ulClass, linkClass) {
        element.forEach((elem) => {
            let link = elem.previousElementSibling;
            link.addEventListener('click', {
                handleEvent: toggleMenu,
                ulClass: ulClass,
                linkClass: linkClass,
                ul: elem,
                link: link,
            });
        });
    }

    function addEventListenerMobileMenu(element, handler, menuClass) {
        element.addEventListener('click', {
            handleEvent: handler,
            menuClass: menuClass,
            button: element,
        });
    }

    function showLinkBack() {
        linkBack.classList.add('menu-mobile__link-back_shown');
    }

    addEventListenerSubmenu(
        catSubmenu,
        'catalog-menu__list_shown',
        'catalog-menu__link_open'
    );

    addEventListenerSubmenu(
        mainSubmenu,
        'main-menu__list_shown',
        'main-menu__link_open'
    );

    addEventListenerSubmenu(
        mobileMainSubmenu,
        'menu-mobile__list_shown',
        'menu-mobile__link_open'
    );

    addEventListenerSubmenu(
        mobileCatSubmenu,
        'menu-mobile__list_shown',
        'menu-mobile__link_open'
    );

    addEventListenerMobileMenu(mainMenuOpen, toggleMobileMenu, 'main-menu');
    addEventListenerMobileMenu(mainMenuClose, toggleMobileMenu, 'main-menu');

    addEventListenerMobileMenu(catOpen, toggleMobileMenu, 'catalog-menu');
    addEventListenerMobileMenu(catBtn, toggleMobileMenu, 'catalog-menu');

    addEventListenerMobileMenu(catClose, toggleMobileMenu, 'catalog-menu');
});
