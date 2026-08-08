import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Beaches from './pages/Beaches.tsx';
import BeachDetail from './pages/BeachDetail.tsx';
import Landmarks from './pages/Landmarks.tsx';
import LandmarkDetail from './pages/LandmarkDetail.tsx';
import Events from './pages/Events.tsx';
import EventDetail from './pages/EventDetail.tsx';
import Blog from './pages/Blog.tsx';
import BlogDetail from './pages/BlogDetail.tsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path='beaches' element={<Beaches />}></Route>
          <Route path='beaches/:id' element={<BeachDetail />}></Route>
          <Route path='landmarks' element={<Landmarks />}></Route>
          <Route path='landmarks/:id' element={<LandmarkDetail />}></Route>
          <Route path='events' element={<Events />}></Route>
          <Route path='events/:id' element={<EventDetail />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='blog/:id' element={<BlogDetail />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
