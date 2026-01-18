export const loadImages = (modules) => {
  const images = [];

  for (const path in modules) {
    const module = modules[path];

    // Extract image URL from Vite's eager glob import
    if (module?.default) {
      images.push(module.default);
    } else if (typeof module === "string") {
      images.push(module);
    }
  }

  return images.sort((a, b) => a.localeCompare(b));
};
