import logo from "./jsec.png";

// This is an arrow function that returns JSX
// This is a function component, and what you return in a function component must always have a root node.
// In this case, it has a header node.
// Here we are accessing the subtitle property of the props object that is passed in automatically
const Header = ({ subtitle }) => (
    <header className="row header bg-secondary">
        <div className="col">
            {/** Remember, JSX is not HTML. 
             * This img component, for example, has what looks like a src attribute
             * but it is actually a prop, something that the component gets as an argument
             * The passed in value to the prop is an expression, enclosed in curly braces
             * Webpack will replace this with the actual location of the logo, imported above
             */}
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col subtitle">
            {subtitle}
        </div>
    </header>
);

export default Header;