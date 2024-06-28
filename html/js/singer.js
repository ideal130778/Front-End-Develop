/*小轮播图*/
$(function () {
	var n = 0
	var t
	function picImg(num) {
		clearTimeout(t)
		if (typeof num == 'number') {
			n = num
		} else {
			n++
		}
		if (n > 6) {
			n = 0
		}
		$('#context .pic').css('margin-left', n * -200 + 'px')
		if (typeof num != 'number') {
			t = setTimeout(function () {
				picImg()
			}, 1000)
		}
	}
	t = setTimeout(function () {
		picImg()
	}, 1000)
})

/*小轮播图*/

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const musicCover = document.getElementById('music-cover');

// 音乐信息
const songs = ['稻香', 'Mojito', '七里香', '青花瓷'];
// 默认从第一首开始
let songIndex = 0;
// 将歌曲细节加载到DOM
loadSong(songs[songIndex]);
// 更新歌曲细节
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  musicCover.src = `img/${song}.jpg`;
}

// 播放歌曲
function playSong(e) {
  // 元素添加类名
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// 停止播放
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// 上一首
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  // 加载歌曲信息并播放
  loadSong(songs[songIndex]);
  playSong();
}
// 下一首
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// 进度条更新
function updateProgress(e) {
  // audio.duration: 音频长度
  // audio.currentTime: 音频播放位置
  // 对象解构操作
  const { duration, currentTime } = e.target;
  // e.target = {
  //     duration: 225,  // 当前音频时间长度
  //     currentTime:0  // 当前播放时间
  // }
  const progressPercent = (currentTime / duration) * 100;
  // 进度条
  progress.style.width = `${progressPercent}%`;
}
// 设置进度条
function setProgress(e) {
  // progressContainer代理视图宽度
  const width = this.clientWidth;
  // 鼠标点击时处于progressContainer里的水平偏移量
  const clickX = e.offsetX;

  // audio.duration: 音频长度
  const duration = audio.duration;

  // audio.currentTime: 音频播放位置
  audio.currentTime = (clickX / width) * duration;
}
// 事件监听
// 1.播放歌曲
playBtn.onclick = function () {
  console.log(1);
  // 判断当前是否是正在播放

  // const isPlaying = musicContainer.classList.contains('play')
  // if (isPlaying) {
  //     pauseSong()
  // } else {
  //     playSong()
  // }
  musicContainer.classList.contains('play') ? pauseSong() : playSong();
};
// 2.切换歌曲
prevBtn.onclick = prevSong;
nextBtn.onclick = nextSong;

// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer.onclick = setProgress;
// 3.2 进度条更新
audio.ontimeupdate = updateProgress;
// 3.3 歌曲结束后自动下一首
audio.onended = nextSong;

const musicContainer1 = document.getElementById('music-container1');
const playBtn1 = document.getElementById('play1');
const prevBtn1 = document.getElementById('prev1');
const nextBtn1 = document.getElementById('next1');
const audio1 = document.getElementById('audio1');
const progress1 = document.getElementById('progress1');
const progressContainer1 = document.getElementById('progress-container1');
const title1 = document.getElementById('title1');
const musicCover1 = document.getElementById('music-cover1');

// 音乐信息
const songs1 = ['光年之外', '多远都要在一起', '句号', '泡沫'];
// 默认从第一首开始
let songIndex1 = 0;
// 将歌曲细节加载到DOM
loadSong1(songs1[songIndex1]);
// 更新歌曲细节
function loadSong1(song) {
  title1.innerHTML = song;
  audio1.src = `music/${song}.mp3`;
  musicCover1.src = `img/${song}.jpg`;
}

// 播放歌曲
function playSong1() {
  const musicContainer1 = document.getElementById('music-container1');
  // 元素添加类名
  musicContainer1.classList.add('play');
  playBtn1.querySelector('i.fas').classList.remove('fa-play');
  playBtn1.querySelector('i.fas').classList.add('fa-pause');

  audio1.play();
}

// 停止播放
function pauseSong1() {
  musicContainer1.classList.remove('play');
  playBtn1.querySelector('i.fas').classList.add('fa-play');
  playBtn1.querySelector('i.fas').classList.remove('fa-pause');
  audio1.pause();
}

// 上一首
function prevSong1() {
  songIndex1--;
  if (songIndex1 < 0) {
    songIndex1 = songs1.length - 1;
  }
  // 加载歌曲信息并播放
  loadSong1(songs1[songIndex1]);
  playSong1();
}
// 下一首
function nextSong1() {
  songIndex1++;

  if (songIndex1 > songs1.length - 1) {
    songIndex1 = 0;
  }

  loadSong1(songs1[songIndex1]);

  playSong1();
}

// 进度条更新
function updateProgress1(e) {
  // audio.duration: 音频长度
  // audio.currentTime: 音频播放位置
  // 对象解构操作
  const { duration, currentTime } = e.target;
  // e.target = {
  //     duration: 225,  // 当前音频时间长度
  //     currentTime:0  // 当前播放时间
  // }
  const progressPercent = (currentTime / duration) * 100;
  // 进度条
  progress1.style.width = `${progressPercent}%`;
}
// 设置进度条
function setProgress1(e) {
  // progressContainer代理视图宽度
  const width = this.clientWidth;
  // 鼠标点击时处于progressContainer里的水平偏移量
  const clickX = e.offsetX;

  // audio.duration: 音频长度
  const duration = audio1.duration;

  // audio.currentTime: 音频播放位置
  audio1.currentTime = (clickX / width) * duration;
}
// 事件监听
// 1.播放歌曲
playBtn1.onclick = function () {
  // 判断当前是否是正在播放
  musicContainer1.classList.contains('play') ? pauseSong1() : playSong1();
};
// 2.切换歌曲
prevBtn1.onclick = prevSong1;
nextBtn1.onclick = nextSong1;

// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer1.onclick = setProgress1;
// 3.2 进度条更新
audio1.ontimeupdate = updateProgress1;
// 3.3 歌曲结束后自动下一首
audio1.onended = nextSong1;


const musicContainer2 = document.getElementById('music-container2');
const playBtn2 = document.getElementById('play2');
const prevBtn2 = document.getElementById('prev2');
const nextBtn2 = document.getElementById('next2');
const audio2 = document.getElementById('audio2');
const progress2 = document.getElementById('progress2');
const progressContainer2 = document.getElementById('progress-container2');
const title2 = document.getElementById('title2');
const musicCover2 = document.getElementById('music-cover2');

// 音乐信息
const songs2 = ['背对背拥抱', '心墙', '可惜没如果', '交换余生'];
// 默认从第一首开始
let songIndex2 = 0;
// 将歌曲细节加载到DOM
loadSong2(songs2[songIndex2]);
// 更新歌曲细节
function loadSong2(song) {
  title2.innerHTML = song;
  audio2.src = `music/${song}.mp3`;
  musicCover2.src = `img/${song}.jpg`;
}

// 播放歌曲
function playSong2() {
  const musicContainer2 = document.getElementById('music-container2');
  // 元素添加类名
  musicContainer2.classList.add('play');
  playBtn2.querySelector('i.fas').classList.remove('fa-play');
  playBtn2.querySelector('i.fas').classList.add('fa-pause');

  audio2.play();
}

// 停止播放
function pauseSong2() {
  musicContainer2.classList.remove('play');
  playBtn2.querySelector('i.fas').classList.add('fa-play');
  playBtn2.querySelector('i.fas').classList.remove('fa-pause');
  audio2.pause();
}

// 上一首
function prevSong2() {
  songIndex2--;
  if (songIndex2 < 0) {
    songIndex2 = songs2.length - 1;
  }
  // 加载歌曲信息并播放
  loadSong2(songs2[songIndex2]);
  playSong2();
}
// 下一首
function nextSong2() {
  songIndex2++;

  if (songIndex2 > songs2.length - 1) {
    songIndex2 = 0;
  }

  loadSong2(songs2[songIndex2]);

  playSong2();
}

// 进度条更新
function updateProgress2(e) {
  // audio.duration: 音频长度
  // audio.currentTime: 音频播放位置
  // 对象解构操作
  const { duration, currentTime } = e.target;
  // e.target = {
  //     duration: 225,  // 当前音频时间长度
  //     currentTime:0  // 当前播放时间
  // }
  const progressPercent = (currentTime / duration) * 100;
  // 进度条
  progress2.style.width = `${progressPercent}%`;
}
// 设置进度条
function setProgress2(e) {
  // progressContainer代理视图宽度
  const width = this.clientWidth;
  // 鼠标点击时处于progressContainer里的水平偏移量
  const clickX = e.offsetX;

  // audio.duration: 音频长度
  const duration = audio2.duration;

  // audio.currentTime: 音频播放位置
  audio2.currentTime = (clickX / width) * duration;
}
// 事件监听
// 1.播放歌曲
playBtn2.onclick = function () {
  // 判断当前是否是正在播放
  musicContainer2.classList.contains('play') ? pauseSong2() : playSong2();
};
// 2.切换歌曲
prevBtn2.onclick = prevSong2;
nextBtn2.onclick = nextSong2;

// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer2.onclick = setProgress2;
// 3.2 进度条更新
audio2.ontimeupdate = updateProgress2;
// 3.3 歌曲结束后自动下一首
audio2.onended = nextSong2;



const musicContainer3 = document.getElementById('music-container3');
const playBtn3 = document.getElementById('play3');
const prevBtn3 = document.getElementById('prev3');
const nextBtn3 = document.getElementById('next3');
const audio3 = document.getElementById('audio3');
const progress3 = document.getElementById('progress3');
const progressContainer3 = document.getElementById('progress-container3');
const title3 = document.getElementById('title3');
const musicCover3 = document.getElementById('music-cover3');

// 音乐信息
const songs3 = ['日不落', 'play我呸', '大艺术家', '爱情36计'];
// 默认从第一首开始
let songIndex3 = 0;
// 将歌曲细节加载到DOM
loadSong3(songs3[songIndex3]);
// 更新歌曲细节
function loadSong3(song) {
  title3.innerHTML = song;
  audio3.src = `music/${song}.mp3`;
  musicCover3.src = `img/${song}.jpg`;
}

// 播放歌曲
function playSong3() {
  const musicContainer3 = document.getElementById('music-container3');
  // 元素添加类名
  musicContainer3.classList.add('play');
  playBtn3.querySelector('i.fas').classList.remove('fa-play');
  playBtn3.querySelector('i.fas').classList.add('fa-pause');

  audio3.play();
}

// 停止播放
function pauseSong3() {
  musicContainer3.classList.remove('play');
  playBtn3.querySelector('i.fas').classList.add('fa-play');
  playBtn3.querySelector('i.fas').classList.remove('fa-pause');
  audio3.pause();
}

// 上一首
function prevSong3() {
  songIndex3--;
  if (songIndex3 < 0) {
    songIndex3 = songs3.length - 1;
  }
  // 加载歌曲信息并播放
  loadSong3(songs3[songIndex3]);
  playSong3();
}
// 下一首
function nextSong3() {
  songIndex3++;

  if (songIndex3 > songs3.length - 1) {
    songIndex3 = 0;
  }

  loadSong3(songs3[songIndex3]);

  playSong3();
}

// 进度条更新
function updateProgress3(e) {
  // audio.duration: 音频长度
  // audio.currentTime: 音频播放位置
  // 对象解构操作
  const { duration, currentTime } = e.target;
  // e.target = {
  //     duration: 225,  // 当前音频时间长度
  //     currentTime:0  // 当前播放时间
  // }
  const progressPercent = (currentTime / duration) * 100;
  // 进度条
  progress3.style.width = `${progressPercent}%`;
}
// 设置进度条
function setProgress3(e) {
  // progressContainer代理视图宽度
  const width = this.clientWidth;
  // 鼠标点击时处于progressContainer里的水平偏移量
  const clickX = e.offsetX;

  // audio.duration: 音频长度
  const duration = audio2.duration;

  // audio.currentTime: 音频播放位置
  audio3.currentTime = (clickX / width) * duration;
}
// 事件监听
// 1.播放歌曲
playBtn3.onclick = function () {
  // 判断当前是否是正在播放
  musicContainer3.classList.contains('play') ? pauseSong3() : playSong3();
};
// 2.切换歌曲
prevBtn3.onclick = prevSong3;
nextBtn3.onclick = nextSong3;

// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer3.onclick = setProgress3;
// 3.2 进度条更新
audio3.ontimeupdate = updateProgress3;
// 3.3 歌曲结束后自动下一首
audio3.onended = nextSong3;



const musicContainer4 = document.getElementById('music-container4');
const playBtn4 = document.getElementById('play4');
const prevBtn4 = document.getElementById('prev4');
const nextBtn4 = document.getElementById('next4');
const audio4 = document.getElementById('audio4');
const progress4 = document.getElementById('progress4');
const progressContainer4 = document.getElementById('progress-container4');
const title4 = document.getElementById('title4');
const musicCover4 = document.getElementById('music-cover4');

// 音乐信息
const songs4 = ['红玫瑰', '浮夸', '最佳损友', '是但求其爱'];
// 默认从第一首开始
let songIndex4 = 0;
// 将歌曲细节加载到DOM
loadSong4(songs4[songIndex4]);
// 更新歌曲细节
function loadSong4(song) {
  title4.innerHTML = song;
  audio4.src = `music/${song}.mp3`;
  musicCover4.src = `img/${song}.jpg`;
}

// 播放歌曲
function playSong4() {
  const musicContainer4 = document.getElementById('music-container4');
  // 元素添加类名
  musicContainer4.classList.add('play');
  playBtn4.querySelector('i.fas').classList.remove('fa-play');
  playBtn4.querySelector('i.fas').classList.add('fa-pause');

  audio4.play();
}

// 停止播放
function pauseSong4() {
  musicContainer4.classList.remove('play');
  playBtn4.querySelector('i.fas').classList.add('fa-play');
  playBtn4.querySelector('i.fas').classList.remove('fa-pause');
  audio4.pause();
}

// 上一首
function prevSong4() {
  songIndex4--;
  if (songIndex4 < 0) {
    songIndex4 = songs4.length - 1;
  }
  // 加载歌曲信息并播放
  loadSong4(songs4[songIndex4]);
  playSong4();
}
// 下一首
function nextSong4() {
  songIndex4++;

  if (songIndex4 > songs4.length - 1) {
    songIndex4 = 0;
  }

  loadSong4(songs4[songIndex4]);
  playSong4();
}

// 进度条更新
function updateProgress4(e) {
  // audio.duration: 音频长度
  // audio.currentTime: 音频播放位置
  // 对象解构操作
  const { duration, currentTime } = e.target;
  // e.target = {
  //     duration: 225,  // 当前音频时间长度
  //     currentTime:0  // 当前播放时间
  // }
  const progressPercent = (currentTime / duration) * 100;
  // 进度条
  progress4.style.width = `${progressPercent}%`;
}
// 设置进度条
function setProgress4(e) {
  // progressContainer代理视图宽度
  const width = this.clientWidth;
  // 鼠标点击时处于progressContainer里的水平偏移量
  const clickX = e.offsetX;

  // audio.duration: 音频长度
  const duration = audio4.duration;

  // audio.currentTime: 音频播放位置
  audio4.currentTime = (clickX / width) * duration;
}
// 事件监听
// 1.播放歌曲
playBtn4.onclick = function () {
  // 判断当前是否是正在播放
  musicContainer4.classList.contains('play') ? pauseSong4() : playSong4();
};
// 2.切换歌曲
prevBtn4.onclick = prevSong4;
nextBtn4.onclick = nextSong4;

// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer4.onclick = setProgress4;
// 3.2 进度条更新
audio4.ontimeupdate = updateProgress4;
// 3.3 歌曲结束后自动下一首
audio4.onended = nextSong4;



const musicContainer5 = document.getElementById('music-container5');
const playBtn5 = document.getElementById('play5');
const prevBtn5 = document.getElementById('prev5');
const nextBtn5 = document.getElementById('next5');
const audio5 = document.getElementById('audio5');
const progress5 = document.getElementById('progress5');
const progressContainer5 = document.getElementById('progress-container5');
const title5 = document.getElementById('title5');
const musicCover5 = document.getElementById('music-cover5');

// 音乐信息
const songs5 = ['知足', '干杯', '拥抱', '离开地球表面'];
// 默认从第一首开始
let songIndex5 = 0;
// 将歌曲细节加载到DOM
loadSong5(songs5[songIndex5]);
// 更新歌曲细节
function loadSong5(song) {
  title5.innerHTML = song;
  audio5.src = `music/${song}.mp3`;
  musicCover5.src = `img/${song}.jpg`;
}

// 播放歌曲
function playSong5() {
  const musicContainer5 = document.getElementById('music-container5');
  // 元素添加类名
  musicContainer5.classList.add('play');
  playBtn5.querySelector('i.fas').classList.remove('fa-play');
  playBtn5.querySelector('i.fas').classList.add('fa-pause');

  audio5.play();
}

// 停止播放
function pauseSong5() {
  musicContainer5.classList.remove('play');
  playBtn5.querySelector('i.fas').classList.add('fa-play');
  playBtn5.querySelector('i.fas').classList.remove('fa-pause');
  audio5.pause();
}

// 上一首
function prevSong5() {
  songIndex5--;
  if (songIndex5 < 0) {
    songIndex5= songs5.length - 1;
  }
  // 加载歌曲信息并播放
  loadSong5(songs5[songIndex5]);
  playSong5();
}
// 下一首
function nextSong5() {
  songIndex5++;

  if (songIndex5 > songs5.length - 1) {
    songIndex5 = 0;
  }

  loadSong5(songs5[songIndex5]);

  playSong5();
}

// 进度条更新
function updateProgress5(e) {
  // audio.duration: 音频长度
  // audio.currentTime: 音频播放位置
  // 对象解构操作
  const { duration, currentTime } = e.target;
  // e.target = {
  //     duration: 225,  // 当前音频时间长度
  //     currentTime:0  // 当前播放时间
  // }
  const progressPercent = (currentTime / duration) * 100;
  // 进度条
  progress5.style.width = `${progressPercent}%`;
}
// 设置进度条
function setProgress5(e) {
  // progressContainer代理视图宽度
  const width = this.clientWidth;
  // 鼠标点击时处于progressContainer里的水平偏移量
  const clickX = e.offsetX;

  // audio.duration: 音频长度
  const duration = audio2.duration;

  // audio.currentTime: 音频播放位置
  audio5.currentTime = (clickX / width) * duration;
}
// 事件监听
// 1.播放歌曲
playBtn5.onclick = function () {
  // 判断当前是否是正在播放
  musicContainer5.classList.contains('play') ? pauseSong5() : playSong5();
};
// 2.切换歌曲
prevBtn5.onclick = prevSong5;
nextBtn5.onclick = nextSong5;

// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer5.onclick = setProgress5;
// 3.2 进度条更新
audio5.ontimeupdate = updateProgress5;
// 3.3 歌曲结束后自动下一首
audio5.onended = nextSong5;
