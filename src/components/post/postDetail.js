import { Redirect } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

export const PostDetail = ({ location: { state }, history }) => {
  if (!state?.post) return <Redirect to="/" />;
  const { post } = state;
  return (
    <Card>
      <Row style={{ padding: "1em" }}>
        <Col lg={2}>
          <Card.Text>
            <span onClick={history.goBack} style={{ cursor: "pointer" }}>
              Atrás
            </span>
          </Card.Text>
        </Col>
        <Col>
          <Card.Title>{post.title}</Card.Title>
        </Col>
      </Row>
      <Card.Body>{post.content}</Card.Body>
      <Card.Text style={{ padding: "1em" }}>
        <a href={post.link} target="blank">
          Ir al articulo
        </a>
      </Card.Text>
      {console.log(post)}
    </Card>
  );
};
