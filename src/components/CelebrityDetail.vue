<template>
	<div class="movieDetail">
		<div class="waiting" v-if="loading">
			loading
		</div>
		<div class="details" v-if="post" style="overflow:hidden">
			<header class="item_box">
	            <div class="item_img fl">
	              <img v-bind:src="post.avatars.large" v-bind:alt="post.name">
	            </div>
	            <div class="item_info fl">
	              <h4>{{post.name}}<i class="score_num">{{post.gender}}</i></h4>
	              <p><span>出生地：</span><span>{{post.born_place}}</span></p>
	              <p><span>其他名字：</span><span>{{post.aka_en}}</span></p>
	              <p><router-link  :to="`${post.mobile_url}`">豆瓣专题页</router-link></p>
	            </div>
          	</header>
			<div id="celebrityDetails">
				<p>代表作品</p>
				<ul>
					<li v-for="work in post.works" class="fl">
						<router-link :to="`/subject/${work.subject.id}`" class="item_box">
							<img v-bind:src="work.subject.images.large" alt="work.subject.title">
							<p><span>{{work.subject.title}}</span></p>
							<p class="small_p"><span v-for="role in work.roles">{{role}}</span></p>
						</router-link>
					</li>
				</ul>
         	</div>
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
			this.$http.jsonp('https://api.douban.com/v2/movie/celebrity/'+this.$route.params.id).then((response)=>{
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