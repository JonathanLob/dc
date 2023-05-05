import logo from './logo.svg';
import './App.css';
import './vista/Esti.css';
import pri from "./img/principal.png";
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Superman from './vista/Superman';
import Batman from './vista/Batman';
import Wolverine from './vista/Wolverine';
import Flash from './vista/Flash';
import Menu from './Menu';
import Pie from './vista/Pie';

function App() {
  return (
    <BrowserRouter>
      <div className='abc'>
        <Menu/>
        <Switch>
          <div className='cuerp'>
          <Route path="/" exact component={Principal}/>
          <Route path="/Superman" exact component={Superman}/>
          <Route path="/Batman" exact component={Batman}/>
          <Route path="/Flash" exact component={Flash}/>
          <Route path="/Wolverine" exact component={Wolverine}/>
          </div>
        </Switch>
        <Pie></Pie>
      </div>
      
    </BrowserRouter>
  );
}
const Principal = () =>(
  <div className='principal'>
    <img src={pri} class="img-fluid" alt="..."></img>
    <h2>Tu Pagina web donde podras saber mas </h2>
    <h2>sobre los principales super heroes </h2>
  </div>
);

export default App;
