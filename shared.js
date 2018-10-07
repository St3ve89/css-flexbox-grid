let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButton = document.querySelectorAll('.plan button')
let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    closeModal()
})

modalNoButton.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.remove('open')
    backdrop.classList.remove('open')
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})