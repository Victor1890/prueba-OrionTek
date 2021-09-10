import { useContext, useState } from "react";
import ClientContext from "../../context/Client/clientContext";
import { convertStringtoArray } from "../../utils/utils";

const AddOrders = ({ history }) => {
  const [data, setData] = useState({
    name: "",
    company: "",
    emails: [],
  });

  const { postClient } = useContext(ClientContext);

  const onSetData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handlPostClient = (event) => {
    event.preventDefault();

    postClient(data);

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
          <h2 className='fw-bold text-center py-5'>Agregar Cliente</h2>

          <form onSubmit={handlPostClient}>
            <div className='mb-4'>
              <label htmlFor='name' className='form-label'>
                Nombre del Cliente
              </label>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Victor Rosario'
                onChange={(event) => onSetData("name", event.target.value)}
                required
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
                required
                onChange={(event) => onSetData("company", event.target.value)}
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
                required
                onChange={(event) =>
                  onSetData("emails", convertStringtoArray(event.target.value))
                }
              />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button
                className='btn btn-success btn-lg btn-block mb-3'
                onSubmit={handlPostClient}
              >
                Agregar Cliente
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

export default AddOrders;
