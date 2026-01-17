import { loadImages } from '../utils/loadImages'

// Vite magic ✨
const flatsImages = import.meta.glob('../assets/projects/flats/*.{jpg,jpeg,png}', {
  eager: true,
})

const interiorImages = import.meta.glob('../assets/projects/interior/*.{jpg,jpeg,png}', {
  eager: true,
})

const marriageImages = import.meta.glob('../assets/projects/marriage-hall/*.{jpg,jpeg,png}', {
  eager: true,
})

const shopImages = import.meta.glob('../assets/projects/shop/*.{jpg,jpeg,png}', {
  eager: true,
})

export const PROJECTS = {
  flats: loadImages(flatsImages),
  interior: loadImages(interiorImages),
  marriage: loadImages(marriageImages),
  shop: loadImages(shopImages),
}
