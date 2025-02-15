const menuItems = document.querySelectorAll('.menu-item');
const contentDiv = document.getElementById('content');
const footerDiv = document.getElementById('footer');

// Функция для загрузки колонтитула
function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при загрузке колонтитула');
            }
            return response.text();
        })
        .then(data => {
            footerDiv.innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Загружаем колонтитул при загрузке страницы
loadFooter();

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `rgb(255, 105, 180)`; // Розовый цвет
        item.style.color = '#fff';
    });

    item.addEventListener('mouseout', () => {
        if (!item.classList.contains('active')) {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            item.style.color = 'rgb(255, 0, 150)';
        }
    });

    item.addEventListener('click', () => {
        // Сбрасываем активный класс у всех элементов
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Добавляем активный класс к текущему элементу
        item.classList.add('active');

        // Плавный переход к стандартному цвету
        setTimeout(() => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            item.style.color = 'rgb(255, 0, 150)';
        }, 2000); // Задержка перед переключением обратно

        // Загружаем контент в зависимости от нажатой кнопки
        if (item.dataset.target === 'home') {
            loadHomeContent();
        } else if (item.textContent === 'О нас') {
            loadAboutContent();
        } else if (item.textContent === 'Услуги') {
            loadScriptDescriptionContent(); // Здесь вызываем новую функцию
        } else if (item.textContent === 'Контакты') {
            loadContactContent(); // Здесь вызываем новую функцию
        }
    });
});

function loadHomeContent() {
    contentDiv.classList.remove('show'); // Убираем класс для анимации исчезновения
    setTimeout(() => {
        contentDiv.innerHTML = `
            <h1>Добро пожаловать на наш сайт!</h1>
            <p>Мы продаем услуги по скриптингу, такие как:</p>
            <ul>
                <li>Скрипт на матрешку РП (на сроки)</li>
                <li>Индивидуальные заказы по скриптам</li>
                <li>Поддержка и обновления скриптов</li>
            </ul>
            <p>Свяжитесь с нами для получения дополнительной информации!</p>
        `;
        contentDiv.classList.add('show'); // Добавляем класс для анимации появления
    }, 300); // Задержка перед обновлением контента
}

function loadAboutContent() {
    contentDiv.classList.remove('show'); // Убираем класс для анимации исчезновения
    setTimeout(() => {
        contentDiv.innerHTML = `
            <h1>О нас</h1>
            <p>Мы – команда профессионалов, предлагающая высококачественные скрипты для игры на платформе "Матрешка РП". На данный момент доступны следующие услуги:</p>
            <ul>
                <li>Скрипт на неделю</li>
                <li>Скрипт на месяц</li>
                <li>Скрипт на три месяца</li>
            </ul>
            <p>Мы стараемся сделать все для вас, обеспечивая качество и надежность наших скриптов. Также доступен тестировочный скрипт, чтобы вы могли убедиться в его функциональности перед покупкой.</p>
            <p>Свяжитесь с нами для получения дополнительной информации!</p>
        `;
        contentDiv.classList.add('show'); // Добавляем класс для анимации появления
    }, 300); // Задержка перед обновлением контента
}

function loadScriptDescriptionContent() {
    contentDiv.classList.remove('show'); // Убираем класс для анимации исчезновения
    setTimeout(() => {
        contentDiv.innerHTML = `
            <h1>Описание скрипта</h1>
            <p>Я делаю челу, вот какие функции есть в скрипте:</p>
            <h2>🚀 Функционал скрипта 🚀</h2>
            <ul>
                <li>[💎] Визуал [💎]</li>
                <li>[💎] Персонаж [💎]</li>
                <li>[💎] Транспорт [💎]</li>
                <li>[💎] Прочее [💎]</li>
            </ul>
            <h3>💠 Визуал 💠</h3>
            <ul>
                <li>💎 Деньги 💎</li>
                <li>💎 Fov Hack 💎</li>
                <li>💎 Смена дня 💎</li>
                <li>💎 Расцветка экрана 💎</li>
                <li>💎 Сенса 💎</li>
                <li>💎 Расцветка карты 💎</li>
            </ul>
            <h3>💠 Персонаж 💠</h3>
            <ul>
                <li>💎 высокий прыжок 💎</li>
                <li>💎 бесконечный бег 💎</li>
            </ul>
            <h3>💠 Транспорт 💠</h3>
            <ul>
                <li>💎 Легковое 💎</li>
                <li>💎 Скутер 💎</li>
                <li>💎 Тяжелое 💎</li>
            </ul>
            <h3>💠 Прочее 💠</h3>
            <ul>
                <li>💎 SpeedHack Game 💎</li>
            </ul>
        `;
        contentDiv.classList.add('show'); // Добавляем класс для анимации появления
    }, 300); // Задержка перед обновлением контента
}

function loadContactContent() {
    contentDiv.classList.remove('show'); // Убираем класс для анимации исчезновения
    setTimeout(() => {
        contentDiv.innerHTML = `
            <h1>Контакты</h1>
            <p>Если у вас есть вопросы или вы хотите связаться с нами, вы можете использовать следующие контакты:</p>
            <h2>Переходник</h2>
            <p><a href="https://holidola.usluga.me/" target="_blank">https://holidola.usluga.me/</a></p>
            <h2>Связь с админом</h2>
            <p>Вы можете написать администратору по следующему контакту:</p>
            <p>
                <a href="https://t.me/manager_holidola" target="_blank">@holidola</a>
            </p>
            <h2>Социальные сети</h2>
            <p>Следите за нами в социальных сетях для получения актуальных новостей и обновлений!</p>
        `;
        contentDiv.classList.add('show'); // Добавляем класс для анимации появления
    }, 300); // Задержка перед обновлением контента
}