document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });

$(".project-slider").slick({
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

document.addEventListener('DOMContentLoaded', function() {
  const contactModal = document.getElementById('contactModal');
  const successModal = document.getElementById('successModal');
  const btn = document.querySelector('.contact-us-btn');
  const closeBtns = document.querySelectorAll('.close');
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const privacyPolicyCheckbox = document.getElementById('privacyPolicy');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');

  // Функция открытия модального окна
  function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden', 'false');
  }

  // Функция закрытия модального окна
  function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');
  }

  // Активируем/деактивируем кнопку отправки в зависимости от состояния чекбокса
  privacyPolicyCheckbox.addEventListener('change', function() {
    submitBtn.disabled = !this.checked;
  });

  // Открываем модальное окно формы при клике на кнопку
  if (btn) {
    btn.addEventListener('click', function() {
      openModal(contactModal);
    });
  }

  // Закрываем любое модальное окно по крестику
  closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      closeModal(modal);
    });
  });

  // Закрываем при клике вне окна
  window.addEventListener('click', function(event) {
    if (event.target === contactModal) {
      closeModal(contactModal);
    }
    if (event.target === successModal) {
      closeModal(successModal);
    }
  });

  // Закрываем по клавише ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal(contactModal);
      closeModal(successModal);
    }
  });

  // Обработка отправки формы
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем стандартную отправку

    // Здесь должна быть логика отправки данных на сервер
    // Например, через fetch или XMLHttpRequest

    // После успешной отправки:
    closeModal(contactModal); // Закрываем форму
    openModal(successModal); // Открываем оповещение

    // Очищаем форму
    form.reset();
    submitBtn.disabled = true; // Снова блокируем кнопку, пока не отметят чекбокс
  });

  // Закрытие окна успеха по кнопке OK
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', function() {
      closeModal(successModal);
    });
  }
});