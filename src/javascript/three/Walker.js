import * as THREE from "three";

import { scene } from "./Experience";

export class Walker {
  constructor() {
    this.setWalker();
  }

  setWalker() {
    //Try with cilinders??
    this.walkerMaterial = new THREE.LineBasicMaterial({
      color: 0xff0000,
      linewidth: 10,
      linecap: "round",
      linejoin: "round",
    });

    this.walkerPoints = [];
    this.walkerPoints.push(new THREE.Vector3(0, 0, 0));
    this.walkerPoints.push(new THREE.Vector3(0, 1, 0));

    this.walkerGeometry = new THREE.BufferGeometry().setFromPoints(
      this.walkerPoints
    );

    this.walker = new THREE.Line(this.walkerGeometry, this.walkerMaterial);
    scene.add(this.walker);
  }
}
