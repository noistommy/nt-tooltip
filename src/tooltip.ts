import './tooltip.scss'
import { parseOptions } from './tooltip-utill'
import type {
  TooltipAlign,
  TooltipDirection,
  TooltipOptions,
  TooltipOptionsInput,
} from './types'

export type {
  TooltipTrigger,
  TooltipDirection,
  TooltipAlign,
  TooltipOptions,
  TooltipOptionsInput,
} from './types'

export class Tooltip {
  #defaultOption: TooltipOptions = {
    content: '',
    pos: 'top-center',
    invert: true,
    show: false,
    trigger: 'hover',
    selector: 'nt-tooltip',
    size: null,
    padding: 8,
    maxWidth: 250,
    textAlign: 'center',
    offset: 10,
    customClass: '',
    external: null,
    zIndex: null,
  }

  root: HTMLElement
  options: TooltipOptions
  tooltip: HTMLDivElement | null = null
  currenPos: string | null = null
  touchTimer: ReturnType<typeof setTimeout> | null = null
  longTouch = false

  private _show: boolean

  constructor(root: HTMLElement, options: TooltipOptionsInput = {}) {
    this.root = root
    this.options = { ...this.#defaultOption, ...options }
    this._show = false
    if (this.options.external) {
      this.setExternal(this.options.external)
    } else {
      this.#createEvents()
    }
  }

  #createEvents(): void {
    if (this.options.trigger === 'hover') {
      this.root.addEventListener('mouseenter', this.setShow)
      this.root.addEventListener('mouseleave', this.setClose)
    } else if (this.options.trigger === 'focus') {
      this.root.addEventListener('focusin', this.setShow)
      this.root.addEventListener('focusout', this.setClose)
    } else {
      this.root.addEventListener('click', this.setToggle)
    }
  }

  update(options: TooltipOptionsInput): void {
    this.options = { ...this.options, ...options }
    if (this.options.external) {
      this.setExternal(this.options.external)
    }
    if (this._show) {
      this.setAttribute()
      this.setPosition()
    }
  }

  destroy(): void {
    this.setClose()
    if (this.options.trigger === 'hover') {
      this.root.removeEventListener('mouseenter', this.setShow)
      this.root.removeEventListener('mouseleave', this.setClose)
    } else if (this.options.trigger === 'focus') {
      this.root.removeEventListener('focusin', this.setShow)
      this.root.removeEventListener('focusout', this.setClose)
    } else {
      this.root.removeEventListener('click', this.setToggle)
    }
  }

  setShow = (): void => {
    if (this._show) return
    this._show = true
    this.setTooltip()
  }

  setClose = (): void => {
    this._show = false
    if (this.tooltip) {
      this.tooltip.classList.remove('show')
      this.tooltip.remove()
      this.tooltip = null
    }
    window.removeEventListener('scroll', this.setPosition, true)
    window.removeEventListener('resize', this.setPosition)
  }

  setToggle = (): void => {
    if (this._show) {
      this.setClose()
    } else {
      this.setShow()
    }
  }

  setExternal(option: 'show' | 'hide' | null): void {
    if (option === 'show') {
      this.setShow()
    } else {
      this.setClose()
    }
  }

  setTooltip(): void {
    if (this.tooltip && this._show) this.setClose()

    this.tooltip = document.createElement('div')
    this.setAttribute()
    document.body.append(this.tooltip)
    this.setPosition()

    window.addEventListener('scroll', this.setPosition, true)
    window.addEventListener('resize', this.setPosition)
    requestAnimationFrame(() => {
      this.tooltip?.classList.add('show')
    })
  }

  setAttribute(): void {
    if (!this.tooltip) return

    this.tooltip.innerHTML = this.options.content
      ? this.options.content
      : (this.root.querySelector('[nt-target]') as HTMLElement | null)?.innerHTML ?? ''

    this.tooltip.classList.add(
      ...([
        this.options.selector,
        this.options.invert ? 'invert' : null,
        this.options.size,
        this.options.customClass ? `${this.options.customClass}`.trim() : null,
      ].filter(Boolean) as string[])
    )
    this.tooltip.style.maxWidth = this.options.maxWidth + 'px'
    this.tooltip.style.paddingBlock = this.options.padding + 'px'
    this.tooltip.style.paddingInline = (Number(this.options.padding) * 1.5) + 'px'
    this.tooltip.style.textAlign = this.options.textAlign
    if (this.options.zIndex) {
      this.tooltip.style.zIndex = this.options.zIndex
    }
  }

  setPosition = (): void => {
    if (!this._show || !this.tooltip) return

    const W = window.innerWidth
    const H = window.innerHeight
    let [dir, align] = (this.options.pos.split('-') as [TooltipDirection, TooltipAlign]) || ['top', 'center']

    const rootPos = this.root.getBoundingClientRect()
    const ttPos = this.tooltip.getBoundingClientRect()
    const offset = Number(this.options.offset)
    const alignOffset = 0

    const tPos = rootPos.top - ttPos.height - offset
    const bPos = rootPos.bottom + offset

    const lPos = rootPos.left - (ttPos.width + offset)
    const rPos = rootPos.right + offset

    if (dir === 'top' && tPos < 0) dir = 'bottom'
    if (dir === 'bottom' && H - (bPos + ttPos.height) < 0) dir = 'top'

    if (dir === 'left' && lPos < 0) dir = 'right'
    if (dir === 'right' && W - (rPos + ttPos.width) < 0) dir = 'left'

    if (dir === 'top' || dir === 'bottom') {
      this.tooltip.style.top = dir === 'top' ? tPos + 'px' : bPos + 'px'
      const cPos = rootPos.left + rootPos.width / 2 - ttPos.width / 2
      const endPos = rootPos.right - ttPos.width
      if (rootPos.width >= ttPos.width) {
        align = 'center'
      } else {
        if (align === 'center' && cPos < 0) {
          align = 'start'
        }
        if (W - rootPos.right - (ttPos.width / 2 - rootPos.width / 2) < 0) {
          align = 'end'
        }
      }
      this.tooltip.style.left =
        align === 'center'
          ? cPos + 'px'
          : align === 'end'
          ? alignOffset + endPos + 'px'
          : alignOffset + rootPos.left + 'px'
    } else {
      this.tooltip.style.left = dir === 'left' ? `${lPos}px` : `${rPos}px`
      const cPos = rootPos.top + rootPos.height / 2 - ttPos.height / 2
      const endPos = rootPos.bottom - ttPos.height

      if (rootPos.height >= ttPos.height) {
        align = 'center'
      } else {
        if (align === 'center' && cPos < 0) {
          align = 'start'
        }
        if (W - rootPos.right - (ttPos.width / 2 - rootPos.width / 2) < 0) {
          align = 'end'
        }
      }
      this.tooltip.style.top = align === 'center' ? cPos + 'px' : align === 'end' ? endPos + 'px' : rootPos.top + 'px'
    }

    if (this.currenPos) {
      this.tooltip.classList.remove(this.currenPos)
    }
    this.currenPos = `${dir}-${align}`
    this.tooltip.classList.add(this.currenPos)
  }

  get show(): boolean {
    return this._show
  }

  set show(value: boolean) {
    if (value) {
      this.setShow()
    } else {
      this.setClose()
    }
  }
}

const activeInstances = new Map<Element, Tooltip>()

const SELECTOR_NAME = 'nt-tooltip'
let observer: MutationObserver | null = null

export function initTooltip(): void {
  clearTooltip()

  createTooltip(document.body)
  observeTarget()

  console.log(`${activeInstances.size}개의 툴팁 활성`)
}

function createTooltip(root: Node): void {
  if (root.nodeType !== 1) return

  const el = root as HTMLElement

  if (el.hasAttribute(SELECTOR_NAME)) {
    createInstance(el)
  }
  el.querySelectorAll<HTMLElement>(`[${SELECTOR_NAME}]`).forEach(createInstance)
}

function createInstance(el: HTMLElement): void {
  const options = parseOptions(el.getAttribute(SELECTOR_NAME) ?? '')
  const instance = new Tooltip(el, options)
  activeInstances.set(el, instance)
}

function updateInstance(el: HTMLElement): void {
  const options = parseOptions(el.getAttribute(SELECTOR_NAME) ?? '')
  const existing = activeInstances.get(el)

  if (!existing) {
    createInstance(el)
    return
  }

  if (typeof existing.update === 'function') {
    existing.update(options)
  } else {
    existing.destroy?.()
    createInstance(el)
  }
}

function removeInstance(el: Element): void {
  const existing = activeInstances.get(el)
  if (existing) {
    existing.destroy?.()
    activeInstances.delete(el)
  }
}

function observeTarget(): void {
  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === SELECTOR_NAME) {
        const el = mutation.target as HTMLElement
        if (el.hasAttribute(SELECTOR_NAME)) { updateInstance(el) } else { removeInstance(el) }
        continue
      }

      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) createTooltip(node)
        })
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          const el = node as HTMLElement
          removeInstance(el)
          el.querySelectorAll?.(`[${SELECTOR_NAME}]`).forEach(removeInstance)
        })
      }
    }
  })

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: [SELECTOR_NAME],
    childList: true,
    subtree: true,
  })
}

export function clearTooltip(): void {
  activeInstances.forEach((instance) => instance.destroy?.())
  activeInstances.clear()
  observer?.disconnect()
  observer = null
}
