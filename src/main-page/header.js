import logo from "./jsec.png";

// This is an arrow function that returns JSX
// This is a function component, and what you return in a function component must always have a root node.
// In this case, it has a header node.
// Here we are accessing the subtitle property of the props object that is passed in automatically
const Header = ({ subtitle }) => (
    <header className="row header bg-secondary">
        <div className="col">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col subtitle">
            {subtitle}
        </div>
    </header>
);

export default Header;