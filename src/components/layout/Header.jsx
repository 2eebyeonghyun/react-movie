import Utility from "@components/layout/Utility";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <h1 className="header-logo">
          <a href="/">5TMOVIE</a>
        </h1>

        <Utility />
      </div>
    </header>
  );
};

export default Header;
