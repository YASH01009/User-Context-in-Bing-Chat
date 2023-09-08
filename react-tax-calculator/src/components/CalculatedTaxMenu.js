import React, { useState } from 'react';

import '../styles/styles.css';

function IncomeForm(props) {
  const { totalTaxableIncome, totalTaxPayable } = props;

  return (
    <div class='stepComp'>
    <header class='stepHeader'>
        <div class='stepHeaderText stepTextValue'> Calculated Icome Tax </div>
        <div class='stepHeaderValue stepTextValue'> { totalTaxPayable } </div>
    </header>
    <form class='stepForm'>
      <label class='stepField'>
        <div class='stepLabelText'> Total Taxable Income </div>
        <div class='stepLabelValue'> { totalTaxableIncome } </div>
      </label>
      <label class='stepField'>
        <div class='stepLabelText'> Total Tax Payable </div>
        <div class='stepLabelValue'> { totalTaxPayable } </div>
      </label>
    </form>
    </div>
  );
}

export default IncomeForm;
