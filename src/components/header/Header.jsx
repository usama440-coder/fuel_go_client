import "./Header.css";

const Header = ({ heading, desc }) => {
  return (
    <div className="header">
      <h2>{heading}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Header;
