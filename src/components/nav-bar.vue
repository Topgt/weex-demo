<template>
  <div class="top-bar">
    <text v-if="showBack" class="iconfont" @click="back()">&#xe6db;</text>
    <text v-else />
    <text class="top-bar-title">{{title}}</text>
    <div />
  </div>
</template>

<script>
const domModule = weex.requireModule('dom')
const navigator = weex.requireModule('navigator')
export default {
  name: 'navbar',
  props: {
    title: {
      type: String,
      required: true
    },
    showBack: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  berforeCreate () {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_1749598_ehrct2r0qpi.ttf')"
    })
  },
  methods: {
    back: function () {
      navigator.pop({animated: 'true'})
    }
  }
}
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
    font-size: 40px;
  }
  .top-bar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
    margin-bottom: 20px;
  }
  .top-bar-title {
    font-size: 40px;
    font-weight: 500;
  }
</style>
