<template>
	<header>
      <div class="douban_header">
        <span>电影</span>
      </div>
      <div class="douban_search">
          <input type="text" v-model="q" placeholder="请输入搜索内容" @keyup.enter="submit">
        </div>
      <div class="douban_tab">
        <router-link to="/in_theaters">正在热映</router-link>
        <router-link to="/coming_soon">即将上映</router-link>
        <router-link to="/top250">top250</router-link>
      </div>
    </header>
</template>

<script>

	export default{
		data (){
			return {
        q:""
      }
		},
		name:"doubanHeader",
		components:{
		},
		methods:{
      submit(){
        this.$router.push({path:"/search",query:{tag:this.q}})
      }
		}
	}
</script>
