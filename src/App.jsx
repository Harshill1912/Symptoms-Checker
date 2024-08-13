import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import Home from './pages/Home';
import Form from './pages/Form';
import Results from './pages/results';
import Footer from './components/Footer';
function App() {
  return (
    <div>
   <div className='flex flex-col min-h-screen'>
      <Router>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path='/results' element={<Results/>}/>

          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;
