import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './MainLayout';
import Welcome from './Welcome';
import Shop from './Shop';
import ShopingCart from './ShopingCart';
import Payment from './Payment';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout></MainLayout>}>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path='shop' element={<Shop></Shop>}></Route>
          <Route path='shoppingcart' element={<ShopingCart></ShopingCart>}></Route>
          <Route path='payment' element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
