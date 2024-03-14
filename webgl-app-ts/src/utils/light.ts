import * as THREE from 'three'
import { ISpotLight } from '../interface';

export class Light {
  
  spotLight: THREE.SpotLight | null = null
  spotLightHelper: THREE.SpotLightHelper | null = null
  ambientLigt: THREE.AmbientLight | null = null
  pointLight: THREE.PointLight | null = null

  constructor (){

  }

  initSpotLight ({color, position, intensity }: ISpotLight) {
    this.spotLight = new THREE.SpotLight(color, intensity);
    this.spotLight.position.set(...position)   
    this.spotLight.castShadow = true
    // this.spotLight.shadow.camera.near = 10;
    // this.spotLight.shadow.camera.far = 100;
    this.spotLight.shadow.mapSize.width = 4096
    this.spotLight.shadow.mapSize.height = 4096
    this.spotLightHelper = new THREE.SpotLightHelper(this.spotLight, 0xff0000);
  }

  initAmbientLight () {
    this.ambientLigt = new THREE.AmbientLight(0xffffff)
  }
   
  initPointLight () {
    this.pointLight =  new THREE.PointLight(0xffffff, 1);
    this.pointLight.position.set(-40, 60, -10);
  }

}