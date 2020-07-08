const form = document.querySelector('.form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const secondName = document.querySelector('#secondName');
const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');
const checkbox3 = document.querySelector('#checkbox3');
const checkbox4 = document.querySelector('#checkbox4');

const saveToCookies = () => {
    document.cookie = "firstName" + "=" + firstName.value;
    document.cookie = "lastName" + "=" + lastName.value;
    document.cookie = "secondName" + "=" + secondName.value;
    document.cookie = "checkbox1" + "=" + checkbox1.checked;
    document.cookie = "checkbox2" + "=" + checkbox2.checked;
    document.cookie = "checkbox3" + "=" + checkbox3.checked;
    document.cookie = "checkbox4" + "=" + checkbox4.checked;
};

const loadFromCookies = () => {
    firstName.value = Cookies.get('firstName');
    lastName.value = Cookies.get('lastName');
    secondName.value = Cookies.get('secondName');
    checkbox1.checked = (Cookies.get('checkbox1') == 'true');
    checkbox2.checked = (Cookies.get('checkbox2') == 'true');
    checkbox3.checked = (Cookies.get('checkbox3') == 'true');
    checkbox4.checked = (Cookies.get('checkbox4') == 'true');
};

const saveToStorage = () => {
    let list = [];
    if (checkbox1.checked) {
        list.push(1);
    }
    if (checkbox2.checked) {
        list.push(2);
    }
    if (checkbox3.checked) {
        list.push(3);
    }
    if (checkbox4.checked) {
        list.push(4);
    }

    let person = {
        firstName: firstName.value,
        lastName: lastName.value,
        secondName: secondName.value,
        courses: list
    };
    console.log(person);
    localStorage.setItem("person",JSON.stringify(person));
};

const loadFromStorage = () => {
    let person = JSON.parse(localStorage.getItem("person"));
    firstName.value = person.firstName;
    lastName.value = person.lastName;
    secondName.value = person.secondName;
    for (let i in person.courses) {
        if (person.courses.hasOwnProperty(i)) {
            if (person.courses[i] === 1) {
                checkbox1.checked = true;
            }
            else if (person.courses[i] === 2) {
                checkbox2.checked = true;
            }
            else if (person.courses[i] === 3) {
                checkbox3.checked = true;
            }
            else if (person.courses[i] === 4) {
                checkbox4.checked = true;
            }
        }
    }
};
