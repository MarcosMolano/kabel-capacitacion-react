import { Redirect, Route, Switch } from "react-router-dom";
import FeedList from "./components/feed/feedList";
import PostContainer from "./components/post/postContainer";
import { PostDetail } from "./components/post/postDetail";
import { Header } from "./components/header";
import Searcher from "./components/searcher";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ maxWidth: "90vw", width: "1224px", margin: "1rem auto" }}>
        <Row className="justify-content-between">
          <Col lg={3}>
            <FeedList />
            <div style={{ marginTop: "1rem" }}>
              <Searcher />
            </div>
          </Col>
          <Col lg={9}>
            <Switch>
              <Route exact path="/" component={PostContainer} />
              <Route path="/Feed" component={PostDetail} />
            </Switch>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
