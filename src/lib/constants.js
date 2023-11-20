export const COLORS = {
  DarkSlateGrey: 'var(--color-dark-slate-grey)',
  Charcoal: 'var(--color-charcoal)',
  Grey: 'var(--color-grey)',
  White: 'var(--color-white)',
  Tomato: 'var(--color-tomato)',
};

const SIZES = {
  tablet: 500,
  desktop: 1440,
};

export const QUERIES = {
  tabletAndUp: `@media (min-width: ${SIZES.tablet / 16}rem)`,
  desktopAndUp: `@medial (min-with: ${SIZES.desktop / 16}rem)`,
};
