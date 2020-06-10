const form = document.querySelector('.form');
const chat_history = document.querySelector('.chat_history');
const text_input = document.querySelector('.text_input');
const button = document.querySelector('.button');
const dots = document.querySelector('.dots');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
let user_name = "";
let start = true;
let nums = false;
let numbers;

function showDots() {
    dot1.style.display = 'inline-block';
    setTimeout(function() {
        dot2.style.display = 'inline-block';
    }, 300);
    setTimeout(function() {
        dot3.style.display = 'inline-block';
    }, 600);
    setTimeout(function() {    
        dot1.style.display = 'none';
        dot2.style.display = 'none';
        dot3.style.display = 'none';
    }, 1000);
}

text_input.addEventListener('input', function() {
    if (this.value.length > 0) {
        button.style.backgroundImage = 'url("./img/Path_orange.svg")';
        button.disabled = false;
        button.style.cursor = 'pointer';
    } else {
        button.style.backgroundImage = 'url("./img/Path.svg")';
        button.disabled = true;
        button.style.cursor = 'default';
    }
    showDots();
});

document.addEventListener('submit', (event) => {
    let user_mes_block = document.createElement('div');
    user_mes_block.className = "message_block";
    user_mes_block.innerHTML = '<img src="img/user.svg" class="icon"><div class="user_message message">' + text_input.value + '</div>';
    chat_history.append(user_mes_block);

    let bot_mes = "";

    if (text_input.value == '/start' && start == true) {
        bot_mes = "Привет, меня зовут Чат-бот, а как зовут тебя?";
        start = false;
    } else if (text_input.value == '/stop' && start == false) {
        bot_mes = "Всего доброго, если хочешь поговорить пиши /start";
        start = true;
    } else if (text_input.value.startsWith('/name: ') == true && start == false) {
        user_name = text_input.value.split(':')[1];
        bot_mes = "Привет" + user_name + ", приятно познакомится. Я умею считать, введи числа которые надо посчитать";
    } else if (text_input.value.startsWith('/number: ') == true && start == false) {
        numbers = text_input.value.split(':')[1];
        numbers = numbers.split(',');
        /*num1 = numbers[0];
        num2 = numbers[1];*/
        nums = true;
        bot_mes = "Введите одно из действий: -, +, *, /";
    } else if (text_input.value == '-' && start == false && nums == true) {
        let result;
        numbers.forEach(function(item, i, numbers) {
            if (i == 0) {
                result = parseInt(item);
            } else {
                result -= parseInt(item);
            }
        });
        bot_mes = result.toString();
        //bot_mes = (parseInt(num1) - parseInt(num2)).toString();
    } else if (text_input.value == '+' && start == false && nums == true) {
        let result;
        numbers.forEach(function(item, i, numbers) {
            if (i == 0) {
                result = parseInt(item);
            } else {
                result += parseInt(item);
            }
        });
        bot_mes = result.toString();
        //bot_mes = (parseInt(num1) + parseInt(num2)).toString();
    } else if (text_input.value == '*' && start == false && nums == true) {
        let result;
        numbers.forEach(function(item, i, numbers) {
            if (i == 0) {
                result = parseInt(item);
            } else {
                result *= parseInt(item);
            }
        });
        bot_mes = result.toString();
        //bot_mes = (parseInt(num1) * parseInt(num2)).toString();
    } else if (text_input.value == '/' && start == false && nums == true) {
        let result;
        numbers.forEach(function(item, i, numbers) {
            if (i == 0) {
                result = parseInt(item);
            } else {
                result /= parseInt(item);
            }
        });
        bot_mes = result.toString();
        //bot_mes = (parseInt(num1) / parseInt(num2)).toString();
    } else if (text_input.value == '/weather' && start == false){
        bot_mes = '<a href="https://rp5.ru/5483/ru"><img border=0 width=88 height=31 src="https://rp5.ru/informer/88x31x2.php?f=18&id=5483&lang=ru&um=00000"></a>';
    } else {
        bot_mes = "Я не понимаю, введите другую команду!";
    }

    text_input.value = "";
    button.style.backgroundImage = 'url("./img/Path.svg")';
    button.disabled = true;
    button.style.cursor = 'default';

    setTimeout(function() {    
        let bot_mes_block = document.createElement('div');
        bot_mes_block.className = "message_block";
        bot_mes_block.innerHTML = '<img src="img/bot.svg" class="icon"><div class="bot_message message">' + bot_mes + '</div>';
        chat_history.append(bot_mes_block);
    }, 1000);    
});
