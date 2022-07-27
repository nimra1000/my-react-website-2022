import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import London from "../assets/pfwLogo.jpeg"


function NavBar() {
    return (

        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Container class="container-fluid">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img src={London} width="30" height="30" alt=""
                                     loading="lazy"/>
                            </a>
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">Fashion-Avenue</a>
                            </div>
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