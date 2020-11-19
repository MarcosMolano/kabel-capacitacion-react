import {
  REMOVE_FEED,
  ADD_FEED,
  SELECT_FEED,
  START_FETCHING,
} from "./feed.types";

const initialState = {
  selected: null,
  status: "inactivo",
  feeds: [...JSON.parse(localStorage.getItem("feeds"))] || [],
};

const FeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEED:
      const existingFeed = state.feeds.find(
        (f) => f.name === action.payload.name
      );
      if (existingFeed) return { ...state, status: "exito" };

      const feedsAfterAdd = [...state.feeds, { ...action.payload }];
      localStorage.setItem("feeds", JSON.stringify(feedsAfterAdd));
      return {
        ...state,
        feeds: feedsAfterAdd,
        status: "exito",
      };
    case REMOVE_FEED:
      const feedsAfterRemove = state.feeds.filter(
        (f) => f.name !== action.payload
      );
      localStorage.setItem("feeds", JSON.stringify(feedsAfterRemove));
      return {
        ...state,
        selected: state.selected === action.payload ? null : state.selected,
        feeds: feedsAfterRemove,
        status: "exito",
      };
    case START_FETCHING:
      return { ...state, status: "cargando" };
    case SELECT_FEED:
      return { ...state, selected: action.payload };
    default:
      return { ...state };
  }
};

export default FeedReducer;
