const currencyToLocale: { [key: string]: string } = {
  'pt-BR': 'BRL',
  'en-US': 'USD',
};

export function getGender(gender: number) {
  if (gender === 0) return 'Not known';
  if (gender === 1) return 'Male';
  if (gender === 2) return 'Female';
}

// Ref: https://stackoverflow.com/a/35051341
export function formatAsCurrency(value: number, locale: string) {
  const currency: string = currencyToLocale[locale];

  return value.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  });
}
