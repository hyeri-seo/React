import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import {Routes, Route} from 'react-router-dom';
import Main from './component/Main';
import MakeAccount from './component/MakeAccount';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountInfo';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exect path="/" element={<Main/>}/>
        <Route exect path="/makeaccount" element={<MakeAccount/>}/>
        <Route exect path="/deposit" element={<Deposit/>}/>
        <Route exect path="/withdraw" element={<Withdraw/>}/>
        <Route exect path="/accountInfo" element={<AccountInfo/>}/>
        <Route exect path="/all" element={<AllAccountInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
