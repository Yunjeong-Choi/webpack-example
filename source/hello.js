/*
ES 모듈(즉, export/import 사용)에서는
파일마다 자체적인 스코프(모듈 스코프)가 생깁니다.
export된 값만 import를 통해 외부에서 사용할 수 있습니다.
var/let/const로 선언한 변수는 해당 파일(모듈) 안에서만 유효합니다.

모듈화 하기 전에는 전역에서 word를 사용할 수 있었음
*/

var word = "hello";

export default word;
