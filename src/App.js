import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/home" element={<Shop />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
