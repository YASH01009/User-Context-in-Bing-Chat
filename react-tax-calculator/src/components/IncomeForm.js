import React, { useState } from 'react';

import DisplayBox from '../common/DisplayBox';
import DisplayField from '../common/DisplayField';
import '../styles/styles.css';

function IncomeForm(props) {
  const { salaryIncome, interestIncome, totalIncome, onSalaryIncomeChange, onInterestIncomeChange } = props;

  return (
    <DisplayBox 
      displayBoxHeaderFields={[
        <DisplayField displayFieldValue={'Total Income'} displayFieldClass='headerField' />,
        <DisplayField displayFieldValue={totalIncome} displayFieldClass='headerField' />,
      ]}
      displayBoxRowFields={[
        [
          <DisplayField displayFieldValue={'Income from Salary'} dispalyFieldClass='rowField' />,
          <DisplayField displayFieldValue={salaryIncome} dispalyFieldClass='rowField' displayFieldOnChange={onSalaryIncomeChange} />,
        ],
        [
          <DisplayField displayFieldValue={'Income from Interest'} dispalyFieldClass='rowField' />,
          <DisplayField displayFieldValue={interestIncome} dispalyFieldClass='rowField' displayFieldOnChange={onInterestIncomeChange} />,
        ],
      ]}
      displayStyle={"space-between"}
    />
  );

  // return (
  //   <div class='stepComp'>
  //   <header class='stepHeader'>
  //       <text class='stepHeaderText stepTextValue'> Total Income </text>
  //       <text class='stepHeaderValue stepTextValue'> { totalIncome } </text>
  //   </header>
  //   <form class='stepForm'>
  //     <label class='stepField'>
  //       <div class='stepLabelText'> Income from Salary </div>
  //       <input class='stepInput' type="number" value={salaryIncome} onChange={onSalaryIncomeChange} />
  //     </label>
  //     <label class='stepField'>
  //       <div class='stepLabelText'> Income from Interest </div>
  //       <input class='stepInput' type="number" value={interestIncome} onChange={onInterestIncomeChange} />
  //     </label>
  //   </form>
  //   </div>
  // );
}

export default IncomeForm;
