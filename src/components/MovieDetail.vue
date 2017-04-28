<template>
	<div class="movieDetail">
		<div class="waiting" v-if="loading">
			loading
		</div>
		<div class="details" v-if="post">
			{{post.rating.average}}
		</div>
		<div class="error" v-if="error">
			{{error.msg}}
		</div>		
	</div>
</template>

<script>
export default{
	name: 'MovieDetail',
	data (){
		return {
			loading:false,
			post:null,
			error:null,
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
			console.log(this.$route.params.id);
			this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.$route.params.id).then((response)=>{
				this.post = response.data;
				console.log(this.post);
				this.loading = false;

			},(response)=>{
				this.error = {"msg":"h回调失败"}
				this.loading = false;
			})
		}
	}
}
</script>