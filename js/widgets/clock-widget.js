class CustomClock extends HTMLElement {
    connectedCallback() {
      this.classList.add('widget', 'widget-small');
      this.attachShadow({ mode: 'open' });
      this.render();
      setInterval(() => this.updateTime(), 1000);
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .clock {
            font-size: 1.5rem;
            text-align: center;
          }
        </style>
        <div class="clock" id="clockDisplay"></div>
      `;
      this.updateTime();
    }
  
    updateTime() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const day = now.toLocaleDateString([], { weekday: 'long' });
      this.shadowRoot.getElementById('clockDisplay').textContent = `${timeStr} – ${day}`;
    }
  }
  
  customElements.define('custom-clock', CustomClock);
  
// Optional: live widget visibility toggle
document.querySelectorAll('#settings-panel input[type="checkbox"]').forEach(input => {
    input.checked = getSettings()[input.dataset.widget]?.visible ?? true;
  
    input.addEventListener('change', () => {
      updateSetting(input.dataset.widget, { visible: input.checked });
    });
  });