import * as THREE from "three"
import Stats from "stats.js"
import { Camera } from "./Camera"
import { Renderer } from "./Renderer"
import { Sizes } from "./Sizes"
import { Walker } from "./Walker"
import { Borders } from "./Borders"

const stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

export const canvas = document.querySelector("canvas.webgl")

export const scene = new THREE.Scene()

// const gridHelper = new THREE.GridHelper(10, 10)
// scene.add(gridHelper)

export const borders = new Borders()

const walker1 = new Walker(
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, 0.2),
  0.2,
  "red"
)

const walker2 = new Walker(
  new THREE.Vector3(-3, 3, 4),
  new THREE.Vector3(-3, 3, 4.2),
  0.2,
  "purple"
)

const walker3 = new Walker(
  new THREE.Vector3(-3, 3, -4),
  new THREE.Vector3(-3, 3, -4.2),
  0.2,
  "pink"
)

const walker4 = new Walker(
  new THREE.Vector3(4, -1, -4),
  new THREE.Vector3(4, -1, -4.2),
  0.2,
  "blue"
)

const walker5 = new Walker(
  new THREE.Vector3(3, 3, 4),
  new THREE.Vector3(3, 3, 4.2),
  0.2,
  "cyan"
)

export const sizes = new Sizes()

export const camera = new Camera()

export const renderer = new Renderer()

//Animate
const clock = new THREE.Clock()

const tick = () => {
  stats.begin()

  const elapsedTime = clock.getElapsedTime()

  // walker.walk()

  // Update controls
  camera.controls.update()

  // Render
  renderer.renderer.render(scene, camera.camera)

  setTimeout(() => {
    window.requestAnimationFrame(tick)
  }, 1000 / 60)

  stats.end()
}

tick()
