import * as THREE from "three"
import { Camera } from "./Camera"
import { Renderer } from "./Renderer"
import { Sizes } from "./Sizes"
import { Walker } from "./Walker"

export const canvas = document.querySelector("canvas.webgl")

export const scene = new THREE.Scene()

// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(2, 1, 1, 1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
// )
// cube.position.set(0, 0, 0)
// scene.add(cube)

const gridHelper = new THREE.GridHelper(10, 10)
scene.add(gridHelper)

export const walker = new Walker()

export const sizes = new Sizes()

export const camera = new Camera()

export const renderer = new Renderer()

//Animate
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Update controls
  camera.controls.update()

  // Render
  renderer.renderer.render(scene, camera.camera)

  setTimeout(() => {
    window.requestAnimationFrame(tick)
  }, 1000 / 60)
}

tick()
