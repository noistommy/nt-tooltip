import type { ParsedValue, TooltipOptionsInput } from './types'

function camelize(str: string): string {
  // '-' 뒤에 오는 소문자(a-z)를 찾아 대문자로 치환하고 하이픈을 제거합니다.
  return str.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase())
}

function parseValue(rawValue: string): ParsedValue {
  const value = rawValue.trim()

  // Boolean 처리
  if (value === 'true') return true
  if (value === 'false') return false

  // 숫자 처리
  if (value !== '' && !isNaN(Number(value))) return Number(value)

  // Object, Array 처리 (JSON 객체 가능성)
  if ((value.startsWith('{') && value.endsWith('}')) || (value.startsWith('[') && value.endsWith(']'))) {
    try {
      return JSON.parse(value) as Record<string, unknown> | unknown[]
    } catch {
      // Parsing 실패시 원문 반환
      return value
    }
  }

  // 나머지(문자열 등)
  return value
}

/**
 * `tooltip="pos:top-center;invert:true"` 같은 속성 문자열을 파싱해
 * 옵션 객체로 변환합니다.
 *
 * 주의: 키는 임의의 문자열을 camelCase로 변환할 뿐, 런타임에서
 * `TooltipOptionsInput`의 키/값 타입과 일치하는지 검증하지는 않습니다.
 * 잘못된 키(예: 오타)가 들어와도 타입 에러 없이 조용히 무시됩니다.
 */
export function parseOptions(attrString?: string | null): TooltipOptionsInput {
  const options: Record<string, ParsedValue> = {}
  if (!attrString) return options as TooltipOptionsInput

  // 1. 세미콜론(;)을 기준으로 각 옵션을 분리
  const pairs = attrString.split(';')

  pairs.forEach((pair) => {
    // 2. 첫 번째 콜론(:)을 기준으로 key와 value를 분리
    //    (value 안에 콜론이 포함될 수 있으므로 split(':')로 전체를 나누지 않는다)
    const colonIndex = pair.indexOf(':')
    if (colonIndex === -1) return

    const key = pair.slice(0, colonIndex).trim()
    const rawValue = pair.slice(colonIndex + 1)

    if (!key || rawValue === undefined) return

    // 3. 키값은 카멜케이스로 변경하고, 벨류값은 타입을 변환하여 객체에 바인딩
    const camelKey = camelize(key)
    options[camelKey] = parseValue(rawValue)
  })

  return options as TooltipOptionsInput
}
