function validate(data) {
    const { login, password, confirmPassword, license } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        alert('Форма отправлена');
    }
}
