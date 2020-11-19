import {
  ADD_FEED,
  REMOVE_FEED,
  ERROR,
  START_FETCHING,
  SELECT_FEED,
} from "./feed.types";
import Parser from "rss-parser";

const addFeed = (feed) => {
  return {
    type: ADD_FEED,
    payload: { ...feed },
  };
};

export const removeFeed = (feedName) => {
  return {
    type: REMOVE_FEED,
    payload: feedName,
  };
};

export const selectFeed = (feedName) => ({
  type: SELECT_FEED,
  payload: feedName,
});

const startFetching = () => ({ type: START_FETCHING });

const errorFetching = (err) => ({ type: ERROR, payload: err });

export const addFeedAsync = (url) => {
  return (dispatch) => {
    dispatch(startFetching());

    const parser = new Parser();
    parser.parseURL(
      `https://cors-anywhere.herokuapp.com/${url}`,
      (err, feed) => {
        if (err) {
          dispatch(errorFetching("Error al intentar cargar el feed"));
        } else dispatch(addFeed({ name: feed.title, url }));
      }
    );
  };
};
