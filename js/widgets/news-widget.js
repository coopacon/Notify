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
      // Replace this mock with real API integration later
      const breakingNews = {
        isBreaking: true,
        headline: 'Major economic legislation passed in Congress.',
        url: 'https://example.com/breaking-news'
      };
  
      const el = this.shadowRoot.getElementById('news');
      if (breakingNews.isBreaking) {
        el.innerHTML = `<strong>🚨 Breaking News:</strong><br><a href="${breakingNews.url}" target="_blank">${breakingNews.headline}</a>`;
      } else {
        el.innerHTML = `No urgent breaking news right now.`;
      }
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
        <div id="news">Checking for breaking news...</div>
      `;
    }
  }
  
  customElements.define('news-widget', NewsWidget);