class NewsWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-large');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render(); // Ensure DOM is ready before loading news
    }
  
    render() {
        this.shadowRoot.innerHTML = `
        <style>
          #news {
            font-size: 0.95rem;
            margin-bottom: 8px;
          }
          button {
            background: #007aff;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 10px;
            cursor: pointer;
          }
        </style>
        <div id="news">Click below to get political news...</div>
        <button id="perplexity-btn">Ask Perplexity</button>
      `;
    
      this.shadowRoot.getElementById('perplexity-btn').addEventListener('click', () => {
        const location = localStorage.getItem('userLocation') || 'United States';
        const prompt = encodeURIComponent(`Is there any political news today for ${location}?`);
        const url = `https://www.perplexity.ai/search?q=${prompt}`;
        window.open(url, '_blank');
      });
    }
  
    async loadNews() {
      const el = this.shadowRoot.getElementById('news');
      el.textContent = 'Checking for political news...';
  
      const location = localStorage.getItem('userLocation') || 'United States';
  
      try {
        const response = await this.queryPerplexity(location);
        if (response && response.headline) {
          el.innerHTML = `
            <strong>🗳️ Political News for ${location}:</strong><br>
            <a href="${response.url}" target="_blank">${response.headline}</a>
          `;
        } else {
          el.innerHTML = `No political news found for ${location} today.`;
        }
      } catch (error) {
        el.innerHTML = `⚠️ Error loading news: ${error.message}`;
      }
    }
  
    async queryPerplexity(location) {
      // Simulated result for now
      const mockResponse = {
        headline: `Governor of ${location} announces new policy changes.`,
        url: `https://example.com/political-news-${location.toLowerCase()}`
      };
      await new Promise(r => setTimeout(r, 1000));
      return mockResponse;
    }
  }
  
  customElements.define('news-widget', NewsWidget);