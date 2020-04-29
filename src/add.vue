<template>
  <div class="wrp">
    <navBar title="事件详情" :showBack="true" />
    <div class="form-item">
      <text class="e-title">事件名称</text>
      <input v-model="name" class="input" type="text" placeholder="请输入事件名称" />
    </div>
    <div class="form-item-des">
      <text class="e-title">事件内容</text>
      <textarea v-model="desc" class="textarea" placeholder="请输入事件内容" rows="3"/>
    </div>
     <div class="b-btn-wrp">
      <text class="b-btn" @click="add">完成</text>
      <text class="b-btn" @click="back">取消</text>
    </div>
  </div>
</template>
<script>
import navBar from './components/nav-bar'
const domModule = weex.requireModule('dom')
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')
export default {
  name: 'add',
  components: {navBar},
  data () {
    return {
      name: '',
      desc: ''
    }
  },
  beforeCreate () {
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_1749598_ehrct2r0qpi.ttf')"
    })
  },
  methods: {
    add: function () {
      storage.getItem('toDolist', event => {
        try {
          const data = event.data && (event.data !== 'undefined' ? event.data : '[]')
          const toDoList = JSON.parse(data || '[]') || []
          toDoList.push({name: this.name, desc: this.desc})
          storage.setItem('toDolist', JSON.stringify(toDoList), () => {
            this.back()
          })
        } catch (e) {}
      })
    },
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
  .wrp {
    background-color: #ccc;
  }
  .form-item {
    flex-direction: row;
    align-items: center;
    padding: 20px;
  }
  .form-item-des {
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
  }
  .e-title {
    font-size: 32px;
    padding: 15px;
  }
  .input {
    flex: 1;
    font-size: 32px;
    height: 60px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    background-color: white;
    border-radius: 5px;
  }
  .textarea {
    flex: 1;
    padding-left: 20px;
    padding-top: 12px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
  }
  .b-btn-wrp {
    position: absolute;
    width: 750px;
    height: 100px;
    background-color: white;
    flex-direction: row;
    align-items: center;
    bottom: 0;
    left: 0;
  }
  .b-btn {
    flex: 1;
    font-size: 32px;
    text-align: center;
    border-left-style:solid;
    border-left-color: #ccc;
    border-left-width: 1px;
  }
</style>
