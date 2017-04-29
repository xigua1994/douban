<template>
	<div class="movieDetail">
		<div class="waiting" v-if="loading">
			loading
		</div>
		<div class="details" v-if="post">
			<header class="item_box">
	            <div class="item_img fl">
	              <img v-bind:src="post.images.large" v-bind:alt="post.title">
	            </div>
	            <div class="item_info fl">
	              <h4>{{post.title}}<i class="score_num">{{post.rating.average}}</i></h4>
	              <p><span>类型：</span><span v-for="genre in post.genres">{{genre}}、</span></p>
	              <p><span>{{post.year}}年上映</span></p>
	              <p><span>别名：</span><span v-for="name in post.aka">{{name}}、</span></p>
	            </div>
          	</header>
			<div class="item_detail">
				<div class="item_cast">
					<p>演职表</p>
					<div class="item_cast_box">
						<ul class="item_cast_ul">
							<li v-for="director in post.directors" class="fl">
								<router-link :to="`/celebrity/${director.id}`" class="item_box">
									<img v-bind:src="director.avatars.large" alt="director.name">
									<p>{{director.name}}</p>
									<p class="small_p">导演</p>
								</router-link>
							</li>
							<li v-for="cast in post.casts" :key="cast.id" class="fl">
								<router-link :to="`/celebrity/${cast.id}`" class="item_box">
									<img v-bind:src="cast.avatars.large" alt="cast.name">
									<p>{{cast.name}}</p>
									<p class="small_p">演员</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div >
			<footer>
				<p>电影详情</p>
				<div class="footer_detail">
					<p>{{post.summary}}</p>
				</div>
			</footer>
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
			loading:true,
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