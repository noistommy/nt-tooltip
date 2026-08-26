# NT Tooltip

![Static Badge](https://img.shields.io/badge/react-only-%234FC08D)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E)
![Static Badge](https://img.shields.io/badge/html-%23E34F26?logo=html)
![Static Badge](https://img.shields.io/badge/sass-%23CC6699)
![Static Badge](https://img.shields.io/badge/vite-bundler-%23646CFF)

`react-nt-tooltip` is a lightweight tooltip module for React. Tooltips are applied via the custom `nt-tooltip` HTML attribute, allowing you to intuitively identify which element the tooltip is bound to directly in JSX. It can display simple text content or complex HTML structures via a child element with the `nt-target` attribute. The display position can be controlled with options such as `top`, `bottom`, `left`, and `right`.

`react-nt-tooltip`은 React용 툴팁 모듈이다. `nt-tooltip` 커스텀 HTML 속성을 통해 툴팁을 적용하며, JSX 작성 시 툴팁이 적용된 엘리먼트를 직관적으로 확인할 수 있다. 간단한 텍스트는 속성 값으로, 복잡한 HTML 콘텐츠는 `nt-target` 속성을 가진 자식 엘리먼트로 전달 가능하다. 표시 위치는 `top`, `bottom`, `left`, `right` 등의 옵션으로 지정할 수 있다.(정확히 top-center, top-start, top-end, bottom-center ... 처럼 방향 정렬을 지원한다.)

---

## Demo

![docs_preview](https://github.com/user-attachments/assets/2967be7e-61cf-4066-894d-945b83ff9c49)

[react-nt-tooltip](https://noistommy.github.io/react-nt-tooltip) demo page.

---

## Installation

```bash
npm install react-nt-tooltip
```

---

## Usage

### Registration

```jsx
import React, { useEffect } from "react";
// Import module
import {initTooltip, clearTooltip } from "react-nt-tooltip";

// import  style css or use yours
import “react-nt-tooltip/tooltip.css”;


function App() {
  useEffect(() => {
    initTooltip();
    return () => {
      clearTooltip();
    }
  }, []);
  ...
}

```

### Use Tooltip in Component JSX

```html
<!-- basic -->
<div nt-tooltip="content: tooltip content;">...</div>

<!-- content type -->
<div nt-tooltip="true">
  <div nt-target="true">Tooltip content</div>
</div>

<!-- setting options -->
<div
  nt-tooltip="content: tooltip content; pos: 'right-top'; size: 'large'; invert: false; ..."
>
  ...
</div>
```

---

## Options

- **content**: _string_ ▶︎ ``  
  Content of tooltip
- **trigger**: _string_ ▶︎ `hover`  
  Select to event trigger of tooltip
- **invert**: _boolean_ ▶︎ `true`  
  Invert theme of tooltip with system theme's default
- **size**: _'small' | null_ ▶︎ `null`
- **padding**: _number_ ▶︎ ``
- **customClass**: _string_ ▶︎ ``
- **maxWidth**: _number_ ▶︎ `250`
- **textAlign**: _'left' | 'center' | 'right'_ ▶︎ `center`
- **offset**: _number_ ▶︎ `10`
- **external**: _'show' | 'hide' | null_ ▶︎ `null`
