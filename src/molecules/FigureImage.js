import Second from "../assets/studio2.jpeg";

function FigureImage() {
  return (
      <div className="col-6">
      <figure className='figure'>
        <img
          src={Second}
          className='figure-img img-fluid rounded'
          width='50%'
          alt='...'
        />
        <figcaption className='figure-caption'>
          Rahul Mishra has once again shaken up the catwalk with this creative
          ensemble.
        </figcaption>
        </figure>
        </div>
  );
}

export default FigureImage;