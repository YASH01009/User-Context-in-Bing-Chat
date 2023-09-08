import React, { useState } from 'react';

import '../styles/styles.css';
import DisplayBox from '../common/DisplayBox';
import DisplayField from '../common/DisplayField';

function DeductionsForm(props) {
  const {
    pfContrib,
    elssInvestment,
    total80CDeductions,
    npsContrib,
    total80CCD1BDeductions,
    standardDeduction,
    professionalTax,
    total16Deductions,
    healthInsurancePremium,
    preventiveHealthCheckup,
    total80DDeductions,
    interestEarnedOnSavingsAccount,
    total80TTADeductions,
    totalDeductions,
    onPfContribChange,
    onElssInvestmentChange,
    onNpsContribChange,
    onStandardDeductionChange,
    onProfessionalTaxChange,
    onHealthInsurancePremiumChange,
    onPreventiveHealthCheckupChange,
    onInterestEarnedOnSavingsAccountChange
  } = props;

  // return (
  //   <DisplayBox
  //     displayBoxHeaderFields={[
  //       <DisplayField displayFieldValue={'Total Deductions'} displayFieldClass='headerField' />,
  //       <DisplayField displayFieldValue={totalDeductions} displayFieldClass='headerField' />
  //     ]}
  // )

  return (
    <div class='stepComp'>
    <header class='stepHeader'>
        <text class='stepHeaderText stepTextValue'> Total Deductions </text>
        <text class='stepHeaderValue stepTextValue'> { totalDeductions } </text>
    </header>

    { /* Section 80C */ }
    <div class='stepComp'>
      <header class='stepHeader'>
        <text class='stepHeaderText stepTextValue'> Section 80C </text>
        <text class='stepHeaderValue stepTextValue'> { total80CDeductions } </text>
      </header>
      <form class='stepForm'>
        <label class='stepField'>
          <div class='stepLabelText'> PF Contribution </div>
          <input class='stepInput' type="number" value={pfContrib} onChange={onPfContribChange} />
        </label>
        <label class='stepField'>
          <div class='stepLabelText'> ELSS Investment </div>
          <input class='stepInput' type="number" value={elssInvestment} onChange={onElssInvestmentChange} />
        </label>
      </form>
    </div>

    { /* Section 80CCD(1B) */ }
    <div class='stepComp'>
      <header class='stepHeader'>
        <text class='stepHeaderText stepTextValue'> Section 80CCD(1B) </text>
        <text class='stepHeaderValue stepTextValue'> { total80CCD1BDeductions } </text>
      </header>
      <form class='stepForm'>
        <label class='stepField'>
          <div class='stepLabelText'> NPS Contribution </div>
          <input class='stepInput' type="number" value={npsContrib} onChange={onNpsContribChange} />
        </label>
      </form>
    </div>

    { /* Section 16 */ }
    <div class='stepComp'>
      <header class='stepHeader'>
        <text class='stepHeaderText stepTextValue'> Section 16 </text>
        <text class='stepHeaderValue stepTextValue'> { total16Deductions } </text>
      </header>
      <form class='stepForm'>
        <label class='stepField'>
          <div class='stepLabelText'> Standard Deduction </div>
          <input class='stepInput' type="number" value={standardDeduction} onChange={onStandardDeductionChange} />
        </label>
        <label class='stepField'>
          <div class='stepLabelText'> Professional Tax </div>
          <input class='stepInput' type="number" value={professionalTax} onChange={onProfessionalTaxChange} />
        </label>
      </form>
    </div>

    { /* Section 80D */ }
    <div class='stepComp'>
      <header class='stepHeader'>
        <text class='stepHeaderText stepTextValue'> Section 80D </text>
        <text class='stepHeaderValue stepTextValue'> { total80DDeductions } </text>
      </header>
      <form class='stepForm'>
        <label class='stepField'>
          <div class='stepLabelText'> Health Insurance Premium </div>
          <input class='stepInput' type="number" value={healthInsurancePremium} onChange={onHealthInsurancePremiumChange} />
        </label>
        <label class='stepField'>
          <div class='stepLabelText'> Preventive Health Checkup </div>
          <input class='stepInput' type="number" value={preventiveHealthCheckup} onChange={onPreventiveHealthCheckupChange} />
        </label>
      </form>
    </div>

    { /* Section 80TTA */ }
    <div class='stepComp'>
      <header class='stepHeader'>
        <text class='stepHeaderText stepTextValue'> Section 80TTA </text>
        <text class='stepHeaderValue stepTextValue'> { total80TTADeductions } </text>
      </header>
      <form class='stepForm'>
        <label class='stepField'>
          <div class='stepLabelText'> Interest Earned on Savings Account </div>
          <input class='stepInput' type="number" value={interestEarnedOnSavingsAccount} onChange={onInterestEarnedOnSavingsAccountChange} />
        </label>
      </form>
    </div>
    
    </div>
  );
}

export default DeductionsForm;
