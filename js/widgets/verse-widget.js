class VerseWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-small');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const verses = [
        "Proverbs 16:3 – Commit your work to the LORD, and your plans will succeed."
      ];
  
      const today = new Date();
      const index = today.getDate() % verses.length;
      const verse = verses[index];
  
      this.shadowRoot.innerHTML = `
        <style>
          .verse {
            font-size: 0.85rem;
            font-style: italic;
            padding: 0.25rem;
            text-align: center;
          }
        </style>
        <div class="verse">${verse}</div>
      `;
    }
  }
  
  customElements.define('verse-widget', VerseWidget);