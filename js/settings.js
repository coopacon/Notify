const DEFAULT_SETTINGS = {
    'custom-clock': { visible: true, size: 'small' },
    'holiday-widget': { visible: true, size: 'small' },
    'weather-widget': { visible: true, size: 'wide' },
    'news-widget': { visible: true, size: 'large' },
    'flag-widget': { visible: true, size: 'small' },
    'meme-widget': { visible: true, size: 'wide' },
    'verse-widget': { visible: true, size: 'small' },
    'calendar-widget': { visible: true, size: 'wide' },
    'spotify-widget': { visible: true, size: 'wide' },
    'meals-widget': { visible: false, size: 'wide' },
    'links-widget': { visible: true, size: 'wide' }
  };
  
  const STORAGE_KEY = 'widgetSettings';
  
  export function getSettings() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : structuredClone(DEFAULT_SETTINGS);
  }
  
  export function saveSettings(settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }
  
  export function applyWidgetSettings() {
    const settings = getSettings();
  
    Object.entries(settings).forEach(([tagName, { visible, size }]) => {
      const el = document.querySelector(tagName);
      if (!el) return;
  
      el.classList.remove('widget-small', 'widget-wide', 'widget-tall', 'widget-large');
      el.classList.add('widget', `widget-${size}`);
  
      el.style.display = visible ? '' : 'none';
    });
  }
  
  export function updateSetting(tagName, newConfig) {
    const settings = getSettings();
    settings[tagName] = { ...settings[tagName], ...newConfig };
    saveSettings(settings);
    applyWidgetSettings();
  }