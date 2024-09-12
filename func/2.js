// 익명 함수 호이스팅 이슈
a();
b();

function a() {
	console.log("a func");
}

const b = function() {
	console.log("b func");
}