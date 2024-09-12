// Arrow 함수 this
global.x = "global x"

function decl() {
	console.log(this);
	console.log(this.x);
}
const obj1 = {
	x: "local x",
	fun: decl
}

const arro = () => {
	console.log(this);
	console.log(this.x);
	console.log(global.x);
}
const obj2 = {
	x: "loca x",
	fun: arro
}

obj1.fun();
obj2.fun();
