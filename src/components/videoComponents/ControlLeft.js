import videojs from 'video.js'

let Component = videojs.getComponent('Component')

export class ControlLeft extends Component {
  constructor(player, options) {
    super(player, options)
    this.initComponent()
  }
  createEl () {
    return super.createEl('div', { className: 'vjs-control-left' })
  }
  initComponent () {
    this.addChild('PlayToggle')
    this.addChild('VolumePanel', { inline: false })
    this.addChild("CurrentTimeDisplay")
    this.addChild("TimeDivider")
    this.addChild("DurationDisplay")
  }
  showTime () {
    this.getChild('PlayToggle').addClass('vjs-show')
    this.getChild("CurrentTimeDisplay").addClass('vjs-show')
    this.getChild("TimeDivider").addClass('vjs-show')
    this.getChild("DurationDisplay").addClass('vjs-show')

  }
  hideTime () {
    this.getChild('PlayToggle').removeClass('vjs-show')
    this.getChild("CurrentTimeDisplay").removeClass('vjs-show')
    this.getChild("TimeDivider").removeClass('vjs-show')
    this.getChild("DurationDisplay").removeClass('vjs-show')
  }
  showLive () {
    this.addChild("liveDisplay")
  }
  hideLive () {
    this.removeChild("liveDisplay")
  }
}

videojs.registerComponent('ControlLeft', ControlLeft)


