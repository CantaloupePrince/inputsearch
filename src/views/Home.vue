<template>
  <div class="home">
    <input type="text" class="form-control" v-model="searchMsg" placeholder="请输入内容">
    <ul class="list-unstyled">
      <li v-for="item in filteredMsg" :key="item">{{item.content}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data:function(){
    return {
      searchMsg:'',
      listMsg:[]
    }
  },
  methods:{

  },
  mounted:function(){
    this.$axios
        .get('list.json')
        .then(response=>{
          for(var title of response.data.title){
            this.listMsg.push(title)
          }
        })
        .catch(function(error){
          console.log(error)
        })
  },
  computed:{
        filteredMsg: function () {
            var array = this.listMsg,
                searchMsg = this.searchMsg;
 
            if(!searchMsg){
                return array;
            }
 
            searchMsg = searchMsg.trim().toLowerCase();
 
            array = array.filter(function(item){
                if(item.content.toLowerCase().indexOf(searchMsg) !== -1){
                    return item;
                }
            })
 
            // 返回过滤后的数据
            return array;;
        }
  },
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
.home{
  margin: 20px;
}
input{
  width: 200px;
  margin-bottom: 20px;
}
</style>
