import './widgets/clock-widget.js';
import './widgets/holiday-widget.js';
import './widgets/weather-widget.js';
import './widgets/calendar-widget.js';
import './widgets/flag-widget.js';
import './widgets/links-widget.js';
import './widgets/meals-widget.js';
import './widgets/meme-widget.js';
import './widgets/news-widget.js';
import './widgets/spotify-widget.js';
import './widgets/verse-widget.js';
import './widgets/settings-widget.js';
import { applyWidgetSettings } from './settings.js';

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app-root');
  const onboardingContainer = document.getElementById('onboarding-container');

  const firstVisit = !localStorage.getItem('onboardingComplete');
  const hasLocation = !!localStorage.getItem('userLocation');

  if (firstVisit || !hasLocation) {
    // Show simple onboarding location prompt
    onboardingContainer.innerHTML = `
      <div class="onboarding-step">
        <p>Welcome! Where are you located?</p>
        <input type="text" id="user-location-input" placeholder="e.g. Texas, California" />
        <div style="margin-top: 0.5rem;">
          <button id="continue-btn">Continue</button>
          <button id="skip-btn">Skip</button>
        </div>
      </div>
    `;

    document.getElementById('continue-btn').addEventListener('click', () => {
      const loc = document.getElementById('user-location-input').value.trim();
      if (loc) {
        localStorage.setItem('userLocation', loc);
      }
      localStorage.setItem('onboardingComplete', 'true');
      onboardingContainer.remove();
      appRoot.classList.remove('hidden');
      applyWidgetSettings();
    });

    document.getElementById('skip-btn').addEventListener('click', () => {
      localStorage.setItem('onboardingComplete', 'true');
      onboardingContainer.remove();
      appRoot.classList.remove('hidden');
      applyWidgetSettings();
    });
  } else {
    onboardingContainer.remove();
    appRoot.classList.remove('hidden');
    applyWidgetSettings();
  }
});