// 视频播放
if (!this.player) {
  let that = this
  this.player = videojs("#videoPlayer", this.videoOptions, function onPlayerReady () {
    console.log('onPlayerReady', this)
    // var hdButtonEl = videojs.createEl('button', { className:  'vjs-hd-button vjs-control',
    //       'role': 'button'
    //   });
    // const hdButton = new videojs.BigPlayButton(this.player_,  this.videoOptions); 
    // console.log(hdButton, 'hdButton')
    // new videojs.BigPlayButton(this.player_,  { children: [] });
  })
  this.$nextTick(() => {
    /* ADD PREVIOUS */
    var Button = videojs.getComponent('Button')

    // // Extend default
    // var PrevButton = videojs.extend(Button, {
    //   //constructor: function(player, options) {
    //   constructor: function() {
    //     Button.apply(this, arguments);
    //     //this.addClass('vjs-chapters-button');
    //     this.addClass('icon-angle-left');
    //     this.controlText("Previous");
    //   },

    //   // constructor: function() {
    //   //   Button.apply(this, arguments);
    //   //   this.addClass('vjs-play-control vjs-control vjs-button vjs-paused');
    //   // },

    //   // createEl: function() {
    //   //   return Button.prototype.createEl('button', {
    //   //     //className: 'vjs-next-button vjs-control vjs-button',
    //   //     //innerHTML: 'Next >'
    //   //   });
    //   // },

    //   handleClick: function() {
    //     console.log('click');
    //     // player.playlist.previous();
    //   }
    // });
    // Extend default
    // var NextButton = videojs.extend(Button, {
    //   //constructor: function(player, options) {
    //   constructor: function() {
    //     Button.apply(this, arguments);
    //     //this.addClass('vjs-chapters-button');
    //     this.addClass('icon-angle-right');
    //     // this.addClass('icon aufontAll h-icon-all-right-o');
    //     this.controlText("Next");
    //   },

    //   handleClick: function() {
    //     console.log('click');
    //     // player.playlist.next();
    //   }
    // });

    // Register the new component
    // videojs.registerComponent('NextButton', NextButton);
    // videojs.registerComponent('PrevButton', PrevButton);
    //player.getChild('controlBar').addChild('SharingButton', {});
    // this.player.getChild('controlBar').addChild('PrevButton', {}, 0);
    // this.player.getChild('controlBar').addChild('NextButton', {}, 2);

    const self = this
    const Component = videojs.getComponent("Component")
    // const Button = videojs.getComponent("Button");
    class PrevButton extends Button {
      constructor(player, options = {}) {
        super(player, options)
        this.controlText("Previous")
        // this.on(player, "play", this.handlePlay);
        // this.on(player, "pause", this.handlePaused);
        // this.on(this.el(), ["click", "tap"], this.handleControlClick);
      }
      buildCSSClass () {
        return "vjs-play-control-btn icon aufontAll fast-forward h-icon-all-fast-backward"
        // return `vjs-play-control ${super.buildCSSClass()}`
      }
      // handlePlay(e) {
      //   console.log(111);
      //   // this.removeClass('vjs-ended')
      //   this.removeClass("vjs-paused");
      //   this.addClass("vjs-playing");
      //   this.controlText("Pause");
      //   // self.$emit('play')
      // }
      // handlePaused(e) {
      //   console.log(111);
      //   this.removeClass("vjs-playing");
      //   this.addClass("vjs-paused");
      //   this.controlText("Play");
      //   // self.$emit('play')
      // }
      // handleControlClick(e) {
      //   console.log(111);
      //   // console.log(this)
      //   this.player_.paused() ? this.player_.play() : this.player_.pause();
      //   // self.$emit('play')
      // }
      // getPlayStatus() {
      //   return "status";
      // }
      handleClick () {
        console.log('Previous')
        // player.playlist.next();
      }
    }
    class NextButton extends Button {
      constructor(player, options = {}) {
        super(player, options)
        console.log(player, options)
        this.controlText("Next")
        // this.on(player, "play", this.handlePlay);
        // this.on(player, "pause", this.handlePaused);
        // this.on(this.el(), ["click", "tap"], this.handleControlClick);
      }
      buildCSSClass () {
        return "vjs-play-control-btn icon aufontAll fast-forward h-icon-all-fast-forward"
        // return `vjs-play-control ${super.buildCSSClass()}`
      }
      // handlePlay(e) {
      //   console.log(111);
      //   // this.removeClass('vjs-ended')
      //   this.removeClass("vjs-paused");
      //   this.addClass("vjs-playing");
      //   this.controlText("Pause");
      //   // self.$emit('play')
      // }
      // handlePaused(e) {
      //   console.log(111);
      //   this.removeClass("vjs-playing");
      //   this.addClass("vjs-paused");
      //   this.controlText("Play");
      //   // self.$emit('play')
      // }
      // handleControlClick(e) {
      //   console.log(111);
      //   // console.log(this)
      //   this.player_.paused() ? this.player_.play() : this.player_.pause();
      //   // self.$emit('play')
      // }
      // getPlayStatus() {
      //   return "status";
      // }
      handleClick () {
        console.log('Next')
        // player.playlist.next();
      }
    }
    Component.registerComponent("PrevButton", PrevButton)
    Component.registerComponent("NextButton", NextButton)
    this.player.getChild('controlBar').addChild('PrevButton', {}, 0)
    this.player.getChild('controlBar').addChild('NextButton', {}, 2)
  })

}