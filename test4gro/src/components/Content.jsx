import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Content({ renderedData }) {

    return (
        <>
            <Row>
                {renderedData.map((person) => {
                    return <Col>
                        <Card style={{ width: '18rem', marginBottom: '25px' }}>
                            <Card.Img variant="top" src={`http://placekitten.com/${person.height}/${person.height}`} />
                            <Card.Body>
                                <Card.Title>{person.name}</Card.Title>
                                <Card.Text style={{ whiteSpace: 'break-spaces' }}>
                                    height: {person.height} {"\n"}
                                    birth year: {person.birth_year}
                                </Card.Text>
                                <Button variant="primary" href={person.url}>More info</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}

            </Row>
        </>
    );
}

export default Content;
