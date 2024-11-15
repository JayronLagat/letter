
document.querySelector('.envelope').addEventListener('click', function() {
    document.querySelector('.flap').classList.add('flap-animate');
});
document.querySelector('.envelope').addEventListener('click', function() {
    document.querySelector('.paper').classList.add('paper-animate');
    flip=true;
});
