import Container from '../molecules/TextContainer';

function ContainerRow() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-4"> <Container /></div>
            <div className="col-sm-4"> <Container /></div>
            <div className="col-sm-4"> <Container /></div>
        </div>
    </div>
  );
}

export default ContainerRow;
