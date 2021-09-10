import { useReducer } from "react";
import axios from "axios";
import ClientContext from "./clientContext";
import ClientReducer from "./clientReducer";
import { ENDPOINT } from "../types";

export const ClientState = ({ children }) => {
  // initial Stated
  const initialState = {
    clients: [],
    selectedClientById: null,
  };

  const [state, dispatch] = useReducer(ClientReducer, initialState);

  const postClient = async (data) => {
    const res = await axios.post(ENDPOINT, data);
    dispatch({
      type: "POST_CLIENT",
      payload: res.data,
    });
  };

  const getClient = async () => {
    const res = await axios.get(ENDPOINT);
    dispatch({
      type: "GET_CLIENT",
      payload: res.data,
    });
  };

  const getClientById = async (id) => {
    const res = await axios.get(`${ENDPOINT}/${id}`);
    dispatch({
      type: "GET_CLIENT_BY_ID",
      payload: res.data,
    });
  };

  const deleteClientById = async (id) => {
    const res = await axios.delete(`${ENDPOINT}/${id}`);
    dispatch({
      ...state,
      payload: res.data,
    });
  };

  const putClientById = async (id, data) => {
    console.log(id, data);
    const res = await axios.put(`${ENDPOINT}/${id}`, data);
    dispatch({
      ...state,
      payload: res.data,
    });
  };

  return (
    <ClientContext.Provider
      value={{
        clients: state.clients,
        selectedClientById: state.selectedClientById,
        getClient,
        getClientById,
        postClient,
        deleteClientById,
        putClientById,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
