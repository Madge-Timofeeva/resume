
let texts = [
    "I'm Margarita Timofeeva",
    "I'm a frontend developer"
];
let currentTextIndex = 0;
let i = 0;
let speed = 100;

function type() {
    if (i < texts[currentTextIndex].length) {
        document.querySelector('#typing-text').textContent += texts[currentTextIndex].charAt(i);
        i++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (i >= 0) {
        const text = texts[currentTextIndex];
        document.querySelector('#typing-text').textContent = text.substring(0, i);
        i--;
        setTimeout(erase, speed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Switch to the next text
        setTimeout(type, speed);
    }
}

type();

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menulinks = menu.querySelectorAll('.nav__link');


burger.addEventListener('click',function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav--active');

  document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(function (el) {
  el.addEventListener('click', function () {

burger.classList.remove('burger--active');

menu.classList.remove('nav--active');

document.body.classList.remove('stop-scroll')

  })
});


//скрипт для локального сервера и проверки отправки данных на почту

$(document).ready(function() {    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});