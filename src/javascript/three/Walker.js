import { wrap } from "gsap/all"
import * as THREE from "three"
import { Line2 } from "three/examples/jsm/lines/Line2"
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry"
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial"
import * as GeometryUtils from "three/examples/jsm/utils/GeometryUtils"

import { scene } from "./Experience"

export class Walker {
  constructor() {
    this.walker
    this.i = 0

    this.setWalker()
    this.walk()
  }

  setWalker() {
    //?DUNNO
    // // this.colors = [new THREE.Vector3(1, 0, 0)]

    // this.walkerPoints = []
    // this.walkerPoints.push(new THREE.Vector3(0, 0, 0))
    // this.walkerPoints.push(new THREE.Vector3(0, 1, 0))
    // this.walkerPoints.push(new THREE.Vector3(0, 1, 2))

    // this.walkerGeometry = new LineGeometry()
    // this.walkerGeometry.setPositions(this.walkerPoints)
    // // this.walkerGeometry.setColors()

    // this.walkerMaterial = new LineMaterial({
    //   color: 0xff0000,
    //   linewidth: 15,
    //   // vertexColors: true,
    //   // resolution: new THREE.Vector2(640, 480),
    //   // dashed: true,
    //   // alphaToCoverage: true,
    // })

    // this.walkerMaterial.resolution.set(window.innerWidth, window.innerHeight)
    // this.walker = new Line2(this.walkerGeometry, this.walkerMaterial)
    // this.walker.computeLineDistances()
    // this.walker.scale.set(1, 1, 1)
    // scene.add(this.walker)
    // console.log(this.walkerMaterial)

    this.walkerPoints = []
    this.walkerPoints.push(new THREE.Vector3(0, 0, 0))
    this.walkerPoints.push(new THREE.Vector3(0, 0, -1))

    this.walkerMaterial = new THREE.LineBasicMaterial({
      color: 0xff0000,
    })

    this.walkerGeometry = new THREE.BufferGeometry().setFromPoints(
      this.walkerPoints
    )

    this.walker = new THREE.Line(this.walkerGeometry, this.walkerMaterial)
    scene.add(this.walker)
  }

  walkUp() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x,
      lastPosition.y,
      lastPosition.z - 1
    )

    if (this.checkCollision(nextPosition)) {
      console.log("Collision!!!")
    }

    this.walkerPoints.push(nextPosition)
  }

  walkDown() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x,
      lastPosition.y,
      lastPosition.z + 1
    )

    if (this.checkCollision(nextPosition)) {
      console.log("Collision!!!")
    }

    this.walkerPoints.push(nextPosition)
  }

  walkLeft() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x - 1,
      lastPosition.y,
      lastPosition.z
    )

    if (this.checkCollision(nextPosition)) {
      console.log("Collision!!!")
    }

    this.walkerPoints.push(nextPosition)
  }

  walkRight() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x + 1,
      lastPosition.y,
      lastPosition.z
    )

    if (this.checkCollision(nextPosition)) {
      console.log("Collision!!!")
    }

    this.walkerPoints.push(nextPosition)
  }

  setRandomDirection() {
    this.randomDirection = Math.round(Math.random() * 3)
  }

  checkCollision(nextPosition) {
    for (let i = 0; i < this.walkerPoints.length; i++) {
      if (this.walkerPoints[i].equals(nextPosition)) {
        // console.log("COLLISION")
        return true
      }
    }
  }

  walk() {
    setInterval(() => {
      this.setRandomDirection()

      switch (this.randomDirection) {
        case 0:
          this.walkUp()
          break
        case 1:
          this.walkRight()
          break
        case 2:
          this.walkDown()
          break
        case 3:
          this.walkLeft()
          break
      }

      this.walkerGeometry.setFromPoints(this.walkerPoints)
    }, 1000)
  }
}
