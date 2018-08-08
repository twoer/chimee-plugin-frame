import './app.scss'
const chimeePluginFrame = {
  // 插件名为 controller
  name: 'chimeeFrame',
  // 插件实体为按钮
  el: 'chimee-frame',
  // 在插件创建生命周期，实现DOM结构和基本的交互行为
  data: {
    _work: false,
    _frameList: []
  },
  create () {
    this.$dom.innerHTML = '<div class="frame-wrapper"></div>'
    this.$elFrameWrapper = this.$dom.querySelector('.frame-wrapper')
  },
  methods: {
    setData (data) {
      this._destroy()
      if (!data || !Object.prototype.toString.call(data) === '[object Array]') {
        return
      }
      this._work = true
      this._frameList = data
    },
    destroy () {
      this._destroy()
    },
    _destroy () {
      this.$elFrameWrapper.innerHTML = ''
      this._frameList = []
      this._work = false
    },
    _timeupdate (currentTime) {
      (this._frameList || []).forEach((item, index) => {
        if (currentTime !== item.time) {
          return
        }
        this._renderFrame(item)
      })
    },
    _renderFrame (frame) {
      (function (self, frame) {
        if (frame._IS_RENDER) {
          return
        }
        var $content = null
        if (frame.type === 'text') {
          $content = document.createElement('span')
          $content.setAttribute('class', 'frame-text')
          $content.innerHTML = frame.content
        } else if (frame.type === 'img') {
          $content = document.createElement('div')
          $content.setAttribute('class', 'frame-picture')
          $content.innerHTML = `<img src="${frame.content}">`
        }
        // mixin css
        var _style = frame.style
        if (Object.prototype.toString.call(_style) !== '[object Object]') {
          _style = JSON.parse(frame.style)
        }
        for (let attr in _style) {
          if (_style.hasOwnProperty(attr)) {
            $content.style[attr] = _style[attr]
          }
        }

        // duration
        if (frame.duration) {
          setTimeout(() => {
            frame._IS_RENDER = false
            self.$elFrameWrapper.innerHTML = ''
          }, frame.duration * 1000)
        }
        frame._IS_RENDER = true
        self.$elFrameWrapper.append($content)
      })(this, frame)
    }
  },
  events: {
    timeupdate (e) {
      if (!this._work) {
        return
      }
      let _currentTime = e.target.currentTime
      if (parseInt(_currentTime + 0.5) === Math.floor(_currentTime)) {
        this._timeupdate(Math.floor(_currentTime))
      }
    }
  }
}

export default chimeePluginFrame
// export { chimeePluginFrame }
