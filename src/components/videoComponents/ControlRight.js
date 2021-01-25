import videojs from 'video.js'

let Component = videojs.getComponent('Component')

export class ControlRight extends Component {
  constructor(player, options) {
    super(player, options)
    this.initComponent()
  }
  createEl () {
    return super.createEl('div', { className: 'vjs-control-right' })
  }
  initComponent () {
    this.addChild('PlaybackRateMenuButton', { playbackRates: [0.5, 1, 1.5, 2] }).addClass('vjs-show')
    this.addChild('PictureInPictureToggle')
    this.addChild('FullscreenToggle')
  }
}

videojs.registerComponent('ControlRight', ControlRight)


