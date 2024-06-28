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
		$('#context .pictures').css('margin-left', n * -800 + 'px')
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
