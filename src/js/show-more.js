const buttonBrands = document.querySelector('.show-more--brands')
const sliderDropdown = document.querySelector('.brands__slider')

const buttonText = document.querySelector('.show-more--text')
const textDropdown = document.querySelector('.content__text--wrapper')

const buttonRepair = document.querySelector('.show-more--repair')
const repairDropdown = document.querySelector('.repair__slider')



buttonBrands.addEventListener('click', () => {
  if(buttonBrands.classList.contains('show-more--active')) {
    buttonBrands.textContent = 'Показать все'
  } else {
    buttonBrands.textContent = 'Скрыть'
  }
  buttonBrands.classList.toggle('show-more--passive')
  buttonBrands.classList.toggle('show-more--active')
  sliderDropdown.classList.toggle('--is-visible')
})

buttonText.addEventListener('click', () => {
  if(buttonText.classList.contains('show-more--active')) {
    buttonText.textContent = 'Читать далее'
  } else {
    buttonText.textContent = 'Скрыть'
  }
  buttonText.classList.toggle('show-more--passive')
  buttonText.classList.toggle('show-more--active')
  textDropdown.classList.toggle('--is-visible')
})

buttonRepair.addEventListener('click', () => {
  if(buttonRepair.classList.contains('show-more--active')) {
    buttonRepair.textContent = 'Показать все'
  } else {
    buttonRepair.textContent = 'Скрыть'
  }
  buttonRepair.classList.toggle('show-more--passive')
  buttonRepair.classList.toggle('show-more--active')
  repairDropdown.classList.toggle('--is-visible')
})