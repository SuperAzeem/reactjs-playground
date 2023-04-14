import logo from '../images/logo.svg';

function Navbar() {
    return (
        // <h1>Navbar goes here</h1>
        <nav className="nav">
            {/* <div style='display: flex'> */}
            <img className="logo" src={logo}></img>
            <h3>React Facts</h3>
            {/* </div> */}
            <h4>React course - Project 1</h4>
            {/* <ul className="nav-items">
                <li>Home</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul> */}
        </nav>
    );
}
export default Navbar;