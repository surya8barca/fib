import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterPage from './layouts/router/routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
const routing = (
  <>
    <RouterPage></RouterPage>
  </>
  
);
root.render(
routing, root
);
