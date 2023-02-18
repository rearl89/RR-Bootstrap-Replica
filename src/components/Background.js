import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "80vw", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6", zIndex: "10", border: "0" }} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Enter your address"
                        aria-label="Enter your address"
                        aria-describedby="basic-addon2"/>
                        <Button style={{backgroundColor: "white", color: "lightgreen"}} variant="outline-secondary" id="button-addon2" href="#address">➜</Button>
                    </InputGroup>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{ height: "428px", width: "20vw", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="homepage.jpg" alt="Card img" />
            </div>
        </div>
    )
}