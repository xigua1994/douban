<template>
  <div class="comingsoon">
    <div class="loading" v-if="loading"></div>
    <div class="error" v-if="error">error</div>
    <div class="content" v-if="post" transition="expand">
      <ul>
        <li v-for="item in post" style="overflow:hidden">
          <router-link :to="`/subject/${item.id}`" class="item_box">
            <div class="item_img fl">
              <img v-bind:src="item.images.large" v-bind:alt="item.title">
            </div>
            <div class="item_info fl">
              <h4>{{item.title}}<i class="score_num">{{item.rating.average}}</i></h4>
              <p><span>类型：</span><span v-for="genre in item.genres">{{genre}}、</span></p>
              <p><span>导演：</span><router-link v-for="director in item.directors" :to="`/celebrity/${director.id}`">{{director.name}}、</router-link></p>
              <p><span>演员：</span><router-link v-for="cast in item.casts" :to="`/celebrity/${cast.id}`">{{cast.name}}、</router-link></p>
            </div>
          </router-link><br>
          <div v-for="star in item.casts" style="float:left;width:20%">
             <router-link  :to="`/celebrity/${star.id}`">{{star.name}}
             </router-link>
          </div>
        </li>
      </ul>
      <div class="waiting" v-if="isNotEnd" v-on:click="nextPage">点击加载下一页内容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comingsoon',
  data () {
    return {
      loading:false,
      post:null,
      error:null,
      start:0,
      total:0,
      amount:0,
      isNotEnd :true,
      count:10,
      url:'in_theaters'
    }
  },
  created (){
    this.fetchData()
  },
  watch:{
    '$route':'fetchData'
  },
  methods:{
    fetchData (){
      this.error = this.post =null
      this.loading = true
      this.start = this.total = this.amount = 0
      var searchUrl
      this.url = this.$route.path.split("/")[1] ? this.$route.path.split("/")[1] : 'in_theaters'
      if(this.url.indexOf("search")>-1){
        searchUrl = "https://api.douban.com/v2/movie/search?q="+this.$route.query.tag+'&count='+this.count+'&start='+this.start
      }else{
        searchUrl = 'https://api.douban.com/v2/movie/'+this.url+'?count='+this.count+'&start='+this.start
      }
      this.$http.jsonp(searchUrl).then((response)=>{
        this.post = response.data.subjects;
        this.total = response.data.total;
        this.amount = this.start + this.count;
        if((this.count+this.start)>=this.total){
          this.isNotEnd = true;
        }
      },(response)=>{
        this.error = {"msg":"回调失败"}
      })
      this.loading = false
    },
    nextPage (){
      var searchUrl
      this.start = this.count + this.start;
      if(this.url.indexOf("search")>-1){
        searchUrl = "https://api.douban.com/v2/movie/search?q="+this.$route.query.tag+'&count='+this.count+'&start='+this.start
      }else{
        searchUrl = 'https://api.douban.com/v2/movie/'+this.url+'?count='+this.count+'&start='+this.start
      }
       this.$http.jsonp(searchUrl).then((response)=>{
        for(let i=0;i<response.data.subjects.length;i++){
          this.post.push(response.data.subjects[i]);
        }
        this.amount = this.start + this.count;
        if((this.count+this.start)>=this.total){
          this.isNotEnd = false;
        }
      },(response)=>{
        this.error = {"msg":"回调失败"}
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li{
  line-height: 36px;
  text-align: center;
}
a {
  color: #42b983;
}
.waiting{
  text-align: center;
  line-height: 36px;
  width:60%;
  height:36px;
  margin:20px auto 0;
  border:1px solid #666666;
}
</style>
