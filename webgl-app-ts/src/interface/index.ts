export interface ISpotLight {
  color: number,
  /**
   * 光照强度
   */
  intensity: number,
  position: [number, number, number],
}

export interface IPlane {
  color: number,
  size: [number, number, number, number],
  position: [number, number, number]
}

export interface ICube {
  color: number,
  size: [number, number, number, number, number, number],
  position: [number, number, number]
}
export interface ISphere  {
  color: number,
  size: [number, number, number],
  position: [number, number, number]
}

export interface Options {
  /**
   * 是否加载坐标轴
   */
  axes: boolean,
  /**
   * 是否加载网格平面
   */
  grid: boolean,

  /**
   * 是否加载 Stats
   */
  stats: boolean,
  
  /**
   * 相机位置
   */
  position: [number, number, number],

  /**
   * 相机焦点
   */
  lookAt: [number, number, number],

  /**
   * 渲染器背景色
   */
  color: number,


  cube: ICube,

  sphere: ISphere,

  spotLight: ISpotLight,

  plane: IPlane
} 