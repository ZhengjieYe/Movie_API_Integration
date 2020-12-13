import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
const SortbyButtonGroup=({ sortBy, setSortBy, gender, setGender })=>{
  const radios = [
    { name: 'Name', value: '1' },
    { name: 'Popularity', value: '2' },
  ];
  const genders = [
    { name: 'Both', value: '1' },
    { name: 'Male', value: '2' },
    { name: 'Female', value: '3' },
  ];

  return (
    <div className="d-flex align-items-center">
      <h6 className="text-white mr-2">Sort by:</h6>
      <ButtonGroup toggle className="mb-1">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            name="radio"
            size="sm"
            variant="primary"
            value={radio.value}
            checked={sortBy === radio.value}
            onChange={(e) => setSortBy(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <h6 className="text-white mr-2 ml-5">filter:</h6>
      <ButtonGroup toggle className="mb-1">
        {genders.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            name="radio"
            size="sm"
            variant="primary"
            value={radio.value}
            checked={gender === radio.value}
            onChange={(e) => setGender(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  )
}

export default SortbyButtonGroup;