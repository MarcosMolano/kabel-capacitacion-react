import React from "react";
import { selectFeed, removeFeed } from "../../store/feed.actions";
import { connect } from "react-redux";
import FeedItem from "./feedItem";
import { withRouter } from "react-router-dom";
import { Card, Spinner, Col } from "react-bootstrap";

const FeedList = ({
  status,
  selected,
  feeds,
  selectFeed,
  removeFeed,
  history,
}) => {
  return (
    <div>
      {!feeds.length ? (
        "No hay feeds"
      ) : (
        <Card
          style={{
            width: "18rem",
          }}
        >
          {feeds.map(({ name }) => {
            const isSelected = name === selected;
            return (
              <FeedItem
                key={name}
                isSelected={isSelected}
                name={name}
                removeFeed={() => removeFeed(name)}
                selectFeed={() => {
                  selectFeed(name);
                  history.push("/");
                }}
              />
            );
          })}
        </Card>
      )}
      {status === "cargando" ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  selectFeed: (feedName) => dispatch(selectFeed(feedName)),
  removeFeed: (feedName) => dispatch(removeFeed(feedName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FeedList));
