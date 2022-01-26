import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects'
import Show from './components/Show';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Show/>
      <Footer/>
    </div>
  );
}

export default App;
