const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
    overlay = document.querySelector('.overlay');
    menuLinks = document.querySelectorAll('.menu-link1, .menu-link2, .menu-link3, .menu-link4, .menu-link5, .menu-link6');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const procentes = document.querySelectorAll('.skills-ability__procente'),
      indicatorSize = document.querySelectorAll('.skills-ability__indicator');

procentes.forEach((procent, size) => {
    indicatorSize[size].style.width = procent.innerHTML;
});


document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var textArea = document.getElementById('text');
    var submitButton = document.getElementById('submitButton');
    var policyCheckbox = document.getElementById('policyCheckbox');
    var modal = document.querySelector('.modal');
    var closeButton = document.querySelector('.modal__close');
    var overlay = document.querySelector('.overlay');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var errors = [];

        if (nameInput.value.trim() === '' || /^[0-9\s]+$/.test(nameInput.value)) {
            errors.push('Пожалуйста, введите правильное имя.');
        }

        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(emailInput.value)) {
            errors.push('Пожалуйста, введите правильный E-mail.');
        }

        if (textArea.value.trim() === '') {
            // Текстовое поле не обязательно, поэтому нет проверки для него.
        }

        if (!policyCheckbox.checked) {
            errors.push('Пожалуйста, согласитесь с политикой конфиденциальности.');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            // Выполняйте отправку данных на сервер только при успешной валидации
            var formData = new FormData(contactForm);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'mailer/smart.php', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    contactForm.reset();
                    modal.classList.add('modal_active');
                }
            };
            xhr.send(formData);
        }
    });

    closeButton.addEventListener('click', function () {
        modal.classList.remove('modal_active');
    });

    overlay.addEventListener('click', function () {
        modal.classList.remove('modal_active');
    });
});




// document.addEventListener('DOMContentLoaded', function () {
//     var contactForm = document.getElementById('contactForm');
//     var nameInput = document.getElementById('name');
//     var emailInput = document.getElementById('email');
//     var textArea = document.getElementById('text');
//     var submitButton = document.getElementById('submitButton');
//     var policyCheckbox = document.getElementById('policyCheckbox');

//     contactForm.addEventListener('submit', function (e) {
//         var errors = [];

//         if (nameInput.value.trim() === '' || /^[0-9\s]+$/.test(nameInput.value)) {
//             errors.push('Пожалуйста, введите правильное имя.');
//         }

//         if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(emailInput.value)) {
//             errors.push('Пожалуйста, введите правильный E-mail.');
//         }

//         if (textArea.value.trim() === '') {
//             // Текстовое поле не обязательно, поэтому нет проверки для него.
//         }

//         if (!policyCheckbox.checked) {
//             errors.push('Пожалуйста, согласитесь с политикой конфиденциальности.');
//         }

//         if (errors.length > 0) {
//             e.preventDefault();
//             alert(errors.join('\n'));
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     var forms = document.querySelectorAll('form');

//     forms.forEach(function (form) {
//         form.addEventListener('submit', function (e) {
//             e.preventDefault();

//             if (!form.checkValidity()) {
//                 return;
//             }

//             var formData = new FormData(form);

//             var xhr = new XMLHttpRequest();
//             xhr.open('POST', 'mailer/smart.php', true);
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     form.reset();

//                     var modal = document.querySelector('.modal');
//                     modal.classList.add('modal_active');

//                     var closeButton = document.querySelector('.modal__close');
//                     closeButton.addEventListener('click', function () {
//                         modal.classList.remove('modal_active')
//                     });

//                     var overlay2 = document.querySelector('.overlay');
//                     overlay2.addEventListener('click', () => {
//                         modal.classList.remove('modal_active');
//                     });
//                 }
//             };
//             xhr.send(formData);
//         });
//     });
// });
