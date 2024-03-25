const questionWrappers = document.querySelectorAll('.question-wrapper');
const allAnswers = document.querySelectorAll('.answer');
const allIcons = document.querySelectorAll('.icon');
const questionLinks = document.querySelector('.question-link');

// Show and hide answer function
const showHideAnswer = (icon, qWrapper) => {
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
}

questionWrappers.forEach(qWrapper => {
    qWrapper.addEventListener('click', () => {
        showHideAnswer(qWrapper.querySelector('.icon'), qWrapper);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key == qWrapper.dataset.key) {
            showHideAnswer(qWrapper.querySelector('.icon'), qWrapper);
        }
    });
});