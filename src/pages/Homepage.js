import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Carousel from "../components/Carousel/Carousel";
import Container from "../components/Container";

function Homepage() {
    return (
        <div className="Homepage">
            <Carousel/>
            <Container/>
            <Card/>
        </div>
    );
}

export default Homepage;