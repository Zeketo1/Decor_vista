import { useEffect } from 'react';
import './App.css'
import SystemRoutes from './routes/SystemRoutes'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  return (
   <SystemRoutes/>
  )
}

export default App
