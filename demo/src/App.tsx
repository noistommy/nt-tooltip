import { useState, useEffect } from 'react'
import Cabinet from './NTCabinet/Cabinet.tsx'
import MainPage from './components/MainPage'
import './App.scss'

import {initTooltip, clearTooltip} from '../../dist/nt-tooltip.es.js'
import '../../dist/nt-tooltip.css'


function Header() {
  return (
    <header>
      <div className='main-ex be flex center'>
        <div className='nt-tooltip invert top-center huge' 
          style={{
            position: 'static',
            top: '0',
            left: '50%',
            textAlign: 'center'
          }}
        >Welcome <span className="bold px-2">NT Tooltip</span>!!</div>
      </div>
      <div className="main-title">NT Tooltip</div>
      <div className="main-desc mb-4">
        NT Tooltip is a user-defined module for 
        <span className="be-tag lightblue label ml-2 mr-2">React</span>
      </div>
      <div className='main-wrapper'>
        <Nav />
      </div>
    </header>
  )
}

function Nav() {
  const themeValue = sessionStorage.getItem('theme-mode') as 'light' | 'dark' | 'system' | null
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(themeValue ?? 'light');

  const selectTheme = (mode: 'light' | 'dark' | 'system') => {
    const html = document.documentElement;
    html.className = ''
    html.classList.add(`${mode}-mode`);
    sessionStorage.setItem('theme-mode', mode)
  }

  useEffect(() => {
    selectTheme(theme)
  }, [theme])

  return (
    <nav className="nav be flex center gap-4 p-4">
      <li>
        <div className="be-buttons small">
          <div 
            nt-tooltip="content: Theme-light; pos: bottom-center"
            className={`be-button icon ${theme === 'light' ? 'selected' : ''}`} 
            onClick={() => setTheme('light')}
          >
            <i className="xi-sun" />
          </div>
          <div
            nt-tooltip="content: Theme-dark; pos: bottom-center" 
            className={`be-button icon ${theme === 'dark' ? 'selected' : ''}`} 
            onClick={() => setTheme('dark')}
          >
            <i className="xi-moon" />
          </div>
          <div 
            nt-tooltip="content: Theme-system; pos: bottom-center" 
            className={`be-button icon ${theme === 'system' ? 'selected' : ''}`} 
            onClick={() => setTheme('system')}
          >
            <i className="xi-desktop" />
          </div>
        </div>
      </li>
      <li>
        <div className="be-button small" nt-tooltip="pos: bottom-center">
          <div nt-target="true">
            <i className="xi-github"></i>
            <span className='pl-4'>noistommy/react-nt-tooltip</span>
          </div>
          <i className="icon left xi-github"></i>
          Github
          <a href="https://github.com/noistommy/react-nt-tooltip.git" className="link" target="_blank"></a>
        </div>
      </li>
    </nav>
  )
}

function App() {

  useEffect(() => {
    initTooltip()

    return () =>  clearTooltip()
  }, [location.pathname])


  return (
    <>
      <Header />
      <MainPage />
      <Cabinet />
    </>
  )
}

export default App
