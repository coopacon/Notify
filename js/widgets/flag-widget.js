class FlagWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-small');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.checkHalfMastStatus();
    }
  
    async checkHalfMastStatus() {
      // Placeholder data – replace with API in future
      const today = new Date().toISOString().split('T')[0];
      const flagStatus = {
        date: today,
        isHalfMast: true,
        reason: "In honor of Memorial Day"
      };
  
      const el = this.shadowRoot.getElementById('flag');
      if (flagStatus.isHalfMast) {
        el.innerHTML = `🇺🇸 <strong>Half-Staff Today</strong><br>${flagStatus.reason}`;
      } else {
        el.innerHTML = `🇺🇸 Flag is at full staff today.`;
      }
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          #flag {
            font-size: 0.95rem;
            line-height: 1.4;
            text-align: center;
          }
        </style>
        <div id="flag">Checking flag status...</div>
      `;
    }
  }
  
  customElements.define('flag-widget', FlagWidget);