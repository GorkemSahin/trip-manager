export const verbalDate = (date) => (
  new Date(date).toLocaleString('en-GB', { month: 'short', day: 'numeric' })
);

export const numericDate = (date) => (
  new Date(date).toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' })
);
