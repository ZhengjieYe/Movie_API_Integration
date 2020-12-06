import React, { useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import AddButton from './addButton'
import SuccessButton from './successButton'
import RemoveAlert from '../alert/removeAlert'

const AddToFavoriteButton = ({ movie, removeAlertAction, addButtonAction}) => {
  const [show, setShow] = useState(false);
  return (
  <OverlayTrigger 
    overlay={<Tooltip id="tooltip-disabled">{ movie.favorite ? "Delete from Favorites":"Add to Favorites"} </Tooltip>}
  >
    <span className="d-inline-block m-0">
      <RemoveAlert id={movie.id} show={show} setShow={setShow} clickAction={removeAlertAction}/>
      {
        movie.favorite?
          <SuccessButton setShow={setShow}/>:
          <AddButton id={movie.id} clickAction={addButtonAction}/>
      }
    </span>
  </OverlayTrigger>
  );
};

export default AddToFavoriteButton;