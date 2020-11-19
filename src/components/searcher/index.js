import React, { useState } from "react";
import { connect } from "react-redux";
import { addFeedAsync } from "../../store/feed.actions";
import Button from "react-bootstrap/Button";
import { Row, Col, Form } from "react-bootstrap";

const Seacher = ({ addFeed }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    addFeed(url);
    setUrl("");
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={url}
          placeholder="http://www.example.com/rss"
          required
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="submit" variant="light">
          +
        </Button>
      </Form.Group>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFeed: (url) => dispatch(addFeedAsync(url)),
});

export default connect(null, mapDispatchToProps)(Seacher);
