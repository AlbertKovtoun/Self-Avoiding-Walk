import * as THREE from "three"
// import { Line2 } from "three/examples/jsm/lines/Line2"
// import { LineGeometry } from "three/examples/jsm/lines/LineGeometry"
// import { LineMaterial } from "three/examples/jsm/lines/LineMaterial"
// import * as GeometryUtils from "three/examples/jsm/utils/GeometryUtils"

import walkerVertexShader from "../../shaders/walker/vertex.glsl"
import walkerFragmentShader from "../../shaders/walker/fragment.glsl"

import { scene } from "./Experience"

export class Walker {
  constructor(
    walkerStartPositionPoint1,
    walkerStartPositionPoint2,
    walkerStep,
    walkerColor
  ) {
    this.walker
    this.borderLimit = 5

    this.walkerStartPositionPoint1 = walkerStartPositionPoint1
    this.walkerStartPositionPoint2 = walkerStartPositionPoint2
    this.walkerStep = walkerStep
    this.walkerColor = walkerColor

    this.setWalker()
    this.walk()
  }

  setWalker() {
    this.walkerPoints = []
    this.walkerPoints.push(this.walkerStartPositionPoint1)
    this.walkerPoints.push(this.walkerStartPositionPoint2)

    this.walkerMaterial = new THREE.LineBasicMaterial({
      color: this.walkerColor,
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
      lastPosition.y + this.walkerStep,
      lastPosition.z
    )

    this.checkBorderCollision(nextPosition)

    if (
      this.checkSelfCollision(nextPosition) ||
      this.checkBorderCollision(nextPosition)
    ) {
      console.log("Collision!!!")
    } else {
      this.walkerPoints.push(nextPosition)
    }
  }

  walkDown() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x,
      lastPosition.y - this.walkerStep,
      lastPosition.z
    )

    this.checkBorderCollision(nextPosition)

    if (
      this.checkSelfCollision(nextPosition) ||
      this.checkBorderCollision(nextPosition)
    ) {
      console.log("Collision!!!")
    } else {
      this.walkerPoints.push(nextPosition)
    }
  }

  walkLeft() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x - this.walkerStep,
      lastPosition.y,
      lastPosition.z
    )

    this.checkBorderCollision(nextPosition)

    if (
      this.checkSelfCollision(nextPosition) ||
      this.checkBorderCollision(nextPosition)
    ) {
      console.log("Collision!!!")
    } else {
      this.walkerPoints.push(nextPosition)
    }
  }

  walkRight() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x + this.walkerStep,
      lastPosition.y,
      lastPosition.z
    )

    this.checkBorderCollision(nextPosition)

    if (
      this.checkSelfCollision(nextPosition) ||
      this.checkBorderCollision(nextPosition)
    ) {
      console.log("Collision!!!")
    } else {
      this.walkerPoints.push(nextPosition)
    }
  }

  walkForward() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x,
      lastPosition.y,
      lastPosition.z - this.walkerStep
    )

    this.checkBorderCollision(nextPosition)

    if (
      this.checkSelfCollision(nextPosition) ||
      this.checkBorderCollision(nextPosition)
    ) {
      console.log("Collision!!!")
    } else {
      this.walkerPoints.push(nextPosition)
    }
  }

  walkBackward() {
    //Get last element in array
    let lastPosition = this.walkerPoints.at(-1)

    //Set next position
    let nextPosition = new THREE.Vector3(
      lastPosition.x,
      lastPosition.y,
      lastPosition.z + this.walkerStep
    )

    this.checkBorderCollision(nextPosition)

    if (
      this.checkSelfCollision(nextPosition) ||
      this.checkBorderCollision(nextPosition)
    ) {
      console.log("Collision!!!")
    } else {
      this.walkerPoints.push(nextPosition)
    }
  }

  setRandomDirection() {
    this.randomDirection = Math.round(Math.random() * 5)
  }

  checkSelfCollision(nextPosition) {
    for (let i = 0; i < this.walkerPoints.length; i++) {
      if (this.walkerPoints[i].equals(nextPosition)) {
        return true
      }
    }
  }

  checkBorderCollision(nextPosition) {
    if (
      nextPosition.x < -this.borderLimit ||
      nextPosition.x > this.borderLimit ||
      nextPosition.y < -this.borderLimit ||
      nextPosition.y > this.borderLimit ||
      nextPosition.z < -this.borderLimit ||
      nextPosition.z > this.borderLimit
    ) {
      return true
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
        case 4:
          this.walkForward()
          break
        case 5:
          this.walkBackward()
          break
      }

      this.walkerGeometry.setFromPoints(this.walkerPoints)
    }, 50)
  }
}
