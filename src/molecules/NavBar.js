import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Logo from "../atoms/NavbarLogo"
import NavbarLogoName from "../atoms/NavbarLogoName"

function NavBar() {
    return (

        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Container class="container-fluid">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <Logo/>
                            <NavbarLogoName/>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <Link class="nav-link active" to="/">Homepage</Link>
                                    <Link class="nav-link active" to="/milan">Milan</Link>
                                    <Link class="nav-link active" to="/paris">Paris</Link>
                                    <Link class="nav-link active" to="/london">London</Link>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </Container>
            </nav>
        </div>

    );
}

export default NavBar;