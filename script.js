const boxes = document.querySelectorAll('.grid-item');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    });
});