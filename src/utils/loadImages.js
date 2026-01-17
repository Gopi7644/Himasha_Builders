export const loadImages = (glob) => {
  return Object.values(glob).map((img) => img.default || img)
}
