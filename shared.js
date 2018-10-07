let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanButton = document.querySelectorAll('.plan button')
console.log(selectPlanButton)

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}