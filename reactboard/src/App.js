import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import BoardList from './component/BoardList';
import BoardDetail from './component/BoardDetail';
import Register from './component/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exect path="/boardList" element={<BoardList/>}/>
        <Route exect path="/boardDetail" element={<BoardDetail/>}/>
        <Route exect path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
