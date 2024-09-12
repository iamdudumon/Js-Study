// 클로저와 스코프
globalThis.x = 5;

function a() {
	const x = 9;

	function decl() {
		console.log(x);
	}
	const expr = function () {
		console.log(x);
	}
	const arro = () => {
		console.log(x);
	}
	const cons = new Function("\tconsole.log(x);");

	decl();
	expr();
	arro();
	cons();
}

a();