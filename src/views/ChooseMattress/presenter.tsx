import React from 'react';

import Button from '../../components/Input/Button';
import { TEXT } from '../../constants';
import SelectionBar from '../../components/Input/SelectionBar';

interface Props {
  getMattressPrice: () => string;
  getSelectedMattressPicture: () => string;
  handleMattressSelection: (name: string) => void;
  mattressLabel: string;
  selectedMattress: string;
  selections: string[];
}

const ChooseMattressPresenter = (props: Props) => {
  const {
    getMattressPrice,
    getSelectedMattressPicture,
    handleMattressSelection,
    mattressLabel,
    selectedMattress,
    selections,
  } = props;

  const handleOnClick = () => {
    console.log(`${selectedMattress} Mattress added to cart!`);
  };

  return (
    <div>
      <div>
        <img src={getSelectedMattressPicture()} alt={selectedMattress} />
      </div>
      <div>
        <div>{TEXT.TITLE}</div>
        <div>{TEXT.SELECT_MATTRESS}</div>
        <SelectionBar
          handleMattressSelection={handleMattressSelection}
          selectedMattress={selectedMattress}
          selections={selections}
        />
        <div>
          <div>{mattressLabel}</div>
          <div>{getMattressPrice()}</div>
        </div>
        <Button onClick={handleOnClick} text={TEXT.ADD} />
      </div>
    </div>
  );
};

export default ChooseMattressPresenter;
