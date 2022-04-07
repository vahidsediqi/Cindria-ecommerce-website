// Login scripts

const loginContainer = document.querySelector('.login-form-container'),
       showHidePw = document.querySelectorAll('.showHidePw'),
       wpFields = document.querySelectorAll('.password'),
       signup = document.querySelector('.signup-text'),
       login = document.querySelector('.login-text')



showHidePw.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', () => {
    wpFields.forEach(wpField => {
      if(wpField.type === 'password') {
        wpField.type = 'text';
        showHidePw.forEach(icon => {
            icon.classList.replace('uil-eye-slash','uil-eye')
        })
      } else {
        wpField.type = 'password';
        showHidePw.forEach(icon => {
            icon.classList.replace('uil-eye','uil-eye-slash')
        })
      }
    })
  })
})

signup.addEventListener('click', () => {
    loginContainer.classList.add('active-login')
})
login.addEventListener('click', () => {
    loginContainer.classList.remove('active-login')
})