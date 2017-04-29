###运行项目
由于某些不可控的因素，并没有将项目放在个人服务器供大家线上浏览，所以只能是clone下来，在本地进行运行查看效果。
```
git clone https://github.com/waterwong/douban.git
cd douban
npm install 
npm run dev
```
最终效果图如下：

![demo.gif](http://upload-images.jianshu.io/upload_images/3704151-014be1b9da09214c.gif?imageMogr2/auto-orient/strip)


###项目结构
整体项目结构按照vue-cli进行搭建，也是一个非常普通的vue-cli结构。
```
├─build
├─config
├─node_modules
├─src
│  ├─assets
│  ├─components
│  └─router
└─static
```
###调用接口
* https://api.douban.com/v2/movie/search?q={text} 电影搜索api；
* https://api.douban.com/v2/movie/in_theaters 正在上映的电影；
* https://api.douban.com/v2/movie/coming_soon 即将上映的电影；
* https://api.douban.com/v2/movie/subject/:id 电影详情条目；
* https://api.douban.com/v2/movie/celebrity/:id 影人详情条目。

由于豆瓣API的限制，不能使用ajax的方式获取，所以引入vue-resource，使用jsonp的形式去获取。

>由于时间的关系，这个项目还有很多东西没有进行优化，可能会出现一些bug，所以欢迎各位指出，我也会尽快对项目进行更新。项目地址：[豆瓣电影](https://github.com/waterwong/douban)
