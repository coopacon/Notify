class SpotifyWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-wide');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      // Simulated content
      const topPick = {
        title: "Today's Top Recommendation",
        link: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
        image: "https://i.scdn.co/image/ab67706f000000020d9c5c7b7e5415a8dc76b5d4"
      };
  
      const dailyMix = {
        title: "Daily Mix 1",
        link: "https://open.spotify.com/playlist/37i9dQZF1E35ryQY7fyqfz",
        image: "https://i.scdn.co/image/ab67706f0000000233f0a84c676ddde3d97b4eb0"
      };
  
      this.shadowRoot.innerHTML = `
        <style>
          .spotify-container {
            display: flex;
            gap: 1rem;
            flex-direction: column;
          }
          .spotify-card {
            display: flex;
            gap: 0.8rem;
            align-items: center;
            background: #121212;
            color: #fff;
            padding: 0.6rem;
            border-radius: 12px;
          }
          img {
            width: 60px;
            height: 60px;
            border-radius: 8px;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          .label {
            font-size: 0.85rem;
          }
        </style>
        <div class="spotify-container">
          <a href="${topPick.link}" target="_blank" class="spotify-card">
            <img src="${topPick.image}" alt="Top Pick" />
            <div>
              <div class="label">Top Spotify Pick</div>
              <div><strong>${topPick.title}</strong></div>
            </div>
          </a>
          <a href="${dailyMix.link}" target="_blank" class="spotify-card">
            <img src="${dailyMix.image}" alt="Daily Mix" />
            <div>
              <div class="label">Your Daily Mix</div>
              <div><strong>${dailyMix.title}</strong></div>
            </div>
          </a>
        </div>
      `;
    }
  }
  
  customElements.define('spotify-widget', SpotifyWidget);