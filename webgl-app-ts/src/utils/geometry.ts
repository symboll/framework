import * as THREE from 'three'
import { ICube, IPlane, ISphere } from "../interface"


export class Geometry {
  cube: THREE.Mesh | null = null
  sphere: THREE.Mesh  | null = null

  plane: THREE.Mesh | null = null
  constructor () {}

  initCubeGeomery ({ size, color, position }: ICube) {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(...size),
      new THREE.MeshLambertMaterial({ color })
    )
    this.cube.position.set(...position)
    this.cube.castShadow = true
  }

  initSphereGeomery ({ size, color, position }: ISphere) {
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(...size),
      new THREE.MeshLambertMaterial({ color })
    )
    this.sphere.position.set(...position)
    this.sphere.castShadow = true
  }

  initPlaneGeomery ({ size, color, position }: IPlane) {
    this.plane = new THREE.Mesh(
      new THREE.PlaneGeometry(...size),
      new THREE.MeshLambertMaterial({ color })
    )
    this.plane.rotation.x = -0.5 * Math.PI
    this.plane.position.set(...position)
    this.plane.receiveShadow = true
  }
}