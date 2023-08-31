

function loadContent(url) {
  return fetch(url)
    .then(response => response.text())
    .catch(error => console.error('Error loading content:', error));
}

function handleHashChange() {
  const contentDiv = $('#content');
  const hash = window.location.hash.substr(1).trim(); // Убираем пробелы из хеша

  if (hash === 'home') {
    loadContent('assets/blocks/home.html').then(content => {

      contentDiv.html(content);
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          
          labels: ['20', '21', '22', '23', '24', '25','26','27'],
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
      
    });
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

const nav_items = document.querySelectorAll('.navigation__menu-item')
nav_items.forEach((item) => {
  item.addEventListener("click", () => {
    nav_items.forEach((element) => {
      element.classList.remove('active')
    })
    item.classList.add('active')
  });
});

$(window).on('hashchange', handleHashChange);

$(window).on('DOMContentLoaded', () => {
  handleHashChange();
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
