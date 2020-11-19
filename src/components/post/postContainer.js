import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Parser from "rss-parser";
import { Card, Spinner } from "react-bootstrap";

const PostContainer = ({ feeds, selected }) => {
  const [feed, setFeed] = useState(null);
  const [status, setStatus] = useState("inactivo");

  useEffect(() => {
    if (!selected) return;

    setStatus("cargando");
    const selectedFeedUrl = feeds.find((f) => f.name === selected).url;
    const parser = new Parser();
    parser.parseURL(
      `https://cors-anywhere.herokuapp.com/${selectedFeedUrl}`,
      (err, source) => {
        if (err) {
          console.error(err);
          setStatus("error");
        } else {
          setFeed(source);
          setStatus("exito");
        }
      }
    );
  }, [selected]);

  if (status === "cargando")
    return (
      <div style={{ textAlign: "center" }}>
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  if (!feed?.items || !feed?.items.length || !selected) return null;
  return (
    <>
      <h3>{feed.title}</h3>
      {feed.items.map((post) => (
        <Card
          style={{
            width: "80%",
            textAlign: "center",
            marginTop: "2rem",
          }}
          key={post.title}
        >
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></Card.Text>
            <Link to={{ pathname: "/feed", state: { post } }}>
              Ver articulo
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(PostContainer);
