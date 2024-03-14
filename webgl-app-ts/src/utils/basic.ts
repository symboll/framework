
import * as THREE from 'three'
import Stats from 'stats-js'
import { Options } from '../interface'

export class Basic {
  width = window.innerWidth
  height = window.innerHeight

  scene: THREE.Scene = new THREE.Scene()
  camera: THREE.PerspectiveCamera | null = null
  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()

  stats = new Stats()

  constructor(
    public options: Partial<Options>
  ) { 
    console.log(this.width, this.height)
  }

  /**
   * lifeCycle
   * @param options 
   */
  init (){
    this.sceneInit()
    this.cameraInit()
    this.rendererInit()
    if(this.options.stats){
      this.statsInit()
    }
    window.addEventListener('resize', this.globalResize.bind(this))
  }

  mounted () {
    if (this.options.stats){
      document.body.appendChild(this.stats.domElement)
    }
    document.body.appendChild(this.renderer.domElement)
  } 

  desctory () {
    window.removeEventListener('resize', this.globalResize.bind(this))
  }


  /**
   * methods
   */
  globalResize () {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.renderer.setSize(this.width, this.height)
    this.camera!.aspect = this.width / this.height
    this.camera!.updateProjectionMatrix()
  }

  statsInit() {
    this.stats.setMode(0)
  }

  // guiInit () {}

  /**
   * 场景
   */
  sceneInit () {
    // 坐标轴
    if (this.options.axes) {
      this.scene.add(new THREE.AxesHelper(20))
    }

    // 网格平面
    if (this.options.grid){
      this.scene.add(new THREE.GridHelper(100, 30, 0x2c2c2c, 0x888888))
    }
  }
  /**
   * 相机
   */
  cameraInit (){
    const { lookAt=[0, 0, 0], position = [-30, 40, 30] } = this.options
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
    this.camera.position.set(...position)
    this.camera.lookAt(new THREE.Vector3(...lookAt))
  }

  /**
   * 渲染器
   */
  rendererInit () {
    const color = this.options.color || 0xEEEEEE
    this.renderer.setClearColor(new THREE.Color(color))
    this.renderer.setSize(this.width, this.height)

    // 生成阴影
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
  }

  renderScene () {
    this.stats.update()
    this.renderer.render(this.scene, this.camera!)
    requestAnimationFrame(this.renderScene.bind(this))
  }
}