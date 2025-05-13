class HolidayWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-small');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const today = new Date();
      const message = this.getHolidayMessage(today);
      this.shadowRoot.innerHTML = `
        <style>
          .holiday {
            font-size: 1.25rem;
            text-align: center;
            font-weight: 600;
          }
        </style>
        <div class="holiday">${message || 'No holiday today!'}</div>
      `;
    }
  
    getHolidayMessage(date) {
      const m = date.getMonth() + 1;
      const d = date.getDate();
  
      const fixedHolidays = {
        '1-1': '🎉 Happy New Year!',
        '2-14': '❤️ Happy Valentine\'s Day!',
        '7-4': '🎆 Happy Independence Day!',
        '10-31': '🎃 Happy Halloween!',
        '12-25': '🎄 Merry Christmas!',
        '11-28': '🦃 Happy Thanksgiving!', // optionally refine for exact Thursday
        '4-20': '🌱 Earth Day!' // example placeholder
      };
  
      return fixedHolidays[`${m}-${d}`] || null;
    }
  }
  
  customElements.define('holiday-widget', HolidayWidget);