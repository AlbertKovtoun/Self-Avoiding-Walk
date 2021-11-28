import * as THREE from "three"
import { Line2 } from "three/examples/jsm/lines/Line2"
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry"
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial"
import * as GeometryUtils from "three/examples/jsm/utils/GeometryUtils"

import { scene } from "./Experience"

export class Walker {
  constructor() {
    this.setWalker()
  }

  setWalker() {
    this.walkerPoints = []
    this.walkerPoints.push(new THREE.Vector3(0, 0, 0))
    this.walkerPoints.push(new THREE.Vector3(0, 1, 0))
    this.walkerPoints.push(new THREE.Vector3(0, 1, 2))
    this.walkerGeometry = new LineGeometry()
    this.walkerGeometry.setPositions(this.walkerPoints)
    //?this.walkerGeometry.setColors(colors)

    this.walkerMaterial = new LineMaterial({
      color: 0xff0000,
      linewidth: 15,
      // vertexColors: true,
      //? resolution: new THREE.Vector2(640, 480),
      // dashed: true,
      // alphaToCoverage: true,
    })

    this.walkerMaterial.resolution.set(window.innerWidth, window.innerHeight)
    this.walker = new Line2(this.walkerGeometry, this.walkerMaterial)
    this.walker.computeLineDistances()
    this.walker.scale.set(1, 1, 1)
    scene.add(this.walker)
  }
}
