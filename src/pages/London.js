import First from "../assets/studio1.jpeg";
import Second from "../assets/studio2.jpeg";
import Third from "../assets/studio3.jpeg";

function Paris() {
    return (
        <div className="Paris">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Column 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Column 6</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>

            <div className="container overflow-hidden">
                <div className="row gy-5">
                    <div className="col-6">
                        <img src={First} className="figure-img img-fluid rounded"  width="50%" alt="..."/>
                        <figcaption className="figure-caption">Neutral tones hit the runway yet again.</figcaption>

                    </div>
                    <div className="col-6">
                        <img src={Second} className="figure-img img-fluid rounded"  width="50%" alt="..."/>
                        <figcaption className="figure-caption">Ethnic patterns mixed with pastel pops of colour.</figcaption>

                    </div>
                    <div className="col-6">
                        <img src={Third} className="figure-img img-fluid rounded"  width="50%" alt="..."/>
                        <figcaption className="figure-caption">Layering is the hit of the season.</figcaption>

                    </div>
                    <div className="col-6">
                        <img src={First} className="figure-img img-fluid rounded"  width="50%" alt="..."/>
                        <figcaption className="figure-caption">Neutral tones hit the runway yet againe.</figcaption>

                    </div>
                </div>
            </div>



        </div>



    );
}

export default Paris;