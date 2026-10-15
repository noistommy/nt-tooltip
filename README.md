# @noistommy/nt-tooltip

![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E)
![Static Badge](https://img.shields.io/badge/html-%23E34F26?logo=html)
![Static Badge](https://img.shields.io/badge/sass-%23CC6699)
![Static Badge](https://img.shields.io/badge/vite-bundler-%23646CFF)

`nt-tooltip` is a tooltip module written in JavaScript. Tooltips and options are applied via a custom HTML attribute (`nt-tooltip`), so you can intuitively see which elements have tooltips when writing HTML. Simple text can be set as the attribute value, and more complex HTML content can be passed through a child element with the `nt-target` attribute. The tooltip placement can be set with options such as `top`, `bottom`, `left`, and `right`. (More precisely, it uses direction-alignment values such as `top-center`, `top-start`, `top-end`, and `bottom-center`.) In addition to placement, you can also set options such as `invert`, `trigger`, `offset`, `size`, `maxWidth`, and `padding`.

`nt-tooltip`은 Javascript로 만든 툴팁 모듈입니다. 커스텀 HTML 속성명(`nt-tooltip`)을 통해 툴팁과 옵션을 적용하며, HTML 작성 시 툴팁이 적용된 대상 엘리먼트를 직관적으로 확인할 수 있습니다. 간단한 텍스트는 속성 값으로 지정할 수 있고, 복잡한 HTML 콘텐츠는 `nt-target` 속성을 가진 자식 엘리먼트로 전달 가능합니다. 툴팁의 표시 방향은 `top`, `bottom`, `left`, `right` 등의 옵션으로 지정할 수 있습니다. (정확히 top-center, top-start, top-end, bottom-center 와 같이 방향-정렬 값으로 표시합니다.) 방향 지정 외 `invert`, `trigger`, `offset`, `size`, `maxWidth`, `padding` 등의 옵션도 지정 할 수 있습니다.


---

## Demo

![docs_preview](https://github.com/user-attachments/assets/2967be7e-61cf-4066-894d-945b83ff9c49)

[@noistommy/nt-tooltip](https://noistommy.github.io/nt-tooltip) demo page.

---

## Installation

#### NPM

```bash
npm install @noistommy/nt-tooltip
```

#### CDN

```html
<!-- unpkg -->
<script src="https://unpkg.com/@noistommy/nt-tooltip"></script>
<link href="https://unpkg.com/@noistommy/nt-tooltip/dist/nt-tooltip.css"></link>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@noistommy/nt-tooltip"></script>
<link href="https://cdn.jsdelivr.net/npm/@noistommy/nt-tooltip/dist/nt-tooltip.css"></link>
```

---

## Usage

### Registration

**es(React)**

```jsx
import React, { useEffect } from "react";
// Import module
import {initTooltip, clearTooltip } from "@noistommy/nt-tooltip";

// import  style css or use yours
import “@noistommy/nt-tooltip/nt-tooltip.css”;


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

**cjs**

```javascript
const ntTooltip = require("@noistommy/nt-tooltip");
require("@noistommy/nt-tooltip/nt-tooltip.css");

// after mounted Dom
ntTooltip.initTooltip();
```

**umd**

```javascript
// loaded nt-tooltip.umd.js file from CDN(unpkg, jsdelivr)

document.addEventListener("DOMContentLoaded", () => {
  NtTooltip.initTooltip();
});
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
  nt-tooltip="content: tooltip content; pos: top-start; size: small; invert: false; ..."
>
  ...
</div>
```

---

## Options

- **content**: _string_ ▶︎ ``  
  Content of tooltip
- **pos**: _string_ ▶︎ ``  
  {top | bottom | left | right} - {start | center | end}
- **trigger**: _string_ ▶︎ `hover`  
  Select to event trigger of tooltip 'hover' | 'click' | 'focus'
- **invert**: _boolean_ ▶︎ `true`  
  Invert theme of tooltip with system theme's default
- **size**: _'small' | null_ ▶︎ `null`
- **padding**: _number_ ▶︎ ``
- **customClass**: _string_ ▶︎ ``
- **maxWidth**: _number_ ▶︎ `250`
- **textAlign**: _'left' | 'center' | 'right'_ ▶︎ `center`
- **offset**: _number_ ▶︎ `10`
- **external**: _'show' | 'hide' | null_ ▶︎ `null`
- **zIndex**: _number | null_ ▶︎ `null`
  Default css value: `--nt-max-z-index: 99999999` 
