// // 1. 실수로 글로벌 변수 생성 불가능
// "use strict";
// // 기존 전역 변수
// const g_var = 10;

// g_v = 17;   // ReferenceError 발생

// // 2. 사용할 수 없는 프로퍼티에 할당
// "use strict";

// var undefined = 5;
// var NaN = 10;

// // 3. 유니크한 함수 파라미터 요구
// function sum(a, a, c) {
//   "use strict";
//   return a + a + c;
// }

// console.log(sum(10, 20, 30));
