const questionWrappers = document.querySelectorAll('.question-wrapper');
const allAnswers = document.querySelectorAll('.answer');
const allIcons = document.querySelectorAll('.icon');

questionWrappers.forEach(qWrapper => {
    qWrapper.addEventListener('click', () => {
        allAnswers.forEach(answer => {
            answer.classList.remove('open');
        });
        allIcons.forEach(icon => {
            icon.src = "./assets/images/icon-plus.svg";
        });
        qWrapper.querySelector('.icon').src = "./assets/images/icon-minus.svg";
        qWrapper.nextElementSibling.classList.add('open');
    });
});