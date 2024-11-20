interface IPluralVariants {
  one: string;
  other: string;
  [key: string]: string;
}

export default function plural(
  value: number,
  variants: IPluralVariants,
  locale = 'en-EN'
): string {
  const key = new Intl.PluralRules(locale).select(value);
  return variants[key] || '';
}
