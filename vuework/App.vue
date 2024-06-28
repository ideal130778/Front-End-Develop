<template>
  <div id="app">
        <header>
        <div class="nav">
            <ul>
                <li :class="index===1? 'active':''"  @click="show(1)">
                    <button >发现</button>
                </li>
                <li  :class="index===2? 'active':''" @click="show(2)">
                    <button >歌手</button>
                </li>
                <li   >
                    <button>歌曲</button>
                </li>
            </ul>
            <div class="last">
                <span class="box">
                    <input type="text" placeholder="输入你喜爱的歌曲">
                    <button>搜索</button>
                </span>
            </div>
            <div class="login">
                登录
            </div>
        </div>
        </header>
        <find class="two" v-show="index===1 && isShow"></find>>
        <singer  class="one" v-show="index===2 && isShow"></singer>
    </div>
</template>
<script>
import Singer from '../../vuework/src/Singer.vue'
import Find from './Find.vue'

export default {
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'margin:0;')
  },
  components: {
    Singer,
    Find

  },
  data () {
    return {
      // 控制切换按钮后按钮改变样式
      index: 1,
      // 控制点击按钮后子组件显示，再次点击隐藏
      isShow: true
    }
  },
  methods: {
    show (value) {
      this.index === value ? this.isShow = !this.isShow : this.isShow = true
      this.index = value
    }
  }
}
</script>

<style scoped>

#app {
    margin: 0 auto;
}
        * {
            padding: 0;
            margin: auto;
        }
/*header部分*/
        header {
            width: 100%;
            height: 70px;
            background-color: black;
        }

        .nav {
            width: 800px;
            height: 70px;
        }
        ul li {
            list-style: none;
            float: left;
            text-align: center;
            height: 70px;
            line-height: 70px;
            width: 120px;
            color: white;
        }
        ul button {
            width: 120px;
            height: 70px;
            line-height: 70px;
            font-family: 黑体;
            font-size: 18px;
            background-color: black;
        }

        .last {
            float: left;
            width: 300px;
            height: 30px;
            margin: 20px 30px;
        }

        .nav .box {
            display: inline-block;
            width: 286px;
            height: 26px;
            border: 2px solid skyblue;
            margin: 0;
        }

        .login {
            float: left;
            width: 60px;
            height: 30px;
            margin: 20px 10px;
            color: white;
            font-size: 18px;
            font-family: 黑体;
            text-align: center;
            line-height: 30px;
            background-color: skyblue;
        }

        input {
            float: left;
            width: 250px;
            height: 26px;
            outline: none;
            border: none;
            font-size: 16px;
            font-family: 黑体;
            text-indent: 5px;
        }

        button {
            float: left;
            height: 26px;
            width: 36px;
            color: white;
            background-color: skyblue;
            outline: none;
            border: none;
        }
</style>

