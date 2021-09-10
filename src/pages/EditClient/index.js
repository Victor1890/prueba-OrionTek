import { useContext, useEffect, useState } from "react";
import ClientContext from "../../context/Client/clientContext";
import { convertStringtoArray } from "../../utils/utils";

const EditOrders = ({ match, history }) => {
  const [data, setData] = useState({
    name: "",
    company: "",
    emails: [],
  });

  const { selectedClientById, getClientById, putClientById } =
    useContext(ClientContext);

  const { id } = match.params;

  useEffect(() => getClientById(id), []);

  const onSetData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handlSubmitClient = (event) => {
    event.preventDefault();
    putClientById(id, data);
    history.push("/");
  };

  return (
    <div className='container w-50 bg-primary mt-5 rounded shadow'>
      <div className='row align-items-stretch'>
        <div className='col bg-white p-5 rounded-end'>
          <div className='text-end mt-auto' style={{ float: "right" }}>
            <img
              className='rounded-circle'
              src='https://avatars.githubusercontent.com/u/46900196?s=460&u=597523c18e5b5d04c077ad2b93c522527e60e495&v=4'
              width='48'
              alt=''
            />
          </div>
          <h2 className='fw-bold text-center py-5'>Editar Cliente</h2>

          <form onSubmit={handlSubmitClient}>
            <div className='mb-4'>
              <label htmlFor='name' className='form-label'>
                Nombre del Cliente
              </label>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Ej: Papa Johns'
                value={!data?.name ? selectedClientById?.name : data?.name}
                onChange={(e) => onSetData("name", e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='description' className='form-label'>
                Nombre de la Empresa
              </label>
              <input
                type='text'
                className='form-control'
                name='description'
                placeholder='Ej: Microsoft'
                value={
                  !data?.company ? selectedClientById?.company : data?.company
                }
                onChange={(e) => onSetData("company", e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='category' className='form-label'>
                Los Emails
              </label>
              <textarea
                type='text'
                className='form-control'
                name='category'
                placeholder='Ej: hello@hello.com, user@user.com'
                onChange={(e) =>
                  onSetData("emails", convertStringtoArray(e.target.value))
                }
                value={
                  !data?.emails ? selectedClientById?.emails : data?.emails
                }
              />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button className='btn btn-success btn-lg btn-block mb-3'>
                Ediar Cliente
              </button>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <button
                className='btn btn-primary btn-lg btn-block'
                onClick={() => history.push("/")}
              >
                Volver
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrders;
