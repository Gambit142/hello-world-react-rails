import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PropTypes from "prop-types"

import Greeting from './greeting'

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello Nigeria</div>} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  </>
)

// ReactDOM.render(
//   // <Provider store={store}>
//     <App />,
//   // </Provider>,
//   document.getElementById('root'),
// );

export default App
