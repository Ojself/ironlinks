import React, { Component } from "react";
import api from "../../api";
import {
  Card,
  CardText,
  CardTitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  render() {
    return (
      <Container>
        <Row>
          {this.state.links.map((el, i) => (
            <Col key={i} sm="4">
              <Card body>
                <CardTitle>{el.title}</CardTitle>
                <CardText>
                  <strong>Description:</strong> {el.description}
                </CardText>
                <CardText id="keywords">
                  <strong>Keywords: </strong>

                  {el.type.map(types => (
                    <span>#{types} </span>
                  ))}
                </CardText>
                <a href={el.url}>
                  <Button>Go to page</Button>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  componentDidMount() {
    api
      .getLinks()
      .then(links => {
        this.setState({
          links: links
        });
      })
      .catch(err => console.log(err));
  }
}
