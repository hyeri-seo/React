import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import MakeAccount_tot from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import AllAccountInfo from './component/AllAccountInfo';
import BankTop from './component/BankTop';

function App() {
  return (
    <div className='App'>
      <BankTop/>
      <Routes>
        <Route exact path='/' element={<MakeAccount_tot/>}/>
        <Route exact path='/deposit' element={<Deposit/>}/>
        <Route exact path='/withdraw' element={<Withdraw/>}/>
        <Route exact path='/accountInfo' element={<AccountInfo/>}/>
        <Route exact path='/allAccountInfo' element={<AllAccountInfo/>}/>
      </Routes>
      {/* <MakeAccount_tot/>
      <Deposit/>
      <Withdraw/>
      <AccountInfo/>
      <AllAccountInfo/> */}
    </div>
  );
}

export default App;
