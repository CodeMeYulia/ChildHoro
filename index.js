//кнопки заказа
let orders = document.querySelectorAll('.order');
orders.forEach((e) => {
    e.addEventListener('click', function () {
        window.open('https://forms.gle/ZGA5UbCfuYo9gB7m7', '_blank');
    })
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