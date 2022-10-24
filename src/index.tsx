import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const blurTimer = setTimeout(() => {})

const onBlur = () => {
  clearTimeout(blurTimer)
  setTimeout(() => {
    document.title = "Asleep - cstanze"
    let favicon = document.getElementById('favicon')
    if(!favicon) return
    favicon.href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💤</text></svg>" 
    }, 5000)
}

const onFocus = () => {
  clearTimeout(blurTimer)
  document.title = "Awake - cstanze"
  let favicon = document.getElementById('favicon')
  if(!favicon) return
  favicon.href=href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>"
}

window.addEventListener('blur', onBlur)
window.addEventListener('focus', onFocus)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
