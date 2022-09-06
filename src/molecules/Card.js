import Second from "../assets/studio2.jpeg";

function Card() {

    return (
      <div className='col'>
        <div className='card h-100'>
          <img src={Second} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    );
}

export default Card;