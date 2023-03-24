
import React from 'react';
import Banner from '../layouts/header/banner';
import * as data from '../assets/data/staticData.ts'
import Questionnaire from '../layouts/questionnaire/questionnaire';

const ProcessPayments =() => {
    return (
        <>
            <Banner title="Process Payments"></Banner>
            <div style={{margin:'40px 20px'}}>
            <Questionnaire data={data.processPaymentsQuestions}></Questionnaire>
        </div>
        </>
    );
};


export default ProcessPayments;