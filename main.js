// for list
const open = document.getElementById("open");
const close = document.getElementById("close");
const ul = document.getElementById("ul");

open.addEventListener('click', function () {
    open.style.display = 'none';
    ul.style.display = 'block';
});
close.addEventListener('click', function () {
    open.style.display = 'block';
    ul.style.display = 'none';
});