import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import About from './pages/about/About'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
