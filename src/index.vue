<template>
  <div class="wrapper" @viewappear="show" @viewdisappear="hiden">
    <navBar title="事件列表" />
    <text class="title">代办事项</text>
    <div v-for="(todo, idx) in toDoList" :key="todo.name+idx" >
      <eventItem :todo="todo" btnName="完成" :onClick="()=>finish(todo, idx)" />
    </div>
    <text class="title">已办事项</text>
    <div v-for="(todo, idx) in doneList" :key="todo.name+idx" >
      <eventItem :todo="todo" btnName="详情" :onClick="()=>desc(todo, idx)" />
    </div>
    <div class="b-btn-wrp">
      <text class="b-btn" @click="add">添加</text>
      <text class="b-btn" @click="clear">清空</text>
    </div>
  </div>
</template>

<script>
import {getEntryUrl} from './utils'
import navBar from './components/nav-bar'
import eventItem from './components/event-item'
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')
export default {
  name: 'App',
  data () {
    return {
      toDoList: [],
      doneList: []
    }
  },
  components: {navBar, eventItem},
  created () {
    if (weex.config.env.platform === 'Web') {
      this.show()
    }
  },
  methods: {
    finish: function (event, idx) {
      this.toDoList.splice(idx, 1)
      this.doneList.push(event)
    },
    desc: function (event, idx) {
      console.log(idx)
    },
    add: function () {
      if (weex.config.env.platform === 'Web') {
        this.hiden()
      }
      navigator.push({
        url: getEntryUrl('add'),
        animated: 'true'
      })
    },
    clear: function () {
      this.toDoList = []
      this.doneList = []
      storage.removeItem('toDolist')
      storage.removeItem('doneList')
    },
    show: function () {
      storage.getItem('toDolist', event => {
        try {
          this.toDoList = JSON.parse(event.data) || []
        } catch (e) {}
        console.log('set success')
      })
      storage.getItem('doneList', event => {
        try {
          this.doneList = JSON.parse(event.data) || []
        } catch (e) {}
        console.log('set success')
      })
    },
    hiden: function () {
      storage.setItem('toDolist', JSON.stringify(this.toDoList), event => {
        console.log('set success')
      })
      storage.setItem('doneList', JSON.stringify(this.doneList), event => {
        console.log('set success')
      })
    }
  }
}
</script>

<style scoped>
  .iconfont {
    font-family: iconfont;
    font-size: 40px;
  }
  .wrapper {
    background-color: #ccc;
  }
  .top-bar {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: white;
    margin-bottom: 20px;
  }
  .top-bar-title {
    font-size: 40px;
    font-weight: 500;
  }
  .title {
    font-size: 32px;
    margin-left: 15px;
    margin-bottom: 20px;
    margin-top: 20px;
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
