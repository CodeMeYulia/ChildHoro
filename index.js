//кнопки заказа
let orders = document.querySelectorAll('.order');
orders.forEach((e) => {
    e.addEventListener('click', function () {
        window.open('https://forms.gle/ZGA5UbCfuYo9gB7m7', '_blank');
    })
})

//расшифровка основных блоков информации
let aboutRasi = document.querySelector('.about-rasi');
let aboutLagna = document.querySelector('.about-lagna');
let aboutLagnesh = document.querySelector('.about-lagnesh');
let rasi = document.querySelector('.rasi');
let lagna = document.querySelector('.lagna');
let lagnesh = document.querySelector('.lagnesh');

aboutRasi.addEventListener('click', function () {
    rasi.style.display = "block";
})
aboutLagna.addEventListener('click', function () {
    lagna.style.display = "block";
})
aboutLagnesh.addEventListener('click', function () {
    lagnesh.style.display = "block";
})

let aboutMental = document.querySelector('.about-mental');
let aboutPerception = document.querySelector('.about-perception');
let aboutSpecialization = document.querySelector('.about-specialization');
let mental = document.querySelector('.mental');
let perception = document.querySelector('.perception');
let specialization = document.querySelector('.specialization');

aboutMental.addEventListener('click', function () {
    mental.style.display = "block";
})
aboutPerception.addEventListener('click', function () {
    perception.style.display = "block";
})
aboutSpecialization.addEventListener('click', function () {
    specialization.style.display = "block";
})

let aboutAncestors = document.querySelector('.about-ancestors');
let aboutTalent = document.querySelector('.about-talent');
let ancestors = document.querySelector('.ancestors');
let talent = document.querySelector('.talent');
aboutAncestors.addEventListener('click', function () {
    ancestors.style.display = "block";
});
aboutTalent.addEventListener('click', function () {
    talent.style.display = "block";
});

let aboutParents = document.querySelector('.about-parents');
let aboutTasks = document.querySelector('.about-tasks');
let tasks = document.querySelector('.tasks');
let parents = document.querySelector('.parents');
aboutParents.addEventListener('click', function () {
    parents.style.display = "block";
});
aboutTasks.addEventListener('click', function () {
    tasks.style.display = "block";
});

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





