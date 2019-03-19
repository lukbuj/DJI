selectorAdder('.menuicon').addEventListener('click', function () {
    this.classList.toggle('open');
    selectorAdder('.header').classList.toggle('open');
    selectorAdder('.overlay').classList.toggle('open');
});


function selectorAdder(s) {
    return document.querySelector(s);
};
