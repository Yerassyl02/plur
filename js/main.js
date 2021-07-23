const passwordInput = document.querySelector('#password-input');
const togglePasswordBtn = document.querySelector('#toggle-password');
const forgotPassword = document.querySelector('#forgot_passw');
const loginForgotPaswContent = document.querySelector('.login_forgot-pasw-content');
const loginTitle = document.querySelector('.login_title .main_title');
const loginForm = document.querySelector('.login_form');
const loginForgotPasswordItem = document.querySelector('.login_forgot-password-item')
// ** show-hide password input start

togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
    }
});
// ** show-hide password input end

forgotPassword.addEventListener('click', () => {
    loginForgotPaswContent.classList.remove('hide');
    loginForm.classList.add('hide');
    loginTitle.textContent = 'Сброс пароля';
    loginForgotPasswordItem.textContent = 'Отменить'
})