let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButton = document.querySelectorAll('.plan button')
let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    closeModal()
})

modalNoButton.addEventListener('click', closeModal)

function closeModal() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block'
    backdrop.style.display = 'block'
})