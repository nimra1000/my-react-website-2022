import CardRow from "../organisms/CardRow";
import Carousel from '../molecules/Carousel/Carousel';
import TextContainerRow from '../organisms/TextContainerRow';

function Homepage() {
    return (
      <div className='Homepage'>
        <Carousel />
        <TextContainerRow />
        <CardRow />
      </div>
    );
}

export default Homepage;