import { CanvasInfo, initializeCanvas } from 'Canvas/index'

import { animationDemo } from './animationDemo'
import { ellipseDemo } from './ellipseDemo'
import { lineDemo } from './lineDemo'

enum Scene {
  StaticDemo,
  AnimationDemo,
}

let scene: Scene = Scene.StaticDemo

function drawScene(ci: CanvasInfo): void {
  switch (scene) {
    case Scene.StaticDemo:
      lineDemo(ci)
      ellipseDemo(ci)
      break
    case Scene.AnimationDemo:
      animationDemo(ci)
      break
    default:
      console.error('Unknown demo')
  }
}

function demo() {
  const ci = initializeCanvas('canvas', drawScene)
  ci.showDebugBox()

  document.getElementById('static-demo')?.addEventListener('click', () => {
    if (scene !== Scene.StaticDemo) {
      scene = Scene.StaticDemo
      ci.stopLoop()
      ci.redraw()
    }
  })

  document.getElementById('animation-demo')?.addEventListener('click', () => {
    if (scene !== Scene.AnimationDemo) {
      scene = Scene.AnimationDemo
      ci.startLoop()
    }
  })
}

export { demo }
