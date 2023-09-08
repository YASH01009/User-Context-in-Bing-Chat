import React, { useEffect, useState } from 'react';

import IncomeForm from './IncomeForm';
import DeductionsForm from './DeductionsForm';
import HraExemptionForm from './HraExemptionForm';
import CalculatedTaxMenu from './CalculatedTaxMenu';
import Footer from './Footer';
import { useIncomeState, useDeductionState, useHraDeductionState } from '../utils/variables';

function TaxCalculator() {
  
  const { 
    salaryIncome, 
    handleSalaryIncomeChange, 
    interestIncome, 
    handleInterestIncomeChange, 
    totalIncome 
  } = useIncomeState();

  const {
    pfContrib,
    handlePfContribChange,
    elssInvestment,
    handleElssInvestmentChange,
    total80CDeductions,
    npsContrib,
    handleNpsContribChange,
    total80CCD1BDeductions,
    standardDeduction,
    handleStandardDeductionChange,
    professionalTax,
    handleProfessionalTaxChange,
    total16Deductions,
    healthInsurancePremium,
    handleHealthInsurancePremiumChange,
    preventiveHealthCheckup,
    handlePreventiveHealthCheckupChange,
    total80DDeductions,
    interestEarnedOnSavingsAccount,
    handleInterestEarnedOnSavingsAccountChange,
    total80TTADeductions,
    totalDeductions
  } = useDeductionState();

  const {
    monthNames,
    hraReceived,
    actualRentPaid,
    basicSalary,
    totalHRADeductionsForMonth,
    totalHRADeductions,
    totalHRADeductionsYearWise,
    totalHRADeductionsMonthWise,
    handleHraReceivedChange,
    handleActualRentPaidChange,
    handleBasicSalaryChange
  } = useHraDeductionState();

  const [totalTaxableIcome, setTotalTaxableIncome] = useState(0);
  const [totalTaxPayable, setTotalTaxPayable] = useState(0);

  const computeTotalTaxableIncome = (totalIncome, totalDeductions, totalHRADeductions) => {
    return totalIncome - totalDeductions - totalHRADeductions;
  };

  const computeTotalTaxPayable = (totalTaxableIncome) => {
    if (totalTaxableIncome <= 250000) {
      return 0;
    } else if (totalTaxableIncome > 250000 && totalTaxableIncome <= 500000) {
      return (totalTaxableIncome - 250000) * 0.05;
    } else if (totalTaxableIncome > 500000 && totalTaxableIncome <= 1000000) {
      return (totalTaxableIncome - 500000) * 0.2 + 12500;
    } else {
      return (totalTaxableIncome - 1000000) * 0.3 + 112500;
    }
  };

  useEffect(() => {
    setTotalTaxableIncome(computeTotalTaxableIncome(totalIncome, totalDeductions, totalHRADeductions));
  }, [totalIncome, totalDeductions, totalHRADeductions]);

  useEffect(() => {
    setTotalTaxPayable(computeTotalTaxPayable(totalTaxableIcome));
  }, [totalTaxableIcome]);

  return (
    <>
      <IncomeForm
        salaryIncome={salaryIncome}
        interestIncome={interestIncome}
        totalIncome={totalIncome}
        onSalaryIncomeChange={handleSalaryIncomeChange}
        onInterestIncomeChange={handleInterestIncomeChange}
      />
      <DeductionsForm
        pfContrib={pfContrib}
        elssInvestment={elssInvestment}
        total80CDeductions={total80CDeductions}
        npsContrib={npsContrib}
        total80CCD1BDeductions={total80CCD1BDeductions}
        standardDeduction={standardDeduction}
        professionalTax={professionalTax}
        total16Deductions={total16Deductions}
        healthInsurancePremium={healthInsurancePremium}
        preventiveHealthCheckup={preventiveHealthCheckup}
        total80DDeductions={total80DDeductions}
        interestEarnedOnSavingsAccount={interestEarnedOnSavingsAccount}
        total80TTADeductions={total80TTADeductions}
        totalDeductions={totalDeductions}
        onPfContribChange={handlePfContribChange}
        onElssInvestmentChange={handleElssInvestmentChange}
        onNpsContribChange={handleNpsContribChange}
        onStandardDeductionChange={handleStandardDeductionChange}
        onProfessionalTaxChange={handleProfessionalTaxChange}
        onHealthInsurancePremiumChange={handleHealthInsurancePremiumChange}
        onPreventiveHealthCheckupChange={handlePreventiveHealthCheckupChange}
        onInterestEarnedOnSavingsAccountChange={handleInterestEarnedOnSavingsAccountChange}
      />
      <HraExemptionForm
        monthNames={monthNames}
        hraReceived={hraReceived}
        actualRentPaid={actualRentPaid}
        basicSalary={basicSalary}
        totalHRADeductionsForMonth={totalHRADeductionsForMonth}
        totalHRADeductions={totalHRADeductions}
        totalHRADeductionsYearWise={totalHRADeductionsYearWise}
        totalHRADeductionsMonthWise={totalHRADeductionsMonthWise}
        onHraReceivedChange={handleHraReceivedChange}
        onActualRentPaidChange={handleActualRentPaidChange}
        onBasicSalaryChange={handleBasicSalaryChange}
      />
      <CalculatedTaxMenu
        totalTaxableIncome={totalTaxableIcome}
        totalTaxPayable={totalTaxPayable}
      />
      <Footer/>
    </>
  );
}

export default TaxCalculator;
