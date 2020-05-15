function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (login == 'beeline' || login == 'beeinterns' || login == 'bee') {
        alert('Выбранный логин занят');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Укажите имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {   
        alert(`${(gender == 'male') ? 'Уважаемый' : 'Уважаемая'} ${firstName}, заявка создана`);
    }
}
