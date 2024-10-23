let calls = document.getElementsByClassName("more");
let answers = document.getElementsByClassName('content')
console.log(answers);

function hidewAnswer() {
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].classList.contains('collapse')) {
            console.log('mao');
        } else { answers[i].classList.add('collapse') }
    }
}

function forgive() {
    for (let i = 0; i < calls.length; i++) {
        if (calls[i].classList.contains('active')) {
            calls[i].classList.remove('active')
        }
    }
}

for (let i = 0; i < calls.length; i++) {
    calls[i].addEventListener('click', function () {
        hidewAnswer();
        forgive();
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        answer.classList.toggle('collapse');
        console.log(answer);
    })
}

