document.querySelector('.nav_menu_link').addEventListener('click', (event) => {
    const isMenuButton = document.querySelector('.close').classList.contains('hide')
    
    if (isMenuButton) {
        document.querySelector('.dropdown_menu').classList.remove('hide')
        document.querySelector('.close').classList.remove('hide')
        document.querySelector('.menu').classList.add('hide')
    } else {
        document.querySelector('.dropdown_menu').classList.add('hide')
        document.querySelector('.close').classList.add('hide')
        document.querySelector('.menu').classList.remove('hide')
    }
})

document.querySelector('.nav_contrast_link').addEventListener('click', (event) => {
    const currentTheme = document.documentElement.getAttribute('tema')
    const contexto = currentTheme === 'claro' ? 'escuro' : 'claro'
    
    const html = document.documentElement
    const menu = document.querySelector('.nav_icon.menu')
    const close = document.querySelector('.nav_icon.close')
    const contrast = document.querySelector('.nav_icon.contrast')
    html.setAttribute('tema', contexto)
    menu.setAttribute('src', `./assets/menu-${contexto}.svg`)
    
    close.setAttribute('src', `./assets/close-${contexto}.svg`)
    contrast.setAttribute('src', `./assets/contrast-${contexto}.svg`)
})

document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', (event) => {
        const clickedLinkClassName = event.target.classList[1]
        
        const allLinks = document.querySelectorAll('.nav_link')
        allLinks.forEach(link => {
            if (link.classList.contains(clickedLinkClassName)) {
                link.classList.add('nav_link_selected')
            } else {
                link.classList.remove('nav_link_selected')
            }
        })
    })
})

const allNavLinks = document.querySelectorAll('.nav_link');
const allSections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= sectionTop - 50) {
            currentSectionId = section.getAttribute('id');
        }
    });

    allNavLinks.forEach(link => {
        if (link.classList.contains(`nav_${currentSectionId}`)) {
            link.classList.add('nav_link_selected');
        } else {
            link.classList.remove('nav_link_selected');
        }
    });


});
