const sideBar = document.querySelector('.side-bar-confectionery')
const sideBarMobile = document.querySelector('.sidebar-mobile')
const closeButton = document.querySelector('.close-button')

sideBarMobile.addEventListener('click', () => {
    sideBar.style.display = 'block'
    sideBarMobile.style.display = 'none'
})

closeButton.addEventListener('click', () => {
    sideBar.style.display = 'none'
    sideBarMobile.style.display = 'block'
})