<template>
    <main>
        <div class="article">
            <div class="recommend">
                <span>
                    为你推荐
                </span>
            </div>
            <div class="singers">
                <div class="innerbox">
                    <div class="content">
                        <div class="singer">
                            <div class="head">
                                <div class="pictures">
                                    <img src="../../public/img/zhou.png" alt="">
                                </div>
                                <span>周杰伦</span>
                            </div>
                            <div class="outerbox">
                                <div class="music-container" id="music-container">
                                    <!-- 音乐信息 -->
                                    <div class="music-info">
                                        <!-- 音乐标题 -->
                                        <h4 id="title"></h4>
                                        <!-- 音乐播放进度条 -->
                                        <div class="progress-container" id="progress-container">
                                            <div class="progress" id="progress"></div>
                                        </div>
                                    </div>

                                    <!-- 默认第一首音乐 -->
                                    <audio src="music/稻香.mp3" id="audio"></audio>

                                    <!-- 音乐封面 -->
                                    <div class="img-container">
                                        <img src="img/稻香.jpg" alt="music-cover" id="music-cover">
                                    </div>
                                    <!-- 播放控制 -->
                                    <div class="navigation">
                                        <button id="prev" class="action-btn">
                                            <i class="fas fa-backward"></i>
                                        </button>
                                        <button id="play" class="action-btn action-btn-big">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button id="next" class="action-btn">
                                            <i class="fas fa-forward"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singer">
                            <div class="head">
                                <div class="pictures">
                                    <img src="img/deng.png" alt="">
                                </div>
                                <span>邓紫棋</span>
                            </div>
                            <div class="outerbox">
                                <div class="music-container" id="music-container1">
                                    <!-- 音乐信息 -->
                                    <div class="music-info">
                                        <!-- 音乐标题 -->
                                        <h4 id="title1"></h4>
                                        <!-- 音乐播放进度条 -->
                                        <div class="progress-container" id="progress-container1">
                                            <div class="progress" id="progress1"></div>
                                        </div>
                                    </div>

                                    <!-- 默认第一首音乐 -->
                                    <audio src="music/光年之外.mp3" id="audio1"></audio>

                                    <!-- 音乐封面 -->
                                    <div class="img-container">
                                        <img src="img/光年之外.jpg" alt="music-cover" id="music-cover1">
                                    </div>
                                    <!-- 播放控制 -->
                                    <div class="navigation">
                                        <button id="prev1" class="action-btn">
                                            <i class="fas fa-backward"></i>
                                        </button>
                                        <button id="play1" class="action-btn action-btn-big">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button id="next1" class="action-btn">
                                            <i class="fas fa-forward"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singer">
                            <div class="head">
                                <div class="pictures">
                                    <img src="img/lin.png" alt="">
                                </div>
                                <span>林俊杰</span>
                            </div>
                            <div class="outerbox">
                                <div class="music-container" id="music-container2">
                                    <!-- 音乐信息 -->
                                    <div class="music-info">
                                        <!-- 音乐标题 -->
                                        <h4 id="title2"></h4>
                                        <!-- 音乐播放进度条 -->
                                        <div class="progress-container" id="progress-container2">
                                            <div class="progress" id="progress2"></div>
                                        </div>
                                    </div>

                                    <!-- 默认第一首音乐 -->
                                    <audio src="music/背对背拥抱.mp3" id="audio2"></audio>

                                    <!-- 音乐封面 -->
                                    <div class="img-container">
                                        <img src="img/背对背拥抱.jpg" alt="music-cover" id="music-cover2">
                                    </div>
                                    <!-- 播放控制 -->
                                    <div class="navigation">
                                        <button id="prev2" class="action-btn">
                                            <i class="fas fa-backward"></i>
                                        </button>
                                        <button id="play2" class="action-btn action-btn-big">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button id="next2" class="action-btn">
                                            <i class="fas fa-forward"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singer">
                            <div class="head">
                                <div class="pictures">
                                    <img src="img/cai.png" alt="">
                                </div>
                                <span>蔡依林</span>
                            </div>
                            <div class="outerbox">
                                <div class="music-container" id="music-container3">
                                    <!-- 音乐信息 -->
                                    <div class="music-info">
                                        <!-- 音乐标题 -->
                                        <h4 id="title3"></h4>
                                        <!-- 音乐播放进度条 -->
                                        <div class="progress-container" id="progress-container3">
                                            <div class="progress" id="progress3"></div>
                                        </div>
                                    </div>

                                    <!-- 默认第一首音乐 -->
                                    <audio src="music/日不落.mp3" id="audio3"></audio>

                                    <!-- 音乐封面 -->
                                    <div class="img-container">
                                        <img src="img/日不落.jpg" alt="music-cover" id="music-cover3">
                                    </div>
                                    <!-- 播放控制 -->
                                    <div class="navigation">
                                        <button id="prev3" class="action-btn">
                                            <i class="fas fa-backward"></i>
                                        </button>
                                        <button id="play3" class="action-btn action-btn-big">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button id="next3" class="action-btn">
                                            <i class="fas fa-forward"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singer">
                            <div class="head">
                                <div class="pictures">
                                    <img src="img/chen.png" alt="">
                                </div>
                                <span>陈奕迅</span>
                            </div>
                            <div class="outerbox">
                                <div class="music-container" id="music-container4">
                                    <!-- 音乐信息 -->
                                    <div class="music-info">
                                        <!-- 音乐标题 -->
                                        <h4 id="title4"></h4>
                                        <!-- 音乐播放进度条 -->
                                        <div class="progress-container" id="progress-container4">
                                            <div class="progress" id="progress4"></div>
                                        </div>
                                    </div>

                                    <!-- 默认第一首音乐 -->
                                    <audio src="music/红玫瑰.mp3" id="audio4"></audio>

                                    <!-- 音乐封面 -->
                                    <div class="img-container">
                                        <img src="img/红玫瑰.jpg" alt="music-cover" id="music-cover4">
                                    </div>
                                    <!-- 播放控制 -->
                                    <div class="navigation">
                                        <button id="prev4" class="action-btn">
                                            <i class="fas fa-backward"></i>
                                        </button>
                                        <button id="play4" class="action-btn action-btn-big">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button id="next4" class="action-btn">
                                            <i class="fas fa-forward"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="singer">
                            <div class="head">
                                <div class="pictures">
                                    <img src="img/may.png" alt="">
                                </div>
                                <span>五月天</span>
                            </div>
                            <div class="outerbox">
                                <div class="music-container" id="music-container5">
                                    <!-- 音乐信息 -->
                                    <div class="music-info">
                                        <!-- 音乐标题 -->
                                        <h4 id="title5"></h4>
                                        <!-- 音乐播放进度条 -->
                                        <div class="progress-container" id="progress-container5">
                                            <div class="progress" id="progress5"></div>
                                        </div>
                                    </div>

                                    <!-- 默认第一首音乐 -->
                                    <audio src="music/知足.mp3" id="audio5"></audio>

                                    <!-- 音乐封面 -->
                                    <div class="img-container">
                                        <img src="img/知足.jpg" alt="music-cover" id="music-cover5">
                                    </div>
                                    <!-- 播放控制 -->
                                    <div class="navigation">
                                        <button id="prev5" class="action-btn">
                                            <i class="fas fa-backward"></i>
                                        </button>
                                        <button id="play5" class="action-btn action-btn-big">
                                            <i class="fas fa-play"></i>
                                        </button>
                                        <button id="next5" class="action-btn">
                                            <i class="fas fa-forward"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="aside">
            <div class="rank">
                <span>
                    榜单达人
                </span>
            </div>
            <div class="rank_outer">
                <div class="rank_inner">
                    <div class="rank_content">
                        <div class="roles1">
                            <span class="role_number">1</span>
                            <div class="role_head"><img src="img/wang.png" alt=""></div>
                            <span class="role_name"><a href="https://baike.baidu.com/item/%E7%8E%8B%E8%8F%B2/11029"
                                    target="_blank">王菲</a></span>
                        </div>
                        <div class="roles2">
                            <span class="role_number">2</span>
                            <div class="role_head"><img src="img/chen.png" alt=""></div>
                            <span class="role_name"><a
                                    href="https://baike.baidu.com/item/%E9%99%88%E5%A5%95%E8%BF%85/128029"
                                    target="_blank">陈奕迅</a></span>
                        </div>
                        <div class="roles3">
                            <span class="role_number">3</span>
                            <div class="role_head"><img src="img/zhou.png" alt=""></div>
                            <span class="role_name"><a
                                    href="https://baike.baidu.com/item/%E5%91%A8%E6%9D%B0%E4%BC%A6/129156"
                                    target="_blank">周杰伦</a></span>
                        </div>
                        <div class="roles">
                            <span class="role_number">4</span>
                            <div class="role_head"><img src="img/li.png" alt=""></div>
                            <span class="role_name"><a
                                    href="https://baike.baidu.com/item/%E6%9D%8E%E8%8D%A3%E6%B5%A9/3976957"
                                    target="_blank">李荣浩</a></span>
                        </div>
                        <div class="roles">
                            <span class="role_number">5</span>
                            <div class="role_head"><img src="img/deng.png" alt=""></div>
                            <span class="role_name"><a
                                    href="https://baike.baidu.com/item/%E9%82%93%E7%B4%AB%E6%A3%8B/6798196"
                                    target="_blank">邓紫棋</a></span>
                        </div>
                        <div class="roles">
                            <span class="role_number">6</span>
                            <div class="role_head"><img src="img/may.png" alt=""></div>
                            <span class="role_name"><a
                                    href="https://baike.baidu.com/item/%E4%BA%94%E6%9C%88%E5%A4%A9/17011"
                                    target="_blank">五月天</a></span>
                        </div>
                        <div class="roles">
                            <span class="role_number">7</span>
                            <div class="role_head"><img src="img/shen.png" alt=""></div>
                            <span class="role_name"><a href="https://baike.baidu.com/item/%E5%91%A8%E6%B7%B1/15089196"
                                    target="_blank">周深</a></span>
                        </div>
                        <div class="roles">
                            <span class="role_number">8</span>
                            <div class="role_head"><img src="img/jie.png" alt=""></div>
                            <span class="role_name"><a href="https://baike.baidu.com/item/%E5%BC%A0%E6%9D%B0/256"
                                    target="_blank">张杰</a></span>
                        </div>
                        <div class="roles">
                            <span class="role_number">9</span>
                            <div class="role_head"><img src="img/cai.png" alt=""></div>
                            <span class="role_name"><a
                                    href="https://baike.baidu.com/item/%E8%94%A1%E4%BE%9D%E6%9E%97?fromModule=lemma_search-box"
                                    target="_blank">蔡依林</a></span>
                        </div>
                        <div class="roles">
                            <span class="role_number">10</span>
                            <div class="role_head"><img src="img/lin.png" alt=""></div>
                            <span class="role_name"><a
                                    href="https://baike.baidu.com/item/%E6%9E%97%E4%BF%8A%E6%9D%B0/131821"
                                    target="_blank">林俊杰</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="often">
                <span>
                    你的常听
                </span>
            </div>
            <div class="box">
                <div id="context">
                    <div class="pic">
                        <img class="img-slide" src="img/夏日忧伤.png">
                        <img class="img-slide" src="img/光年之外.jpg">
                        <img class="img-slide" src="img/青花瓷.jpg">
                        <img class="img-slide" src="img/七里香.jpg">
                        <img class="img-slide" src="img/浮夸.jpg">
                        <img class="img-slide" src="img/红玫瑰.jpg">
                        <img class="img-slide" src="img/交换余生.jpg">
                    </div>
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
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css';
</style>
<style scoped>
* {
    margin: 0 auto;
    padding: 0;
    /* overflow: hidden; */
}
/*main部分*/
main {
    width: 1054px;
    height: 750px;
}

.aside {
    float: left;
    width: 200px;
    margin-left: 50px;
    height: 750px;
}

.article {
    float: left;
    width: 804px;
    height: 750px;
}

.rank {
    position: relative;
    width: 200px;
    margin: 0;
    height: 48px;
    margin-top: 50px;
    text-align: center;
    border-bottom: 2px solid rgb(145, 205, 255);
}

.rank span {
    position: absolute;
    width: 200px;
    height: 48px;
    left: 0;
    line-height: 50px;
    font-size: 24px;
    font-family: 黑体;

}

.rank_outer {
    width: 200px;
    height: 350px;
    position: relative;
    overflow: hidden;
    background-color: #f9f9f9;
}

.rank_inner {
    position: absolute;
    overflow-y: scroll;
}

.rank_content {
    width: 200px;
    height: 350px;
}

.often {
    position: relative;
    width: 200px;
    margin: 0;
    height: 48px;
    margin-top: 50px;
    text-align: center;
    border-bottom: 2px solid rgb(145, 205, 255);
}

.often span {
    margin: 0;
    position: absolute;
    width: 200px;
    height: 48px;
    left: 0;
    line-height: 50px;
    font-size: 24px;
    font-family: 黑体;
}
.box {
    width: 200px;
    height: 200px;
    zoom: 1;
    overflow: hidden;
}

.box:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
}

#contex {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    float: left;
}

.pic {
    width: 20000px;
    height: 200px;
    transition: all 0s;
    zoom: 1;
}

.pic:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
}

.pic img {
    width: 200px;
    height: 200px;
    float: left;
    display: block;
}

.roles,
.roles1,
.roles2,
.roles3 {
    width: 200px;
    height: 50px;
    margin-bottom: 10px;
    /*解决盒子上下margin重叠*/
    display: inline-block;
}

.role_number {
    float: left;
    width: 40px;
    height: 50px;
    font-size: 16px;
    text-indent: 1em;
    line-height: 50px;
}

.role_head {
    float: left;
    width: 50px;
    height: 50px;
    /*
            控制图片缩放
            */
    display: flex;
    justify-content: center;
    align-items: center;
}

.roles1 .role_name a,
.roles1 {
    color: rgb(236, 232, 3);
}

.roles2 .role_name a,
.roles2 {
    color: rgb(218, 218, 218);
}

.roles3 .role_name a,
.roles3 {
    color: rgb(173, 89, 66);
}

.role_head img {
    width: 40px;
    height: 40px;
}

.role_head img:hover {
    transform: scale(1.2);
    transition: all 0.6s;
}

.role_name {
    float: left;
    width: 110px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
}

.role_name a {
    text-decoration: none;
    color: black;
}

.role_name a:hover {
    color: rgb(44, 125, 245);
}

.recommend {
    width: 802px;
    margin-top: 50px;
    height: 48px;
    position: relative;
    background-color: white;
    border-bottom: 2px solid rgb(145, 205, 255);
    background-color: #f9f9f9;
}

.recommend span {
    width: 180px;
    height: 48px;
    position: absolute;
    margin: 0;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    font-family: 黑体;
    background-color: rgba(226, 245, 251, 0.584);
}

.singers {
    width: 800px;
    height: 650px;
    border-right: 2px solid rgb(200, 200, 200);
    overflow: hidden;
    position: relative;
}

.innerbox {
    position: absolute;
    overflow-y: scroll;
}

.content {
    width: 800px;
    height: 650px;
}

.singer {
    width: 800px;
    height: 180px;
    margin-bottom: 20px;
    background-color: skyblue;
    /*解决盒子上下margin重叠*/
    display: inline-block;

}

.head {
    float: left;
    width: 180px;
    height: 180px;
    margin: 0;

    background-color: #f9f9f9;
}

.pictures {
    width: 180px;
    height: 140px;
    /*
            控制图片缩放
            */
    display: flex;
    justify-content: center;
    align-items: center;
}

.pictures img {
    width: 100px;
    height: 100px;
}

.pictures img:hover {
    transform: scale(1.2);
    transition: all 0.6s;
}

.head span {
    display: inline-block;
    width: 180px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
}

.outerbox {
    width: 500px;
    height: 180px;
    overflow: hidden;
    position: relative;
}

.music-container {
    background-color: #fff;
    /* 设置背景颜色 */
    border-radius: 10px;
    /* 设置边框圆角 */
    box-shadow: 0 20px 20px 0 rgba(8, 182, 212, 0.822);
    /* 设置阴影效果 */
    display: flex;
    /* 设置为弹性布局 */
    padding: 15px 20px;
    /* 设置内边距 */
    position: relative;
    /* 设置定位为相对定位 */
    margin: 65px 0 35px 0;
    /* 设置外边距 */
    z-index: 40;
    /* 设置层级 */
    width: 400px;
    height: 50px;

}

.img-container {
    position: relative;
    /* 设置定位为相对定位 */
    width: 50px;
    /* 设置宽度 */
}

.img-container::after {
    content: "";
    /* 设置伪元素内容为空 */
    background-color: #49cce3;
    /* 设置背景颜色 */
    border-radius: 50%;
    /* 设置圆形 */
    position: absolute;
    /* 设置绝对定位 */
    bottom: 100%;
    /* 距离底部的距离 */
    left: 50%;
    /* 距离左侧的距离 */
    width: 15px;
    /* 设置宽度 */
    height: 15px;
    /* 设置高度 */
    transform: translate(-50%, 50%);
    /* 设置旋转 */
}


.singers .img-container img {
    border-radius: 70%;
    height: 50px;
    width: 50px;
    object-fit: cover;
    position: absolute;
    bottom: -40px;
    left: -20px;
    /* 封面360°旋转，默认不动 */
    animation: rotate 3s linear infinite;
    animation-play-state: paused;
}

.music-container.play .img-container img {
    /* 播放 */
    animation-play-state: running;
}

/* 定义旋转动画 */
@keyframes rotate {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.action-btn {
    /* 取消默认样式 */
    border: 0;
    background-color: #fff;
    /* ----- */
    color: #41bce5;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    margin: 0 20px;
}

.action-btn:focus {
    /* 取消默认样式 */
    outline: 0;
}

.action-btn.action-btn-big {
    color: #0cdae9;
    font-size: 30px;
}



.music-info {
    position: absolute;
    top: 0;
    left: 20px;
    /* 将宽度缩小 */
    width: calc(100% - 150px);
    background-color: #fff;

    /* 减小左侧内边距 */
    padding: 10px;
    padding-left: 100px;
    opacity: 0;
    transform: translateY(0%);
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    z-index: 0;

    /* 添加圆角边框 */
    border-radius: 10px;
}


.music-info h4 {
    /* 取消标题默认边距 */
    margin: 0;
}

.music-container.play .music-info {
    /* 播放时显示 */
    opacity: 3;
    /* 向上平移100% */
    transform: translateY(-100%);
}

.progress-container {
    /* 设置背景色为白色 */
    background-color: #6a0eff;
    /* 设置边框圆角 */
    border-radius: 5px;
    /* 设置鼠标样式为指针 */
    cursor: pointer;
    /* 设置上下边距 */
    margin: 10px 0;
    /* 设置高度 */
    height: 4px;
    /* 宽度占满父元素 */
    width: 100%;
    /* 设置父容器相对定位 */
    position: relative;
}

.progress {
    /* 设置背景色为浅蓝色 */
    background-color: #0decfc;
    /* 设置边框圆角 */
    border-radius: 5px;
    /* 设置高度占满 */
    height: 100%;
    /* 初始宽度为0 */
    width: 0;
    /* 进度条过渡效果 */
    transition: width 0.1s linear;
    /* 设置进度条相对定位 */
    position: absolute;
    /* 从左侧开始 */
    left: 0;
    /* 顶部对齐 */
    top: 0;
}
</style>