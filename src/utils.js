export const getCurrentSemester = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return {
    value: currentMonth < 8 ? `01/${currentYear}` : `08/${currentYear}`,
    label: currentMonth < 8 ? `Fall semester ${currentYear}` : `Spring semetster ${currentYear}`,
  };
};
