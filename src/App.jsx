import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import './App.css'
import Layout from './components/Layout/Layout'
//import Home from './components/Home/Home';
//import Portfolio from './components/Portfolio/Portfolio';
//import Contact from './components/Contact/Contact';
//import Resume from './components/Resume/Resume';
//import ProjectDetails from './components/Portfolio/ProjectDetails/ProjectDetails';
//import PageNotFound from './components/404/PageNotFound';
import ScrollToTop from './components/shared/ScrollTotop/ScrollToTop';

const Home = lazy(() => import('./components/Home/Home'));
const Resume = lazy(() => import('./components/Resume/Resume'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const ProjectDetails = lazy(() => import('./components/Portfolio/ProjectDetails/ProjectDetails'));
const PageNotFound = lazy(() => import('./components/404/PageNotFound'));
//const ScrollToTop = lazy(()=>import('./components/shared/ScrollTotop/ScrollToTop'));
function App() {

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:id' element={<ProjectDetails />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
