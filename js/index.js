import App from './App.js'
import {
  handleInputNameKeyup,
  handleInputLastNameKeyup,
  handleInputEmailKeyup,
  handleInputPasswordKeyup,
  handleInputConfirmKeyup,
  handleFormSubmit
} from './utils/helpers.js'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML('beforeend', App())

const $form = document.querySelector('#form')
const $inputFirstName = document.querySelector('#firstname')
const $inputLastName = document.querySelector('#lastname')
const $inputEmail = document.querySelector('#email')
const $inputPassword = document.querySelector('#password')
const $inputConfirmPassword = document.querySelector('#confirmPassword')

$inputFirstName.addEventListener('keyup', handleInputNameKeyup)
$inputLastName.addEventListener('keyup', handleInputLastNameKeyup)
$inputEmail.addEventListener('keyup', handleInputEmailKeyup)
$inputPassword.addEventListener('keyup', handleInputPasswordKeyup)
$inputConfirmPassword.addEventListener('keyup', handleInputConfirmKeyup)

$form.addEventListener('submit', handleFormSubmit)

const $formBack = document.querySelector('.form__background')

const animation = new Vivus(
  'background',
  {
    type: 'delayed',
    duration: 200,
  }, function() {
    $formBack.style.fill = '#000'
  }
)