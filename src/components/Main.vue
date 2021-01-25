<template>
  <div class="main">
    <div class='main-inner'>
      <el-row type="flex">
        <video
          id='my-video'
          class="video-js vjs-big-play-centered"
        >
        </video>
        <el-tabs>
          <el-tab-pane label="电视直播">
            <el-scrollbar style='height: 493px;'>
              <el-menu
                default-active=""
                @select="select"
                background-color='#1a1a1a'
                text-color='#bbb'
                active-text-color="#4a9cfa"
              >
                <el-menu-item
                  v-for='(item,key) in sources'
                  :index="key"
                  :key="key"
                >{{key}}</el-menu-item>
              </el-menu>
            </el-scrollbar>
          </el-tab-pane>
          <el-tab-pane label="本地视频">
            <el-scrollbar style='height: 493px;'>
              <el-upload
                action=""
                :auto-upload="false"
                :on-preview="preview"
                :on-change="change"
              >
                <el-button type="text">添加本地视频</el-button>
              </el-upload>
            </el-scrollbar>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row class="online-m3u8">
        <el-input
          v-model="onlineM3u8"
          placeholder="请输入 m3u8 地址"
        >
          <el-button
            type="primary"
            icon='el-icon-caret-right'
            slot='append'
            @click="changeM3u8Throttling"
          ></el-button>
        </el-input>

      </el-row>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import './videoComponents/Title.js'
import './videoComponents/ControlLeft'
import './videoComponents/ControlRight'

export default {
  name: 'app',
  data () {
    return {
      play: null,
      onlineM3u8: '',
      loading: false,
      videoOptions: {
        languages: { 'zh-CN': require('video.js/dist/lang/zh-CN.json') },
        controls: true,
        title: '标题',
        playbackRates: [0.5, 1, 1.5, 2],
        aspectRatio: '16:9',
        sources: { src: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8' },
        children: {
          controlBar: {
            children: ['ControlLeft', 'ProgressControl', 'ControlRight']
          }, videoTitle: true, loadingSpinner: true
        },

      },
      types: ['video/mp4', 'video/webm', 'video/ogg'],
      currentVideo: null,
      sources: {
        CCTV_1: { src: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8' },
        CCTV_2: { src: 'http://ivi.bupt.edu.cn/hls/cctv2hd.m3u8' },
        CCTV_3: { src: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8' },
        CCTV_4: { src: 'http://ivi.bupt.edu.cn/hls/cctv4hd.m3u8' },
        CCTV_5: { src: 'http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8' },
        CCTV_6: { src: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8' },
        CCTV_7: { src: 'http://ivi.bupt.edu.cn/hls/cctv7hd.m3u8' },
        CCTV_8: { src: 'http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8' },
        CCTV_9: { src: 'http://ivi.bupt.edu.cn/hls/cctv9hd.m3u8' },
        CCTV_10: { src: 'http://ivi.bupt.edu.cn/hls/cctv10hd.m3u8' },
        CCTV_12: { src: 'http://ivi.bupt.edu.cn/hls/cctv12hd.m3u8' },
        CCTV_13: { src: 'http://ivi.bupt.edu.cn/hls/cctv13hd.m3u8' },
        CCTV_14: { src: 'http://ivi.bupt.edu.cn/hls/cctv14hd.m3u8' },
      },
      changeM3u8Throttling: () => { },
    }
  },
  methods: {
    change (file, files) {
      if (this.types.indexOf(file.raw.type) === -1) {
        files.pop()
        this.$message({ type: 'warning', message: '请选择 mp4、webm、ogg 格式' })
      }
      let count = 0
      for (let i = 0; i < files.length; i++) {
        if (files[i].raw.name === file.raw.name &&
          files[i].raw.size === file.raw.size &&
          files[i].raw.lastModified === files[i].raw.lastModified) {
          count++
        }
        if (count == 2) {
          files.pop()
          break
        }
      }
    },
    select (key) {
      this.play.src(this.sources[key])
      this.play.getChild('VideoTitle').setVideoTitle(key)
      this.play.getChild('controlBar').getChild('controlLeft').hideTime()
      this.play.getChild('controlBar').getChild('controlLeft').showLive()
      this.play.play().catch()
    },
    preview (file) {
      if (!file.src) {
        file.src = window.URL.createObjectURL(file.raw)
      }
      if (file.src !== this.play.src()) {
        if (this.currentVideo) {
          this.currentVideo.preTime = this.play.currentTime()
        }
        this.play.src({ src: file.src, type: file.raw.type })
        this.play.getChild('controlBar').getChild('controlLeft').hideLive()
        this.play.getChild('VideoTitle').setVideoTitle(file.raw.name)
        file.preTime && this.play.currentTime(file.preTime)
        this.play.play()
        this.currentVideo = file
      }
    },
    initPlayer () {
      this.play = videojs('my-video', this.videoOptions)
      this.play.play()
      this.play.on('ended', () => { console.log('完了') })
      this.play.on('error', () => this.$message.error('出错啦'))
      this.play.on('loadedmetadata', () => {
        if (typeof this.play.duration() === 'number' && this.play.duration() !== Infinity) {
          this.play.getChild('controlBar').getChild('controlLeft').showTime()
          this.play.play()
        }
      })
      this.changeM3u8Throttling = this.throttling(this.changeM3u8, 3000)
    },
    changeM3u8 () {
      if (this.onlineM3u8) {
        this.play.src(this.onlineM3u8)
      } else {
        this.$message({ type: 'warning', message: '请填写链接' })
      }
    },
    throttling (fn, wait) {
      let count = 0
      let timer = null
      let self = this
      return function (...args) {
        if (count < 3) {
          count++
          fn.call(self, ...args)
          return
        }
        if (!timer) {
          self.$message({ type: 'warning', message: '操作频繁' })
          timer = setTimeout(() => {
            count = 0
            timer = null
          }, wait)
        }
      }
    }
  },
  mounted () {
    this.initPlayer()
  },
}
</script>

<style lang='scss' scoped>
@import "../assets/css/video.css";
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  background: url("../assets/img/bgc.png") center/cover;
}
.main-inner {
  width: 1000px;
  min-width: 1000px;
  padding: 10px;
  background-color: #1a1a1a;
}
.el-tabs {
  flex: 0 0 152px;
  height: 548px;
  padding: 0 10px 15px;
  overflow: hidden;
}
.el-menu {
  border: none !important;
}
.el-menu-item {
  letter-spacing: 5px;
  height: 48px;
  line-height: 48px;
}
.online-m3u8 {
  margin: 20px 0;
  padding: 0 80px;
}
/deep/ .el-input-group__append {
  background-color: #0a0a0a;
  border: none;
  transition: background-color linear 0.2s;
  &:hover {
    background-color: #0f0f0f;
  }
}
/deep/ .el-input__inner {
  background-color: #383838;
  border-color: #383838;
  color: #bbb;
  &:hover {
    border-color: #585858;
  }
  &:focus {
    border-color: #585858;
  }
}
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
/deep/ .el-upload-list__item {
  outline: none;
}

.video-title {
  top: 0;
  justify-content: center;
  align-items: center;
}
</style>
