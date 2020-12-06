import React from "react";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SuccessButton = ({setShow,content,size}) => {
  return (
    <Button 
    variant="danger"
    onClick={()=>setShow(true)}
    size={size}
    data-test="add-to-button--success"
  >
    <FontAwesomeIcon icon={faCheck}/>
    {content!=null && <span className="ml-2" data-test="add-to-content--success">Already in {content}</span>}
  </Button>
  );
};

export default SuccessButton;