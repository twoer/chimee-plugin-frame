<template>
  <div id="app">
    <div id="video-wrapper"></div>
  </div>
</template>

<script>
import Chimee from 'chimee'
import chimeePluginControlbar from 'chimee-plugin-controlbar'
// import chimeePluginFrame from '../../src/index.js'
// eslint-disable-next-line
import chimeePluginFrame from '../../dist/index.js'
import '../../dist/index.css'
export default {
  name: 'app',
  mounted () {
    Chimee.install(chimeePluginControlbar)
    Chimee.install(chimeePluginFrame)
    var player = new Chimee({
      wrapper: '#video-wrapper',
      autoplay: true,
      muted: true,
      src: './video/zealer20160517.mp4',
      plugin: [
        chimeePluginControlbar.name,
        chimeePluginFrame.name
      ]
    })
    player.chimeeFrame.setData([{
      id: 'i001',
      type: 'text',
      time: 5,
      duration: 2,
      content: '今天天气咋样？',
      style: {
        top: '20px',
        left: '20px',
        backgroundColor: '#fff',
        color: '#333'
      }
    },
    {
      id: 'i002',
      type: 'text',
      time: 10,
      duration: 2,
      content: '今天非常热，不宜出门。',
      style: {
        top: '20px',
        left: '20px',
        backgroundColor: '#fff',
        color: '#333'
      }
    },
    {
      id: 'i003',
      type: 'img',
      time: 15,
      duration: 3,
      content: './img/1.jpg',
      style: {
        top: '20px',
        right: '20px'
      }
    }])
  }
}
</script>

<style lang="scss">
</style>
