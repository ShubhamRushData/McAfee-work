import Home from './component/Home';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Office1 from './pages/office1';
import Window from './pages/Window';
import Demo from './pages/Demo';
import EnterCode from './component/EnterCode';
import Blog from './pages/Blog';
// import Demo from './pages/Demo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/entercode" element={<EnterCode/>} />
        <Route path='/demo' element={<Demo/>}/>
        <Route path="/blog" element={<Blog/>} />

        <Route path="/office" element={<Office1/>} />
        <Route path="/window" element={<Window/>} />


      </Routes>
    </Router>
  );
}

export default App;
