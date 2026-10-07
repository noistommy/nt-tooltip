export type TooltipTrigger = 'hover' | 'click' | 'focus'
export type TooltipDirection = 'top' | 'bottom' | 'left' | 'right'
export type TooltipAlign = 'start' | 'center' | 'end'

export interface TooltipOptions {
  content: string
  pos: string
  invert: boolean
  show: boolean
  trigger: TooltipTrigger
  selector: string
  size: 'small' | 'large' | null
  padding: number
  maxWidth: number
  textAlign: string
  offset: number
  customClass: string
  external: 'show' | 'hide' | null
  zIndex: string | null
}

export type TooltipOptionsInput = Partial<TooltipOptions>

export type ParsedValue = string | number | boolean | Record<string, unknown> | unknown[]
