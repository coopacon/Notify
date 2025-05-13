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

const axios = require('axios');
const xml2js = require('xml2js');

async function checkYouTubeRSS() {
    const rssURL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCdC0An4ZPNr_YiFiYoVbwaw';
    const res = await axios.get(rssURL);
    const xml = res.data;

    const publishedMatch = xml.match(/<published>(.*?)<\/published>/);
    if (publishedMatch) {
        const publishedDate = new Date(publishedMatch[1]);
        const now = new Date();
        if (
            publishedDate.getDate() === now.getDate() &&
            publishedDate.getMonth() === now.getMonth() &&
            publishedDate.getFullYear() === now.getFullYear()
        ) {
            dailyDosePostedToday = true;
        }
    }

    console.log("Posted today?", dailyDosePostedToday);
}
async function getLatestVideoUrl() {
    try {
        const res = await axios.get(rssUrl);
        const parsed = await xml2js.parseStringPromise(res.data);

        const latestEntry = parsed.feed.entry[0]; // Most recent video
        const videoUrl = latestEntry.link[0].$.href;

        console.log("Latest video URL:", videoUrl);
        return videoUrl;
    } catch (err) {
        console.error("Error fetching RSS feed:", err.message);
    }
}


  
  customElements.define('meme-widget', MemeWidget);