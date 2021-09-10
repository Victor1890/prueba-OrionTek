import {
  DELETE_CLIENT_BY_ID,
  EDIT_CLIENT_BY_ID,
  GET_CLIENT,
  GET_CLIENT_BY_ID,
  POST_CLIENT,
} from "../types";

const clientReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case POST_CLIENT:
      return {
        ...state,
        clients: payload,
      };

    case GET_CLIENT:
      return {
        ...state,
        clients: payload,
      };

    case GET_CLIENT_BY_ID:
      return {
        ...state,
        selectedClientById: payload,
      };

    case DELETE_CLIENT_BY_ID:
      return {
        ...state,
        selectedClientById: payload,
      };

    case EDIT_CLIENT_BY_ID:
      return {
        ...state,
        selectedClientById: payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
