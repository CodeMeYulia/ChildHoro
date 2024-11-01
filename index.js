let calls = document.getElementsByClassName("more");
let answers = document.getElementsByClassName('content')

function hideAnswer() {
    for (let i = 0; i < answers.length; i++) {
        //если блок свернут - пропустить
        if (answers[i].classList.contains('collapse')) {
            //если нет, то свернуть
        } else {
            answers[i].classList.add('collapse');
        }
    }
}

for (let i = 0; i < calls.length; i++) {
    calls[i].addEventListener('click', function () {
        hideAnswer();
        //если блок открыт и кнопка активна
        if (calls[i].classList.contains('active')) {
            calls[i].classList.remove('active');
            this.nextElementSibling.classList.add('collapse');
        } else {
            calls[i].classList.add('active');
            this.nextElementSibling.classList.remove('collapse');
        }
    })
}

let order = document.querySelector('.order');
order.addEventListener('click', function () {
    // document.location.href = 'https://forms.gle/ZGA5UbCfuYo9gB7m7';
    window.open('https://forms.gle/ZGA5UbCfuYo9gB7m7', '_blank');
})

let crema = document.querySelector('.crema');
let lagna = document.querySelector('.lagna');
crema.addEventListener('click', function () {
    lagna.style.display = "block";
})

document.querySelector('.close').addEventListener('click', function () {
    lagna.style.display = "none";
})


