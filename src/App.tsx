import './App.css'
import Header from './components/Header.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Beaches from './pages/Beaches.tsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path='/beaches' element={<Beaches />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
