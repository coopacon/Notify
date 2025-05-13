class SettingsWidget extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.loadSettings();
      this.addListeners();
    }
  
    loadSettings() {
      const location = localStorage.getItem('userLocation') || '';
      this.shadowRoot.getElementById('location').value = location;
    }
  
    saveSettings() {
      const location = this.shadowRoot.getElementById('location').value.trim();
      localStorage.setItem('userLocation', location);
      alert('✅ Settings saved!');
    }
  
    addListeners() {
      this.shadowRoot
        .getElementById('saveBtn')
        .addEventListener('click', () => this.saveSettings());
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            padding: 1rem;
            background: #f8f8f8;
            border-radius: 1rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            max-width: 400px;
            font-family: sans-serif;
          }
          h3 {
            margin-top: 0;
          }
          label {
            display: block;
            margin-bottom: 0.5rem;
          }
          input {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
          }
          button {
            padding: 0.6rem 1.2rem;
            background: #007aff;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
          }
        </style>
        <div>
          <h3>Settings</h3>
          <label>
            Location:
            <input type="text" id="location" placeholder="e.g. Texas, New York, etc." />
          </label>
          <button id="saveBtn">Save</button>
        </div>
      `;
    }
    
    connectedCallback() {
        this.render();
        this.loadSettings();
        this.addListeners();
      
        // Auto-focus on first-time users
        if (!localStorage.getItem('userLocation')) {
          this.style.display = 'block';
        } else {
          this.style.display = 'none'; // Auto-hide if location is set
        }
      }
  }
  
  
  customElements.define('settings-widget', SettingsWidget);