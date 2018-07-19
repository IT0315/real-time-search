<template>
  <div class="Home">
   <input v-model="keyWords" type="text" placeholder="请输入关键词"  @input="handleQuery">
   <ul>
       <li v-for="(item,index) in results" :key='index' v-html='item.name'></li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      keyWords: '',
      results: []
    }
  },
  methods: {
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    handleQuery (event) {
      this.clearTimer()
      console.log(event.timeStamp)
      this.timer = setTimeout(() => {
        console.log(event.timeStamp)
        // console.log(this.lastTime)
        // if (this.lastTime - event.timeStamp === 0) {
        this.$http.post('/api/vehicle').then(res => {
          console.log(res.data.data)
          this.changeColor(res.data.data)
        })
        // }
      }, 2000)
    },

    changeColor (resultsList) {
      resultsList.map((item, index) => {
        // console.log('item', item)
        if (this.keyWords && this.keyWords.length > 0) {
          // 匹配关键字正则
          let replaceReg = new RegExp(this.keyWords, 'g')
          // 高亮替换v-html值
          let replaceString =
            '<span class="search-text">' + this.keyWords + '</span>'
          resultsList[index].name = item.name.replace(
            replaceReg,
            replaceString
          )
        }
      })
      this.results = []
      this.results = resultsList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search-text{
color: red;
}
</style>
