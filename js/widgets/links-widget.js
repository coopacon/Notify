class CustomLinksWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-large');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.loadLinks();
      this.shadowRoot.getElementById('linkForm').addEventListener('submit', e => this.addLink(e));
    }
  
    loadLinks() {
      const saved = JSON.parse(localStorage.getItem('customLinks') || '[]');
      this.renderLinks(saved);
    }
  
    renderLinks(links) {
      const container = this.shadowRoot.getElementById('linkList');
      if (!links.length) {
        container.innerHTML = `<div>No custom links yet.</div>`;
        return;
      }
      container.innerHTML = links.map(link => `
        <div class="link-item">
          <a href="${link.url}" target="_blank">${link.name}</a>
        </div>
      `).join('');
    }
  
    addLink(event) {
      event.preventDefault();
      const name = this.shadowRoot.getElementById('name').value.trim();
      const url = this.shadowRoot.getElementById('url').value.trim();
      if (!name || !url) return;
  
      const links = JSON.parse(localStorage.getItem('customLinks') || '[]');
      links.push({ name, url });
      localStorage.setItem('customLinks', JSON.stringify(links));
  
      this.shadowRoot.getElementById('linkForm').reset();
      this.renderLinks(links);
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          form {
            margin-bottom: 0.8rem;
            display: flex;
            gap: 0.4rem;
          }
          input {
            flex: 1;
            padding: 0.4rem;
          }
          button {
            padding: 0.4rem 0.8rem;
          }
          .link-item {
            margin: 0.4rem 0;
          }
          a {
            color: #0070f3;
            text-decoration: none;
          }
        </style>
        <form id="linkForm">
          <input type="text" id="name" placeholder="Name" required />
          <input type="url" id="url" placeholder="https://example.com" required />
          <button type="submit">Add</button>
        </form>
        <div id="linkList">Loading...</div>
      `;
    }
  }
  
  customElements.define('custom-links-widget', CustomLinksWidget);