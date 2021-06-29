import React, { useState } from 'react';

import Button from '../Button';

import './styles.scss';

interface Props {
  selections: string[];
}

const SelectionBar = (props: Props) => {
  const { selections } = props;
  const [selectedMattress, setSelectedMattress] = useState('');

  const handleOnClick = (name: string) => {
    setSelectedMattress(name);
  };

  const renderButtons = () =>
    selections.map((selection: string) => (
      <Button
        key={selection}
        isSelectButton
        isSelected={selection === selectedMattress}
        onClick={() => handleOnClick(selection)}
        text={selection}
      />
    ));

  return <div className="selection-bar-container">{renderButtons()}</div>;
};

export default SelectionBar;
