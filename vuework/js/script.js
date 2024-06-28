let currentIndex = 0;
const slider = document.getElementById('slider');
const categories = document.querySelectorAll('.category-title');
const totalCategories = categories.length;

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCategories - 1;
    }
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalCategories - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

categories.forEach(category => {
    category.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlider();
    });
});

function updateSlider () {
    const offset = -currentIndex * 25;
    slider.style.transform = `translateX(${offset}%)`;
    categories.forEach((category, index) => {
        if (index === currentIndex) {
            category.classList.add('active');
        } else {
            category.classList.remove('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var playButtons = document.querySelectorAll('.play-button');


    var videoUrls = [
        'videos/Payphone-Maroon-5  Wiz Khalifa.mp4',
        'videos/像我这样的人.mp4',
        'videos/最伟大的作品.mp4',
        'videos/木偶人.mp4.mp4',
        'videos/反方向的钟.mp4',
        'videos/Love Story.mp4',
        'videos/Whataya Want from Me.mp4',
        'videos/句号.mp4'
    ];

    playButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // 获取按钮的索引值
            var index = parseInt(button.getAttribute('data-index'));
            var videoUrl = videoUrls[index]; // 根据按钮索引获取视频URL
            var newWindow = window.open();
            newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>视频播放</title>
            </head>
            <body>
            
            <video id="fullscreen-video" width="100%" height="100%" controls autoplay playsinline>
                <source src="${videoUrl}" type="video/mp4">
                您的浏览器不支持视频播放。
            </video>
            
            </body>
            </html>
        `);
        });
    });
});
// 储存歌曲的url
var audiourl = [
    {
        url: "music/稻香.mp3",
        title: "稻香",
        img: "img/稻香.png"
    },
    {
        url: "music/红尘客栈.mp3",
        title: "红尘客栈",
        img: "img/红尘客栈.png"
    },
    {
        url: "music/调查中.mp3",
        title: "调查中",
        img: "img/调查中.png"
    },   
    {
        url: "music/木偶人.mp3",
        title: "木偶人",
        img: "img/木偶人.png"
    },
    {
        url: "music/像我这样的人.mp3",
        title: "像我这样的人",
        img: "img/像我这样的人.jpg"
    },
    
    {
        url: "music/烟火里的尘埃.mp3",
        title: "烟火里的尘埃",
        img: "img/烟火里的尘埃.png"
    },
    {
        url: "music/七里香.mp3",
        title: "七里香",
        img: "img/七里香.png"
    },
    
    {
        url: "music/溯.mp3",
        title: "溯",
        img: "img/溯.jpg"
    },
    {

        url: "music/Whataya Want from Me.mp3",
        title: "Whataya Want from Me",
        img: "img/Whataya Want from Me.jpg"
    },
    {
        url: "music/Love Story.mp3",
        title: "Love Story",
        img: "img/Love Story.jpg"
    },
    {
        url: "music/Payphone.mp3",
        title: "Payphone",
        img: "img/Payphone.png"
    },
    {
        url: "music/wolves.mp3",
        title: "wolves",
        img: "img/wolves.jpg"
    },
    {
        url: "music/Monsters.mp3",
        title: "Monsters",
        img: "img/Monsters.jpg"
    },
    {
        url: "music/Flower of the North.mp3",
        title: "Flower of the North",
        img: "img/Flower of the North.jpg"
    },
    {
        url: "music/Counting Stars.mp3",
        title: "Counting Stars",
        img: "img/Counting Stars.jpg"
    },
    {
        url: "music/Welcome To New York.mp3",
        title: "Welcome To New York",
        img: "img/Welcome To New York.jpg"
    },
    {
        url: "music/千本桜.mp3",
        title: "千本桜",
        img: "img/千本桜.jpg"
    },
    {
        url: "music/胸がドキドキ.mp3",
        title: "胸がドキドキ",
        img: "img/胸がドキドキ.jpg"
    },
    {
        url: "music/Mobius.mp3",
        title: "Mobius",
        img: "img/Mobius.jpg"
    },
    {
        url: "music/βios.mp3",
        title: "βios",
        img: "img/βios.jpg"
    },
    {
        url: "music/怪物.mp3",
        title: "怪物",
        img: "img/怪物.jpg"
    },
    {
        url: "music/名前のない怪物(Instrumental).mp3",
        title: "名前のない怪物(Instrumental)",
        img: "img/名前のない怪物(Instrumental).jpg"
    },
    {
        url: "music/Avid.mp3",
        title: "Avid",
        img: "img/Avid.jpg"
    },
    {
        url: "music/下潜.mp3",
        title: "下潜",
        img: "img/下潜.jpg"
    },
    {
        url: "music/夜曲.mp3",
        title: "夜曲",
        img: "img/夜曲.jpg"
    },
    {
        url: "music/消愁.mp3",
        title: "消愁",
        img: "img/消愁.jpg"
    },
    {
        url: "music/晴天.mp3",
        title: "晴天",
        img: "img/晴天.jpg"
    },
    {
        url: "music/泡沫.mp3",
        title: "泡沫",
        img: "img/泡沫.jpg"
    },
    {
        url: "music/发如雪.mp3",
        title: "发如雪",
        img: "img/发如雪.jpg"
    },
    {
        url: "music/听海.mp3",
        title: "听海",
        img: "img/听海.jpg"
    },
    {
        url: "music/微光.mp3",
        title: "微光",
        img: "img/微光.jpg"
    },
    {
        url: "music/忘情水.mp3",
        title: "忘情水",
        img: "img/忘情水.jpg"
    },
    {
        url: "music/倩女幽魂.mp3",
        title: "倩女幽魂",
        img: "img/倩女幽魂.jpg"
    },
    {
        url: "music/信仰.mp3",
        title: "信仰",
        img: "img/信仰.jpg"
    },
    {
        url: "music/当爱已成往事.mp3",
        title: "当爱已成往事",
        img: "img/当爱已成往事.jpg"
    },
    {
        url: "music/特别的爱给特别的你.mp3",
        title: "特别的爱给特别的你",
        img: "img/特别的爱给特别的你.jpg"
    },
    {
        url: "music/最熟悉的陌生人.mp3",
        title: "最熟悉的陌生人",
        img: "img/最熟悉的陌生人.jpg"
    },
    {
        url: "music/爱就一个字.mp3",
        title: "爱就一个字",
        img: "img/爱就一个字.jpg"
    },
    {
        url: "music/Brainiac Maniac.mp3",
        title: "Brainiac Maniac",
        img: "img/Brainiac Maniac.jpg"
    },
    {
        url: "music/Relentless.mp3",
        title: "Relentless",
        img: "img/Relentless.jpg"
    },
    {
        url: "music/Tracer.mp3",
        title: "Tracer",
        img: "img/Tracer.jpg"
    }



];
var heartImages = document.getElementsByClassName("heartImage");
Array.prototype.forEach.call(heartImages, function(img) {
    var heartFlag = true;
    img.onclick = function() {
        if (heartFlag) {
            img.src = "img/爱心已收藏.png";
            heartFlag = false;
        } else {
            img.src = "img/爱心未收藏.png";
            heartFlag = true;
        }
    }
});

var playBar = document.querySelector('.play-bar');
var playBarImg = document.getElementById("play-bar-img");
var playBarTitle = document.getElementById("play-bar-title");
var audioPlayer2 = document.getElementById("audio-player");
var audioSource = document.getElementById("audio-source");

var playButtons = document.getElementsByClassName("playButton");
Array.prototype.forEach.call(playButtons, function(button) {
    button.onclick = function() {
        var index = button.getAttribute("data-index");
        var music = audiourl[index];

        playBarImg.src = music.img;
        playBarTitle.textContent = music.title;
        audioSource.src = music.url;
        audioPlayer2.load();
        
        audioPlayer2.play();  // 自动播放音频

        playBar.style.bottom = "0px";
        setTimer();

        playBar.style.bottom = "0px";
        setTimer();
    }
});

var timer;
var bottomHoverZone = document.getElementById("bottomHoverZone");

function hidePlayBar() {
    playBar.style.bottom = "-130px";
}

function showPlayBar() {
    playBar.style.bottom = "0px";
}

function setTimer() {
    timer = setTimeout(hidePlayBar, 4000); // 设置 4000 毫秒后自动隐藏播放栏
}

playBar.onmouseover = function() {
    clearTimeout(timer); // 当鼠标悬停在播放栏上时，清除计时器
    playBar.style.bottom = "0px";
}
bottomHoverZone.onmouseover = function() {
    playBar.style.bottom = "0px"; // 当鼠标悬浮在屏幕底部时令播放栏重新出现
}

playBar.onmouseout = function() {
    setTimer(); // 当鼠标离开播放栏时，重新设置计时器
}