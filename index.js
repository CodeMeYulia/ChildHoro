//кнопки заказа
let orders = document.querySelectorAll('.order');
let mydiv = document.getElementById('mydiv');

orders.forEach((e) => {
    e.addEventListener('click', function () {
        window.open('https://forms.gle/ZGA5UbCfuYo9gB7m7', '_blank');
    });

    e.addEventListener('mouseenter', function () {
        console.log('mao');
        const sound = document.getElementById('Sound');
        sound.currentTime = 0; //сброс времени воспроизведения
        sound.play();
        // mydiv.innerHTML = "<iframe src='./sound/shine-1.mp3' allow='autoplay' style='display: none' mute = 'false' audio.volume=0.5;></iframe>";
    });
})

//расшифровка основных блоков информации
let about = document.querySelectorAll('.about');

about.forEach((e) => {
    e.addEventListener('click', function () {
        this.style.position = 'relative';
        // Открываем новое окно
        const newWindow = this.nextElementSibling;
        // console.log(newWindow);
        newWindow.style.display = 'flex';
        newWindow.style.flexDirection = 'column';
        newWindow.style.height = 'auto';
        newWindow.style.top = 50 + '%';
        newWindow.style.justifyContent = 'space-around';
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
