// 일반 함수, 익명 함수, 화살표 함수 비교
function a() {
    console.log("a func")
}
const b = function() {
	console.log("b func");
}
const c = () => console.log("c func");

a();
b();
c();
console.log(a);
console.log(b);
console.log(c);