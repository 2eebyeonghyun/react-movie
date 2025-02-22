import { NavLink } from "react-router-dom";

const Navigation = () => {
  const flexElement = {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid #ccc",
  };

  return (
    <>
      <nav>
        <ul style={flexElement}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
                textDecoration: "none",
              })}
              to="../pages/Main"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
