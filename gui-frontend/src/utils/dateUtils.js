// dateUtils.js
export const formatIsoDate = (isoString) => {
  if (!isoString) return '';
  
  const date = new Date(isoString);

  // Extract parts using UTC to keep time consistent
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'IST' });
  const day = date.getDate();

  // Format hours and AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = String(hours % 12 || 12).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${ampm} on ${year}, ${month} ${day}`;
};
