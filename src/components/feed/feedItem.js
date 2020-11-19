import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";

const FeedItem = ({ removeFeed, name, selectFeed, isSelected }) => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item
        style={{
          backgroundColor: isSelected ? "gray" : "white",
          color: isSelected ? "white" : "black",
        }}
      >
        <Row>
          <Col lg={10} style={{ cursor: "pointer" }}>
            <span onClick={selectFeed}>{name}</span>
          </Col>
          <Col style={{ textAlign: "right" }} lg={2}>
            <Button variant="light" type="button" onClick={removeFeed}>
              -
            </Button>
            <span className="glyphicon glyphicon-minus"></span>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default FeedItem;
