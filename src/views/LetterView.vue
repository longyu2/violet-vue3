<script setup lang="ts">
import letterMp3 from '@/assets/letter.mp3'
import { ref } from 'vue'
const text =
  ' 亲爱的基尔伯特少佐：您还好吗？别来无恙吗？您现在在哪儿呢 ？有没有烦恼呢 ？无论春夏秋冬，四季轮转，唯独有少佐的季节迟迟不来。我起初不懂 ，我一点都不懂少佐的心意， 但是，在少佐赐予我的崭新人生中，我能稍微感受到一些了。通过我遇见的人们，我坚信着，少佐一定还活在某个地方，所以我也会一直一直活下去！即使不知道今后会遇见什么，也要活下去。如果还能再见，我想告诉你： 我现在对【爱】也有所理解了。'

let text_html = ref('')
let text_arr: string[] = []
let set_inter_val = setInterval(function () {}, 1000)
let index = 0

function playAudio() {
  // 启动audio音频
  let myVideo: any = document.getElementById('video1')
  myVideo.play()
}

function caeateInterval(tick: any) {
  clearInterval(set_inter_val)
  set_inter_val = setInterval(loopfun, tick)
}

// 此函数为setinterval的循环体函数，为控制速度，可根据播放的index重新启动setinterval
function loopfun() {
  switch (index) {
    case 0:
      // 文字开始显示，音频播放
      playAudio()
      break
    case 10:
      caeateInterval(2000)
      break
    case 11:
      text_html.value += '<br/>'
      caeateInterval(300)
      break
    case 15:
      caeateInterval(1000)
      break
    case 16:
      caeateInterval(300)
      break

    case 21:
      caeateInterval(1000)
      break
    case 22:
      caeateInterval(300)
      break
    case 30:
      caeateInterval(1000)
      break
    case 31:
      caeateInterval(400)
      break

    case 38:
      caeateInterval(3000)
      break

    case 39:
      caeateInterval(1000)

      break
    case 45:
      caeateInterval(300)

      break
    case 50:
      caeateInterval(2000)

      break
    case 51:
      caeateInterval(300)

      break

    case 70:
      caeateInterval(2000)
      break
    case 71:
      caeateInterval(300)
      break

    case 82:
      caeateInterval(4000)
      break
    case 83:
      caeateInterval(400)
      break
    case 110:
      caeateInterval(3000)
      break
    case 111:
      caeateInterval(400)
      break
    case 119:
      caeateInterval(7000)
      break
    case 120:
      caeateInterval(400)
      break
    case 124:
      caeateInterval(1000)
      break
    case 125:
      caeateInterval(400)
      break
    case 136:
      caeateInterval(1000)
      break
    case 137:
      caeateInterval(400)
      break
    case 168:
      caeateInterval(2000)
      break
    case 169:
      caeateInterval(400)
      break
    case 189:
      caeateInterval(13000)
      break
    case 190:
      caeateInterval(400)
      break
    default:
      break
  }

  text_html.value += text_arr[index]
  index++
  if (index >= text_arr.length) {
    clearInterval(set_inter_val)
  }
}

text_arr = text.split('')
caeateInterval(240)
</script>

<template>
  <div class="letter-contanier">
    <div class="bg"></div>
    <div class="box  animate__animated animate__slideInDown">
      <div v-html="text_html"></div>

      <audio id="video1" width="100px" height="100px" :src="letterMp3">
        您的浏览器不支持 audio 标签。
      </audio>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (min-width: 600px) {
  .bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url('https://img.violet-evergarden.net/lunbo_img/425.jpg');
    background-position-y: -100px;
    position: absolute;
    top: 0px;
    z-index: 1;
  }
  .box {
    color: #333;
    font-family: 楷体;
    position: relative;
    padding: 60px 50px 0px 50px;
    width: 340px;
    height: 600px;
    z-index: 2;
    margin-left: 19vw;
    margin-top: 2vh;
    opacity: 95%;
    font-size: 25px;
    font-weight: 500;
    background-image: url('@/assets/images/paper.jpg');
    background-size: contain;
    border-radius: 4px;
  }
}

@media screen and (max-width: 600px) {
  .bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url('https://img.violet-evergarden.net/lunbo_img/425.jpg');
    background-position-y: -100px;
    position: absolute;
    top: 0px;
    z-index: 1;
  }

  .letter-contanier {
    // position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    .box {
      font-family: 宋体;
      position: relative;
      padding: 60px 50px 0px 50px;
      width: 65vw;
      height: 121vw;
      z-index: 2;
      margin-top: 100px;
      opacity: 95%;
      font-size: 16px;
      font-weight: 500;
      background-image: url('@/assets/images/paper.jpg');
      background-size: contain;
      border-radius: 4px;
    }
  }
}
</style>
