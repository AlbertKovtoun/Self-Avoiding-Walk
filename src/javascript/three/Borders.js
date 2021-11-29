import * as THREE from "three"
import { scene } from "./Experience"

export class Borders {
  constructor() {
    // this.borderPoints = new Float32Array()
    this.borderVerticesCopy

    this.setBorders()
  }

  setBorders() {
    this.borderGeometry = new THREE.BoxBufferGeometry(10, 10, 10, 1, 1, 1)

    this.borderMaterial = new THREE.MeshBasicMaterial({
      color: "black",
      wireframe: true,
    })
    this.borders = new THREE.Mesh(this.borderGeometry, this.borderMaterial)
    scene.add(this.borders)

    this.borderPositionAttribute = this.borderGeometry.getAttribute("position")

    this.borderVertices = new THREE.Vector3()

    for (let i = 0; i < this.borderPositionAttribute.count; i++) {
      this.borderVertices.fromBufferAttribute(this.borderPositionAttribute, i)
    }

    console.log(this.borderPoints)
  }
}
