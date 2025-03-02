document.addEventListener("DOMContentLoaded", function() {
    const scheduleContainer = document.getElementById('schedule');

    // Пример JSON-данных о занятиях
    const classes = [{
            "id": 1,
            "name": "Йога",
            "time": "10:00 - 11:00",
            "maxParticipants": 15,
            "currentParticipants": 10
        },
        {
            "id": 2,
            "name": "Пилатес",
            "time": "12:00 - 13:00",
            "maxParticipants": 10,
            "currentParticipants": 8
        },
        {
            "id": 3,
            "name": "Кроссфит",
            "time": "18:00 - 19:00",
            "maxParticipants": 20,
            "currentParticipants": 20
        }
    ];

    // Функция для отображения занятий
    function renderClasses() {
        scheduleContainer.innerHTML = '';
        classes.forEach(cls => {
            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${cls.name}</h5>
                    <p class="card-text">Время: ${cls.time}</p>
                    <p class="card-text">Участники: ${cls.currentParticipants}/${cls.maxParticipants}</p>
                    <button onclick="signUp(${cls.id})" class="btn btn-primary" ${cls.currentParticipants >= cls.maxParticipants ? 'disabled' : ''}>Записаться</button>
                    <button onclick="cancelSignUp(${cls.id})" class="btn btn-danger" ${cls.currentParticipants === 0 ? 'disabled' : ''}>Отменить запись</button>
                </div>
            `;
            scheduleContainer.appendChild(card);
        });
    }

    // Функция для записи на занятие
    window.signUp = function(classId) {
        const cls = classes.find(c => c.id === classId);
        if (cls && cls.currentParticipants < cls.maxParticipants) {
            cls.currentParticipants++;
            renderClasses();
        }
    }

    // Функция для отмены записи на занятие
    window.cancelSignUp = function(classId) {
        const cls = classes.find(c => c.id === classId);
        if (cls && cls.currentParticipants > 0) {
            cls.currentParticipants--;
            renderClasses();
        }
    }

    // Инициализация отображения занятий
    renderClasses();
});