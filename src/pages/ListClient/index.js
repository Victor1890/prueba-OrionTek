import { useContext, useEffect } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import "./styles.css";

//component
import TableBody from "../../components/TableBody/index";
import LoadSpinner from "../../components/LoadSpinner";
import ClientContext from "../../context/Client/clientContext";

const ListOrder = () => {
  const { clients, getClient } = useContext(ClientContext);

  useEffect(() => {
    getClient().then((data) => console.log(data));
    console.log(clients);
  }, []);

  return (
    <div className='container-xl'>
      <div className='table-responsive'>
        <div className='table-wrapper'>
          <div className='table-title'>
            <div className='row'>
              <div className='col-sm-6'>
                <h2>
                  <b>Listas de Clientes</b>
                </h2>
              </div>
              <div className='col-sm-6'>
                <a
                  href='#addEmployeeModal'
                  className='btn btn-success'
                  data-toggle='modal'
                  onClick={() => (document.location.href = "/add")}
                >
                  <AiFillFileAdd size={25} />
                  <span>Agregar Cliente</span>
                </a>
              </div>
            </div>
          </div>
          <table className='table table-hover'>
            <thead className='text-center'>
              <tr>
                <th className='text-center'>Nombre</th>
                <th className='text-center'>Empresa</th>
                <th className='text-center'>Correos</th>
              </tr>
            </thead>
            <tbody>
              {clients !== null &&
                clients.map((client) => (
                  <TableBody key={client.id} {...client} />
                ))}
              {clients === null && <LoadSpinner />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
