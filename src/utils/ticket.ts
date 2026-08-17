export function slugify(value: string): string {
  const first = value.toLowerCase().trim().split(/\s+/)[0] || '';

  return first.replace(/[^a-z0-9]/g, '') || 'ticket';
}

export function formatDate(date: string): string {
  if (!date) return '';

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return '';
  }

  return parsedDate
    .toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
    .toUpperCase()
    .replace(',', '');
}
export function generateTicketId(): string {
  const number = Math.floor(1000 + Math.random() * 9000);

  return `TS-${number}`;
}
