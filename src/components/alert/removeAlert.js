import React from "react";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const RemoveAlert = ({id,show,setShow,className,clickAction}) => {
  return (
    <Alert show={show} variant="danger" className={className}>
        <Alert.Heading >do you want to delete?</Alert.Heading>
        <div className="d-flex justify-content-between">
          <Button
            onClick={() => {
                clickAction(id)
                setShow(false)
              }
            } 
            variant="danger"
          >
            yes
          </Button>
          <Button onClick={() => setShow(false)} variant="danger">
            no
          </Button>
        </div>
      </Alert>
  );
};

export default RemoveAlert;