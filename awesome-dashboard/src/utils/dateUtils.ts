// Utility: Returns the day of the week as a string
export function getDayOfWeek(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

// Utility: Returns current time formatted as HH:MM AM/PM
export function getFormattedTime(date: Date = new Date()): string {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Utility: Returns "Happy <Holiday>" if today matches a known US holiday
export function getHolidayMessage(date: Date = new Date()): string | null {
  const month = date.getMonth(); // 0-indexed
  const day = date.getDate();
  const dayOfWeek = date.getDay(); // 0 = Sunday

  // Easter (simple approximation — real date varies)
  if (month === 3 && day >= 22 && day <= 25 && dayOfWeek === 0) {
    return 'Happy Easter!';
  }

  // Thanksgiving (4th Thursday of November)
  if (month === 10 && day >= 22 && day <= 28 && dayOfWeek === 4) {
    return 'Happy Thanksgiving!';
  }

  // Christmas
  if (month === 11 && day === 25) {
    return 'Merry Christmas!';
  }

  return null;
}

// Placeholder: Would be replaced by actual API check
export function isFlagAtHalfMast(date: Date = new Date()): { halfMast: boolean; reason?: string } {
  // Temporary use just to avoid the warning
  const isoDate = date.toISOString().split('T')[0];

  return {
    halfMast: false,
    reason: `Checked for ${isoDate} (no data available yet)`,
  };
}