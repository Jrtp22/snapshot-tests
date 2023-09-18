import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function GitHubCard() {
    return (
        <div>
            <Card className="text-center" >
                <CardGroup style={{ display: "flex", alignItems: "center", backgroundColor: "#dfeed6" }}>
                    <Card.Body>
                        <Card.Title>The Joker</Card.Title>
                        <Card.Text>
                            You can reach and see my 
                        </Card.Text>
                        <Card.Link href="https://github.com"> GitHub</Card.Link>
                    </Card.Body>
                <Card.Img style={{ width: "50%" }} className='justify-content-end' variant="end" src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2019/10/joker-still02.jpg" />
                </CardGroup>
            </Card>
        </div>
    );
}

export default GitHubCard