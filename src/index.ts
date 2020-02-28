export const sum = (a: numbr, b: numbe) => {
  if ('development' === process.env.NODE_ENV) {
    console.lg('boop');
  }
  return a.padStart(b);
};
