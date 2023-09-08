import React, { useState } from 'react';

import '../styles/styles.css';

function HraExemptionForm(props) {
  const {
    monthNames,
    hraReceived,
    actualRentPaid,
    basicSalary,
    totalHRADeductionsForMonth,
    totalHRADeductions,
    totalHRADeductionsYearWise,
    totalHRADeductionsMonthWise,
    onHraReceivedChange,
    onActualRentPaidChange,
    onBasicSalaryChange
  } = props;

  return (
    <div className='stepComp'>
      <header className='stepHeader'>
        <text className='stepHeaderText stepTextValue'> HRA Exemption </text>
        <text className='stepHeaderValue stepTextValue'> { totalHRADeductions } </text>
      </header>

      <div className='stepComp'>
        <header className='stepHeader'>
          <div id='hraTextField' className='stepHeaderText stepTextValue'> Calculation Strategy </div>
          <div id='hraTextField' className='stepHeaderText stepTextValue'> HRA Exemption Availed </div>
        </header>
        <div className='stepForm'>
          <label className='stepField'>
            <div id='hraTextField' className='stepLabelText'> Yearly </div>
            <div id='hraTextField' className='stepLabelText'> { totalHRADeductionsYearWise } </div>
          </label>
          <label className='stepField'>
            <div id='hraTextField' className='stepLabelText'> Monthly </div>
            <div id='hraTextField' className='stepLabelText'> { totalHRADeductionsMonthWise } </div>
          </label>
        </div>
      </div>

      <div className='stepComp'>
        <header className='stepHeader'>
          <div id='hraTextField' className='stepHeaderText stepTextValue'> Month </div>
          <div id='hraTextField' className='stepHeaderText stepTextValue'> HRA Received </div>
          <div id='hraTextField' className='stepHeaderText stepTextValue'> Actual Rent Paid </div>
          <div id='hraTextField' className='stepHeaderText stepTextValue'> Basic Salary </div>
          <div id='hraTextField' className='stepHeaderText stepTextValue'> HRA Exemption </div>
        </header>
        <form className='stepForm'>
        {monthNames.map((month) => (
          <label class='stepField' key={month}>
            <div id='hraTextField' className='stepLabelText'> { month } </div>
            <input id='hraInputField' className='stepInput' type="number" value={hraReceived[month]} onChange={(e) => onHraReceivedChange(e, month)} />
            <input id='hraInputField' className='stepInput' type="number" value={actualRentPaid[month]} onChange={(e) => onActualRentPaidChange(e, month)} />
            <input id='hraInputField' className='stepInput' type="number" value={basicSalary[month]} onChange={(e) => onBasicSalaryChange(e, month)} />
            <div id='hraTextField' className='stepLabelText'> { totalHRADeductionsForMonth[month] } </div>
          </label>
        ))}
        </form>
      </div>
    </div>
  );
}

export default HraExemptionForm;
