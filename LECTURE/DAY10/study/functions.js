/*! 01.functions.js @ 2017, yamoo9.net */

// ——————————————————————————————————————————————————————
// 함수
// ——————————————————————————————————————————————————————

// ------------------------------------------------------
// 지난 시간 내용 복습

// 함수 (반복되는 절차 => 재사용) 선언/호출
// 함수 영역 (범위)
// 스코프 체이닝 (함수 중첩)
// this 컨텍스트(Context)
// Arguments(전달인자)와 Parameters(매개변수)
// Arguments(전달인자) 객체
// 재귀(再歸) 함수
// 함수 프로토타입 객체의 능력
//  .call()
//  .apply()
//  .bind()


// ------------------------------------------------------
// 즉시 실행 함수 (IIFE)
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression

// 함수 실행(호출) <- 이름(함수 이름, 함수 값을 참조하는 변수 이름)
// 이름이 없는 함수 (익명 함수, 무명 함수)

// 이름 호출 없이 즉시 실행되는 JavaScript 프로그래밍 언어의 관용어구: 이디엄(idiom)
// (function(){}());
// (function(){})();

// 객체 값을 변수에 참조한 예
var memorial_card = {};

// IIFE 패턴을 사용하여 실행된 결과 값 객체를 반환 받은 변수 예
var another_memorial_card = (function(){
  return {};
}());


// ------------------------------------------------------
// 모듈(Module) 패턴
// JavaScript 모듈 이라는 것을 지원하지 않음(ES5)
// Front-End Env. 확장자가 .js 인 파일이 자체로 독립적이지 않다. (충돌 가능성 높다)
// Back-End Env. 확장자가 .js 인 파일은 자체로 독립적이다. (충돌 X)

// 웹 브라우저에서 아래 파일들을 읽어들이면 모두 전역에 노출된 상태이기에
// 같은 이름의 변수, 함수는 충돌이 발생하게 되고, 프로그램은 망가지게 된다.

// module-A.js
// module-B.js
// module-C.js
// module-D.js

// JavaScript 에서는 모듈 패턴이 없지만, IIFE 패턴을 활용하여 모듈처럼 사용한다.
// 결국 모듈이란? 전역과 구분되는 영역이 존재하면, 그 내부의 변수, 함수는
// 외부에 노출되지 않기에 안전하게 프로그래밍이 유지된다.

// IIFE 패턴을 사용하였기에 전역과 구분되는 영역(모듈)을 만들었지만,
// 외부에서 접근이 원천 봉쇄되기 때문에 내부의 프로그래밍 만 동작하게 되고,
// 외부에서는 접근 조차 할 수 없어 재사용 할 수 없는 문제에 직면한다.

// 노출(명시적 공개) 패턴
// 함수가 반환(return)하는 값(객체, 배열, 함수, 숫자, 문자, 불리언, null)

// 네임스페이스 패턴
// 전역에서 접근 가능한 객체(Namespace)를 하나 정의한 후,
// 각 모듈의 코드 로직을 Namespace 객체의 속성에 할당하자.

// ------------------------------------------------------
// 클로저(Closures)

// Mission 1.
// increaseCount() 함수를 작성해보세요.

// 전역 변수 count 를 선언해야 함수가 접근해서 값을 변경
// var count = 0;

// function increaseCount() {
//   // 어떻게 해야 count가 1씩 증가하게 될까?
//   // var count = 0;
//   return ++count;
// }

// increaseCount(); // 1
// increaseCount(); // 2
// increaseCount(); // 3
// increaseCount(); // 4

// 클로저 예제
// 외부 함수
var countDownMaker = function(n) {
  var count = n || 10;
  // 내부 함수
  // 함수 정의 없이 함수 값을 바로 반환할 수 있다.
  return function (step) {
    // 어떻게 해야 count가 1씩 증가하게 될까?
    // var count = 0;
    count -= (step || 1);
    return count;
  }
  // 내부 함수를 외부로 내보낸다.
  // return increaseCount;
};

var countUpMaker = function(n) {
  n = n || 10;
  return function(step) {
    n += (step || 1);
    return n;
  };
};

var countDown10  = countDownMaker(); // return function() {}
var countDown20  = countDownMaker(20); // countDownMaker(20)(4)
var countDown45  = countDownMaker(45);
var countDown100 = countDownMaker(100);

countDown10();  // 9
countDown10(4); // 5

var countUp10  = countUpMaker();
var countUp20  = countUpMaker(20);
var countUp45  = countUpMaker(45);
var countUp100 = countUpMaker(100);

countUp45();  // 46
countUp45(2); // 48


// JavaScript 클로저는 함수만 반환한다?
// JavaScript는 함수 뿐만 아니라, 모든 데이터 유형을 반환할 수 있다.
// 객체를 반환하는 래퍼 함수를 사용하여 클로저를 활용할 수 있다.
// JavaScript 클로저는 함수이다?
// 외부로 유출된 데이터가 함수 내부의 영역의 기억을 가지고 있다면...

// 카운트를 관리하는 객체
function makeCountManager(init_count) {
  // 관리할 카운트 값을 초기화
  var memoried_count = init_count = init_count || 0;
  return {
    // 카운트 증가 메서드
    increase: function(step) {
      init_count += (step || 1);
      return init_count;
    },
    // 카운트 감소 메서드
    decrease: function(step) {
      init_count -= (step || 1);
      return init_count;
    },
    // 카운트 초기화 메서드
    reset: function(value) {
      init_count = value || memoried_count;
    },
    // 현재 카운트 값을 반환하는 메서드
    getCount: function() {
      return init_count;
    }
  };
}
