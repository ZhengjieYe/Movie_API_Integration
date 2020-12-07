import React from "react";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddButton = ({id,content,size,variant,testName,clickAction}) => {


  return (
    <Button 
      onClick={()=>{clickAction(id)}}
      size={size}
      variant={variant}
      data-test={testName}
    >
    <FontAwesomeIcon icon={faPlus}/>
    {content!=null && <span className="ml-2">Add to {content}</span>}
  </Button>
  );
};

export default AddButton;