/*! 01.functions.js @ 2017, yamoo9.net */

// ——————————————————————————————————————————————————————
// 함수
// 1. MDN 레퍼런스는 끝나기 한시간 전에 읽어보라고 이야기 할 겁니다.
// 2. 내일 뭐할 건지 이야기 드립니다.
// ——————————————————————————————————————————————————————

// ---------------------------------------
// 함수 선언하기
// 1. 함수 식(익명함수)을 변수에 할당(대입) -> 참조
var registerUserInfo = function() { console.log('registerUserInfo 함수 실행'); };
// 2. 함수 이름을 붙여서 선언하기 -> 함수 선언문
function getUserInfo(){ console.log('getUserInfo 함수 실행'); }


// ---------------------------------------
// 함수 호출하기
// 함수인지 검증 후 실행

// [문] if문을 사용한 예
if ( isFunction(registerUserInfo) ) {
  registerUserInfo();
}

// [식] 논리 연산자(&&, ||)를 사용한 예
// m1 && m2: m1이 참일 때 m2도 실행
// m1 || m2: m1이 거짓일 때 m2가 실행
isFunction(getUserInfo) && getUserInfo();

// ---------------------------------------
// 함수 범위(영역, Scope)
// 전역, 지역
// ES6 이전의 환경에서는 범위는 함수 영역 밖에 존재하지 않는다.

// ---------------------------------------
// 스코프 체인(Scope Chain)

// Global Scope
var g_scope = '전역 변수';
// Local Scope (in function)
function localScope() {
  // 함수 안 (지역)
  // 1. 변수 영역
  // 2. Parameters(매개변수) 영역
  // 3. 함수를 포함하는 상위 영역
  // 4. 전역
  // 5. ReferenceError 발생!
  console.log('g_scope:', g_scope);

  // 함수는 실행 가능
  innerScopeFn();
  // 스코프 호이스팅 현상 발생
  function innerScopeFn() {
    console.log('l_scope:', l_scope); // ???
    var l_scope = '지역 변수';
  }

}

// 함수 실행
// 전역에서 localScope라는 함수가 실행되었다.
// 전역 변수, 전역 함수 -> 전역 객체의 속성(메서드) 이다.
// window.localScope()
localScope();


// ---------------------------------------
// this 컨텍스트(Context)
// 영역 내, this 변수가 무엇을 참조하나?
// 함수를 누가 실행시켰나?
// 컨텍스트 메뉴(Context Menu)

// 전역 함수 정의
// window 전역 객체의 속성(메서드)
function whoCallMe() {
  // this는 자신(this)을 포함하는 함수를 실행시킨 컨텍스트 객체(주체)
  console.log('this:', this);
}
// 명시적 함수 실행
window.whoCallMe(); // this -> window {}

// 암시적 함수 실행
whoCallMe(); // this -> window {}

// 객체의 속성(메서드) 정의
var me = {
  whatIsThis: function() {
    console.log('this:', this);
  },
  // whoCallMe: whoCallMe
  callMe: whoCallMe
};

// 명시적 함수(객체.속성(메서드)) 실행
me.whatIsThis(); // this -> me {}


// ---------------------------------------
// Arguments(전달인자)와 Parameters(매개변수)
function displayBlockElement(el) {
  // 매개변수 el = 전달인자;
  // el = <element id="app"></element>;
  // var 를 사용하는 것은 일반 변수
  // 함수의 선언 구문 () 괄호 안에 선언된 변수 === 매개변수(parameters)
  // 함수 로직
  // 전달 받은 요소의 display 스타일 속성 값을 'block'으로 설정한다.
  el.style.display         = 'block';
  // CSS 속성(2개 이상의 음절로 구분되는)을 적용한 예시
  el.style.borderTopColor  = '#4321fe';
  el.style['margin-right'] = '1rem';
}

// 함수가 실행될 때,
// 무엇을 전달할 것인가?
// 전달인자(arguments)
// displayBlockElement( document.getElementById('app') ); // <element id="app"></element>

// this 참조 검증
// 전역 함수를 정의
// 전역 함수 명시적 실행
// 전역 함수 암시적 실행을 통해 this 가 참조하는 객체가 무엇인지 확인
// 전역에서 this는 무엇을 참조(가리키나)?

// 사용자 객체를 정의
// 사용자 객체의 메서드로 이미 정의된 바 있는 전역 함수를 참조 시켜본다. (함수이름 O, 함수이름() X )
// 사용자 객체의 메서드를 실행해 봄으로서 this 가 참조하는 객체를 확인한다.


// ---------------------------------------
// Arguments(전달인자) 객체

// 수의 합을 반환하는 함수
function sum(n1, n2, n3, n4, n5) {
  // 전달된 인자가 몇 개인지 모를 때?
  // 인자를 집합으로 만들면?
  // 사용자가 전달한 인자들을 집합(Array)의 아이템으로 설정해보세요.

  var num_collection = [n1, n2, n3 ,n4 ,n5];
  num_collection.push(n3);
  num_collection.push(n4);
  num_collection.push(n5);

  // num_collection.length === 5

  // length를 알고 있는 당신?
  // 구문 반복 처리
  // while, do ~ while, for
  var l = num_collection.length; // l === 5
  var result = 0;
  while (l--) {
    var n = num_collection[l]; // 4, 3, 2, 1
    if ( !isNumber(n) ) { throw '오류' }
    result += n;
  }
  return result;
}

function anotherSum() {
  // 사용자가 함수를 실행할 때, 전달한 인자의 집합 객체를 참조하는 변수 제공
  // 유사 배열(Array like Object): 배열과 비슷
  // 배열처럼 length 속성을 가진다.

  // arguments // [1, 2], [1, 2, 3, 4, 5], [1010, 100, 210, 35, -20]

  // for ( var n, k=0, i=0, l=arguments.length; i<l; ++i ) {
  //   n= arguments[i];
  //   k += n;
  // }
  // return k;

  for ( var n=0, i=0, l=arguments.length; i<l; ++i ) {
    n += arguments[i];
  }
  return n;
}

var r1 = anotherSum(1, 2); // 2
var r2 = anotherSum(1, 2, 3, 4, 5); // 5
var r3 = anotherSum(1010, 100, 210, 35, -20); // 5

console.log('r1:', r1);
console.log('r2:', r2);
console.log('r3:', r3);

// ---------------------------------------------------
// arguments 객체는 배열일까?
function argumentsObjectIsntArray() {
  // arguments 객체는 유사 배열로
  // length 속성을 가지지만,
  // 배열의 메서드를 사용할 수는 없다.
  console.log(arguments);
  console.log(arguments.length);
  console.log('arguments.push:', !!arguments.push);
}

argumentsObjectIsntArray();
argumentsObjectIsntArray([9, 8, 7]);

// ---------------------------------------------------
// arguments 객체는 배열이 아닌데, 배열처럼 사용할 수 없을까?
function argumentsConvertArray() {
  var args = makeArray(arguments);
  console.log(!!args.push); // true
}

// [4, null, [1, 3]]
argumentsConvertArray(4, null, [1, 3])


// ---------------------------------------
// 재귀(再歸) 함수
// 자신을 다시 호출하는 함수
// arguments.callee - 주의! 사용하지 마세요.

// 팩토리얼(Factorial)
// http://www.mathatube.com/images/factorials.JPG
// 1! = 1 = 1
// 2! = 2 x 1 = 2
// 3! = 3 x 2 x 1 = 6
// 4! = 4 x 3 x 2 x 1 = 24
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
  if ( n < 2 ) { return 1; }

  // 재귀 함수가 아닌, 반복문을 활용한 예
  // var nn = n;
  // do { nn *= --n; }
  // while(n > 1);
  // return nn;

  // 재귀 함수를 활용한 예
  // 2 x 1
  // 3 x 2 x 1
  return n * factorial(--n);
}



// ---------------------------------------
// Number.prototype
// String.prototype
// Boolean.prototype
// Array.prototype
// Object.prototype
//
// 함수 프로토타입 객체(선언, 할당된 모든 함수객체)가 가진 능력
// .call()
// .apply()
// .bind()    <- 2009, ES5 (IE 9+)
// Function.prototype

// Function.prototype {}
// console.dir(Function.prototype);

// 일반적인 함수 실행에서의 this
// (객체.)함수() // this === 객체
var electric_fan = {
  name: '선풍기',
  on: function(power, time) {
    console.log('this:', this);
    power = power || 1;
    time = time || 1;
    console.log(this.name + '를 파워 '+ power +' 만큼 '+ time +'시간 동안 세게 가동하다');
  },
  off: function() {
    console.log('this:', this);
    console.log(this.name + '를 가동 중지하다');
  },
}

// .call(), .apply() 실행에서의 this
// this 컨텍스트 객체를 교체(변경)할 수 있다.
// (객체.)함수.call(컨텍스트 객체, 전달인자(각각 콤마로 구분 전달));
// (객체.)함수.apply(컨텍스트 객체 전달인자(배열로 묶어서 전달));

// .bind() 에서의 this
// 상황에 따라서 함수를 바로 실행시키지 않고, 나중에 임의로 실행시켜야 하는 상황
// this는 컨텍스트 객체를 교체, 전달인자를 2번째 인자 값으로 전달할 수 있다.
// call, apply 와의 차이점!!!! 바로 실행되지 않는다.

var winPowerTime = electric_fan.on.bind(window);

// Q. bind()는 call() 처럼 전달 인자를 콤마로 구분해서 전달하나?
//    아니면 apply() 처럼 전달인자를 배열로 묶어서 전달하나?

// A. 테스트 결과 call() 처럼 콤마로 구분해서 전달해야 하며,
//    배열로 묶어 전달할 경우, 첫번째 인자로 배열이 전달된다.