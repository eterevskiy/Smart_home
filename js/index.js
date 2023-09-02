function loadContent(url) {
  return fetch(url)
    .then(response => response.text())
    .catch(error => console.error('Error loading content:', error));
}
function authorization() {
  const contentDiv = $('#content');
  const navbar = document.getElementById('navbar');
  navbar.style.display = 'none';
  loadContent('assets/blocks/login.html').then(content => {
    contentDiv.html(content);

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        navbar.style.display = 'block';
        
        handleHashChange();
      }
      else {
        alert('Ошибка авторизации. Проверьте имя пользователя и пароль.');
      }
    });
  });
}


function handleHashChange() {
  const contentDiv = $('#content');
  const hash = window.location.hash.substr(1).trim(); // Убираем пробелы из хеша
  if (hash === 'home') {
    loadContent('assets/blocks/home.html').then(content => {
      contentDiv.html(content);
      //----------------------------------------------------------------------------
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {

          labels: ['20', '21', '22', '23', '24', '25', '26', '27'],
          datasets: [{
            label: 'August',
            data: [30, 40, 50, 75, 68, 70, 90, 80],
            borderWidth: 1,
            parsing: {
              yAxisKey: '$'
            }
          },
          {
            label: 'September',
            data: [12, 19, 25, 30, 28, 40, 39, 30],
            borderWidth: 1,
            parsing: {
              yAxisKey: '$'
            }
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      //----------------------------------------------------------------------------
      const brightnessSlider = document.getElementById('brightness-slider');
      const heartCenter = document.querySelector('.cls-1.center');
      const brightnessValue = brightnessSlider.value / 100;
      const yellowColor = `rgba(255, 255, 0, ${brightnessValue})`;
      heartCenter.style.filter = `url(#glow)`;
      heartCenter.style.fill = yellowColor;
      brightnessSlider.addEventListener('input', () => {
        const brightnessValue = brightnessSlider.value / 100;

        // Изменение цвета эффекта света
        const yellowColor = `rgba(255, 255, 0, ${brightnessValue})`;
        heartCenter.style.filter = `url(#glow)`;
        heartCenter.style.fill = yellowColor;
      });
      //----------------------------------------------------------------------------
      const humidityValueElement = document.getElementById("humidityValue");
      const increaseButton = document.getElementById("increaseButton");
      const decreaseButton = document.getElementById("decreaseButton");
      const temperatureValueElement = document.getElementById("temperatureValue");
      const temperatureIncreaseButton = document.getElementById("temperatureIncreaseButton");
      const temperatureDecreaseButton = document.getElementById("temperatureDecreaseButton");

      let humidityValue = parseInt(humidityValueElement.innerText);
      let temperatureValue = parseInt(temperatureValueElement.innerText);

      temperatureIncreaseButton.addEventListener("click", function () {
        if (temperatureValue < 40) {
          temperatureValue += 1;
          updateTemperatureValue();
        }
      });
      increaseButton.addEventListener("click", function () {
        if (humidityValue < 100) {
          humidityValue += 1;
          updateHumidityValue();
        }

      });
      temperatureDecreaseButton.addEventListener("click", function () {
        if (temperatureValue > 10) {
          temperatureValue -= 1;
          updateTemperatureValue();
        }
      });

      decreaseButton.addEventListener("click", function () {
        if (humidityValue > 0) {
          humidityValue -= 1;
          updateHumidityValue();
        }
      });

      function updateTemperatureValue() {
        temperatureValueElement.innerText = temperatureValue;
      }
      function updateHumidityValue() {
        humidityValueElement.innerText = humidityValue;
      }

    });

    //----------------------------------------------------------------------------

  } else if (hash === 'notification') {
    loadContent('assets/blocks/notification.html').then(content => {
      contentDiv.html(content);
    });
  } else if (hash === 'settings') {
    loadContent('assets/blocks/settings.html').then(content => {
      contentDiv.html(content);
    });
  }
  else if (hash === 'profile') {
    loadContent('assets/blocks/profile.html').then(content => {
      contentDiv.html(content);
    });
  }
  else if (hash === 'messages') {
    loadContent('assets/blocks/messages.html').then(content => {
      contentDiv.html(content);
    });
  }
  else if (hash === 'time') {
    loadContent('assets/blocks/time.html').then(content => {
      contentDiv.html(content);
    });
  }
  else {
    contentDiv.html('Page not found');
  }


}


//----------------------------------------------------------------------------

const nav_items = document.querySelectorAll('.navigation__menu-item')
nav_items.forEach((item) => {
  item.addEventListener("click", () => {
    nav_items.forEach((element) => {
      element.classList.remove('active')
    })
    item.classList.add('active')
  });
});

//----------------------------------------------------------------------------

$(window).on('hashchange', handleHashChange);

$(window).on('DOMContentLoaded', () => {
  authorization();
});

// function updateTime() {
//   var currentTime = new Date();
//   var hours = currentTime.getHours();
//   var minutes = currentTime.getMinutes();

//   // Добавляем ноль перед числами, если они однозначные
//   hours = (hours < 10 ? "0" : "") + hours;
//   minutes = (minutes < 10 ? "0" : "") + minutes;


//   var formattedTime = hours + ":" + minutes;
//   document.getElementById("time").textContent = formattedTime;
// }

// Обновляем время каждую секунду
// setInterval(updateTime, 1000);

// Chart





