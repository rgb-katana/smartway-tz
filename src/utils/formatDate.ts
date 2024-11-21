export function formatDate(date: string | Date): string {
  // Здесь просто захардкодил de-DE чтобы макету соответсовало,
  // а так лучше бы нужно было бы локаль передавать)
  const formatter = new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formatter.format(new Date(date));
}
