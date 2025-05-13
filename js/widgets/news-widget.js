class NewsWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-large');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.loadNews();
    }
  
    async loadNews() {
      const el = this.shadowRoot.getElementById('news');
      el.textContent = 'Checking for political news...';
  
      // Retrieve location from local storage or settings system
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
  
    // Replace this with real API integration when available
    async queryPerplexity(location) {
      // Mock result for demo — you would replace this with a real fetch
      const prompt = `Is there any political news today for ${location}? Give a headline and link if so.`;
      
      // Example simulated fetch
      const mockResponse = {
        headline: `Governor of ${location} announces new policy changes.`,
        url: `https://example.com/political-news-${location.toLowerCase()}`
      };
  
      // Simulate delay
      await new Promise(r => setTimeout(r, 1000));
  
      return mockResponse;
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          #news {
            font-size: 0.95rem;
          }
          a {
            color: blue;
            text-decoration: underline;
          }
        </style>
        <div id="news">Loading political news...</div>
      `;
    }
  }
  
  customElements.define('news-widget', NewsWidget);