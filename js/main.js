const passwordInput = document.querySelector('#password-input');
const togglePasswordBtn = document.querySelector('#toggle-password');
const sidebar = document.querySelector('.aside');
const sidebarBurger = document.querySelector('.sidebar_burger');
const sidebarBurgerOpen = document.querySelector('.sidebar_burger-open');
const sidebarBurgerClose = document.querySelector('.sidebar_burger-close');
const overlaybg = document.querySelector('.overlay');
const sidebarMenuDropdown = document.querySelectorAll('.sidebar-menu-dropdown');
const sidebarMenu = document.querySelectorAll('.sidebar-menu');
const header = document.querySelector('.header');
const container = document.querySelectorAll('.container');
// ** show-hide password input start;x

if(togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else if (passwordInput.type === 'text') {
            passwordInput.type = 'password';
        }
    });
}
// ** show-hide password input end

let burgerOpen = false;
if (sidebarBurger) {
    sidebarBurger.addEventListener('click', () => {
        if (!burgerOpen) {
            sidebar.classList.add('hide');
            sidebar.style.overflow = 'hidden';
            sidebarBurgerOpen.classList.add('hide');
            sidebarBurgerClose.classList.add('hide');
            overlaybg.classList.remove('active');
            sidebarMenuDropdown.forEach( function (dropdown) {
                dropdown.classList.remove('active')
            });
            container.forEach(function (item) {
                item.style.maxWidth = '1471px'
            })
            header.style.paddingLeft = '64px'
            burgerOpen = true;
        } else {
            sidebar.classList.remove('hide')
            sidebar.style.cssText = `
                overflow-y: auto;
                overflow-x: hidden;
            `
            sidebarBurgerOpen.classList.remove('hide');
            sidebarBurgerClose.classList.remove('hide');
            overlaybg.classList.add('active');
            burgerOpen = false;
        }
    })
}

sidebarMenuDropdown.forEach( function (dropdown){
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active')
        sidebarMenuDropdown.forEach(function (otherdropdown) {
            if (otherdropdown !== dropdown) {
                otherdropdown.classList.remove('active')
            }
        })
    })
})