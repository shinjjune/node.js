## jQuery 연습 (20190914~20190915)

참고: 생활코딩 (url: https://opentutorials.org/course/53)

### jQuery
```
jQuery는 자바스크립트의 생산성을 향상시켜주는 자바스크립트 라이브러리 입니다. 
라이브러리란 자주 사용되는 로직들을 재활용,유통 가능하도록 만든 로직들의 묶음을 의미합니다.
자바스크립트의 세계에는 많은 라이브러리들이 있습니다. 
prototype, jQuery, YUI 등등
구글트랜드로 검색을 해보니 현재는 jQuery가 가장 많은 사용자를 가지고 있는 것 같습니다.
jQuery를 이용하면 순수한 자바스크립트로 코딩하는 것 보다 10배 이상 생산성을 높일 수 있습니다. 
또 jQuery는 파생된 라이브러리들을 가지고 있는데요. 
jQuery UI는 jQuery기반의 GUI 라이브러리입니다.
이것을 이용해서 윈도우 에플리케이션과 같은 기능성의 UI를 만들 수 있습니다.

최근에는 jQuery Mobile라는 이름의 모바일 라이브러리를 출시해서 
모바일용 웹에플리케이션을 만드는데도 많은 도움을 주고 있습니다.  
```

### 라이브러리란?(library)

자주 사용하는 코드들을 재사용할 수 있는 형태로 가공해서 프로그래밍 효율을 높여주는 코드들

### jQuery란?

* 엘리먼트를 선택하는 강력한 방법과
* 선택된 엘리먼트들을 효율적으로 제어할 수 있는 다양한 수단을 제공하는
* 자바스크립트 라이브러리


### 레퍼(wrapper)란?
jQuery(엘리먼트 오브젝트 | 'CSS스타일 선택자')

jQuery로 표시한 부분이 레퍼, 인자로 전달된 요소들에 jQuery의 기능성을 부가해서 반환

### 선택자

jQuery wrapper에는 CSS 선택자가 위치할 수 있는데, 이를 통해서 제어하려는 엘리먼트를 빠르고 정확하게 지정할 수 있다.

### Chain이란?

jQuery의 메소드들은 반환값으로 자기 자신을 반환해야 한다는 규칙을 가지고 있다.
이를 이용하면 한번 선택한 대상에 대해서 연속적인 제어를 할 수 있다.

### chain의 장점

* 코드가 간결해진다.
* 인간의 언어와 유사해서 사고의 자연스러운 과정과 일치함.

### 탐색(traversing)
* chain의 대상을 바꿔서 체인을 계속 연장시킬 수 있는 방법
* http://api.jquery.com/category/traversing/
* taeyo.net jQuery traverse 강좌
* 너무 복잡한 chain은 코드의 가독성을 떨어 뜨릴 수 있다.


### 이벤트란?
* 시스템에서 일어나는 사건을 의미
* javascript나 jQuery에게 이벤트란 브라우져에서 일어나는 사건을 의미한다. (클릭, 마우스 이동, 타이핑, 페이지 로딩등)
* 이벤트가 발생했을 때 작동할 로직을 시스템에게 알려두면 이벤트가 발생했을 때 시스템이 그 로직을 호출한다.
* 이벤트에 대한 기본적인 내용은 자바스크립트 이벤트 편 참고 http://opentutorials.org/course/49

### jQuery의 이벤트
* 크로스브라우징의 문제를 해결해줌
* bind로 이벤트 핸들러를 설치하고, unbind로 제거 (예제1)
* trigger로 이벤트 핸들러를 강제로 실행 (예제2)
* click, ready와 같이 다양한 이벤트 헬퍼(helper)를 제공함
* live를 이용하면 현재 존재 하지 않는 엘리먼트에 이벤트 핸들러를 설치할 수 있음

### 엘리먼트 제어
* jQuery는 엘리먼트를 제어하는 일관되고 풍부한 기능들을 제공한다.
* http://api.jquery.com/category/manipulation/

#### element
* 자식으로 삽입 (.append(), .appendTo(), .html(), .prepend(), .prependTo(), .text())
* 형제로 삽입 (.after(), .before(), .insertAfter(), .insertBefore())
* 부모로 감싸기 (.unwrap(), .wrap(), .wrapAll(), .wrapInner())
* 삭제 (.detach(), .empty(), .remove(), .unwrap())
* 치환 (.replaceAll(), .replaceWith())
* 클래스 (.addClass(), .hasClass(), .removeClass(), .toggleClass())
* 속성제어 (.attr(), .prop(), .removeAttr(), .removeProp(), .val())

### 폼

* 서버로 데이터를 전송하기 위한 수단
* 생활코딩 HTML 튜토리얼 폼 편 참고
* Query는 폼을 제어하는데 필요한 이벤트와 메소드를 제공한다.
* jQuery 폼 API 문서 : http://api.jquery.com/category/forms/

### 효과란?

* 자바스크립트와 CSS를 이용해서 HTML엘리먼트에 동적인 효과를 줄 수 있다.
* jQuery의 효과 메소드를 호출하는 것만으로 간단히 효과를 줄 수 있다.

### ajax란?

* Asynchronous JavaScript and XML 의 약자
* 자바스크립트를 이용해서 비동기식으로 서버와 통신하는 방식. 이 때 XML을 이용한다.
* 꼭 XML을 이용할 필요는 없고, 최근에는 json을 더 많이 이용한다.
* 비동기식이란 여러가지 일이 동시적으로 발생한다는 뜻으로, 서버와 통신하는 동안 다른 작업을 할 수 있다는 의미.

