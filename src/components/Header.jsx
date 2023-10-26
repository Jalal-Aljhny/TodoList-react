import PropTypes from "prop-types";

const Header = ({ count }) => {
  return (
    <header>
      <h1>To Do List ({count})</h1>
    </header>
  );
};
Header.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Header;
