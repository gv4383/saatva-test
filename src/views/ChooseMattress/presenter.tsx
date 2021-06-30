import React from 'react';

import Button from '../../components/Input/Button';
import { TEXT } from '../../constants';
import SelectionBar from '../../components/Input/SelectionBar';

import './styles.scss';

interface Props {
  getMattressPrice: () => string;
  getSelectedMattressPicture: () => string;
  handleAddToCart: () => void;
  handleMattressSelection: (name: string) => void;
  mattressLabel: string;
  selectedMattress: string;
  selections: string[];
}

const ChooseMattressPresenter = (props: Props) => {
  const {
    getMattressPrice,
    getSelectedMattressPicture,
    handleAddToCart,
    handleMattressSelection,
    mattressLabel,
    selectedMattress,
    selections,
  } = props;

  return (
    <div className="choose-container">
      <img
        className="choose-image-container"
        src={getSelectedMattressPicture()}
        alt={selectedMattress}
      />
      <div className="choose-selection-container">
        <div className="choose-title">{TEXT.TITLE}</div>
        <div className="select-text">{TEXT.SELECT_MATTRESS}</div>
        <SelectionBar
          handleMattressSelection={handleMattressSelection}
          selectedMattress={selectedMattress}
          selections={selections}
        />
        <div className="mattress-price-container">
          <div>{mattressLabel}</div>
          <div>{getMattressPrice()}</div>
        </div>
        <Button onClick={handleAddToCart} text={TEXT.ADD} />
      </div>
    </div>
  );
};

export default ChooseMattressPresenter;
