import FigureImage from './FigureImage';

function ImageGrid() {
  return (
    <div className='container overflow-hidden'>
      <div className='row gy-5'>
        <FigureImage />
        <FigureImage />
        <FigureImage />
        <FigureImage />
      </div>
    </div>
  );
}

export default ImageGrid;
