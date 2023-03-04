import './App.css';
import Navbar from './components/navbar/Navbar';
import SubHeader from './components/subheader/SubHeader';
import Footer from "./components/footer/Footer"
import { Routes, Route } from 'react-router-dom';
import Home from "./router/home/Home"
import Carta from "./router/carta/Carta"
import Dos from "./router/dos/Dos"
import Til from "./router/til/Til"
import Basket from "./router/basket/Basket"
import Like from "./router/like/Like"
import Admin from './router/admin/Admin';
import SingleRoute from './router/single-route/SingleRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SubHeader/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<SingleRoute/>}/>
        <Route path='/carta' element={<Carta/>}/>
        <Route path='/dos' element={<Dos/>}/>
        <Route path='/til' element={<Til/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
