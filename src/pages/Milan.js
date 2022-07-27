
import First from "../assets/funky1.webp";
import logo from "../assets/pfwLogo.jpeg";


function Milan() {
    return (
        <div className="Milan">
            <div className="container">
                <div className="row">
                    <div className="media">
                        <img src={logo} width="5%" className="mr-3" alt="..."/>
                            <div className="media-body">
                                <h5 className="mt-0">
                                    RAHUL MISHRA HAUTE COUTURE AW22 COLLECTION</h5>
                                Never say there is nothing beautiful in the world anymore. There is always something to make you wonder in the shape of a tree, trembling of a leaf.” —Albert Schweitzer Growing up in India, we witness numerous instances of worshipping trees. This inherent part of our culture manifests in different ways during the harvest festivals […]
                            </div>

                        <figure className="figure">
                            <img src={First} className="figure-img img-fluid rounded"  width="50%" alt="..."/>
                            <figcaption className="figure-caption">Rahul Mishra has once again shaken up the catwalk with this creative ensemble.</figcaption>
                        </figure>


                        </div>
                    <div className={"d-flex justify-content-evenly"}>
                    <div className="col-sm-4" >
                        <h3>Colour</h3>
                        <p>Never say there is nothing beautiful in the world anymore. There is always something to make you wonder in the shape of a tree, trembling of a leaf.” —Albert Schweitzer Growing up in India, we witness numerous instances of worshipping trees. This inherent part of our culture manifests in different ways during the harvest festivals</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Hues</h3>
                        <p>A new beginning, that’s the idea behind the collection. The feeling of 1960s California, freedom, fresh starts, a brand new world, which is what we think many of us want right now. Stylistically we mixed the geometric pattern cutting of workwear with the nonconformist glamour of Hollywood and the West Coast. </p>
                    </div>

                    <div className="col-sm-4">
                        <h3>Contrast</h3>
                        <p>Emerging Talents Milan Fall-Winter 2022/2023 For the Fall-Winter 2022/2023 season Emerging Talents Milan brings together global design talents to present collections with sustainability, craftsmanship, and innovation. Driven by passion, joy, and the invention of brilliant creative minds, we become part of fascinating theatrical performances together once again in Palazzo Visconti.</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Milan;