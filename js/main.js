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
import { applyWidgetSettings } from './settings.js';

// After onboarding logic
if (!firstVisit) {
  applyWidgetSettings(); // Apply user widget visibility + sizing
}

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app-root');
  const onboardingContainer = document.getElementById('onboarding-container');

  const firstVisit = !localStorage.getItem('onboardingComplete');
  if (firstVisit) {
    // Simple onboarding sequence
    onboardingContainer.innerHTML = `
      <div class="onboarding-step">Welcome! <button id="skip-btn">Skip</button></div>
      <!-- Add animated steps here -->
    `;
    document.getElementById('skip-btn').addEventListener('click', () => {
      localStorage.setItem('onboardingComplete', 'true');
      onboardingContainer.remove();
      appRoot.classList.remove('hidden');
    });
  } else {
    onboardingContainer.remove();
    appRoot.classList.remove('hidden');
  }
});

