import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom/dist';
import EnterpriseStructure from '../../components/enterpriseStructure';
import ManageInvoices from '../../components/manageInvoices';
import ProcessPayments from '../../components/processPayments';
import Reporting from '../../components/reporting'
import App from '../../App';

export default function RouterPage()  {
    return (
        <Router>
      <Routes>
        <Route exact path="/" element={<App/>}>
          <Route  path="/enterprise-structure" element={<EnterpriseStructure/>} />
          <Route  path="/manage-invoices" element={<ManageInvoices/>} />
          <Route  path="/process-payments" element={<ProcessPayments/>} />
          <Route  path="/reporting" element={<Reporting/>} />
        </Route>
      </Routes>
  </Router>
    )
}