
// import First from "../assets/studio1.jpeg";
// import Second from "../assets/studio2.jpeg";
// import Third from "../assets/studio3.jpeg";
import Card from "../molecules/Card"
//TODO:data in Array then map over it (mock data in sepeate file so can ve replaced by BE in future)

function CardRow() {
const imageUrls = [
  '/Users/nimraajmal/ground-control/my-react-website-2022/src/assets/studio1.jpeg',
  '/Users/nimraajmal/ground-control/my-react-website-2022/src/assets/studio2.jpeg',
  '/Users/nimraajmal/ground-control/my-react-website-2022/src/assets/studio3.jpeg'
];

    return (
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {imageUrls.map(url => <Card url /> )}
      </div>
    );
}

export default CardRow;

//bootstrap style/type. 
//Best organisation? scss? styles? inside each compoenent folder?