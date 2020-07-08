const text = document.querySelector('.frame_wrapper');

window.addEventListener("message", function(event) {
    text.innerHTML = event.data;
    if (parseInt(event.data)) {
        parent.postMessage(parseInt(event.data) + 1, "*")
    }
});
