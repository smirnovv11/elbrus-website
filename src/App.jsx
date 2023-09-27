import { Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import { lazy } from 'react'
import ApplicationFormProvider from './components/applicationForm/ApplicationFormContext'
import AlertProvider from './components/alert/AlertContext'

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const NoPage = lazy(() => import('./pages/nopage/NoPage'))
const Services = lazy(() => import('./pages/services/Services'))

function App() {
  return (
    <AlertProvider>
        <ApplicationFormProvider>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='services' element={<Services/>}/>
              <Route path='*' element={<NoPage/>}/>
            </Route>
          </Routes>
        </ApplicationFormProvider>
    </AlertProvider>
  )
}

export default App
