import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
            <Container style={{marginTop: "25px"}}>
                <Row>
                        <Col sm={1}><Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="aldi.png" roundedCircle /></Col>
                        <Col sm={3}><p><strong>Aldi</strong><br />Delivery * Pickup</p></Col>
                        <Col sm={1}><Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB"}} src="sprouts.png" roundedCircle /></Col>
                        <Col sm={3}><p><strong>Sprouts</strong><br />Delivery * Pickup</p></Col>
                        <Col sm={1}><Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="Kroger.webp" roundedCircle /></Col>
                        <Col sm={3}><p><strong>Kroger</strong><br />Pickup</p></Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={1}><Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB"}} src="heb.png" roundedCircle /></Col>
                    <Col sm={3}><p><strong>H-E-B</strong><br />Pickup</p></Col>
                    <Col sm={1}><Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB"}} src="SamsClub.webp" roundedCircle /></Col>
                    <Col sm={3}><p><strong>Sam's Club</strong><br />Pickup</p></Col>
                    <Col sm={1}><Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB"}} src="costco.webp" roundedCircle /></Col>
                    <Col sm={3}><p><strong>Costco</strong><br />Pickup</p></Col>
                </Row>
                <hr />
            </Container>
        </div>
    )
}