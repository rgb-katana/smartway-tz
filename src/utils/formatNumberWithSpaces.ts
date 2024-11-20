export function formatNumberWithSpaces(num: number): string {
  try {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } catch {
    throw new Error('Эту функцию нужно использовать только с числами');
  }
}
