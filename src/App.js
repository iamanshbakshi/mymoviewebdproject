import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import HallSeats from './HallSeats';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HallSeats />} />
        </Route>
      </Routes>
    </BrowserRouter>
     );
   }
   export default App;