const form = document.querySelector('.quiz-form');
const correctAnswers = ['C', 'C', 'C', 'C'];
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    if (score !== 0){
        result.classList.remove('d-none');
        console.log(result.querySelector('span').textContent = `${score}%`)
    }
});


