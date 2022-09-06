
import First from "../assets/studio1.jpeg";
import Second from "../assets/studio2.jpeg";
import Third from "../assets/studio3.jpeg";
import Card from "../molecules/Card"
//TODO:data in Array then map over it (mock data in sepeate file so can ve replaced by BE in future)

function CardRow() {
const images = [First, Second, Third];

    return (
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <Card First />
        <Card Second />
        <Card Third />
      </div>
    );
}

export default CardRow;