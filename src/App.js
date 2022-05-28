
import './App.scss';
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from'./components/Pages/About'
import Contact from'./components/Pages/Contact'
function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Layout/>}>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />


      </Route>
    </Routes>
    </>
  );
}

export default App;
