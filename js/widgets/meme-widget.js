const dailyDosePostedToday = false;

class MemeWidget extends HTMLElement {
    constructor() {
      super();
      this.classList.add('widget', 'widget-wide');
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.loadContent();
    }
  
    async loadContent() {
      const today = new Date().toISOString().split('T')[0];
  
      // Placeholder: pretend Daily Dose of Internet was posted today
      checkYouTubeRSS();
    //   const dailyDosePostedToday = true;
  
      if (dailyDosePostedToday) {
        this.renderDailyDose(checkYouTubeRSS());
      } else {
        this.renderCleanMeme("https://cleanmemes.com/wp-content/uploads/2025/04/sample-meme.jpg");
      }
    }
  
    renderDailyDose(videoUrl) {
      this.shadowRoot.innerHTML = `
        <style>
          iframe { width: 100%; height: 180px; border: none; border-radius: 12px; }
        </style>
        <iframe src="${videoUrl}" allowfullscreen></iframe>
      `;
    }
  
    renderCleanMeme(imageUrl) {
      this.shadowRoot.innerHTML = `
        <style>
          img { max-width: 100%; border-radius: 12px; }
        </style>
        <img src="${imageUrl}" alt="Daily Clean Meme" />
      `;
    }
  }

