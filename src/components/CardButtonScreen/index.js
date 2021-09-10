import { AiFillDelete } from "react-icons/ai";
import "./styles.css";

const CardButtonScreen = () => {
  return (
    <div className='col-sm'>
      <div class='card rounded' style={{ width: "100px", height: "100px" }}>
        <span className='align-icons'>
          <AiFillDelete size={70} />
        </span>
      </div>
    </div>
  );
};

export default CardButtonScreen;
