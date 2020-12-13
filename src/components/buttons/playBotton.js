import React from "react";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const PlayButton = () => {
  return (
    <Button 
      size="lg"
      variant="light"
      data-test="watchlist-play-button"
    >
    <FontAwesomeIcon icon={faPlay}/>
    {<span className="ml-2">Play now</span>}
  </Button>
  );
};

export default PlayButton;