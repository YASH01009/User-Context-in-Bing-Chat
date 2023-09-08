import { useEffect, useState } from 'react';

import MaxDeductionLimits from './constants';

export const useIncomeState = () => {
  const [salaryIncome, setSalaryIncome] = useState(0);
  const [interestIncome, setInterestIncome] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const handleSalaryIncomeChange = (event) => {
    var intVal = parseInt(event.target.value);
    setSalaryIncome(intVal);
  };

  const handleInterestIncomeChange = (event) => {
    var intVal = parseInt(event.target.value);
    setInterestIncome(intVal);
  };

  useEffect(() => {
    setTotalIncome(salaryIncome + interestIncome);
  }, [salaryIncome, interestIncome])

  return {
    salaryIncome,
    handleSalaryIncomeChange,
    interestIncome,
    handleInterestIncomeChange,
    totalIncome,
  };
};

export const useDeductionState = () => {
  const [totalDeductions, setTotalDeductions] = useState(0);

  const [pfContrib, setPfContrib] = useState(0);
  const [elssInvestment, setElssInvestment] = useState(0);
  const [total80CDeductions, setTotal80CDeductions] = useState(0);

  const handlePfContribChange = (event) => {
    var intVal = parseInt(event.target.value);
    setPfContrib(intVal);
  };

  const handleElssInvestmentChange = (event) => {
    var intVal = parseInt(event.target.value);
    setElssInvestment(intVal);
  };

  useEffect(() => {
    var total80CDeductions = Math.min(pfContrib + elssInvestment, MaxDeductionLimits['80C']);
    setTotal80CDeductions(total80CDeductions);
  }, [pfContrib, elssInvestment])

  const [npsContrib, setNpsContrib] = useState(0);
  const [total80CCD1BDeductions, setTotal80CCD1BDeductions] = useState(0);

  const handleNpsContribChange = (event) => {
    var intVal = parseInt(event.target.value);
    setNpsContrib(intVal);
  };

  useEffect(() => {
    var total80CCD1BDeductions = Math.min(npsContrib, MaxDeductionLimits['80CCD(1B)']);
    setTotal80CCD1BDeductions(total80CCD1BDeductions);
  }, [npsContrib])

  const [standardDeduction, setStandardDeduction] = useState(0);
  const [professionalTax, setProfessionalTax] = useState(0);
  const [total16Deductions, setTotal16Deductions] = useState(0);

  const handleStandardDeductionChange = (event) => {
    var intVal = parseInt(event.target.value);
    var standardDeduction = Math.min(intVal, MaxDeductionLimits['16(ia)']);
    setStandardDeduction(standardDeduction);
  };

  const handleProfessionalTaxChange = (event) => {
    var intVal = parseInt(event.target.value);
    setProfessionalTax(intVal);
  };

  useEffect(() => {
    var total16Deductions = standardDeduction + professionalTax;
    setTotal16Deductions(total16Deductions);
  }, [standardDeduction, professionalTax])

  const [healthInsurancePremium, setHealthInsurancePremium] = useState(0);
  const [preventiveHealthCheckup, setPreventiveHealthCheckup] = useState(0);
  const [total80DDeductions, setTotal80DDeductions] = useState(0);

  const handleHealthInsurancePremiumChange = (event) => {
    var intVal = parseInt(event.target.value);
    setHealthInsurancePremium(intVal);
  };

  const handlePreventiveHealthCheckupChange = (event) => {
    var intVal = parseInt(event.target.value);
    setPreventiveHealthCheckup(intVal);
  };

  useEffect(() => {
    var total80DDeductions = Math.min(healthInsurancePremium + preventiveHealthCheckup, MaxDeductionLimits['80D']);
    setTotal80DDeductions(total80DDeductions);
  }, [healthInsurancePremium, preventiveHealthCheckup])

  const [interestEarnedOnSavingsAccount, setInterestEarnedOnSavingsAccount] = useState(0);
  const [total80TTADeductions, setTotal80TTADeductions] = useState(0);

  const handleInterestEarnedOnSavingsAccountChange = (event) => {
    var intVal = parseInt(event.target.value);
    setInterestEarnedOnSavingsAccount(intVal);
  };

  useEffect(() => {
    var total80TTADeductions = Math.min(interestEarnedOnSavingsAccount, MaxDeductionLimits['80TTA']);
    setTotal80TTADeductions(total80TTADeductions);
  }, [interestEarnedOnSavingsAccount])

  useEffect(() => {
    var totalDeductions = total80CDeductions + total80CCD1BDeductions + total16Deductions + total80DDeductions + total80TTADeductions;
    setTotalDeductions(totalDeductions);
  }, [total80CDeductions, total80CCD1BDeductions, total16Deductions, total80DDeductions, total80TTADeductions])

  return {
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
  };
};

const calculateHRADeductions = (hraReceived, actualRentPaid, basicSalary) => {
  var actualRentPaidMinus10PercentOfBasicSalary = Math.max(actualRentPaid - (basicSalary * 0.1), 0);
  var allowedPortionLimitOfBasicSalary = basicSalary * 0.4;
  var portionOfHraDeductable = Math.min(hraReceived, actualRentPaidMinus10PercentOfBasicSalary, allowedPortionLimitOfBasicSalary);
  return portionOfHraDeductable;
};

export const useHraDeductionState = () => {
  const [totalHRADeductions, setTotalHRADeductions] = useState(0);
  const [totalHRADeductionsMonthWise, setTotalHRADeductionsMonthWise] = useState(0);
  const [totalHRADeductionsYearWise, setTotalHRADeductionsYearWise] = useState(0);

  const monthNames = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  const [hraReceived, setHraReceived] = useState({
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
    Jan: 0,
    Feb: 0,
    Mar: 0
  });

  const [actualRentPaid, setActualRentPaid] = useState({
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
    Jan: 0,
    Feb: 0,
    Mar: 0
  });

  const [basicSalary, setBasicSalary] = useState({
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
    Jan: 0,
    Feb: 0,
    Mar: 0
  });

  const [totalHRADeductionsForMonth, setTotalHRADeductionsForMonth] = useState({
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
    Jan: 0,
    Feb: 0,
    Mar: 0
  });

  const handleHraReceivedChange = (event, month) => {
    var intVal = parseInt(event.target.value);
    setHraReceived(prevState => ({ ...prevState, [month]: intVal }));
  }

  const handleActualRentPaidChange = (event, month) => {
    var intVal = parseInt(event.target.value);
    setActualRentPaid(prevState => ({ ...prevState, [month]: intVal }));
  }

  const handleBasicSalaryChange = (event, month) => {
    var intVal = parseInt(event.target.value);
    setBasicSalary(prevState => ({ ...prevState, [month]: intVal }));
  }

  useEffect(() => {
    var totalHRADeductionsForMonth = monthNames.reduce((acc, month) => {
      acc[month] = calculateHRADeductions(hraReceived[month], actualRentPaid[month], basicSalary[month]);
      return acc;
    }, {});
    setTotalHRADeductionsForMonth(totalHRADeductionsForMonth);
  }, [hraReceived, actualRentPaid, basicSalary]);

  useEffect(() => {
    var hraExemptedMothWise = monthNames.reduce((total, month) => total + totalHRADeductionsForMonth[month], 0);
    setTotalHRADeductionsMonthWise(hraExemptedMothWise);
  }, [totalHRADeductionsForMonth]);

  useEffect(() => {
    var totalHRAReceivedYearWise = monthNames.reduce((total, month) => total + hraReceived[month], 0);
    var totalActualRentPaidYearWise = monthNames.reduce((total, month) => total + actualRentPaid[month], 0);
    var totalBasicSalaryYearWise = monthNames.reduce((total, month) => total + basicSalary[month], 0);
    var hraExmptedYearWise = calculateHRADeductions(totalHRAReceivedYearWise, totalActualRentPaidYearWise, totalBasicSalaryYearWise);
    setTotalHRADeductionsYearWise(hraExmptedYearWise);
  }, [hraReceived, actualRentPaid, basicSalary]);

  useEffect(() => {
    setTotalHRADeductions(Math.max(totalHRADeductionsYearWise, totalHRADeductionsMonthWise));
  }, [totalHRADeductionsYearWise, totalHRADeductionsMonthWise]);

  return {
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
  };
};
