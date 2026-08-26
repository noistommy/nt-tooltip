
import {useState} from 'react';
import CodeBlock from '../CodeBlock';
import * as Codes from './code';

// const codeList = {
//   base: '<div nt-tooltip="content: Tooltip Content;">...</div>',
//   invert: ``
// }

export default function MainPage() {
  const [position, setPosition] = useState('top');
  const [align, setAlign] = useState('center');
  const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore at adipisci voluptates voluptatibus nemo amet deserunt doloremque labore! Quisquam, doloremque!'
  const [show, setShow] = useState('hide');

  return (
    <div className="pb-10" style={{maxWidth: '780px', width: '100%', margin: '0 auto'}}>
      <GetStart />
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Base</div>
          <p>대상 요소에 속성을 부여 하여 간단하게 툴팁을 생성 할 수 있습니다. 버튼 위에 커서를 올려보세요.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <div className="be-button border" nt-tooltip={`content: Tooltip Content;`}>
                      Hover Me!
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.base}
            />
          </div>
        </div>

      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Invert</div>
          <p>기본값으로 현재 테마의 반전된 색상을 툴팁으로 표시 합니다. invert 속성을 false로 설정하면 반전된 색상이 아닌 테마 색상을 표시 합니다.</p>
        </div>
        <div className=''>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <div className="be-button border" nt-tooltip="content: Invert Theme; invert: true;">
                      Invert Theme
                  </div>
                  <div className="be-button border" nt-tooltip="content: Equal Theme; invert: false;">
                      Equal Theme
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.invert}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Trigger</div>
          <p>툴팁은 마우스 hover에 반응하여 표시합니다. 하지만 trigger 속성을 통해 click을 지정하면 클릭에 반응하여 표시 할 수 있습니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents">
                  <div className="be-button border" nt-tooltip="content: hover; trigger: hover;">
                      hover
                  </div>
                  <div className="be-button border" nt-tooltip="content: click; trigger: click;">
                      click
                  </div>
                  <div className="be-button border" tabIndex={0} nt-tooltip="content: focus; trigger: focus;">
                      focus
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.trigger}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">External Trigger</div>
          <p>외부에서 툴팁을 표시 하고 숨길 수 있습니다. external 속성을 'show' 또는 'hide'로 설정 하면 됩니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <button className="be-button border" nt-tooltip={`content: Show Tooltip by External Trigger!!!; external: ${show};`}>
                      Click External Button!!
                      <i className="icon right xi-arrow-right" />
                  </button>
                  <button className="be-button border icon" onClick={() => setShow(show === 'show' ? 'hide' : 'show')}>
                    <i className={`icon ${show === 'show' ? 'xi-eye-off' : 'xi-eye'}`} />
                  </button>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.external}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Content Type</div>
          <p>툴팁의 콘텐츠는 두가지 방식으로 제공합니다. `nt-tooltip` 속성의 값에 'content: content text;' 를 포함하여 전달하거나 Target Element 내에 `nt-target` 속성의 엘리먼트로 전달 할수있다. </p>
          <p>콘텐츠 내에 html를 포함하여 제공 할 수 있으나 이 경우 Target 방식으로 복잡한 html 콘텐츠를 제공 하는 것이 더 효과적입니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents">
                  <div className="be-button" nt-tooltip="content: Content;">
                      Content
                  </div>
                  <div className="be-button" nt-tooltip="true">
                      Target
                      <span nt-target="true">Target Content  <span className="be-tag pointing left yellow ml-2">Good</span></span>
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.contentType}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Position</div>
          <p>pos 속성은 기본적으로 <code className="be-tag label">'position'-'alignment'</code> 구조로 적용 합니다. 예를들면 'top-center', 'left-start' 처럼, 하지만 가운데 정렬을 기본 값으로 두고 position만 입력하더라도 동작 가능합니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <div className="be-button border" nt-tooltip="content: Top; pos: top;">
                      <i className="icon left xi-arrow-up" />
                      Top
                  </div>
                  <div className="be-button border" nt-tooltip="content: Bottom; pos: bottom;">
                      <i className="icon left xi-arrow-down" />
                      Bottom
                  </div>
                  <div className="be-button border" nt-tooltip="content: Left; pos: left;">
                      <i className="icon left xi-arrow-left" />
                      Left
                  </div>
                  <div className="be-button border" nt-tooltip="content: Right; pos: right;">
                      <i className="icon left xi-arrow-right" />
                      Right
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.position}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Position + Aligns</div>
          <p>pos 속성은 기본적으로 <code className="be-tag label">'position'-'alignment'</code>  구조로 적용 합니다. 아래 예제로 테스트 할 수 있습니다. </p>
          
        </div>
        <div>
          <div className="be-segment surface align-center attached">
              <div className="header be flex around gap-4">
                <div className='be-buttons'>
                  <label className="bold px-3 py-1">Position:</label>
                  <div className={`be-button border compact ${position === 'top' ? 'selected' : ''}`} onClick={() => setPosition('top')}>Top</div>
                  <div className={`be-button border compact ${position === 'bottom' ? 'selected' : ''}`} onClick={() => setPosition('bottom')}>Bottom</div>
                  <div className={`be-button border compact ${position === 'left' ? 'selected' : ''}`} onClick={() => setPosition('left')}>Left</div>
                  <div className={`be-button border compact ${position === 'right' ? 'selected' : ''}`} onClick={() => setPosition('right')}>Right</div>
                </div>
                <div className='be-buttons'>
                  <label className="bold px-3 py-1">Alignment:</label> 
                  <div className={`be-button border compact ${align === 'start' ? 'selected' : ''}`} onClick={() => setAlign('start')}>start</div>
                  <div className={`be-button border compact ${align === 'center' ? 'selected' : ''}`} onClick={() => setAlign('center')}>center</div>
                  <div className={`be-button border compact ${align === 'end' ? 'selected' : ''}`} onClick={() => setAlign('end')}>end</div>
                </div>
              </div>
              <div className="contents py-10">
                  <div className={`be-button border`} nt-tooltip={`pos: ${position}-${align};`}>
                  Check Tooltip
                    <div nt-target="true">
                      <div className='h3'>{position}-{align}</div>
                      <div className='pt-4'>
                        {lorem}
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.aligns}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Offset</div>
          <p>대상과 툴팁은 항상 적당한 간격을 유지합니다. 기본값은 <code className="be-tag label">10px</code> 입니다. 속성을 통해 사용자가 원하는 간격을 성정할 수 있습니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <div className="be-button border" nt-tooltip="content: Offset 10;">
                      Offset 10
                  </div>
                  <div className="be-button border" nt-tooltip="content: Offset 20; offset: 20;">
                      Offset 20
                  </div>
                  <div className="be-button border" nt-tooltip="content: Offset 0; offset: 0;">
                      Offset 0
                  </div>
                  <div className="be-button border" nt-tooltip="content: Offset -10; offset: -10;">
                      Offset -10
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.offset}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Size</div>
          <p>기본적으로 툴팁의 font 크기는 본문 크기와 동일합니다. <code className="be-tag label">size: small</code> 속성을 통해 작은 크기의 툴팁을 표시 할 수 있습니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents">
                  <div className="be-button border" nt-tooltip="content: Normal;">
                      Normal
                  </div>
                  <div className="be-button border" nt-tooltip="content: Small; size: small;">
                      Small
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.size}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">MaxWidth</div>
          <p>툴팁의 최대 너비는 250px로 제한되어 있습니다. <code className="be-tag label">maxWidth: number</code> 속성을 통해 최대 너비를 조절할 수 있습니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <div className="be-button border" nt-tooltip="maxWidth: 150;">
                      Max width 150px
                      <span nt-target="true">
                        {lorem}
                      </span>
                  </div>
                  <div className="be-button border" nt-tooltip="maxWidth: 250;">
                      Max width 250px
                      <span nt-target="true">
                        {lorem}
                      </span>
                  </div>
                  <div className="be-button border" nt-tooltip="maxWidth: 500;">
                      Max width 500px
                      <span nt-target="true">
                        {lorem}
                      </span>
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.maxWidth}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">TextAlign</div>
          <p>툴팁 콘텐츠의 내부 텍스트 정렬을 설정합니다. 기본값은 <code className="be-tag label">center</code> 입니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <div className="be-button border" nt-tooltip="textAlign: left;">
                      TextAlign left
                      <span nt-target="true">
                        <div className='h5'>Align left</div>
                        {lorem}
                      </span>
                  </div>
                  <div className="be-button border" nt-tooltip="textAlign: center;">
                      TextAlign center
                      <span nt-target="true">
                        <div className='h5'>Align center</div>
                        {lorem}
                      </span>
                  </div>
                  <div className="be-button border" nt-tooltip="textAlign: right;">
                      TextAlign right
                      <span nt-target="true">
                        <div className='h5'>Align right</div>
                        {lorem}
                      </span>
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.textAlign}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Padding</div>
          <p>툴팁 콘텐츠 영역의 여백을 설정합니다. 기본값은 <code className="be-tag label">8px</code> 입니다.</p>
        </div>
        <div>
          <div className="be-segment surface align-center">
              <div className="contents be flex center gap-4">
                  <div className="be-button border" nt-tooltip="padding: 4;">
                      Padding 4
                      <span nt-target="true">
                        <div className='h5'>Padding 4</div>
                        {lorem}
                      </span>
                  </div>
                  <div className="be-button border" nt-tooltip="true">
                      Padding 8 (default)
                      <span nt-target="true">
                        <div className='h5'>Padding 8</div>
                        {lorem}
                      </span>
                  </div>
                  <div className="be-button border" nt-tooltip="padding: 16;">
                      Padding 16
                      <span nt-target="true">
                        <div className='h5'>Padding 16</div>
                        {lorem}
                      </span>
                  </div>
                  <div className="be-button border" nt-tooltip="padding: 24;">
                      Padding 24
                      <span nt-target="true">
                        <div className='h5'>Padding 24</div>
                        {lorem}
                      </span>
                  </div>
              </div>
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.padding}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function GetStart() {
  return (
    <>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Installation</div>
          <p></p>
        </div>
        <div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='bash'
              code={`npm install react-nt-tooltip`}
            />
          </div>
        </div>
      </div>
      <div className="detail mt-10">
        <div className="header">
          <div className="bold large">Usage</div>
          <p>전역에서 실행 하여 프로젝트 전체 영역에서 툴팁을 사용 할 수 있습니다.</p>
          <p>컴포넌트 적용 시 반드시 nt-tooltip 속성이 children에 상속되도록 랜더링 해야 합니다.(html은 바로 적용 가능함)</p>
        </div>
        <div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={Codes.usage}
            />
          </div>
          <div className='be-segment border p-0'>
            <CodeBlock
              language='jsx'
              code={`// in component.tsx \n<Parent nt-tooltip="{... tooltip options}"> content</Parent>`}
            />
          </div>
        </div>

      </div>
    </>
  )
}
