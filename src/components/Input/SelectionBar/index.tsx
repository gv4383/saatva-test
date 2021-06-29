import React from 'react';

import Button from '../Button';

import './styles.scss';

interface Props {
  selections: string[];
}

const SelectionBar = (props: Props) => {
  const { selections } = props;

  const handleOnClick = () => {
    console.log('Click!');
  };

  const renderButtons = () =>
    selections.map((selection: string) => (
      <Button key={selection} isSelectButton onClick={handleOnClick} text={selection} />
    ));

  return <div className="selection-bar-container">{renderButtons()}</div>;
};

export default SelectionBar;
