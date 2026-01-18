export const loadImages = (glob) => {
  return Object.values(glob)
    .filter(Boolean)
    .map((img) => (typeof img === "string" ? img : img.default));
};
