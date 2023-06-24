import './App.css';
import './styles/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <>
      <div className='main'>
        <Header />
        <About />
        <Footer/>
      </div>
    </>
  )
}

export default App
