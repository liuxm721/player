import videojs from 'video.js'

let Component = videojs.getComponent('Component')

export class VideoTitle extends Component {
  constructor(player, options) {
    super(player, options)
  }
  createEl () {
    return super.createEl('div', { innerHTML: '标题', className: 'vjs-control-bar vjs-title' })
  }
  setVideoTitle (title) {
    videojs.dom.textContent(this.el(), title)
  }
}

videojs.registerComponent('VideoTitle', VideoTitle)


