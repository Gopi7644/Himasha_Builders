// example – आप इसी pattern से बाकी images add करें

import f1 from '../assets/projects/flats/1.jpg'
import f2 from '../assets/projects/flats/2.jpg'

import i1 from '../assets/projects/interior/1.jpg'
import i2 from '../assets/projects/interior/2.jpg'

export const PROJECTS = {
  flats: [f1, f2, ...97],
  interior: [i1, i2, ...155],
  marriage: [m1, m2, ...155],
  shop: [s1, s2, ...155],
  shop: [/* 15 images */],
}
