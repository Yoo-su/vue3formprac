export const dateDifferenceInYearsMonths = (startDate, endDate) => {
  let refinedStart = startDate.value.modelValue,
    refinedEnd = endDate.value.modelValue;

  refinedStart = new Date(refinedStart);
  refinedEnd = new Date(refinedEnd);

  const startYear = refinedStart.getFullYear();
  const startMonth = refinedStart.getMonth();
  const endYear = refinedEnd.getFullYear();
  const endMonth = refinedEnd.getMonth();

  let years = endYear - startYear;
  let months = endMonth - startMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
};