import UseYearOption from "@components/options/useYearOptions";
import UseToggleOptions from "@components/options/useToggleOptions";

const Utility = () => {
  const years = UseYearOption();
  const [isDarkMode, setIsDarkMode] = UseToggleOptions();

  return (
    <div className="utility">
      <ul className="utility-list">
        <li className="utility-item">
          <form className="search-form">
            <select className="form-select select-year">
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>

            <select className="form-select select-type">
              <option value="all">전체</option>
              <option value="movie">영화</option>
              <option value="series">시리즈</option>
              <option value="episode">에피소드</option>
            </select>

            <div className="filter-box">
              <input type="text" className="form-input input" />
              <button
                type="submit"
                className="btn-search"
                aria-label="검색"
              ></button>
            </div>
          </form>
        </li>

        <li className="utility-item">
          <button
            type="button"
            className={`btn-change ${isDarkMode ? "dark" : "light"}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="모드 변경"
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default Utility;
