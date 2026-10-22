export const base = `
<Parent nt-tooltip="content: Tooltip Content;">...</Parent>
`;

export const contentType = `
// 콘텐츠를 속성 값으로 제공
<Parent nt-tooltip=" content: Content Type; ">Content</Parent>
// 속성 값으로 true를 제공하고 자식 태그로  nt-target를 제공
<Parent nt-tooltip="true">
  Target
  <span nt-target="true">Target Type</span>
</Parent>
`;

export const invert = `
// @name: invert
// @type: boolean
// @default: true

<Parent nt-tooltip="... invert: true;">Invert Theme</Parent>
<Parent nt-tooltip="... invert: false;">Equal Theme</Parent>
`;

export const trigger = `
// @name: trigger
// @type: 'hover' | 'click' | 'focus'
// @default: 'hover'

<Parent nt-tooltip="... trigger: hover;">Hover</Parent>
<Parent nt-tooltip="... trigger: click;">Click</Parent>
<Parent nt-tooltip="... trigger: focus;">Focus</Parent>
`;

export const external = `
// @name: external
// @type: 'show' | 'hide' | null
// @default: null

<Parent nt-tooltip="... external: show;">Show</Parent>
<Parent nt-tooltip="... external: hide;">Hide</Parent>
`;

export const position = `
// @name: pos
// @type: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left-start' | 'left-center' | 'left-end' | 'right-start' | 'right-center' | 'right-end'
// @default: 'top-center'

<Parent nt-tooltip="pos: top;">Top</Parent>
<Parent nt-tooltip="pos: bottom;">Bottom</Parent>
<Parent nt-tooltip="pos: left;">Left</Parent>
<Parent nt-tooltip="pos: right;">Right</Parent>
`;

export const motion = `
// @name: motion
// @type: 'scale' | 'slide'
// @default: 'scale'

<Parent nt-tooltip="motion: scale;">Motion Scale</Parent>
<Parent nt-tooltip="motion: slide;">Motion Slide</Parent>
`;

export const aligns = `
// @name: pos
// @type: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left-start' | 'left-center' | 'left-end' | 'right-start' | 'right-center' | 'right-end'
// @default: 'top-center'

<Parent nt-tooltip="pos: top-start;">Top Start</Parent>
<Parent nt-tooltip="pos: top-center;">Top Center</Parent>
<Parent nt-tooltip="pos: top-end;">Top End</Parent>
<Parent nt-tooltip="pos: bottom-start;">Bottom Start</Parent>
<Parent nt-tooltip="pos: bottom-center;">Bottom Center</Parent>
<Parent nt-tooltip="pos: bottom-end;">Bottom End</Parent>
<Parent nt-tooltip="pos: left-start;">Left Start</Parent>
<Parent nt-tooltip="pos: left-center;">Left Center</Parent>
<Parent nt-tooltip="pos: left-end;">Left End</Parent>
<Parent nt-tooltip="pos: right-start;">Right Start</Parent>
<Parent nt-tooltip="pos: right-center;">Right Center</Parent>
<Parent nt-tooltip="pos: right-end;">Right End</Parent>
`;

export const offset = `
// @name: offset
// @type: number
// @default: 10

<Parent nt-tooltip="content: Offset; offset: {number};">
  Offset ({number}px)
</Parent>
`;

export const size = `
// @name: size
// @type: 'small' | null
// @default: 'normal'

<Parent nt-tooltip="content: Small; size: small;">Small</Parent>
<Parent nt-tooltip="content: Normal;">Normal</Parent>
`;

export const maxWidth = `
// @name: maxWidth
// @type: number
// @default: 250

<Parent nt-tooltip="maxWidth: 150;">150px</Parent>
<Parent nt-tooltip="maxWidth: 250;">250px</Parent>
<Parent nt-tooltip="maxWidth: 500;">500px</Parent>
`;

export const textAlign = `
// @name: textAlign
// @type: 'left' | 'center' | 'right'
// @default: 'left'

<Parent nt-tooltip="textAlign: left;">Left Text</Parent>
<Parent nt-tooltip="textAlign: center;">Center Text</Parent>
<Parent nt-tooltip="textAlign: right;">Right Text</Parent>
`;

export const padding = `
// @name: padding
// @type: number
// @default: 8

<Parent nt-tooltip="padding: 4;">4px Padding</Parent>
<Parent nt-tooltip="padding: 16;">16px Padding</Parent>
<Parent nt-tooltip="padding: 24;">24px Padding</Parent>
`;

export const zIndex = `
// @name: zIndex
// @type: number
// @default: 99999999

<Parent nt-tooltip="zIndex: 1;">1</Parent>
<Parent nt-tooltip="zIndex: 1000;">1000</Parent>
<Parent nt-tooltip="zIndex: 99999999;">99999999</Parent>
`;

const npm = `
npm install @noistommy/nt-tooltip
`

const cdn = `
<!-- unpkg -->
<script src="https://unpkg.com/@noistommy/nt-tooltip"></script>
<link href="https://unpkg.com/@noistommy/nt-tooltip/dist/nt-tooltip.css"></link>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@noistommy/nt-tooltip"></script>
<link href="https://cdn.jsdelivr.net/npm/@noistommy/nt-tooltip/dist/nt-tooltip.css"></link>
`

const usage = `
// app.tsx
import { initTooltip, clearTooltip } from "@noistommy/nt-tooltip";
import "@noistommy/nt-tooltip/nt-tooltip.css";


function App() {
  useEffect(() => {
    initTooltip();
    return () => {
      clearTooltip();
    }
  }, []);
  ...
}

`
const usage_vue = `
// app.vue
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { initTooltip, clearTooltip } from "@noistommy/nt-tooltip";
import "@noistommy/nt-tooltip/nt-tooltip.css";

onMounted(() => initTooltip())
onUnmounted(() => clearTooltip())

</script>

`
const cjs = `
const ntTooltip = require("@noistommy/nt-tooltip");
require("@noistommy/nt-tooltip/nt-tooltip.css");

// after mounted Dom
ntTooltip.initTooltip();
`
const umd = `
// loaded nt-tooltip.umd.js file from CDN(unpkg, jsdelivr)

document.addEventListener("DOMContentLoaded", () => {
  NtTooltip.initTooltip();
});
`
export const usage_component = `
// in component
// HTML Attribute in JSX || .vue || html ...

<div nt-tooltip="{ ...tooltip options }"></div>
// or
<div nt-tooltip="{ ...tooltip options }">
  <span nt-target="true">
    Contents
  </span>
</div>

`

export const install = {
  npm:  { name: 'npm', lang: 'bash', code: npm },
  cdn:  { name: 'cdn', lang: 'html', code: cdn },
}
export const initial = {
  react: { name: 'react(es)', lang: 'tsx', code: usage },
  vue: { name: 'vue(es)', lang: 'vue', code: usage_vue },
  cjs: { name: 'cjs', lang: 'javascript', code: cjs },
  umd: { name: 'udm', lang: 'javascript', code: umd },
}
