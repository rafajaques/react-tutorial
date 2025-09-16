import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import './App.css'
import './tema.css'
import AppTarefas from './pages/Tarefas/AppTarefas'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton'
import Usuarios from './pages/Usuarios'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
              <li><Link to="/usuarios">Usuários</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </nav>

          <ThemeToggleButton />
        </div>

        {/* Define as rotas */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarefas" element={<AppTarefas />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
