
import React from 'react';
import Banner from '../layouts/header/banner';
import * as data from '../assets/data/staticData.ts'
import Questionnaire from '../layouts/questionnaire/questionnaire';

const ManageInvoices =() => {
    return (
        <>
        <Banner title="Manage Invoices"></Banner>
        <div style={{margin:'40px 20px'}}>
            <Questionnaire data={data.manageInvoicesQuestions}></Questionnaire>
        </div>
        </>
    );
};


export default ManageInvoices;