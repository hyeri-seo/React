import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CarouselStrap from './CarouselStrap';
import { Collapse } from 'reactstrap';
import CollapseStrap from './CollapseStrap';
import CollapseStrap2 from './CollapseStrap2';
import FadeStrap from './FadeStrap';
import FormStrap from './FormStrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CarouselStrap/> */}
    {/* <CollapseStrap/> */}
    {/* <CollapseStrap2/> */}
    {/* <FadeStrap/> */}
    <FormStrap/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
