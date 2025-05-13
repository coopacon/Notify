class WeatherWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-wide');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.loadWeather();
    }
  
    async loadWeather() {
      // Placeholder/mock logic until API integration
      const weatherData = {
        current: '🌤️ 68°F, Partly Cloudy',
        hourly: ['70°F', '72°F', '69°F', '65°F', '60°F']
      };
  
      const hourlyHTML = weatherData.hourly.map((h, i) => `<div>+${i}h: ${h}</div>`).join('');
      this.shadowRoot.getElementById('weather').innerHTML = `
        <div><strong>Today:</strong> ${weatherData.current}</div>
        <div class="hourly"><strong>Hourly:</strong><br>${hourlyHTML}</div>
      `;
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          #weather {
            font-size: 0.95rem;
            line-height: 1.6;
          }
          .hourly {
            margin-top: 0.5rem;
          }
        </style>
        <div id="weather">Loading weather...</div>
      `;
    }
  }
  
  customElements.define('weather-widget', WeatherWidget);