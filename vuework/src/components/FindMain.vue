<template>
    <main>
        <div class="box">
           <div id="context">
               <div class="pictures">
                   <!-- <img class="img-slide" src="../../public/img/junjie.png" />
                   <img class="img-slide" src="img/jielun.png" />
                   <img class="img-slide" src="img/taylor.png" />
                   <img class="img-slide" src="img/aide.png" />
                   <img class="img-slide" src="img/you.png" />
                   <img class="img-slide" src="img/modern.png" />
                   <img class="img-slide" src="img/aut.jpg" /> -->
                   <img src="../../public/img/junjie.png" />
               </div>
           </div>
        </div>
        <div class="main" id="newSong">
           <div class="main-inner">
               <div class="main-title">
                   <h2>Title Here</h2>
               </div>
               <div class="main-slider tab-cont">
                   <ul class="slider-wrapper">
                       <li>
                           <a href="#" class="img">
                               <img src="img/slider_img1.jpg" alt="#">
                               <span class="mask"></span>
                               <i class="icon-play"></i>
                           </a>
                           <div class="info">
                               <div class="title">
                                   <a href="#">Illusion</a>
                                   <i class="icon-sprite"></i>
                               </div>
                           </div>
                       </li>
                       <li>
                           <a href="#" class="img">
                               <img src="img/slider_img2.jpg" alt="#">
                               <span class="mask"></span>
                               <i class="icon-play"></i>
                           </a>
                           <div class="info">
                               <div class="title">
                                   <a href="#">皆可</a>
                                   <i class="icon-sprite"></i>
                               </div>
    
                           </div>
                       </li>
                       <li>
                           <a href="#" class="img">
                               <img src="img/slider_img3.jpg" alt="#">
                               <span class="mask"></span>
                               <i class="icon-play"></i>
                           </a>
                           <div class="info">
                               <div class="title">
                                   <a href="#">Stardust</a>
                                   <i class="icon-sprite"></i>
                               </div>
    
                           </div>
                       </li>
                       <li>
                           <a href="#" class="img">
                               <img src="img/slider_img4.jpg" alt="#">
                               <span class="mask"></span>
                               <i class="icon-play"></i>
                           </a>
                           <div class="info">
                               <div class="title">
                                   <a href="#">lonely again</a>
                                   <i class="icon-sprite"></i>
                               </div>
                           </div>
                       </li>
                       <li>
                           <a href="#" class="img">
                               <img src="img/slider_img5.jpg" alt="#">
                               <span class="mask"></span>
                               <i class="icon-play"></i>
                           </a>
                           <div class="info">
                               <div class="title">
                                   <a href="#">Slide</a>
                                   <i class="icon-sprite"></i>
                               </div>
                           </div>
                       </li>
                    </ul>
               </div>
           </div>
        </div>
    </main>
</template>
<script>
/*小轮播图*/
        var index = 0;
        //效果
        function ChangeImg () {
            index++;
            var a = document.getElementsByClassName("img-slide");
            if (index >= a.length) index = 0;
            for (var i = 0; i < a.length; i++) {
                a[i].style.display = 'none';
            }
            a[index].style.display = 'block';
        }
        //设置定时器，每隔两秒切换一张图片
        setInterval(ChangeImg, 1000);
</script>
<style scoped>
* {
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
}
main {
    height: 800px;
    margin: 0 auto;
}
.box {
    width: 800px;
    height: 400px;
    zoom: 1;
}

.box:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
}

#contex {
    width: 800px;
    height: 400px;
    position: relative;
    overflow: hidden;
    float: left;
   
}

.pictures {
    width: 20000px;
    height: 400px;
    transition: all 0s;
    zoom: 1;
}

.pictures:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
}

img {
    width: 800px;
    height: 400px;
    float: left;
    display: block;
}
.main {
    overflow: hidden;
    position: relative;
}

.main-title {
    position: relative;
    width: 490px;
    height: 46px;
    padding-top: 80px;
    margin: 0 auto 50px;
}
a {
    text-decoration: none;
    font-family: 黑体;
    font-size:20px;
    text-align: center;
}

.main-slider .slider-wrapper {
    position: relative;
    left: 10px;
    height: 314px;
    margin-bottom: 35px;
}

.slider-wrapper li {
    float: left;
    width: 150px;
    height: 200px;
}

.slider-wrapper .img {
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 300px;
}

.main .img img,
.main .img i,
.main .mask,
.main .icon-play {
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
}

.main .img:hover img {
    transform: scale(1.07);
    -webkit-transform: scale(1.07);
}


.slider-wrapper .info {
    width: 100%;
    height: 114px;
    background-color: rgba(130, 138, 242, 0.8);
    text-align: center;
    font-size: 16px;
}

.slider-wrapper .info-event .info {
    background-color: rgba(234, 129, 129, 0.6);
}

.slider-wrapper li:hover .info {
    background-color: skyblue ;
}

.slider-wrapper .info .title {
    padding-top: 34px;
}

img {
    vertical-align: top;
}


.main-inner{
    width: 800px;
    height: 400px;
}

#newSong .main-slider .slider-wrapper {
    width: 4500px;
}

.title {
    font-size: 20px;
    margin-top: -15px;
    margin-bottom: 10px;

}
.main-slider.tab-cont{
    height: 414px;
    width: 1270px;
}
.main-title{
    height: 2px;
    width: 12px;
}
.main-slider .slider-wrapper li .img img {
    width: 150px; 
    height: 150px; 
}
.slider-wrapper {
    width: 800px; 
    height: 400px;
}
#newSong {
    height: 400px;
    width: 1000px;
    background-image: url('../../public/img/newSong_bg.jpg'); 
    background-size: cover;
    background-position: center; 
}

main {
    background-image: url('../../public/img/newSong_bg.jpg');
    background-size: cover; 
    background-position: center; 
}

</style>