
import First from "../assets/funky1.webp";
import logo from "../assets/pfwLogo.jpeg";
import FigureImage from "../molecules/FigureImage";
import TextContainerRow from "../organisms/TextContainerRow";


function Milan() {
    return (
        <div className="Milan">
            <div className="container">
                <div className="row">
                    <div className="media">
                        <img src={logo} width="5%" className="mr-3" alt="..."/>
                                <TextContainerRow/>
                                <FigureImage/>
                        </div>
                    <TextContainerRow/>
                </div>
            </div>

        </div>
    );
}

export default Milan;