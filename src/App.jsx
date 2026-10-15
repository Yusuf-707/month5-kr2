
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TaskDetailPage from './pages/TaskDetailPage'
import Header from './components/Header'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<TaskDetailPage />} />
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
