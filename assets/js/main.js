const questionWrappers = document.querySelectorAll('.question-wrapper');
const allAnswers = document.querySelectorAll('.answer');
const allIcons = document.querySelectorAll('.icon');

questionWrappers.forEach(qWrapper => {
    qWrapper.addEventListener('click', () => {
        const icon = qWrapper.querySelector('.icon');
        allAnswers.forEach(answer => {
            answer.classList.remove('open');
        });
        allIcons.forEach(icon => {
            icon.src = "./assets/images/icon-plus.svg";
            icon.classList.remove('clicked');
        });
        icon.src = "./assets/images/icon-minus.svg";
        icon.classList.add('clicked');
        qWrapper.nextElementSibling.classList.add('open');
    });
});