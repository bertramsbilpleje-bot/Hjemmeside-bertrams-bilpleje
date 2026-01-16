import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Bertrams Bilpleje</h1>
      <p>Din React-kode kører nu på Netlify!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>✅ Mobil forlygterestauration</li>
        <li>✅ UV-beskyttelse</li>
        <li>✅ Vi kommer til dig i Roskilde</li>
      </ul>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
