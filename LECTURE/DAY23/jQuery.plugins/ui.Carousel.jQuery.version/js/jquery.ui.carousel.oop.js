/*! jquery.ui.carousel.js © yamoo9.net, 2016 */
// --------------------------------------------------------------------------------------------
// TODO:
//
// 0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
// 1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
// 2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
// 3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
// 4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
// 5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
// 6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.
// 7. 객체 지향 자바스크립트 방식으로 코드를 변경한다. (e.g: new Carousel('#bs3-headphone') )
// --------------------------------------------------------------------------------------------

(function(global, $){
  'use strict';

  // 문서객체 참조
  var document = global.document;

  // 전역에 공개하여 사용하는 공통 함수
  global.playAnimation = function(callback, time) {
    time = time || 3000;
    return global.setInterval(callback, time);
  };
  global.stopAnimation = function(stop_id) {
    global.clearInterval(stop_id);
  };

  // 플러그인 모듈 내부 어디에서든 참조 가능하도록 객체 참조 변수 선언
  var $widget,
      $wrapper,
      $panels,
      $tablist,
      $tabs,
      $button_group,
      panel_width,
      // 초기 변수
      stop_id         = 0,
      // 옵션 설정
      settings,
      defaults = {
        'active_index'   : 0,
        'using_animation': true,
        'using_autoPlay' : true,
        'rolling_time'   : 3000,
      };

  // 생성자 함수
  function Carousel(dom_el) {
    this.init();
    this.bindEvents();
  }

  // 프로토타입 객체
  Carousel.fn = Carousel.prototype = {
    'init': function() {

    },
    'bindEvents': function() {

    }
  };

  // 플러그인: 인스턴스 메소드
  var carousel = function(options) {
    settings = $.extend({}, defaults, options);
    var $this = this;
    return $.each($this, function(index){
      new Carousel(this);
    });
    $widget = this;
    // 컴포넌트 구현 초기화
    init();
    // 이벤트 연결
    bindEvents();
  };
  // 초기화 함수
  var init = function() {
    // 캐러셀 컴포넌트 객체 참조
    $tablist      = $widget.find('.ui-carousel-tablist');
    $tabs         = $widget.find('.ui-carousel-tab');
    $button_group = $widget.find('.ui-carousel-button-group');
    $wrapper      = $widget.find('.ui-carousel-tabpanel-wrapper');
    $panels       = $wrapper.find('.ui-carousel-tabpanel');
    // 초기 실행
    settingWrapperSize();
    resizeCarouselHeight();
    settings.using_autoPlay && autoPlay();
  };
  // 이벤트 연결 함수
  var bindEvents = function() {
    // 리사이즈 이벤트 핸들링
    $(global).on({
      'resize.change_carousel': resizeCarouselHeight,
      'resize.change_wrapper': settingWrapperSize
    });
    // 탭 이벤트 핸들링
    $.each($tabs, function(index) {
      var $tab = $tabs.eq(index);
      $tab.on({
        'click': $.proxy(activeTabPanel, $tab, index),
        'focus': stopPlay
      });
    });
    // 버튼 이벤트 핸들링
    $button_group.on('click', 'button', function(e){
      $.$(this).index() ? nextContent() : prevContent();
    });
    // 자동재생 이벤트 핸들링
    $widget.on({
      'mouseenter': stopPlay,
      'mouseleave': autoPlay
    });
  };
  // 래퍼 객체의 너비 설정 함수
  var settingWrapperSize = function() {
    // 컴포넌트 너비 구하기
    panel_width = $widget.width();
    // 패널 너비를 컴포넌트 너비로 설정
    $panels.width( panel_width );
    // 래퍼 너비를 컴포넌트 너비 x 패널 개수로 설정
    var wrapper_width = panel_width * $panels.length;
    $wrapper.width(wrapper_width);
    // 현재 활성화된 페이지를 재정렬
    activeTabPanel(settings.active_index);
  };
  // 창 크기 조정에 따른 캐러셀 높이 조정 함수
  var resizeCarouselHeight = function () {
    $widget.height( $panels.height() );
  };
  // 탭패널 활성화하는 함수
  var activeTabPanel = function(index, e) {
    e && e.preventDefault();
    // index 값으로 활성화 인덱스 업데이트
    settings.active_index = index;
    moveWrapperPosX( settings.active_index );
    updateIndicators( settings.active_index );
  };
  // 래퍼 객체를 이동시키는 함수
  var moveWrapperPosX = function(active_index) {
    var distance_x = -panel_width * active_index + 'px';
    settings.using_animation ?
      $wrapper.stop().animate({'left': distance_x}, 600) :
      $wrapper.css('left', distance_x);
  };
  // 업데이트 인디케이터 함수
  var updateIndicators = function(active_index) {
    $tabs.eq(active_index).parent().radioClass('active');
  };
  // 다음 콘텐츠 보기 함수
  var nextContent = function() {
    settings.active_index = ++settings.active_index % $panels.length;
    activeTabPanel(settings.active_index);
  };
  // 이전 콘텐츠 보기 함수
  var prevContent = function() {
    settings.active_index = --settings.active_index < 0 ? ($panels.length - 1) : settings.active_index;
    activeTabPanel(settings.active_index);
  };
  // 자동 재생 함수
  var autoPlay = function() {
    stop_id = global.playAnimation(nextContent, settings.rolling_time);
  };
  // 멈춤 함수
  var stopPlay = function() {
    global.stopAnimation(stop_id);
  };

  // 플러그인으로 함수 연결
  if (!$.fn.carousel) {
    $.fn.carousel = carousel;
    // 초기 옵션 설정(외부에서 접근 가능)
    $.fn.carousel.defaults = defaults;
  }

})(this, this.jQuery);
