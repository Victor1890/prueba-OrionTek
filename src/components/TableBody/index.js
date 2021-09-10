import { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

const TableBody = ({ id, name, company, emails }) => {
  return (
    <Fragment>
      <tr>
        <td className='text-center'>{name}</td>
        <td className='text-center'>{company}</td>
        <td className='text-center'>{emails.length}</td>
        <td className='w-25'>
          <Link
            to={`/edit/${id}`}
            href={`/edit/${id}`}
            style={{ cursor: "pointer" }}
            className='edit px-5'
            data-toggle='modal'
          >
            <i className='material-icons' data-toggle='tooltip' title='Edit'>
              <AiTwotoneEdit />
            </i>
          </Link>
          <Link
            to={`/delete/${id}`}
            href={`/delete/${id}`}
            style={{ cursor: "pointer" }}
            className='delete'
            data-toggle='modal'
          >
            <i className='material-icons' data-toggle='tooltip' title='Delete'>
              <AiTwotoneDelete />
            </i>
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

export default withRouter(TableBody);
