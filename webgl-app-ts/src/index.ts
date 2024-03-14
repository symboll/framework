import * as dat from 'dat.gui'

import { Basic, Geometry, Light } from './utils'

import { Controls } from './controls'
import { Options } from './interface'
import './style/index.css'


class Home extends Basic {
  step = 0
  controls = new Controls()

  constructor (
    options: Partial<Options>,
    private light: Light,
    private geometry: Geometry
  ){
    super(options)
  }

  init () {
    super.init()
    this.guiInit()
    this.renderScene()
  }

  sceneInit(): void {
    super.sceneInit()

    if(this.options.spotLight){
      this.light.initSpotLight(this.options.spotLight)
      this.scene.add(this.light.spotLight!)
      this.scene.add(this.light.spotLightHelper!)
    }

    if (this.options.plane){
      this.geometry.initPlaneGeomery(this.options.plane)
      this.scene.add(this.geometry.plane!)
    }

    if (this.options.cube){
      this.geometry.initCubeGeomery(this.options.cube)
      this.scene.add(this.geometry.cube!)
    }

    if (this.options.sphere){
      this.geometry.initSphereGeomery(this.options.sphere)
      this.scene.add(this.geometry.sphere!)
    }
  }


  guiInit(): void {
    let gui = new dat.GUI()
    gui.add(this.controls, 'rotationSpeed', 0, 0.5)
    gui.add(this.controls, 'bouncingSpeed', 0, 0.5)
  }

  renderScene(): void {
    const { controls } = this
    if (this.options.cube){
      this.geometry.cube!.rotation.x += controls.rotationSpeed
      this.geometry.cube!.rotation.y += controls.rotationSpeed
      this.geometry.cube!.rotation.z += controls.rotationSpeed
    }

    if (this.options.sphere){
      this.step += controls.bouncingSpeed
      this.geometry.sphere!.position.set(
        20 +(10 * Math.cos(this.step)),
        2 + (10 * Math.abs(Math.sin(this.step))),
        2
      )
    }
    super.renderScene()
  }
}

const light = new Light()
const geometry = new Geometry()

const home = new Home({
    axes: true,
    // grid: true,
    stats: true,
    // 灯光
    spotLight: {
      color: 0xffffff,
      intensity: 10000,
      position: [-40, 60, -10]
    },
    // 平面
    plane: {
      color: 0xffffff,
      size: [60, 20, 60, 20], 
      position: [15, 0, 0], 
    },
    // 小球
    sphere: {
      color: 0x7777ff,
      size: [4, 20, 20],
      position: [20, 4, 2] 
    },
    cube: {
      color: 0xff0000,
      size: [2,2,2,4,4,4],
      position: [-4, 3, 0]
    }
  },
  light,
  geometry
)

home.init()
home.mounted()

