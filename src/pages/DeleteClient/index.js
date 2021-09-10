import { useContext, useEffect } from "react";
import ClientContext from "../../context/Client/clientContext";

const DeleteOrder = ({ history, match }) => {
  const { id } = match.params;
  const { selectedClientById, getClientById, deleteClientById } =
    useContext(ClientContext);

  useEffect(() => getClientById(id), []);

  const handlDelete = (event) => {
    event.preventDefault();
    deleteClientById(id);

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
          <h2 className='fw-bold text-center py-5'>Eliminar Cliente</h2>

          <form onSubmit={handlDelete}>
            <div className='mb-4'>
              <label htmlFor='name' className='form-label'>
                Nombre del Cliente
              </label>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Ej: Pizza de Papa Johns'
                value={selectedClientById?.name}
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
                value={selectedClientById?.company}
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
                placeholder='Ej: Pizza'
                value={
                  selectedClientById?.emails.map((e) => e) || "No hay Emails"
                }
              />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button
                className='btn btn-danger btn-lg btn-block mb-3'
                onSubmit={handlDelete}
              >
                Eliminar Cliente
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

export default DeleteOrder;
