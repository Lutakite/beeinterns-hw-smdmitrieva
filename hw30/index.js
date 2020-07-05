const text = document.querySelector('.result');

const start = () => {
    let result = prompt("Введите число", "1");
    window.frames.frame.postMessage(result, "*");
}

window.addEventListener("message", function(event) {
    text.innerHTML = event.data;
});

window.onbeforeunload = function() {
    return "Действительно покинуть страницу?";//Все равно пишет стандартный текст
};

