
import ImageGrid from "../molecules/ImageGrid";
import TextContainerRow from '../organisms/TextContainerRow';


function Paris() {
    return (
      <div className='Paris'>
        <div className='container'>
          <TextContainerRow/>
        </div>
        <ImageGrid/>
      </div>
    );
}

export default Paris;