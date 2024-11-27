//кнопки заказа
let orders = document.querySelectorAll('.order');
let mydiv = document.getElementById('mydiv');

orders.forEach((e) => {
    e.addEventListener('click', function () {
        window.open('https://forms.gle/ZGA5UbCfuYo9gB7m7', '_blank');
    });

    e.addEventListener('mouseenter', function () {
        mydiv.innerHTML = "<iframe src='./sound/shine-1.mp3' allow='autoplay' style='display: none' mute = 'false' audio.volume=0.5;></iframe>";
    });
})

//расшифровка основных блоков информации
let about = document.querySelectorAll('.about');
about.forEach((e) => {
    e.addEventListener('click', function () {
        e.nextElementSibling.style.display = 'block';
    })
})

let closeBtns = document.querySelectorAll('.close');

closeBtns.forEach((e) => {
    e.addEventListener('click', function () {
        e.parentNode.parentNode.style.display = "none";
    })
})

//открытие-скрытие вопросов-ответов
let calls = document.getElementsByClassName("more");

for (let i = 0; i < calls.length; i++) {
    calls[i].addEventListener('click', function () {
        //если блок открыт и кнопка активна
        this.nextElementSibling.classList.toggle('collapse');
        this.classList.toggle('active');
    })

}