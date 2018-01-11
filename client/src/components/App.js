import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.js';
import 'bootstrap-css'

import Routes from '../Routes'
//import Header from './Header'
import Header from '../containers/Header'

const App = () => (
  <div className="App">
    <Header/>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      pauseOnHover/>
    <Routes/>
  </div>
)

export default App;
