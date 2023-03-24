
import React from 'react';
import Banner from '../layouts/header/banner';
import * as data from '../assets/data/staticData.ts'
import Questionnaire from '../layouts/questionnaire/questionnaire';

const Reporting =() => {
    return (
        <>
        <Banner title="Reporting"></Banner>
        <div style={{margin:'40px 20px'}}>
            <Questionnaire data={data.reportingQuestions}></Questionnaire>
        </div>
        </>
    );
};


export default Reporting;