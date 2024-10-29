



//漢堡條
// 開關點擊事件的泛用函式
$(".button").click(function () {
	// 指定區域出現速度
	$(".dropdown").slideToggle(500);
	// toggleClass切換(增加或刪除)標籤，這裡是物件增加active標籤
	$(".button").toggleClass("active");
	$(".trun").toggleClass("active-two");

});


var myModal = document.getElementsByClassName("myModal");
var myBtn = document.getElementsByClassName("myBtn");
var close_btn = document.getElementsByClassName("close-btn");

// foreach寫出來會有問題...故用for
for (i = 0; i < myBtn.length; i++) {
	// 開啟彈跳視窗
	myBtn[i].onclick = function () {
		var DataIndex = this.getAttribute('data-index');
		myModal[DataIndex].style.display = "block";
	};

	// 關掉彈跳視窗
	close_btn[i].onclick = function () {
		var DataIndex = this.getAttribute('data-index');
		myModal[DataIndex].style.display = "none";
	};

}

// 載入標籤
window.onload = function () {
	for (i = 0; i < myBtn.length; i++) {
		myBtn[i].setAttribute('data-index', i);
		myModal[i].setAttribute('data-index', i);
		close_btn[i].setAttribute('data-index', i);
	}
};

//  點擊背景關掉彈跳視窗
window.onclick = function (clickevent) {
	if (clickevent.target === myModal[clickevent.target.getAttribute('data-index')]) {
		myModal[clickevent.target.getAttribute('data-index')].style.display = "none";
	}
};


