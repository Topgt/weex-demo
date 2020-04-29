<template>
  <div class="event">
    <text class="event-name">{{todo.name}}</text>
    <div class="btn-wap">
      <text class="btn" @click="onClick()">{{btnName}}</text>
      <text class="iconfont">&#xe6a2;</text>
    </div>
  </div>
</template>

<script>
const domModule = weex.requireModule('dom')
export default {
  beforeCreate () {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_1749598_ehrct2r0qpi.ttf')"
    })
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    btnName: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
    font-size: 40px;
  }
  .event {
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 18px;
    padding-right: 10px;
    padding-left: 40px;
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .event-name {
    font-size: 32px;
  }
  .btn-wap {
    flex-direction: row;
    align-items: center;
  }
  .btn {
    margin-right: 10px;
    border-style:solid;
    border-color: #ccc;
    border-width: 1px;
    border-radius: 5px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 23px;
    padding-right: 23px;
    font-size: 28px;
  }
</style>
