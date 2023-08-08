import { Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))

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
