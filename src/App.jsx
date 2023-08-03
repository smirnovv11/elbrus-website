import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='*' element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
