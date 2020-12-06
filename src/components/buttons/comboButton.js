import React,{ useState,useEffect } from "react";
import AddButton from './addButton'
import SuccessButton from './successButton'
import RemoveAlert from '../alert/removeAlert'

const ComboButton = ({item,removeAlertAction,addButtonAction,content}) => {
  const [show, setShow] = useState(false);
  const [attr,setAttr]=useState(false);
  useEffect(()=>{
    if(content === "Favorites") setAttr(item.favorite)
    if(content === "Watchlist") setAttr(item.isInWatchList)
  },[item,removeAlertAction,addButtonAction,content])
  return (
    <>
      <RemoveAlert
        clickAction={removeAlertAction} 
        id={item.id} 
        show={show} 
        setShow={setShow} 
        className="w-75"
      />
      {
        attr?
          <SuccessButton setShow={setShow} content={content} size="lg"/>:
          <AddButton
            clickAction={addButtonAction}
            testName=""
            id={item.id} 
            content={content}
            size="lg" 
            variant="light"
          />
      }
    </>
  );
};

export default ComboButton;