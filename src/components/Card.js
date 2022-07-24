
import First from "../assets/studio1.jpeg";
import Second from "../assets/studio2.jpeg";
import Third from "../assets/studio3.jpeg";
//data in Array then map over it (mock data in sepeate file so can ve replaced by BE in future)

function Card() {

    return (

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={First} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={Second} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to
                                additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={Third} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This card has even longer content than the first to show
                                that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Card;