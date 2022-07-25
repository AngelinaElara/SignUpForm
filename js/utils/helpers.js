export const handleInputNameKeyup = (event) => {
  const $target = event.currentTarget

  const $nameWarning = document.querySelector('.warning__name')

  if ($target.value.length >= 2
    && $target.value.search(/[^a-zа-я]+/gi) === -1) {
    $target.classList.add('success')
    $target.classList.remove('error')
    $nameWarning.textContent = ''
  } else if ($target.value.length > 0 && $target.value.length < 2 || $target.value.search(/[^a-zа-я]+/gi) !== -1) {
    $target.classList.add('error')
    $target.classList.remove('success')
    $nameWarning.textContent = 'Enter a valid name'
  } else {
    $target.classList.remove('error')
    $target.classList.remove('success')
    $nameWarning.textContent = ''
  }
}

export const handleInputLastNameKeyup = (event) => {
  const $target = event.currentTarget

  const $lastNameWarning = document.querySelector('.warning__lastName')

  if ($target.value.length >= 2
    && $target.value.search(/[^a-zа-я]+/gi) === -1) {
    $target.classList.add('success')
    $target.classList.remove('error')
    $lastNameWarning.textContent = ''
  } else if ($target.value.length > 0 && $target.value.length < 2 || $target.value.search(/[^a-zа-я]+/gi) !== -1) {
    $target.classList.add('error')
    $target.classList.remove('success')
    $lastNameWarning.textContent = 'Enter a valid name'
  } else {
    $target.classList.remove('error')
    $target.classList.remove('success')
    $lastNameWarning.textContent = ''
  }
}

export const handleInputEmailKeyup = (event) => {
  const $target = event.currentTarget

  const $emailWarning = document.querySelector('.warning__email')
  const $inputCheck = document.querySelector('.form__check')

  if ($target.value.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) !== -1) {
    $target.classList.add('success')
    $target.classList.remove('error')
    $emailWarning.textContent = ''
    $inputCheck.style.display = 'block'
  } else if ($target.value.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) === -1) {
    $target.classList.add('error')
    $target.classList.remove('success')
    $emailWarning.textContent = 'Enter a valid E-mail'
    $inputCheck.style.display = 'none'
  } else if(!$target.value) {
    $target.classList.remove('error')
    $target.classList.remove('success')
    $emailWarning.textContent = ''
    $inputCheck.style.display = 'none'
  }
}

export const handleInputPasswordKeyup = (event) => {
  const $target = event.currentTarget

  const $warningPassword = document.querySelector('.warning__password')

  if ($target.value.length >= 8
    && $target.value.search(/[^a-z0-9]+/gi) === -1) {
    $target.classList.remove('error')
    $target.classList.add('success')
    $warningPassword.textContent = ''
  } else if ($target.value.length > 0 && $target.value.length < 8) {
    $target.classList.add('error')
    $target.classList.remove('success')
    $warningPassword.textContent = 'Password must contain at least 8 characters'
  } else if ($target.value.search(/[^a-z0-9]+/gi) !== -1) {
    $target.classList.add('error')
    $target.classList.remove('success')
    $warningPassword.textContent = 'Only letters and numbers'
  } else {
    $target.classList.remove('error')
    $target.classList.remove('success')
    $warningPassword.textContent = ''
  }
}

export const handleInputConfirmKeyup = (event) => {
  const $target = event.currentTarget

  const $passwordInput = document.querySelector('#password')

  const $warningConfimPassword = document.querySelector('.warning__confimPassword')

  if ($passwordInput.value === $target.value) {
    $target.classList.remove('error')
    $target.classList.add('success')
    $warningConfimPassword.textContent = ''
  } else {
    $target.classList.add('error')
    $target.classList.remove('success')
    $warningConfimPassword.textContent = `Passwords don't match`
  }
}

export const handleFormSubmit = (event) => {
  event.preventDefault()

  const $target = event.currentTarget

  const $inputFirstName = $target.querySelector('#firstname')
  const $inputLastName = $target.querySelector('#lastname')
  const $selectNationality = $target.querySelector('#nationality')
  const $inputEmail = $target.querySelector('#email')
  const $selectDay = $target.querySelector('#day')
  const $selectMonth = $target.querySelector('#month')
  const $selectYear = $target.querySelector('#year')
  const $radioMale = $target.querySelector('#male')
  const $radioFemale = $target.querySelector('#female')
  const $inputPassword = $target.querySelector('#password')
  const $inputConfirmPassword = $target.querySelector('#confirmPassword')

  const $submitBtn = $target.querySelector('.form__submit')

  const $checkIcon = $target.querySelector('.form__check')

  const data = {
    type: 'data',
    name: $inputFirstName.value,
    lastName: $inputLastName.value,
    nationality: $selectNationality.value,
    email: $inputEmail.value,
    dayBirth: $selectDay.value, 
    monthBirth: $selectMonth.value,
    yearBirth: $selectYear.value,
    male: $radioMale.checked,
    female: $radioFemale.checked,
    password: $inputPassword.value
  }

  if ( $inputFirstName.classList.contains('success')
    && $inputLastName.classList.contains('success')
    && $selectNationality.value.length
    && $inputEmail.classList.contains('success')
    && $selectDay.value.length
    && $selectMonth.value.length
    && $selectYear.value.length
    && $radioMale.checked || $radioFemale.checked
    && $inputPassword.classList.contains('success')
    && $inputConfirmPassword.classList.contains('success')
  ) {
    $submitBtn.classList.remove('shake')
    console.log(data)

    let xhr = new XMLHttpRequest()

    xhr.open('POST', 'https://form-test-6c58a-default-rtdb.firebaseio.com/.json', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.responseType = 'json'
    xhr.send(JSON.stringify(data))

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 && xhr.status < 300) {
          alert('Регистрация прошла успешно') 
          $target.reset()
          $checkIcon.style.display = 'none'
        }
        else {
          alert('Ошибка отправки регистрации') 
        }
      }
    }
  } else {
    $submitBtn.classList.add('shake')
    setTimeout(() => {
      $submitBtn.classList.remove('shake')
    }, 1000)
  }
}