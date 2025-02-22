import { useEffect, useState } from "react";

const UseYearOption = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 50;
    const yearOptions = [{ value: "all", label: "전체" }];

    for (let year = currentYear; year >= startYear; year--) {
      yearOptions.push({ value: year, label: year });
    }

    setYears(yearOptions);
  }, []);

  return years;
};

export default UseYearOption;
