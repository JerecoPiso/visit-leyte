import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Beaches from './pages/Beaches.tsx';
import Landmarks from './pages/Landmarks.tsx';
import Events from './pages/Events.tsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path='/beaches' element={<Beaches />}></Route>
          <Route path='/landmarks' element={<Landmarks />}></Route>
          <Route path='/events' element={<Events />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
